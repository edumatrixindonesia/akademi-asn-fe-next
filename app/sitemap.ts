import type { MetadataRoute } from "next";
import { buildLocationTree } from "@/lib/location-tree";
import { getRegionLists } from "@/lib/region-service";
import { siteUrl } from "./shared-metadata";

const families = ["", "/bimbel-cpns", "/bimbel-pppk", "/bimbel-bumn"];

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
  ];
}
