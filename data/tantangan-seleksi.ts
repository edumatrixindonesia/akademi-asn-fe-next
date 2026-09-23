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
      "Persaingan seleksi ASN ketat setiap tahun. Persiapan yang terarah membantu kamu menghadapi tahap awal dengan lebih siap.",
    closingPoints: [
      "Lowongan terbatas dibanding jumlah pelamar.",
      "Jenjang karier panjang menjadi daya tarik.",
      "Pilihan formasi tersedia di berbagai instansi.",
      "Banyak peserta mencari kepastian masa depan.",
      "Harapan hidup sejahtera mendorong persaingan.",
    ],
  }) satisfies TantanganSeleksiProps;
