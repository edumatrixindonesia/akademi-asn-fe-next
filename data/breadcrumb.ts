import type { BreadcrumbProps } from "@/components/sections/breadcrumb";
import { regionLink, type ResolvedLocation } from "@/lib/location-tree";
import { kategoriPath, penulisPath } from "@/lib/blog-path";
import {
  kebijakanPengembalianPath,
  kebijakanPengembalianTitle,
} from "@/data/kebijakan-pengembalian";

const beranda = { name: "Beranda", href: "/" };

// Exam-track families put their track page between Beranda and the regions.
const breadcrumbLocation =
  (roots: BreadcrumbProps["items"], basePath: string) =>
  ({ ancestors, region }: ResolvedLocation) =>
    ({
      items: [...roots, ...[...ancestors, region].map(regionLink(basePath))],
    }) satisfies BreadcrumbProps;

export const breadcrumbHomeLocation = breadcrumbLocation([beranda], "");
export const breadcrumbCpns = {
  items: [beranda, { name: "Bimbel CPNS", href: "/bimbel-cpns" }],
} satisfies BreadcrumbProps;
export const breadcrumbPppk = {
  items: [beranda, { name: "Bimbel PPPK", href: "/bimbel-pppk" }],
} satisfies BreadcrumbProps;
export const breadcrumbBumn = {
  items: [beranda, { name: "Bimbel BUMN", href: "/bimbel-bumn" }],
} satisfies BreadcrumbProps;

export const breadcrumbTryout = {
  items: [
    beranda,
    { name: "Tryout", href: "/tryout-bimbel-cpns-pppk-bumn-terbaik" },
  ],
} satisfies BreadcrumbProps;

export const breadcrumbProduk = {
  items: [
    beranda,
    { name: "Produk", href: "/produk-bimbel-cpns-pppk-bumn-terbaik" },
  ],
} satisfies BreadcrumbProps;

export const breadcrumbKebijakanPengembalian = {
  items: [
    beranda,
    { name: kebijakanPengembalianTitle, href: kebijakanPengembalianPath },
  ],
} satisfies BreadcrumbProps;

export const breadcrumbCpnsLocation = breadcrumbLocation(
  breadcrumbCpns.items,
  "/bimbel-cpns",
);
export const breadcrumbPppkLocation = breadcrumbLocation(
  breadcrumbPppk.items,
  "/bimbel-pppk",
);
export const breadcrumbBumnLocation = breadcrumbLocation(
  breadcrumbBumn.items,
  "/bimbel-bumn",
);

export const breadcrumbArtikel = (
  kategori: { slug: string; name: string },
  title: string,
  slug: string,
) =>
  ({
    items: [
      beranda,
      { name: "Blog", href: "/blog" },
      { name: kategori.name, href: kategoriPath(kategori.slug) },
      { name: title, href: `/blog/${slug}` },
    ],
  }) satisfies BreadcrumbProps;

export const breadcrumbBlog = {
  items: [beranda, { name: "Blog", href: "/blog" }],
} satisfies BreadcrumbProps;

export const breadcrumbCari = {
  items: [...breadcrumbBlog.items, { name: "Cari artikel", href: "/blog/cari" }],
} satisfies BreadcrumbProps;

export const breadcrumbKategori = (kategori: { slug: string; name: string }) =>
  ({
    items: [
      ...breadcrumbBlog.items,
      { name: kategori.name, href: kategoriPath(kategori.slug) },
    ],
  }) satisfies BreadcrumbProps;

export const breadcrumbPenulis = (penulis: { slug: string; name: string }) =>
  ({
    items: [
      ...breadcrumbBlog.items,
      { name: penulis.name, href: penulisPath(penulis.slug) },
    ],
  }) satisfies BreadcrumbProps;
