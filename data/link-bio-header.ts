import type { LinkBioHeaderProps } from "@/components/sections/link-bio-header";
import { footerDefault } from "@/data/footer";

export const linkBioHeader = {
  logo: { src: "/img/logo/logo-utama-akademi-asn.webp", alt: "Logo Akademi ASN" },
  name: "Akademi ASN",
  description: "Bimbingan belajar & konsultasi seleksi CPNS, PPPK, dan BUMN",
  // The same accounts as the site footer.
  socials: footerDefault().socials,
  website: { label: "Website", href: "/" },
} satisfies LinkBioHeaderProps;
