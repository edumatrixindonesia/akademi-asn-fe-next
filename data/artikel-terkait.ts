import type { ArtikelTerkaitProps } from "@/components/sections/artikel-terkait";
import type { Artikel } from "@/lib/artikel-schema";
import { artikelCard } from "@/data/artikel-card";

export const artikelTerkait = (related: Artikel[]) =>
  ({
    title: "Artikel Terkait",
    items: related.map(artikelCard),
  }) satisfies ArtikelTerkaitProps;
