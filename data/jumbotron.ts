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

export const jumbotronCpns = (konsultasiUrl: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: "Bimbel CPNS Online & Offline Terbaik untuk Persiapan SKD & SKB",
    description:
      "Kelas intensif persiapan tes CPNS dengan materi TWK, TIU, TKP, latihan soal, tryout CAT, serta pendampingan tutor.",
  }) satisfies JumbotronProps;

export const jumbotronPppk = (konsultasiUrl: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: "Bimbel PPPK untuk Teknis Guru & Tenaga Kesehatan",
    description:
      "Persiapkan seleksi PPPK dengan program belajar terarah, kelas bersama mentor, latihan soal, dan simulasi Tryout CAT sesuai kebutuhan formasi yang Anda pilih.",
  }) satisfies JumbotronProps;

export const jumbotronBumn = (konsultasiUrl: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: "Bimbel BUMN untuk Persiapan Tes Rekrutmen Bersama BUMN",
    description:
      "Persiapkan TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility bersama tutor melalui kelas online maupun les privat yang disesuaikan dengan kebutuhan belajar Anda.",
  }) satisfies JumbotronProps;
