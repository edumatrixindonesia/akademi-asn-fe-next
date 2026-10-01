import type { ArtikelSidebarProps } from "@/components/sections/artikel-sidebar";
import type { SearchArtikelFormProps } from "@/components/shared/search-artikel-form";
import type { Artikel } from "@/lib/artikel-schema";
import { artikelCard } from "@/data/artikel-card";
import { konsultasiSidebar } from "@/data/artikel-konsultasi";

export const searchArtikel = {
  label: "Cari artikel",
  placeholder: "Cari artikel...",
} satisfies SearchArtikelFormProps;

export const artikelSidebar = (konsultasiUrl: string, latest: Artikel[]) =>
  ({
    konsultasi: konsultasiSidebar(konsultasiUrl),
    search: searchArtikel,
    terbaruTitle: "Artikel Terbaru",
    terbaru: latest.map(artikelCard),
  }) satisfies ArtikelSidebarProps;
