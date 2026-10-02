import type { Artikel } from "@/lib/artikel-schema";

// Newest first once there are published Artikel; each slug needs a body at
// data/artikel/{slug}.mdx (lib/artikel.ts fails the build otherwise).
export const artikel = [
  {
    slug: "perbedaan-cpns-dan-pppk",
    title: "Perbedaan CPNS dan PPPK: Status, Hak, dan Syarat",
    description:
      "Apa perbedaan CPNS dan PPPK? Bandingkan status, masa kerja, batas usia melamar, jaminan pensiun, dan jenis seleksinya menurut UU ASN 2023.",
    excerpt:
      "Perbedaan CPNS dan PPPK ada pada status, masa kerja, syarat usia, dan jaminan pensiun. Pahami keduanya sebelum memilih jalur seleksi.",
    kategori: "tips-info",
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-10-02",
    focusKeyword: "perbedaan cpns dan pppk",
    references: [
      {
        title: "Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara",
        url: "https://peraturan.bpk.go.id/Details/269470/uu-no-20-tahun-2023",
        publisher: "JDIH BPK",
        accessedAt: "2026-10-02",
      },
      {
        title: "Peraturan Pemerintah Nomor 11 Tahun 2017 tentang Manajemen Pegawai Negeri Sipil",
        url: "https://peraturan.go.id/id/pp-no-11-tahun-2017",
        publisher: "Peraturan.go.id",
        accessedAt: "2026-10-02",
      },
      {
        title: "Peraturan Pemerintah Nomor 49 Tahun 2018 tentang Manajemen PPPK",
        url: "https://peraturan.bpk.go.id/Details/99181/pp-no-49-tahun-2018",
        publisher: "JDIH BPK",
        accessedAt: "2026-10-02",
      },
      {
        title: "Gaji, Tunjangan, dan Fasilitas PNS",
        url: "https://apps-denpasar.bkn.go.id/kms/ensiklopedia:penggajian_tunjangan_dan_fasilitas_pns",
        publisher: "BKN",
        accessedAt: "2026-10-02",
      },
      {
        title: "3 Juta Pelamar CPNS 2024 Berkompetisi di Tahap SKD",
        url: "https://www.bkn.go.id/3-juta-pelamar-cpns-2024-berkompetisi-di-tahap-skd/",
        publisher: "BKN",
        accessedAt: "2026-10-02",
      },
      {
        title: "Hasil Akhir Seleksi PPPK Tahap II, Pelamar Dapat Cek Pengumuman Instansi Secara Berkala",
        url: "https://www.bkn.go.id/storage/2025/06/SIARAN-PERS-022_RILIS_BKN_VI_2025-17-Juni-2025.pdf",
        publisher: "BKN",
        accessedAt: "2026-10-02",
      },
      {
        title: "Menyoal Berakhirnya Masa Perjanjian Kerja PPPK di UU ASN",
        url: "https://www.mkri.id/berita/menyoal-berakhirnya-masa-perjanjian-kerja-pppk-di-uu-asn-24790",
        publisher: "Mahkamah Konstitusi",
        accessedAt: "2026-10-02",
      },
      {
        title: "TASPEN Desak Regulasi Jaminan Pensiun bagi PPPK Segera Diterbitkan",
        url: "https://rri.co.id/info-parlemen/2553397/taspen-desak-regulasi-jaminan-pensiun-bagi-pppk-segera-diterbitkan",
        publisher: "RRI",
        accessedAt: "2026-10-02",
      },
      {
        title: "DPR Dorong Regulasi Jaminan Pensiun untuk PPPK",
        url: "https://www.pantau.com/nasional/352358/dpr-dorong-regulasi-jaminan-pensiun-untuk-pppk",
        publisher: "Pantau",
        accessedAt: "2026-10-02",
      },
    ],
  },
  // Permanent fixture: renders under `bun dev` only and exercises the page
  // for tests and review. It holds no real claims.
  {
    slug: "draft-artikel-contoh",
    title: "Draft Artikel Contoh",
    description:
      "Artikel contoh berstatus draft untuk menguji tampilan halaman Artikel Akademi ASN. Isinya tidak memuat data seleksi dan tidak pernah terbit di situs.",
    excerpt:
      "Artikel contoh untuk menguji halaman Artikel; isinya bukan informasi seleksi.",
    kategori: "tips-info",
    penulis: "tim-akademi-asn",
    status: "draft",
    focusKeyword: "draft artikel contoh",
    cover: {
      src: "/img/section/og-bimbel-cpns-pppk-bumn-terbaik-akademi-asn.jpeg",
      alt: "Gambar sampul contoh Artikel Akademi ASN",
    },
    references: [
      {
        title: "Badan Kepegawaian Negara",
        url: "https://www.bkn.go.id/",
        publisher: "BKN",
        accessedAt: "2026-10-01",
      },
    ],
  },
] satisfies Artikel[];
