import type { NotFoundProps } from "@/components/sections/not-found";

export const notFound = (konsultasiUrl: string) =>
  ({
    code: "404",
    title: "Halaman Tidak Ditemukan",
    description:
      "Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke beranda atau pilih bimbel sesuai seleksi yang Anda ikuti di bawah ini.",
    homeLabel: "Kembali ke Beranda",
    homeHref: "/",
    konsultasiLabel: "Konsultasi Gratis",
    konsultasiHref: konsultasiUrl,
    examTracks: {
      title: "Pilih Bimbel Sesuai Seleksi Anda",
      description:
        "Persiapan terarah untuk seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN.",
      linkLabel: "Lihat bimbel",
      items: [
        {
          title: "Bimbel CPNS",
          description:
            "Persiapan SKD & SKB dengan materi TWK, TIU, TKP dan tryout CAT.",
          href: "/bimbel-cpns",
        },
        {
          title: "Bimbel PPPK",
          description:
            "Persiapan seleksi kompetensi PPPK untuk formasi teknis, guru, dan tenaga kesehatan.",
          href: "/bimbel-pppk",
        },
        {
          title: "Bimbel BUMN",
          description:
            "Persiapan Rekrutmen Bersama BUMN: TKD, AKHLAK, Bahasa Inggris, dan Learning Agility.",
          href: "/bimbel-bumn",
        },
      ],
    },
  }) satisfies NotFoundProps;
