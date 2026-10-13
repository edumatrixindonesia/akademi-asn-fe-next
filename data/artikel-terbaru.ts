import type { ArtikelTerbaruProps } from "@/components/sections/artikel-terbaru";
import { artikelCard } from "@/data/artikel-card";
import { getLandingArtikel } from "@/lib/artikel";
import type { ExamTrack } from "@/lib/artikel-schema";

// The newest Artikel of one exam track, or of any on the home page.
// `undefined` hides the section when nothing is published.
export const artikelTerbaru = (examTrack?: ExamTrack) => {
  const entries = getLandingArtikel(examTrack);
  if (entries.length === 0) return undefined;

  return {
    title: "Artikel Terbaru",
    linkLabel: "Lihat Semua",
    href: "/blog",
    items: entries.map(artikelCard),
  } satisfies ArtikelTerbaruProps;
};
