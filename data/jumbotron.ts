import type { JumbotronProps } from "@/components/sections/jumbotron";

export const jumbotronHome = (konsultasiUrl: string) =>
  ({
    title: "Bimbel CPNS, PPPK, & BUMN",
    description:
      "Pembelajaran intensif dengan simulasi Tryout berbasis CAT dibantu oleh tutor berpengalaman. Persiapan yang matang akan mempermudah Lolos CPNS, dengan les privat SKD CPNS kamu akan lebih percaya diri mengikuti seleksinya.",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    heroImage: "/img/section/display-akademi-asn.webp",
    heroImageAlt:
      "Dua orang berseragam ASN merayakan keberhasilan di depan gedung BKN",
    ctaLabel: "Daftarkan Sekarang",
    ctaHref: konsultasiUrl,
  }) satisfies JumbotronProps;
