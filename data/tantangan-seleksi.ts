import type { TantanganSeleksiProps } from "@/components/sections/tantangan-seleksi";

export const tantanganSeleksiHome = (konsultasiUrl: string) =>
  ({
    title: "Kenapa Banyak Peserta Gagal?",
    illustration: "/img/section/berhasil-lolos-bimbel-cpns-pppk-bumn.webp",
    illustrationAlt: "Pria berseragam cokelat menulis pada papan catatan",
    backgroundImage: "/img/section/bg-2-bimbel-cpns-pppk-bumn.webp",
    xIcon: "/img/logo/x-icon-bimbel-cpns-ppk-bumn.webp",
    forbiddenIcon: "/img/logo/forbidden-icon-bimbel-cpns-ppk-bumn.webp",
    reasons: [
      {
        title: "Terlalu Fokus pada Satu Sub-Tes",
        description:
          "Skor tinggi di satu bagian belum cukup jika nilai bagian lain tidak mencapai ambang batas.",
      },
      {
        title: "Gagal Manajemen Waktu",
        description:
          "Waktu ujian CAT terbatas. Terlalu lama mengerjakan satu soal dapat mengurangi kesempatan meraih skor di soal lain.",
      },
    ],
    ctaLabel: "Konsultasi Pola Soal",
    ctaHref: konsultasiUrl,
    closingTitle: "Bersiap untuk Berhasil atau Diam untuk Kegagalan",
    closingDescription:
      "Persaingan seleksi ASN ketat setiap tahun. Persiapan yang terarah membantu Anda menghadapi tahap awal dengan lebih siap.",
    closingPoints: [
      "Lowongan terbatas dibanding jumlah pelamar.",
      "Jenjang karier panjang menjadi daya tarik.",
      "Pilihan formasi tersedia di berbagai instansi.",
      "Banyak peserta mencari kepastian masa depan.",
      "Harapan hidup sejahtera mendorong persaingan.",
    ],
  }) satisfies TantanganSeleksiProps;

export const tantanganSeleksiCpns = (konsultasiUrl: string) =>
  ({
    ...tantanganSeleksiHome(konsultasiUrl),
    title: "Kenapa Banyak Peserta CPNS Gagal?",
    reasons: [
      {
        title: "Gugur di Seleksi Administrasi",
        description:
          "Pada CPNS 2024, 599.528 pelamar dinyatakan tidak memenuhi syarat di seleksi administrasi, sebelum sempat mengikuti SKD. Syarat dan dokumen yang tidak sesuai formasi langsung menggugurkan lamaran.",
      },
      {
        title: "Terlalu Fokus pada Satu Sub-Tes",
        description:
          "TWK, TIU, dan TKP masing-masing punya ambang batas: 65, 80, dan 166. Skor tinggi di satu tes tidak menutupi tes lain yang nilainya di bawah ambang batas.",
      },
      {
        title: "Gagal Manajemen Waktu",
        description:
          "SKD berisi 110 soal yang harus selesai dalam 100 menit. Terlalu lama di satu soal mengurangi kesempatan meraih skor di soal lain.",
      },
      {
        title: "Lolos Passing Grade, tapi Kalah Peringkat",
        description:
          "Hanya peserta yang memenuhi ambang batas dan masuk peringkat 3 kali jumlah formasi yang berhak mengikuti SKB. Nilai akhirnya pun dihitung dari SKD 40% dan SKB 60%, jadi SKB tidak boleh diabaikan.",
      },
    ],
    closingDescription:
      "Pada CPNS 2024, 3.963.832 orang mendaftar untuk memperebutkan 250.407 formasi. Persiapan yang terarah membantu Anda bersaing sejak tahap awal.",
  }) satisfies TantanganSeleksiProps;

export const tantanganSeleksiPppk = (konsultasiUrl: string) =>
  ({
    ...tantanganSeleksiHome(konsultasiUrl),
    title: "Kenapa Banyak Peserta PPPK Gagal?",
    reasons: [
      {
        title: "Mengira Tanpa Passing Grade Berarti Mudah",
        description:
          "Seleksi PPPK 2024 tidak memakai nilai ambang batas. Kelulusan ditentukan oleh peringkat terbaik di formasi yang dilamar, jadi Anda harus mengungguli pelamar lain, bukan sekadar mencapai nilai minimal.",
      },
      {
        title: "Meremehkan Kompetensi Teknis",
        description:
          "Kompetensi teknis berisi 90 dari 145 soal dan menyumbang nilai maksimal 450 dari 670. Materi teknis yang tidak sesuai formasi membuat nilai Anda sulit bersaing.",
      },
      {
        title: "Asal Memilih Jawaban Manajerial dan Sosial Kultural",
        description:
          "Setiap pilihan jawaban soal manajerial, sosial kultural, dan wawancara bernilai 1 sampai 4. Jawaban yang terlihat baik belum tentu memberi nilai tertinggi.",
      },
      {
        title: "Dokumen Syarat Tidak Sesuai",
        description:
          "Pelamar tenaga kesehatan wajib melampirkan STR yang masih berlaku untuk jabatan yang memerlukannya, dan pelamar guru harus memenuhi kualifikasi akademik yang ditetapkan. Dokumen yang tidak sesuai membuat lamaran gugur di seleksi administrasi.",
      },
    ],
    closingDescription:
      "Pada seleksi PPPK 2024 tahap I, 1.357.205 pelamar memenuhi syarat, tetapi hanya 676.482 yang dinyatakan lulus. Persiapan yang terarah membantu Anda bersaing di peringkat formasi.",
  }) satisfies TantanganSeleksiProps;

export const tantanganSeleksiBumn = (konsultasiUrl: string) =>
  ({
    ...tantanganSeleksiHome(konsultasiUrl),
    title: "Kenapa Banyak Peserta BUMN Gagal?",
    reasons: [
      {
        title: "Gugur di Tes Online Tahap 1",
        description:
          "Hanya peserta yang lulus Tes Online Tahap 1, yaitu TKD, AKHLAK, dan Wawasan Kebangsaan, yang berhak mengikuti Tes Online Tahap 2. Gagal di satu tahap berarti langkah Anda berhenti di sana.",
      },
      {
        title: "Meremehkan Tes AKHLAK",
        description:
          "Tes AKHLAK mengukur penerapan nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif dalam situasi kerja. Tes ini menilai sikap, bukan hafalan, jadi pahami cara menerapkan keenam nilai tersebut.",
      },
      {
        title: "Menunda Persiapan Tahap 2",
        description:
          "Tes Bahasa Inggris (kecuali pelamar lulusan SMA/sederajat) dan Learning Agility diujikan di tahap 2. Pada RBB 2025, hasil tahap 1 diumumkan 17 Mei dan tes tahap 2 digelar 20–22 Mei, jadi waktu persiapannya hanya beberapa hari.",
      },
      {
        title: "Mengabaikan Cek Perangkat",
        description:
          "Tes online RBB didahului pengecekan perangkat. Pastikan perangkat dan koneksi Anda siap sebelum hari tes.",
      },
    ],
    closingDescription:
      "Rekrutmen Bersama BUMN 2025 diikuti lebih dari 1,4 juta pendaftar untuk lebih dari 2.000 lowongan di 107 BUMN dan anak perusahaannya. Persiapan yang terarah membantu Anda lolos di setiap tahap.",
    closingPoints: [
      "Lowongan terbatas dibanding jumlah pelamar.",
      "Posisi tersedia di berbagai bidang, dari operasi hingga IT.",
      "Perusahaan tersebar di sektor keuangan, energi, infrastruktur, hingga telekomunikasi.",
      "Jenjang karier panjang menjadi daya tarik.",
      "Harapan hidup sejahtera mendorong persaingan.",
    ],
  }) satisfies TantanganSeleksiProps;
