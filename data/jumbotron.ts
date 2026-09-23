import type { JumbotronProps } from "@/components/sections/jumbotron";

export const jumbotronHome = (konsultasiUrl: string) =>
  ({
    title: "Bimbel CPNS PPPK BUMN Terbaik untuk Persiapan Seleksi",
    description:
      "Persiapkan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN melalui program belajar terarah, materi sesuai jenis tes, latihan soal, tryout, dan pendampingan tutor.",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    heroImage: "/img/section/bimbel-cpns-pppk-bumn-terbaik.webp",
    heroImageAlt: "Bimbel CPNS PPPK BUMN Terbaik",
    ctaLabel: "Daftar Sekarang",
    ctaHref: konsultasiUrl,
  }) satisfies JumbotronProps;
