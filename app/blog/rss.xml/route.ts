import { blogIndex } from "@/data/artikel-listing";
import { getKategori, getLatestArtikel } from "@/lib/artikel";
import { buildRss } from "@/lib/artikel-rss";
import { siteUrl } from "../../shared-metadata";

export const dynamic = "force-static";

export const GET = () =>
  new Response(
    buildRss(
      {
        title: blogIndex.title,
        description: blogIndex.metaDescription,
        siteUrl,
      },
      getLatestArtikel(Infinity),
      (slug) => getKategori(slug)!.name,
    ),
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
