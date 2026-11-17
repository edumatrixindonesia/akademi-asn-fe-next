import type { LinkBioArtikelProps } from "@/components/sections/link-bio-artikel";
import { getLatestArtikel, resolveArtikel } from "@/lib/artikel";

// The same newest Artikel as Artikel Terbaru, as text cards without a cover.
export const linkBioArtikel = () =>
  ({
    title: "Blog",
    linkLabel: "Lihat semua artikel",
    href: "/blog",
    items: getLatestArtikel(3).map((entry) => ({
      title: entry.title,
      kategori: resolveArtikel(entry).kategori.name,
      href: `/blog/${entry.slug}`,
    })),
  }) satisfies LinkBioArtikelProps;
