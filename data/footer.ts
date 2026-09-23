import type { FooterProps } from "@/components/layouts/footer";

export const footerDefault = (konsultasiUrl: string) =>
  ({
    logo: { src: "/img/logo/logo-akademi-asn.webp", alt: "Akademi ASN" },
    name: "AKADEMI ASN",
    address:
      "Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati, Sleman, Yogyakarta 55241",
    socials: [
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/akademiasnofficial",
      },
      {
        platform: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@akademi.asn",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@edumatrixindonesia",
      },
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
