import type { ArtikelSidebarProps } from "@/components/sections/artikel-sidebar";
import type { Artikel } from "@/lib/artikel-schema";
import { artikelCard } from "@/data/artikel-card";
import { konsultasiSidebar } from "@/data/artikel-konsultasi";

export const artikelSidebar = (konsultasiUrl: string, latest: Artikel[]) =>
  ({
    konsultasi: konsultasiSidebar(konsultasiUrl),
    search: { label: "Cari artikel", placeholder: "Cari artikel..." },
    terbaruTitle: "Artikel Terbaru",
    terbaru: latest.map(artikelCard),
  }) satisfies ArtikelSidebarProps;
