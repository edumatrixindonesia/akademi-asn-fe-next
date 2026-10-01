import type { Kategori } from "@/lib/artikel-schema";

// Cover files are produced by the default-covers ticket; until they exist the
// fallback paths 404, so every Artikel should set its own `cover` meanwhile.
export const kategori = [
  {
    slug: "cpns",
    name: "CPNS",
    title: "Artikel Seleksi CPNS",
    seoTitle: "Artikel Seleksi CPNS: SKD, SKB, dan Tips",
    metaDescription:
      "Artikel seputar seleksi CPNS: tahapan SKD dan SKB, materi TWK, TIU, dan TKP, serta tips persiapannya dari Akademi ASN.",
    description:
      "Artikel tentang seleksi Calon Pegawai Negeri Sipil (CPNS), mulai dari tahapan Seleksi Kompetensi Dasar (SKD) dan Seleksi Kompetensi Bidang (SKB), materi TWK, TIU, dan TKP, hingga tips persiapannya.",
    cover: {
      src: "/img/blog/cover-cpns.jpg",
      alt: "Artikel seleksi CPNS dari Akademi ASN",
    },
  },
  {
    slug: "pppk",
    name: "PPPK",
    title: "Artikel Seleksi PPPK",
    seoTitle: "Artikel Seleksi PPPK: Seleksi Kompetensi dan Tips",
    metaDescription:
      "Artikel seputar seleksi PPPK: kompetensi teknis, manajerial, sosial kultural, dan wawancara, serta tips persiapannya dari Akademi ASN.",
    description:
      "Artikel tentang seleksi Pegawai Pemerintah dengan Perjanjian Kerja (PPPK), mulai dari seleksi kompetensi teknis, manajerial, sosial kultural, dan wawancara, hingga tips persiapannya.",
    cover: {
      src: "/img/blog/cover-pppk.jpg",
      alt: "Artikel seleksi PPPK dari Akademi ASN",
    },
  },
  {
    slug: "bumn",
    name: "BUMN",
    title: "Artikel Rekrutmen Bersama BUMN",
    seoTitle: "Artikel Rekrutmen Bersama BUMN: Tes dan Tips",
    metaDescription:
      "Artikel seputar Rekrutmen Bersama BUMN: tes online tahap awal, tes lanjutan di tiap perusahaan, dan tips persiapannya dari Akademi ASN.",
    description:
      "Artikel tentang Rekrutmen Bersama BUMN, mulai dari tes online tahap awal, tes lanjutan di masing-masing perusahaan, hingga tips persiapannya.",
    cover: {
      src: "/img/blog/cover-bumn.jpg",
      alt: "Artikel Rekrutmen Bersama BUMN dari Akademi ASN",
    },
  },
  {
    slug: "tips-info",
    name: "Tips & Info",
    title: "Tips & Info Seleksi CPNS, PPPK, dan BUMN",
    seoTitle: "Tips & Info Seleksi CPNS, PPPK, BUMN",
    metaDescription:
      "Tips dan info lintas seleksi CPNS, PPPK, dan BUMN dari Akademi ASN: perbedaan jalur, persiapan dokumen, dan cara belajar.",
    description:
      "Tips dan informasi yang berlaku lintas seleksi CPNS, PPPK, dan BUMN, seperti perbedaan jalur seleksi, persiapan dokumen, dan cara belajar.",
    cover: {
      src: "/img/blog/cover-tips-info.jpg",
      alt: "Tips dan info seleksi CPNS, PPPK, dan BUMN dari Akademi ASN",
    },
  },
] satisfies Kategori[];
