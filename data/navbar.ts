import type { NavbarProps } from "@/components/layouts/navbar";

export const navbarDefault = {
  logo: { src: "/logo-akademi-asn.webp", alt: "Akademi ASN" },
  links: [
    { label: "Paket", href: "#paket-program" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Tryout", href: "/tryout-bimbel-cpns-pppk-bumn-terbaik" },
    { label: "Produk", href: "/produk-bimbel-cpns-pppk-bumn-terbaik" },
  ],
  cta: {
    label: "Konsultasi Gratis",
    href: "https://wa.me/6285815095359?text=Halo%20Akademi%20ASN%2C%20saya%20ingin%20konsultasi",
  },
} satisfies NavbarProps;
