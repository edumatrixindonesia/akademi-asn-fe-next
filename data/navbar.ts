import type { NavbarProps } from "@/components/layouts/navbar";

export const navbarDefault = (konsultasiUrl: string) =>
  ({
    logo: { src: "/img/logo/logo-akademi-asn.webp", alt: "Akademi ASN" },
    links: [
      { label: "Paket", href: "#paket-program" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "Tryout", href: "/tryout" },
      { label: "Produk", href: "/produk" },
      { label: "Blog", href: "/blog" },
    ],
    cta: {
      label: "Konsultasi Gratis",
      href: konsultasiUrl,
    },
  }) satisfies NavbarProps;
