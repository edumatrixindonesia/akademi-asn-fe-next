import type { LinkBioKonsultasiProps } from "@/components/sections/link-bio-konsultasi";
import { getKonsultasiUrl, konsultasiPage } from "@/data/contact";

// The Topik Konsultasi tells the Admin Konsultasi the chat came from Instagram.
export const linkBioKonsultasi = {
  title: "Chat Admin Konsultasi",
  label: "Konsultasi Gratis",
  description: "Admin online, balas via WhatsApp",
  ctaLabel: "Chat Sekarang",
  href: getKonsultasiUrl(`${konsultasiPage.home} dari Instagram`),
} satisfies LinkBioKonsultasiProps;
