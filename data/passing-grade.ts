import type { PassingGradeProps } from "@/components/sections/passing-grade";

export const passingGradeHome = {
  title: "Mengenal Konsep Passing Grade",
  description: "Nilai ambang batas SKD CPNS 2024 untuk pelamar kebutuhan umum:",
  note: "Memenuhi passing grade tidak menjamin lanjut ke tahap berikutnya. Peserta juga harus masuk peringkat tertinggi dalam kuota 3 kali jumlah formasi.",
  sourceLabel: "Sumber: Kementerian PANRB, SKD CPNS 2024",
  sourceHref:
    "https://www.menpan.go.id/site/berita-terkini/134-peserta-cpns-kementerian-panrb-ikuti-skd-menteri-anas-kompetisi-transparan-ciptakan-asn-kompeten-2",
  scores: [
    {
      title: "Tes Wawasan Kebangsaan (TWK)",
      score: "65",
      description: "Fokus pada integritas dan pemahaman pilar negara.",
    },
    {
      title: "Tes Intelegensia Umum (TIU)",
      score: "80",
      description: "Mengukur logika dan kemampuan berpikir rasional.",
    },
    {
      title: "Tes Karakteristik Pribadi (TKP)",
      score: "166",
      description: "Menilai kecocokan perilaku dan karakter kerja.",
    },
  ],
} satisfies PassingGradeProps;

export const passingGradePppk = {
  title: "Sistem Penilaian Seleksi PPPK",
  description:
    "Nilai maksimal seleksi kompetensi PPPK 2024 adalah 670 (445 untuk jabatan Pengelola Umum Operasional). Jawaban benar soal teknis bernilai 5, sedangkan setiap pilihan jawaban soal manajerial, sosial kultural, dan wawancara bernilai 1 sampai 4.",
  note: "Seleksi PPPK 2024 tidak memakai nilai ambang batas (passing grade). Pelamar dinyatakan lulus jika berperingkat terbaik pada formasi yang dilamar.",
  sourceLabel: "Sumber: Kementerian PANRB, Seleksi PPPK 2024",
  sourceHref:
    "https://menpan.go.id/site/berita-terkini/pendaftaran-seleksi-pppk-2024-dibuka-2-periode-menteri-panrb-komitmen-pemerintah-tuntaskan-penataan-non-asn",
  scores: [
    {
      title: "Kompetensi Teknis",
      score: "450",
      description: "Nilai maksimal dari 90 soal, masing-masing bernilai 5.",
    },
    {
      title: "Manajerial & Sosial Kultural",
      score: "180",
      description: "Nilai maksimal dari 45 soal, masing-masing bernilai 1–4.",
    },
    {
      title: "Wawancara",
      score: "40",
      description: "Nilai maksimal dari 10 soal, masing-masing bernilai 1–4.",
    },
  ],
} satisfies PassingGradeProps;

export const passingGradeBumn = {
  title: "Passing Grade Rekrutmen Bersama BUMN",
  description:
    "Nilai ambang batas Tes Online Tahap 1 Rekrutmen Bersama BUMN 2025 yang diumumkan FHCI:",
  note: "Peserta yang tidak memenuhi ambang batas pada salah satu tes tidak dapat melanjutkan ke tahap berikutnya. Di tahap 2, tes Learning Agility memiliki ambang batas 36.",
  sourceLabel: "Sumber: FHCI, Rekrutmen Bersama BUMN 2025 (Kompas.com)",
  sourceHref:
    "https://www.kompas.com/tren/read/2025/04/18/101500665/ini-passing-grade-twk-tkd-dan-tes-akhlak-dalam-rekrutmen-bersama-bumn-2025",
  scores: [
    {
      title: "Tes Kemampuan Dasar (TKD)",
      score: "58",
      description: "100 soal logika dasar, verbal, dan numerik; 73 menit.",
    },
    {
      title: "Tes AKHLAK",
      score: "65",
      description: "90 soal core values AKHLAK; 30 menit.",
    },
    {
      title: "Tes Wawasan Kebangsaan",
      score: "50",
      description: "10 soal wawasan kebangsaan; 10 menit.",
    },
  ],
} satisfies PassingGradeProps;
