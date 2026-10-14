import type { MetadataRoute } from "next";
import { siteUrl } from "./shared-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    // /konsultasi only redirects to WhatsApp (docs/adr/0004-konsultasi-redirect-route.md).
    rules: { userAgent: "*", allow: "/", disallow: "/konsultasi" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
