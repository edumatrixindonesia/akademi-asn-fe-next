import type { Kategori } from "@/lib/artikel-schema";

export const kategori = [
  {
    slug: "cpns",
    name: "CPNS",
    title: "CPNS",
    seoTitle: "Artikel Seleksi CPNS: SKD SKB & Tips",
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
    title: "PPPK",
    seoTitle: "Artikel Seleksi PPPK: Seleksi Kompetensi & Tips",
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
    title: "BUMN",
    seoTitle: "Artikel Rekrutmen Bersama BUMN: Tes & Tips",
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
    title: "Tips & Info",
    seoTitle: "Tips & Info Seleksi CPNS PPPK BUMN",
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
