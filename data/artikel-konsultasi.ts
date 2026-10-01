import type { KonsultasiCardProps } from "@/components/shared/konsultasi-card";

export const konsultasiMdx = (ctaHref: string) =>
  ({
    title: "Butuh bantuan menyiapkan seleksi?",
    description:
      "Konsultasikan kebutuhan belajarmu dengan tim Akademi ASN lewat WhatsApp.",
    ctaLabel: "Konsultasi Sekarang",
    ctaHref,
  }) satisfies KonsultasiCardProps;

export const konsultasiPertanyaan = (ctaHref: string) =>
  ({
    title: "Masih ada pertanyaan?",
    description:
      "Tanyakan langsung ke tim Akademi ASN lewat WhatsApp, kami bantu jawab seputar seleksi CPNS, PPPK, dan BUMN.",
    ctaLabel: "Konsultasi Sekarang",
    ctaHref,
  }) satisfies KonsultasiCardProps;

export const konsultasiSidebar = (ctaHref: string) =>
  ({
    title: "Konsultasi dengan Akademi ASN",
    description:
      "Tanya program bimbel CPNS, PPPK, dan BUMN langsung lewat WhatsApp.",
    ctaLabel: "Konsultasi Sekarang",
    ctaHref,
  }) satisfies KonsultasiCardProps;
