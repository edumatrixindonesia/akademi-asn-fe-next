import type { BimbelLainnyaItem, BimbelLainnyaProps } from "@/components/sections/bimbel-lainnya";
import { locationLabel, type ResolvedLocation } from "@/lib/location-tree";

const tracks: BimbelLainnyaItem[] = [
  {
    icon: "cpns",
    title: "Bimbel CPNS",
    description: "Persiapan SKD (TWK, TIU, TKP) dan SKB CPNS.",
    href: "/bimbel-cpns",
  },
  {
    icon: "pppk",
    title: "Bimbel PPPK",
    description: "Persiapan seleksi kompetensi teknis, manajerial, sosial kultural, dan wawancara PPPK.",
    href: "/bimbel-pppk",
  },
  {
    icon: "bumn",
    title: "Bimbel BUMN",
    description: "Persiapan tes online Rekrutmen Bersama BUMN dan tes lanjutan tiap perusahaan.",
    href: "/bimbel-bumn",
  },
];

// Tryout has no location pages, so it links to /tryout from everywhere.
const tryout: BimbelLainnyaItem = {
  icon: "tryout",
  title: "Tryout CPNS, PPPK & BUMN",
  description: "Simulasi ujian CAT untuk mengukur kesiapan sebelum hari tes.",
  href: "/tryout",
};

// `currentPath` is the route of the page family the section sits in; the
// offer with that route is left out.
const bimbelLainnya = (currentPath: string, location?: ResolvedLocation) => {
  const label = location && locationLabel(location);
  return {
    title: label ? `Pilihan Bimbel Akademi ASN di ${label}` : "Pilihan Bimbel Akademi ASN",
    description: "Pilih bimbel Akademi ASN lain sesuai seleksi yang Anda ikuti.",
    ctaLabel: "Lihat selengkapnya",
    items: [...tracks, tryout]
      .filter(({ href }) => href !== currentPath)
      .map((item) =>
        location && item !== tryout
          ? { ...item, title: `${item.title} ${label}`, href: `${item.href}${location.region.path}` }
          : item,
      ),
  } satisfies BimbelLainnyaProps;
};

export const bimbelLainnyaHome = bimbelLainnya("/");
export const bimbelLainnyaCpns = bimbelLainnya("/bimbel-cpns");
export const bimbelLainnyaPppk = bimbelLainnya("/bimbel-pppk");
export const bimbelLainnyaBumn = bimbelLainnya("/bimbel-bumn");
export const bimbelLainnyaTryout = bimbelLainnya("/tryout");
export const bimbelLainnyaProduk = bimbelLainnya("/produk");

export const bimbelLainnyaHomeLocation = (location: ResolvedLocation) => bimbelLainnya("/", location);
export const bimbelLainnyaCpnsLocation = (location: ResolvedLocation) => bimbelLainnya("/bimbel-cpns", location);
export const bimbelLainnyaPppkLocation = (location: ResolvedLocation) => bimbelLainnya("/bimbel-pppk", location);
export const bimbelLainnyaBumnLocation = (location: ResolvedLocation) => bimbelLainnya("/bimbel-bumn", location);
