import type { SeleksiProps } from "@/components/sections/seleksi";

const imageBase = "/img/section/seleksi-tes-";
const imageSuffix =
  "-bimbel-les-privat-cpns-pppk-bumn-terbaik-di-indonesia.webp";

export const seleksiHome = {
  title: "Pahami Tahapan Seleksi & Sistem Penilaian Resmi CPNS & PPPK",
  description:
    "Menghadapi seleksi ASN bukan hanya soal menguasai materi, tapi memahami peta persaingan. Strategi belajar yang tepat dimulai dari pemahaman alur tes dan ambang batas nilai (Passing Grade).",
  stages: [
    {
      title: "SKD (Seleksi Kompetensi Dasar)",
      description:
        "Tes pertama menggunakan sistem CAT untuk mengukur kemampuan dasar.",
      tests: [
        {
          title: "TWK",
          description: "Nasionalisme, Integritas, Bela Negara, Pilar Negara.",
          image: `${imageBase}twk${imageSuffix}`,
        },
        {
          title: "TIU",
          description: "Kemampuan Verbal, Numerik, dan Figural.",
          image: `${imageBase}tiu${imageSuffix}`,
        },
        {
          title: "TKP",
          description: "Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK.",
          image: `${imageBase}tkp${imageSuffix}`,
        },
      ],
    },
    {
      title: "SKB (Seleksi Kompetensi Bidang)",
      description:
        "Menguji kemampuan spesifik sesuai dengan jabatan atau formasi yang dilamar.",
      tests: [
        {
          title: "Tes Teknis",
          description: "Materi substansi jabatan menggunakan sistem CAT.",
          image: `${imageBase}teknis${imageSuffix}`,
        },
        {
          title: "Wawancara",
          description:
            "Menguji kompetensi teknis, mental, integritas, dan motivasi peserta.",
          image: `${imageBase}wawancara${imageSuffix}`,
        },
      ],
    },
  ],
} satisfies SeleksiProps;

export const seleksiPppk = {
  title: "Pahami Tahapan Seleksi & Sistem Penilaian Resmi PPPK",
  description:
    "Seleksi PPPK hanya terdiri dari dua tahap: seleksi administrasi dan seleksi kompetensi. Tidak ada SKD dan SKB seperti pada CPNS. Seleksi kompetensi dikerjakan dengan CAT BKN, dan kelulusannya ditentukan oleh peringkat terbaik.",
  stages: [
    {
      title: "Seleksi Kompetensi (CAT BKN)",
      description:
        "Pada seleksi 2024, berisi 145 soal (100 soal untuk jabatan Pengelola Umum Operasional). Kompetensi teknis, manajerial, dan sosial kultural dikerjakan dalam 120 menit, lalu wawancara berbasis komputer dalam 10 menit.",
      tests: [
        {
          title: "Kompetensi Teknis",
          description:
            "90 soal tentang pengetahuan, keterampilan, dan sikap yang spesifik sesuai bidang jabatan yang dilamar. Pelamar guru dengan sertifikat pendidik yang linear mendapat nilai teknis maksimal.",
          image: `${imageBase}teknis${imageSuffix}`,
        },
        {
          title: "Kompetensi Manajerial",
          description:
            "25 soal tentang komitmen, kemampuan, dan perilaku individu dalam berorganisasi.",
          image: `${imageBase}tkp${imageSuffix}`,
        },
        {
          title: "Kompetensi Sosial Kultural",
          description:
            "20 soal tentang pengalaman berinteraksi dengan masyarakat majemuk, wawasan kebangsaan, etika, dan nilai-nilai.",
          image: `${imageBase}twk${imageSuffix}`,
        },
        {
          title: "Wawancara Berbasis Komputer",
          description:
            "10 soal yang menilai integritas dan moralitas: kejujuran, komitmen, keadilan, etika, dan kepatuhan.",
          image: `${imageBase}wawancara${imageSuffix}`,
        },
      ],
    },
  ],
} satisfies SeleksiProps;
