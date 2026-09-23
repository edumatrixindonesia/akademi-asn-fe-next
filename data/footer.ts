import type { FooterProps } from "@/components/layouts/footer";

export const footerDefault = (konsultasiUrl: string) => ({
  logo: { src: "/logo-akademi-asn.webp", alt: "Akademi ASN" },
  name: "AKADEMI ASN",
  address:
    "Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati, Sleman, Yogyakarta 55241",
  // TODO: replace "#" with the real social media URLs.
  socials: [
    { platform: "instagram", label: "Instagram", href: "#" },
    { platform: "tiktok", label: "TikTok", href: "#" },
    { platform: "youtube", label: "YouTube", href: "#" },
  ],
  consultation: {
    title: "KONSULTASI PROGRAM GRATIS",
    label: "Call Center",
    phone: { label: "Chat via WhatsApp", href: konsultasiUrl },
  },
  otherWebsite: {
    title: "OTHER WEBSITE",
    link: {
      label: "EDUMATRIX-INDONESIA.COM",
      href: "https://edumatrix-indonesia.com/",
    },
  },
  examTracks: {
    title: "HOT PROGRAM",
    links: [
      { label: "Bimbel CPNS", href: "/bimbel-cpns" },
      { label: "Bimbel PPPK", href: "/bimbel-pppk" },
      { label: "Bimbel BUMN", href: "/bimbel-bumn" },
    ],
  },
  copyright: "© 2026 Akademi ASN",
}) satisfies FooterProps;
