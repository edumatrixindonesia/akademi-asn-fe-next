import type { NavbarProps } from "@/components/layouts/navbar";

export const navbarDefault = (konsultasiUrl: string) => ({
  logo: { src: "/logo-akademi-asn.webp", alt: "Akademi ASN" },
  links: [
    { label: "Paket", href: "#paket-program" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Tryout", href: "/tryout-bimbel-cpns-pppk-bumn-terbaik" },
    { label: "Produk", href: "/produk-bimbel-cpns-pppk-bumn-terbaik" },
  ],
  cta: {
    label: "Konsultasi Gratis",
    href: konsultasiUrl,
  },
}) satisfies NavbarProps;
