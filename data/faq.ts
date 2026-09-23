import type { FaqProps } from "@/components/sections/faq";

export const faqHome = {
  title: "Pertanyaan yang Sering Diajukan",
  icon: "/img/logo/faq-question-icon-bimbel-cpns-ppk-bumn.webp",
  items: [
    {
      question: "Apa Kelebihan Bimbel Akademi ASN by Edumatrix?",
      answer:
        "Dibimbing tutor berpengalaman dan mendapat drilling soal serta Try Out yang akurat, untuk pembelajaran online akan mendapatkan E-book soal dan pembahasan serta recording selama proses pembelajaran.",
    },
    {
      question: "Bagaimana cara mendaftar Bimbel CPNS, PPPK & BUMN?",
      answer:
        "Bisa langsung menghubungi kontak Admin kami yang tertera di Website, maupun datang langsung ke kantor Edumatrix Indonesia untuk konfirmasi pendaftaran.",
    },
    {
      question: "Apa Saja Urutan nilai dari materi SKD?",
      answer:
        "Tes Karakteristik Pribadi (TKP) passing grade 166 (minimal 34 soal mendapatkan 5 poin), Tes Intelegensia Umum (TIU) passing grade 80 (minimal 13 dari 30 soal benar), dan Tes Wawasan Kebangsaan (TWK) passing grade 65 (minimal 16 dari 35 soal benar).",
    },
  ],
} satisfies FaqProps;
