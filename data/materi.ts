import type { MateriProps } from "@/components/sections/materi";

export const materiHome = (konsultasiUrl: string) =>
  ({
    title: "Program Persiapan Siap Lulus CPNS, PPPK, dan BUMN",
    description:
      "Akademi ASN mendampingi persiapan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN melalui bimbingan pengajar berpengalaman, pembelajaran terarah, dan simulasi ujian untuk setiap tahap seleksi.",
    listTitle: "Materi yang Dipelajari",
    items: [
      "Pengetahuan Umum",
      "Bahasa Indonesia",
      "Tes Kemampuan Dasar (TKD)",
      "Tes Bidang Studi",
      "Teknik Menjawab Soal",
      "Simulasi Ujian",
      "Psikotes & Wawancara",
      "Bimbingan & Konsultasi",
    ],
    ctaLabel: "Daftarkan Sekarang",
    ctaHref: konsultasiUrl,
  }) satisfies MateriProps;

export const materiCpns = (konsultasiUrl: string) =>
  ({
    ...materiHome(konsultasiUrl),
    title: "Program Bimbel CPNS untuk Persiapan SKD dan SKB",
    description:
      "Akademi ASN mendampingi persiapan seleksi CPNS dari SKD hingga SKB, dengan materi sesuai kisi-kisi resmi KemenPANRB, latihan soal, dan tryout CAT bersama tutor berpengalaman.",
    items: [
      "Tes Wawasan Kebangsaan (TWK)",
      "Tes Intelegensia Umum (TIU)",
      "Tes Karakteristik Pribadi (TKP)",
      "SKB Sesuai Formasi",
      "Tryout CAT SKD",
      "Teknik Menjawab Soal",
      "Psikotes & Wawancara",
      "Bimbingan & Konsultasi",
    ],
  }) satisfies MateriProps;

export const materiPppk = (konsultasiUrl: string) =>
  ({
    ...materiHome(konsultasiUrl),
    title: "Program Bimbel PPPK Guru, Tenaga Kesehatan, dan Teknis",
    description:
      "Akademi ASN mendampingi persiapan seleksi kompetensi PPPK dengan materi kompetensi teknis sesuai formasi yang kamu lamar, latihan soal, dan simulasi CAT bersama tutor berpengalaman.",
    items: [
      "Kompetensi Teknis PPPK Guru",
      "Kompetensi Teknis PPPK Tenaga Kesehatan",
      "Kompetensi Teknis PPPK Tenaga Teknis",
      "Kompetensi Manajerial",
      "Kompetensi Sosial Kultural",
      "Wawancara Berbasis Komputer",
      "Tryout CAT PPPK",
      "Bimbingan & Konsultasi",
    ],
  }) satisfies MateriProps;

export const materiBumn = (konsultasiUrl: string) =>
  ({
    ...materiHome(konsultasiUrl),
    title: "Program Bimbel BUMN untuk Rekrutmen Bersama BUMN",
    description:
      "Akademi ASN mendampingi persiapan Rekrutmen Bersama BUMN, mulai dari tes online tahap 1 dan tahap 2 hingga psikotes, melalui kelas online maupun les privat bersama tutor.",
    items: [
      "Tes Kemampuan Dasar (TKD)",
      "Core Values AKHLAK",
      "Wawasan Kebangsaan",
      "Bahasa Inggris",
      "Learning Agility",
      "Psikotes",
      "Tryout & Latihan Soal BUMN",
      "Bimbingan & Konsultasi",
    ],
  }) satisfies MateriProps;
