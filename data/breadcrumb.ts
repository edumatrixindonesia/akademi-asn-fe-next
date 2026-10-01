import type { BreadcrumbProps } from "@/components/sections/breadcrumb";
import { regionLink, type ResolvedLocation } from "@/lib/location-tree";

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
