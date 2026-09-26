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
export const breadcrumbCpnsLocation = breadcrumbLocation(
  [beranda, { name: "Bimbel CPNS", href: "/bimbel-cpns" }],
  "/bimbel-cpns",
);
export const breadcrumbPppkLocation = breadcrumbLocation(
  [beranda, { name: "Bimbel PPPK", href: "/bimbel-pppk" }],
  "/bimbel-pppk",
);
export const breadcrumbBumnLocation = breadcrumbLocation(
  [beranda, { name: "Bimbel BUMN", href: "/bimbel-bumn" }],
  "/bimbel-bumn",
);
