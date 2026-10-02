import type { ArtikelTerbaruProps } from "@/components/sections/artikel-terbaru";
import { artikelCard } from "@/data/artikel-card";
import { getLandingArtikel } from "@/lib/artikel";
import { kategoriPath } from "@/lib/blog-path";

// The newest Artikel of one exam-track Kategori, or of any Kategori on the
// home page. `undefined` hides the section when nothing is published.
export const artikelTerbaru = (kategori?: string) => {
  const entries = getLandingArtikel(kategori);
  if (entries.length === 0) return undefined;

  return {
    title: "Artikel Terbaru",
    linkLabel: "Lihat Semua",
    href: kategori ? kategoriPath(kategori) : "/blog",
    items: entries.map(artikelCard),
  } satisfies ArtikelTerbaruProps;
};
