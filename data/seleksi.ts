import type { SeleksiProps } from "@/components/sections/seleksi";

const imageBase = "/img/section/seleksi-tes-";
const imageSuffix =
  "-bimbel-les-privat-cpns-pppk-bumn-terbaik-di-indonesia.webp";

export const seleksiCpns = {
  title: "Pahami Tahapan Seleksi & Sistem Penilaian Resmi CPNS",
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
          description: "Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan Bahasa Negara.",
          image: `${imageBase}twk${imageSuffix}`,
        },
        {
          title: "TIU",
          description: "Kemampuan Verbal, Numerik, dan Figural.",
          image: `${imageBase}tiu${imageSuffix}`,
        },
        {
          title: "TKP",
          description: "Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, dan Anti Radikalisme.",
          image: `${imageBase}tkp${imageSuffix}`,
        },
      ],
    },
    {
      title: "SKB (Seleksi Kompetensi Bidang)",
      description:
        "Menilai kesesuaian kompetensi bidang pelamar dengan kebutuhan jabatan. Pelamar yang lulus SKD mengikuti SKB.",
      tests: [
        {
          title: "SKB dengan CAT BKN",
          description:
            "Wajib di instansi pusat dan daerah. Materi untuk jabatan fungsional disusun instansi pembina jabatan dan masuk ke bank soal CAT BKN.",
          image: `${imageBase}teknis${imageSuffix}`,
        },
        {
          title: "SKB Tambahan",
          description:
            "Dapat berupa antara lain psikotes, tes bahasa asing, tes kesamaptaan, tes praktik kerja, wawancara, atau tes lain sesuai persyaratan jabatan. Instansi pusat dapat menambah paling banyak 3 jenis tes dengan persetujuan Menteri PANRB. Instansi daerah paling banyak 1 jenis tes untuk jabatan yang sangat teknis, dan tes itu bukan wawancara.",
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
        "Pada seleksi 2024, berisi 145 soal termasuk 10 soal wawancara (100 soal untuk jabatan Pengelola Umum Operasional). Kompetensi teknis, manajerial, dan sosial kultural dikerjakan dalam 120 menit, lalu wawancara berbasis komputer dalam 10 menit.",
      tests: [
        {
          title: "Kompetensi Teknis",
          description:
            "90 soal (45 soal untuk jabatan Pengelola Umum Operasional) tentang pengetahuan, keterampilan, dan sikap yang spesifik sesuai bidang jabatan yang dilamar. Pelamar guru dengan sertifikat pendidik yang linear dan terdaftar di pangkalan data kementerian mendapat nilai teknis maksimal.",
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

export const seleksiBumn = {
  title: "Pahami Tahapan Seleksi & Sistem Penilaian Rekrutmen Bersama BUMN",
  description:
    "Rekrutmen Bersama BUMN (RBB) diselenggarakan Kementerian BUMN bersama Forum Human Capital Indonesia (FHCI). Pada RBB 2025, peserta yang lolos seleksi administrasi mengikuti dua tahap tes online, lalu tes lanjutan di BUMN yang dilamar.",
  stages: [
    {
      title: "Tes Online Tahap 1",
      description:
        "Setiap tes punya nilai ambang batas yang harus dipenuhi untuk lanjut ke tahap 2.",
      tests: [
        {
          title: "Tes Kemampuan Dasar (TKD)",
          description: "100 soal logika dasar, verbal, dan numerik dalam 73 menit.",
          image: `${imageBase}tiu${imageSuffix}`,
        },
        {
          title: "Tes AKHLAK",
          description:
            "90 soal tentang perilaku dan pemahaman nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif dalam 30 menit.",
          image: `${imageBase}tkp${imageSuffix}`,
        },
        {
          title: "Tes Wawasan Kebangsaan",
          description:
            "10 soal tentang nilai kebangsaan, Pancasila, konstitusi, sejarah perjuangan bangsa, dan Bhinneka Tunggal Ika dalam 10 menit.",
          image: `${imageBase}twk${imageSuffix}`,
        },
      ],
    },
    {
      title: "Tes Online Tahap 2",
      description: "Diikuti peserta yang lulus Tes Online Tahap 1.",
      tests: [
        {
          title: "Tes Bahasa Inggris",
          description:
            "Mengukur kemampuan berbahasa Inggris. Pelamar lulusan SMA/sederajat tidak mengikuti tes ini.",
          image: `${imageBase}teknis${imageSuffix}`,
        },
        {
          title: "Learning Agility",
          description:
            "Mengukur kemampuan belajar, beradaptasi, dan berkembang dalam situasi kerja yang baru dan kompleks.",
          image: `${imageBase}tiu${imageSuffix}`,
        },
      ],
    },
    {
      title: "Tes Kemampuan Bidang (TKB)",
      description: "Diselenggarakan oleh masing-masing BUMN yang dilamar.",
      tests: [
        {
          title: "Psikotes, Wawancara & Tes Kesehatan",
          description:
            "Jenis tes lanjutan ditentukan oleh BUMN yang dilamar sesuai kebutuhan posisinya.",
          image: `${imageBase}wawancara${imageSuffix}`,
        },
      ],
    },
  ],
} satisfies SeleksiProps;
