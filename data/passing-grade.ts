import type { PassingGradeProps } from "@/components/sections/passing-grade";

export const passingGradeHome = {
  title: "Mengenal Konsep Passing Grade",
  description: "Nilai ambang batas SKD CPNS 2024 untuk pelamar kebutuhan umum:",
  note: "Memenuhi passing grade tidak menjamin lanjut ke tahap berikutnya. Peserta juga harus masuk peringkat tertinggi dalam kuota 3 kali jumlah formasi.",
  sourceLabel: "Sumber: Kementerian PANRB, SKD CPNS 2024",
  sourceHref: "https://www.menpan.go.id/site/berita-terkini/134-peserta-cpns-kementerian-panrb-ikuti-skd-menteri-anas-kompetisi-transparan-ciptakan-asn-kompeten-2",
  scores: [
    { title: "Tes Wawasan Kebangsaan (TWK)", score: "65", description: "Fokus pada integritas dan pemahaman pilar negara." },
    { title: "Tes Intelegensia Umum (TIU)", score: "80", description: "Mengukur logika dan kemampuan berpikir rasional." },
    { title: "Tes Karakteristik Pribadi (TKP)", score: "166", description: "Menilai kecocokan perilaku dan karakter kerja." },
  ],
} satisfies PassingGradeProps;
