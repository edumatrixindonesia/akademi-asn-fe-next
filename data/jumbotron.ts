import type { JumbotronProps } from "@/components/sections/jumbotron";
import { tahunSeleksi } from "@/data/tahun-seleksi";

export const jumbotronHome = (konsultasiUrl: string) =>
  ({
    title: "Bimbel CPNS PPPK BUMN Terbaik untuk Persiapan Seleksi",
    description:
      "Persiapkan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN melalui program belajar terarah, materi sesuai jenis tes, latihan soal, tryout, dan pendampingan tutor.",
    backgroundImage: "/img/section/bg-bimbel-cpns-pppk-bumn.webp",
    heroImage: "/img/section/bimbel-cpns-pppk-bumn-terbaik.webp",
    heroImageAlt: "Bimbel CPNS PPPK BUMN Terbaik",
    ctas: [{ label: "Daftar Sekarang", href: konsultasiUrl }],
  }) satisfies JumbotronProps;

export const jumbotronCpns = (konsultasiUrl: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: "Bimbel CPNS Online & Offline Terbaik untuk Persiapan SKD & SKB",
    description:
      "Kelas intensif persiapan tes CPNS dengan materi TWK, TIU, TKP, latihan soal, tryout CAT, serta pendampingan tutor.",
    heroImageAlt: "Bimbel CPNS Online & Offline Terbaik",
  }) satisfies JumbotronProps;

export const jumbotronPppk = (konsultasiUrl: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: "Bimbel PPPK untuk Teknis Guru & Tenaga Kesehatan",
    description:
      "Persiapkan seleksi PPPK dengan program belajar terarah, kelas bersama mentor, latihan soal, dan simulasi Tryout CAT sesuai kebutuhan formasi yang Anda pilih.",
    heroImageAlt: "Bimbel PPPK Online & Offline Terbaik",
  }) satisfies JumbotronProps;

export const jumbotronBumn = (konsultasiUrl: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: "Bimbel BUMN untuk Persiapan Tes Rekrutmen Bersama BUMN",
    description:
      "Persiapkan TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility bersama tutor melalui kelas online maupun les privat yang disesuaikan dengan kebutuhan belajar Anda.",
    heroImageAlt: "Bimbel BUMN Terbaik",
  }) satisfies JumbotronProps;

// One button per exam track, each opening Konsultasi about that track's tryout.
export const jumbotronTryout = (konsultasiUrl: (topic: string) => string) =>
  ({
    ...jumbotronHome(konsultasiUrl("Tryout CPNS, PPPK & BUMN")),
    title: `Tryout CPNS, PPPK & BUMN ${tahunSeleksi} Simulasi CAT Online`,
    description:
      "Bergabung dengan 15.000+ alumni yang sudah lolos CPNS & PPPK. Latih kecepatan dan ketepatan menjawab dengan simulasi CAT, pembahasan lengkap, dan ranking nasional.",
    heroImageAlt: "Tryout CPNS PPPK BUMN Akademi ASN",
    ctas: ["Tryout CPNS", "Tryout PPPK", "Tryout BUMN"].map((topic) => ({
      label: topic,
      href: konsultasiUrl(topic),
    })),
  }) satisfies JumbotronProps;

// Location entries take the headline location (`headlineLabel`).
export const jumbotronHomeLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronHome(konsultasiUrl),
    title: `Bimbel CPNS PPPK BUMN Terbaik di ${location} untuk Persiapan Seleksi`,
    description: `Persiapkan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN di ${location} melalui program belajar terarah, materi sesuai jenis tes, latihan soal, tryout, dan pendampingan tutor.`,
    heroImageAlt: `Bimbel CPNS PPPK BUMN Terbaik di ${location}`,
  }) satisfies JumbotronProps;

export const jumbotronCpnsLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronCpns(konsultasiUrl),
    title: `Bimbel CPNS Online & Offline Terbaik di ${location} untuk Persiapan SKD & SKB`,
    description: `Kelas intensif persiapan tes CPNS di ${location} dengan materi TWK, TIU, TKP, latihan soal, tryout CAT, serta pendampingan tutor.`,
    heroImageAlt: `Bimbel CPNS Online & Offline Terbaik di ${location}`,
  }) satisfies JumbotronProps;

export const jumbotronPppkLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronPppk(konsultasiUrl),
    title: `Bimbel PPPK di ${location} untuk Teknis Guru & Tenaga Kesehatan`,
    description: `Persiapkan seleksi PPPK di ${location} dengan program belajar terarah, kelas bersama mentor, latihan soal, dan simulasi Tryout CAT sesuai kebutuhan formasi yang Anda pilih.`,
    heroImageAlt: `Bimbel PPPK Online & Offline Terbaik di ${location}`,
  }) satisfies JumbotronProps;

export const jumbotronBumnLocation = (konsultasiUrl: string, location: string) =>
  ({
    ...jumbotronBumn(konsultasiUrl),
    title: `Bimbel BUMN di ${location} untuk Persiapan Tes Rekrutmen Bersama BUMN`,
    description: `Persiapkan TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility di ${location} bersama tutor melalui kelas online maupun les privat yang disesuaikan dengan kebutuhan belajar Anda.`,
    heroImageAlt: `Bimbel BUMN Terbaik di ${location}`,
  }) satisfies JumbotronProps;
