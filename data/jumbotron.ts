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

export const jumbotronHomeLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: `Bimbel CPNS, PPPK & BUMN ${location}`,
    description: `Persiapkan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN dari ${location} melalui kelas online, les privat, latihan soal, tryout, dan pendampingan tutor.`,
    heroImageAlt: `Bimbel CPNS, PPPK & BUMN ${location}`,
  }) satisfies JumbotronProps;

export const jumbotronCpnsLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronCpns(konsultasiUrl),
    title: `Bimbel CPNS ${location}`,
    description: `Kelas intensif persiapan tes CPNS untuk peserta dari ${location}: materi TWK, TIU, TKP, latihan soal, tryout CAT, serta pendampingan tutor.`,
    heroImageAlt: `Bimbel CPNS ${location}`,
  }) satisfies JumbotronProps;

export const jumbotronPppkLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronPppk(konsultasiUrl),
    title: `Bimbel PPPK ${location}`,
    description: `Persiapkan seleksi PPPK dari ${location} dengan program belajar terarah, kelas bersama mentor, latihan soal, dan simulasi Tryout CAT sesuai formasi yang Anda pilih.`,
    heroImageAlt: `Bimbel PPPK ${location}`,
  }) satisfies JumbotronProps;

export const jumbotronBumnLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronBumn(konsultasiUrl),
    title: `Bimbel BUMN ${location}`,
    description: `Persiapkan Rekrutmen Bersama BUMN dari ${location}: TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility bersama tutor, online maupun les privat.`,
    heroImageAlt: `Bimbel BUMN ${location}`,
  }) satisfies JumbotronProps;
