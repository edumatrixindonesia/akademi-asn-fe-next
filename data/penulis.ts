import type { Penulis } from "@/lib/artikel-schema";

export const penulis = [
  {
    slug: "tim-akademi-asn",
    name: "Tim Akademi ASN",
    type: "organization",
    bio: "Tim Akademi ASN menyusun artikel di blog ini. Akademi ASN adalah bimbel persiapan seleksi CPNS, PPPK, dan BUMN dari Edumatrix Indonesia yang berkantor di Sleman, DI Yogyakarta. Setiap data seleksi di artikel diperiksa terhadap sumber resminya sebelum terbit.",
    avatar: {
      src: "/img/logo/logo-akademi-asn.webp",
      alt: "Logo Akademi ASN",
    },
    sameAs: [
      { label: "Instagram", href: "https://www.instagram.com/akademiasnofficial" },
      { label: "TikTok", href: "https://www.tiktok.com/@akademi.asn" },
    ],
  },
  {
    slug: "dimas-maulana",
    name: "Dimas Maulana",
    type: "person",
    jobTitle: "Fullstack Web Developer & IT Support Specialist",
    bio: "Dimas Maulana adalah Fullstack Web Developer dan IT Support Specialist di Edumatrix Indonesia, induk perusahaan Akademi ASN. Ia membangun dan mengelola situs Akademi ASN, serta menyunting Artikel di blog ini dengan memeriksa setiap data seleksi terhadap sumber resmi seperti BKN dan KemenPANRB sebelum terbit.",
    avatar: {
      src: "/img/writer/dimas-maulana.webp",
      alt: "Foto Dimas Maulana",
    },
    sameAs: [
      { label: "Instagram", href: "https://www.instagram.com/dimassmaulanaaa/" },
      { label: "GitHub", href: "https://github.com/dimassmaulanaaa/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dimas-maulana-idn/" },
    ],
  },
] satisfies Penulis[];
