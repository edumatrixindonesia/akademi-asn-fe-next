import type { CtaFooterProps } from "@/components/sections/cta-footer";

export const ctaFooterHome = (konsultasiUrl: string) =>
  ({
    title: "Jangan Tunda Persiapanmu",
    description:
      "Dapatkan kelas trial gratis dan rasakan langsung metode belajar privat 1-on-1 bersama master teacher Akademi ASN sebelum kamu memutuskan untuk bergabung.",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    ctaImage: "/img/section/cta-footer-bimbel-cpns-pppk-bumn.webp",
    ctaImageAlt:
      "Ilustrasi ajakan untuk segera mendaftar bimbel CPNS, PPPK, dan BUMN di Akademi ASN",
    ctaLabel: "Daftar Sekarang",
    ctaHref: konsultasiUrl,
  }) satisfies CtaFooterProps;
