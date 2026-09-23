import type { SeleksiProps } from "@/components/sections/seleksi";

const imageBase = "/assets/img/seleksi/seleksi-tes-";
const imageSuffix = "-bimbel-les-privat-cpns-pppk-bumn-terbaik-di-indonesia.webp";

export const seleksiHome = {
  title: "Pahami Tahapan Seleksi & Sistem Penilaian Resmi CPNS & PPPK",
  description:
    "Menghadapi seleksi ASN bukan hanya soal menguasai materi, tapi memahami peta persaingan. Strategi belajar yang tepat dimulai dari pemahaman alur tes dan ambang batas nilai (Passing Grade).",
  stages: [
    {
      title: "SKD (Seleksi Kompetensi Dasar)",
      description: "Tes pertama menggunakan sistem CAT untuk mengukur kemampuan dasar.",
      tests: [
        { title: "TWK", description: "Nasionalisme, Integritas, Bela Negara, Pilar Negara.", image: `${imageBase}twk${imageSuffix}` },
        { title: "TIU", description: "Kemampuan Verbal, Numerik, dan Figural.", image: `${imageBase}tiu${imageSuffix}` },
        { title: "TKP", description: "Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK.", image: `${imageBase}tkp${imageSuffix}` },
      ],
    },
    {
      title: "SKB (Seleksi Kompetensi Bidang)",
      description: "Menguji kemampuan spesifik sesuai dengan jabatan atau formasi yang dilamar.",
      tests: [
        { title: "Tes Teknis", description: "Materi substansi jabatan menggunakan sistem CAT.", image: `${imageBase}teknis${imageSuffix}` },
        { title: "Wawancara", description: "Menguji kompetensi teknis, mental, integritas, dan motivasi peserta.", image: `${imageBase}wawancara${imageSuffix}` },
      ],
    },
  ],
} satisfies SeleksiProps;
