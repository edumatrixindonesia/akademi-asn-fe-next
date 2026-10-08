import type { MetadataRoute } from "next";
import { buildLocationTree } from "@/lib/location-tree";
import { kategori } from "@/data/kategori";
import { penulis } from "@/data/penulis";
import {
  getArtikelByKategori,
  getArtikelByPenulis,
  getVisibleArtikel,
  isPenulisIndexable,
} from "@/lib/artikel";
import { kategoriPath, penulisPath } from "@/lib/blog-path";
import { blogFirstPageSize, pageCount, pagePath, pageSize } from "@/lib/pagination";
import { getRegionLists } from "@/lib/region-service";
import { siteUrl } from "./shared-metadata";

const families = ["", "/bimbel-cpns", "/bimbel-pppk", "/bimbel-bumn"];

// A listing's base URL plus its numbered pages (page 1 is the base URL).
const listingUrls = (basePath: string, total: number, firstPageSize: number) =>
  Array.from({ length: pageCount(total, firstPageSize) }, (_, i) => ({
    url: `${siteUrl}${pagePath(basePath, i + 1)}`,
  }));

// Empty Kategori pages stay reachable but out of the sitemap: a thin listing
// is not worth a crawl.
const blogUrls = (): MetadataRoute.Sitemap => {
  const entries = getVisibleArtikel();

  return [
    ...listingUrls("/blog", entries.length, blogFirstPageSize),
    ...kategori
      .map(({ slug }) => ({ slug, total: getArtikelByKategori(slug).length }))
      .filter(({ total }) => total > 0)
      .flatMap(({ slug, total }) => listingUrls(kategoriPath(slug), total, pageSize)),
    ...penulis
      .filter(({ slug }) => isPenulisIndexable(slug))
      .flatMap(({ slug }) =>
        listingUrls(penulisPath(slug), getArtikelByPenulis(slug).length, pageSize),
      ),
    ...entries.map((entry) => ({
      url: `${siteUrl}/blog/${entry.slug}`,
      lastModified: entry.updatedAt ?? entry.publishedAt,
    })),
  ];
};

// About 12,000 URLs (~1.5 MB), well under the 50,000-URL / 50 MB limit, so
// one file. The location paths come from the same cached region lists and
// tree as the routes, so the sitemap refreshes with them and never drifts.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locationPaths = [...buildLocationTree(await getRegionLists()).nodes.keys()];

  return [
    ...families.flatMap((family) => [
      { url: `${siteUrl}${family}` },
      ...locationPaths.map((path) => ({ url: `${siteUrl}${family}${path}` })),
    ]),
    { url: `${siteUrl}/tryout-bimbel-cpns-pppk-bumn-terbaik` },
    { url: `${siteUrl}/produk-bimbel-cpns-pppk-bumn-terbaik` },
    { url: `${siteUrl}/kebijakan-pengembalian` },
    ...blogUrls(),
  ];
}
