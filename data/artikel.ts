import type { Artikel } from "@/lib/artikel-schema";

// Newest first once there are published Artikel; each slug needs a body at
// data/artikel/{slug}.mdx (lib/artikel.ts fails the build otherwise).
export const artikel = [
  // Permanent fixture: renders under `bun dev` only and exercises the page
  // for tests and review. It holds no real claims.
  {
    slug: "draft-artikel-contoh",
    title: "Draft Artikel Contoh",
    description:
      "Artikel contoh berstatus draft untuk menguji tampilan halaman Artikel Akademi ASN. Isinya tidak memuat data seleksi dan tidak pernah terbit di situs.",
    excerpt:
      "Artikel contoh untuk menguji halaman Artikel; isinya bukan informasi seleksi.",
    kategori: "tips-info",
    penulis: "tim-akademi-asn",
    status: "draft",
    focusKeyword: "draft artikel contoh",
    cover: {
      src: "/img/section/og-bimbel-cpns-pppk-bumn-terbaik-akademi-asn.jpeg",
      alt: "Gambar sampul contoh Artikel Akademi ASN",
    },
    references: [
      {
        title: "Badan Kepegawaian Negara",
        url: "https://www.bkn.go.id/",
        publisher: "BKN",
        accessedAt: "2026-10-01",
      },
    ],
  },
] satisfies Artikel[];
