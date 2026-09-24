import type { MetadataRoute } from "next";
import { siteUrl } from "./shared-metadata";

// Location pages join this list once their routes exist.
const paths = ["/", "/bimbel-cpns", "/bimbel-pppk", "/bimbel-bumn"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
  }));
}
