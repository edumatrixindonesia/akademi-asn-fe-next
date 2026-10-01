import type { ArtikelListingProps } from "@/components/sections/artikel-listing";
import type { ArtikelPaginationProps } from "@/components/shared/artikel-pagination";
import type { ArtikelPerKategoriProps } from "@/components/sections/artikel-per-kategori";
import type { Artikel, Kategori } from "@/lib/artikel-schema";
import { artikelCard } from "@/data/artikel-card";
import { searchArtikel } from "@/data/artikel-sidebar";
import { pagePath, pageSuffix, pageWindow } from "@/lib/pagination";

export const blogIndex = {
  metaTitle: "Blog Info & Tips Seleksi CPNS, PPPK, BUMN",
  metaDescription:
    "Artikel seputar seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN dari Akademi ASN: tahapan seleksi, materi tes, dan tips persiapan, lengkap dengan sumbernya.",
  title: "Info & Tips Seleksi CPNS, PPPK, dan BUMN",
  description:
    "Kumpulan artikel tentang seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN, mulai dari tahapan seleksi, materi tes, hingga tips persiapannya. Setiap data seleksi di artikel ini mencantumkan sumbernya.",
};

const emptyLabel = "Belum ada artikel";

const pagination = (basePath: string, current: number, total: number) =>
  total > 1
    ? ({
        label: "Navigasi halaman",
        previous:
          current > 1
            ? { label: "Sebelumnya", href: pagePath(basePath, current - 1) }
            : undefined,
        next:
          current < total
            ? { label: "Berikutnya", href: pagePath(basePath, current + 1) }
            : undefined,
        pages: pageWindow(current, total).map(
          (page) =>
            page === null
              ? null
              : {
                  page,
                  href: pagePath(basePath, page),
                  current: page === current,
                  ariaLabel: `Halaman ${page}`,
                },
        ),
      } satisfies ArtikelPaginationProps)
    : undefined;

// The intro, search form, and headings appear on page 1 only, so no two
// pages of a listing share a title or intro.
export const artikelListingBlog = (page: number, entries: Artikel[], totalPages: number) =>
  ({
    title: `${blogIndex.title}${pageSuffix(page)}`,
    description: page === 1 ? blogIndex.description : undefined,
    search: page === 1 ? searchArtikel : undefined,
    heading: page === 1 ? "Artikel Terbaru" : "Daftar artikel",
    headingVisible: page === 1,
    items: entries.map(artikelCard),
    emptyLabel,
    pagination: pagination("/blog", page, totalPages),
  }) satisfies ArtikelListingProps;

// Every Kategori but Tips & Info is an exam track with its own landing page.
const landingHref = (kategori: Kategori) =>
  kategori.slug === "tips-info" ? undefined : `/bimbel-${kategori.slug}`;

export const artikelListingKategori = (
  kategori: Kategori,
  page: number,
  entries: Artikel[],
  totalPages: number,
) => {
  const href = landingHref(kategori);

  return {
    title: `${kategori.title}${pageSuffix(page)}`,
    description: page === 1 ? kategori.description : undefined,
    landing:
      page === 1 && href ? { label: `Lihat Bimbel ${kategori.name}`, href } : undefined,
    search: page === 1 ? searchArtikel : undefined,
    heading: "Daftar artikel",
    headingVisible: false,
    items: entries.map(artikelCard),
    emptyLabel,
    pagination: pagination(`/blog/kategori/${kategori.slug}`, page, totalPages),
  } satisfies ArtikelListingProps;
};

export const artikelPerKategori = (kategori: Kategori, entries: Artikel[]) =>
  ({
    title: kategori.title,
    linkLabel: "Lihat Semua",
    href: `/blog/kategori/${kategori.slug}`,
    items: entries.map(artikelCard),
  }) satisfies ArtikelPerKategoriProps;
