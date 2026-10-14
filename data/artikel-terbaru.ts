import type { ArtikelTerbaruProps } from "@/components/sections/artikel-terbaru";
import { artikelCard } from "@/data/artikel-card";
import { getLatestArtikel } from "@/lib/artikel";

// The three newest Artikel of any exam track, the same on every landing page
// (`docs/adr/0005-artikel-terbaru-ignores-exam-track.md`).
// `undefined` hides the section when nothing is published.
export const artikelTerbaru = () => {
  const entries = getLatestArtikel(3);
  if (entries.length === 0) return undefined;

  return {
    title: "Artikel Terbaru",
    linkLabel: "Lihat Semua",
    href: "/blog",
    items: entries.map(artikelCard),
  } satisfies ArtikelTerbaruProps;
};
