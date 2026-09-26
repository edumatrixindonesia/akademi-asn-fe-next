import "server-only";
import { notFound } from "next/navigation";
import {
  buildLocationTree,
  resolveLocation,
  type Region,
  type RegionLists,
} from "./location-tree";

// Each list is cached for 7 days, so at runtime the whole page set costs about
// four requests per week per container (the rate limit is 32 per 60 seconds).
// A cold `next build` costs more: each build worker fetches the lists itself.
const regionListRevalidate = 604800;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isRegion = (value: unknown): value is Region =>
  isRecord(value) &&
  typeof value.kode === "string" &&
  typeof value.nama === "string" &&
  typeof value.slug === "string" &&
  typeof value.path === "string";

// Throws on any failure, so an uncached page renders as 5xx and is not cached.
// A 404 here could drop a valid page from Google's index.
const fetchRegionList = async (query: string): Promise<Region[]> => {
  const baseUrl = process.env.REGION_SERVICE_URL?.trim();
  const token = process.env.REGION_SERVICE_TOKEN?.trim();
  if (!baseUrl || !token) {
    throw new Error("REGION_SERVICE_URL and REGION_SERVICE_TOKEN must be set.");
  }

  const response = await fetch(`${baseUrl}/wilayah.php?${query}&limit=4000`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: regionListRevalidate },
  });
  if (!response.ok) {
    throw new Error(`region-service ${query} responded ${response.status}.`);
  }

  const body: unknown = await response.json();
  if (!isRecord(body) || !Array.isArray(body.data) || !body.data.every(isRegion)) {
    throw new Error(`region-service ${query} returned an unexpected body.`);
  }
  // A list longer than one page would silently drop regions, and their valid
  // pages would be cached as 404s.
  const total = isRecord(body.pagination) ? body.pagination.total : undefined;
  if (typeof total !== "number" || total > body.data.length) {
    throw new Error(`region-service ${query} has ${total} items; only ${body.data.length} fit in one page.`);
  }
  return body.data;
};

export const getRegionLists = async (): Promise<RegionLists> => {
  const [provinsi, kabupaten, kecamatan, kelurahan] = await Promise.all([
    fetchRegionList("type=provinsi"),
    fetchRegionList("type=kabupaten"),
    fetchRegionList("type=kecamatan&region=kabupaten-besar"),
    fetchRegionList("type=kelurahan&region=jabodetabekjur"),
  ]);
  return { provinsi, kabupaten, kecamatan, kelurahan };
};

// With dynamicParams on, unknown paths reach the route, so anything outside
// the page set must 404 here.
export const getLocationOrNotFound = async (slugs: string[]) => {
  const location = resolveLocation(buildLocationTree(await getRegionLists()), slugs);
  if (!location) notFound();
  return location;
};

// Only province pages are prerendered; the rest render on first visit (ISR).
export const getProvinceParams = async () =>
  (await fetchRegionList("type=provinsi")).map((province) => ({
    locations: [province.slug],
  }));
