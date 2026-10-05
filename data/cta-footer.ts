import type { CtaFooterProps } from "@/components/sections/cta-footer";

export const ctaFooter = (konsultasiUrl: string) =>
  ({
    title: "Jangan Tunda Persiapan Anda",
    description:
      "Dapatkan kelas trial gratis dan rasakan langsung metode belajar privat 1-on-1 bersama master teacher Akademi ASN sebelum Anda memutuskan untuk bergabung.",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    ctaImage: "/img/section/cta-footer-bimbel-cpns-pppk-bumn.webp",
    ctaImageAlt:
      "Ilustrasi ajakan untuk segera mendaftar bimbel CPNS, PPPK, dan BUMN di Akademi ASN",
    ctaLabel: "Daftar Sekarang",
    ctaHref: konsultasiUrl,
  }) satisfies CtaFooterProps;

export const ctaFooterLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...ctaFooter(konsultasiUrl),
    description: `Dapatkan kelas trial gratis dan rasakan langsung metode belajar privat 1-on-1 bersama master teacher Akademi ASN di ${location} sebelum Anda memutuskan untuk bergabung.`,
  }) satisfies CtaFooterProps;
