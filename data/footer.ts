import type { FooterProps } from "@/components/layouts/footer";
import { callCenterPhone, officeAddress } from "@/data/contact";
import {
  kebijakanPengembalianPath,
  kebijakanPengembalianTitle,
} from "@/data/kebijakan-pengembalian";

export const footerDefault = () =>
  ({
    logo: { src: "/img/logo/logo-akademi-asn.webp", alt: "Akademi ASN" },
    name: "AKADEMI ASN",
    address: officeAddress,
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
      phone: {
        label: callCenterPhone.display,
        ariaLabel: `Chat via WhatsApp ${callCenterPhone.display}`,
        href: `https://wa.me/${callCenterPhone.e164.slice(1)}`,
      },
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
        { label: "Bimbel CPNS 🔥", href: "/bimbel-cpns" },
        { label: "Bimbel PPPK 🔥", href: "/bimbel-pppk" },
        { label: "Bimbel BUMN 🔥", href: "/bimbel-bumn" },
      ],
    },
    image: {
      src: "/img/section/bimbel-cpns-pppk-bumn-terbaik-akademi-asn.webp",
      alt: "Bimbel CPNS, PPPK, dan BUMN terbaik Akademi ASN",
    },
    policies: [
      { label: kebijakanPengembalianTitle, href: kebijakanPengembalianPath },
    ],
    copyright: "© 2026 Akademi ASN",
  }) satisfies FooterProps;
