import type { Artikel } from "@/lib/artikel-schema";

// Newest first once there are published Artikel; each slug needs a body at
// data/artikel/{slug}.mdx (lib/artikel.ts fails the build otherwise).
export const artikel = [
  {
    slug: "gaji-pppk",
    title: "Rincian Gaji PPPK Golongan I hingga XVII beserta Tunjangannya",
    description:
      "Gaji PPPK menurut Perpres 11/2024 berkisar Rp1.938.500 hingga Rp7.329.000 sebelum tunjangan. Cek tabel golongan, tunjangan, THR, dan gaji ke-13.",
    excerpt:
      "Gaji PPPK ditentukan oleh golongan dan masa kerja golongan. Besarannya mulai Rp1.938.500 di golongan I hingga Rp7.329.000 di golongan XVII, belum termasuk tunjangan.",
    kategori: ["karier"],
    examTrack: ["pppk"],
    cover: {
      src: "/img/blog/cover-gaji-pppk.jpg",
      alt: "Gaji PPPK: gaji per golongan dan tunjangan dari Akademi ASN",
    },
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-11-05",
    focusKeyword: "gaji pppk",
    related: ["pppk-paruh-waktu-jadi-penuh-waktu", "perbedaan-cpns-dan-pppk"],
    references: [
      {
        title:
          "Peraturan Presiden Nomor 98 Tahun 2020 tentang Gaji dan Tunjangan Pegawai Pemerintah dengan Perjanjian Kerja",
        url: "https://peraturan.bpk.go.id/Details/147306/perpres-no-98-tahun-2020",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Presiden Nomor 11 Tahun 2024 tentang Perubahan atas Peraturan Presiden Nomor 98 Tahun 2020 tentang Gaji dan Tunjangan Pegawai Pemerintah dengan Perjanjian Kerja",
        url: "https://peraturan.bpk.go.id/Details/276756/perpres-no-11-tahun-2024",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Golongan Gaji Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) Berdasarkan Kep Menpan RB Nomor 94 Tahun 2025",
        url: "https://bkpsdm.madiunkota.go.id/list/45",
        publisher: "BKPSDM Kota Madiun",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Pemerintah Nomor 9 Tahun 2026 tentang Pemberian Tunjangan Hari Raya dan Gaji Ketiga Belas kepada Aparatur Negara, Pensiunan, Penerima Pensiun, dan Penerima Tunjangan Tahun 2026",
        url: "https://peraturan.bpk.go.id/Details/345732/pp-no-9-tahun-2026",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara",
        url: "https://peraturan.bpk.go.id/Details/269470/uu-no-20-tahun-2023",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Menteri PANRB Nomor 9 Tahun 2026 tentang Pegawai Pemerintah dengan Perjanjian Kerja Paruh Waktu",
        url: "https://peraturan.bpk.go.id/Details/351339/permen-panrb-no-9-tahun-2026",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Keputusan Menteri PANRB Nomor 16 Tahun 2025 tentang Pegawai Pemerintah dengan Perjanjian Kerja Paruh Waktu",
        url: "https://jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-16-tahun-2025-tentang-1990",
        publisher: "JDIH Kementerian PANRB",
        accessedAt: "2026-11-05",
      },
    ],
  },
  {
    slug: "cpns-2027",
    title: "Seputar CPNS 2027 dari Jadwal Pendaftaran hingga Syarat Pelamar",
    description:
      "CPNS 2027 kapan dibuka? Menteri PANRB pada 18 Agustus 2026 memperkirakan pendaftaran awal 2027. Cek status CPNS 2026, syarat, dan cara menghindari hoaks.",
    excerpt:
      "Pada 18 Agustus 2026, Menteri PANRB memperkirakan pendaftaran CPNS 2027 dibuka awal 2027. Per 5 November 2026, jadwal, formasi, dan syaratnya belum ada di SSCASN.",
    kategori: ["informasi"],
    examTrack: ["cpns"],
    cover: {
      src: "/img/blog/cover-cpns-2027.jpg",
      alt: "CPNS 2027: jadwal pendaftaran dan syarat pelamar dari Akademi ASN",
    },
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-10-20",
    updatedAt: "2026-11-05",
    focusKeyword: "cpns 2027",
    related: [
      "pppk-paruh-waktu-jadi-penuh-waktu",
      "perbedaan-cpns-dan-pppk",
      "materi-tkp-cpns",
    ],
    references: [
      {
        title:
          "Press Release: Mulai 2027, Pemerintah Buka Jalan Lebih Jelas bagi Karier Guru PPPK",
        url: "https://www.kemendikdasmen.go.id/siaran-pers/16055-mulai-2027-pemerintah-buka-jalan-lebih-jelas-bagi-karier-guru-pppk",
        publisher: "Kemendikdasmen",
        accessedAt: "2026-11-05",
      },
      {
        title: "Siap-siap Rekrutmen PNS! Menteri PANRB: Pendaftaran Awal 2027",
        url: "https://www.cnbcindonesia.com/news/20260818201826-4-760436/siap-siap-rekrutmen-pns-menteri-panrb-pendaftaran-awal-2027",
        publisher: "CNBC Indonesia",
        accessedAt: "2026-11-05",
      },
      {
        title: "SSCASN - Sistem Seleksi Calon Aparatur Sipil Negara",
        url: "https://sscasn.bkn.go.id/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Penataan Guru Jadi Fokus Pemerintah, Kepastian Status Disiapkan Mulai 2027",
        url: "https://www.kemendikdasmen.go.id/siaran-pers/16271-penataan-guru-jadi-fokus-pemerintah-kepastian-status-disiapkan-mulai-2027",
        publisher: "Kemendikdasmen",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Pemerintah Siapkan Aturan PPPK Paruh Waktu Jadi PPPK, Tak Bisa Langsung Jadi PNS",
        url: "https://surabaya.kompas.com/read/2026/10/19/071219578/pemerintah-siapkan-aturan-pppk-paruh-waktu-jadi-pppk-tak-bisa-langsung-jadi",
        publisher: "Kompas.com",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Menteri PANRB Nomor 6 Tahun 2024 tentang Pengadaan Pegawai Aparatur Sipil Negara",
        url: "https://jdih.menpan.go.id/dokumen-hukum/peraturan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-6-tahun-2024-tentang-p-1849",
        publisher: "JDIH Kementerian PANRB",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Karo Komlik BKN: Wisudo Putro Nugroho: Poster Pembukaan CPNS 2026 yang Beredar Dipastikan HOAKS",
        url: "https://www.bkn.go.id/karo-komlik-bkn-wisudo-putro-nugroho-poster-pembukaan-cpns-2026-yang-beredar-dipastikan-hoaks/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Lowongan CPNS Kemenag 2026 Belum Dibuka, Masyarakat Diminta Waspadai Info dan Link Rekrutmen Palsu",
        url: "https://cahaya.kompas.com/aktual/26J10221814590/kemenag-belum-buka-lowongan-cpns-2026-masyarakat-diminta-waspadai-info-dan-link",
        publisher: "Kompas.com",
        accessedAt: "2026-11-05",
      },
      {
        title: "Pemerintah Siapkan 4.770 Kebutuhan CPNS Sekolah Kedinasan 2026",
        url: "https://www.menpan.go.id/site/berita-terkini/pemerintah-siapkan-4-770-kebutuhan-cpns-sekolah-kedinasan-2026",
        publisher: "Kementerian PANRB",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Kepala BKN: Pantau Jadwalnya, Pendaftaran Seleksi Sekolah Kedinasan Tahun 2026 Dimulai 18 Agustus",
        url: "https://www.bkn.go.id/kepala-bkn-pantau-jadwalnya-pendaftaran-seleksi-sekolah-kedinasan-tahun-2026-dimulai-18-agustus/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Keputusan Menteri PANRB Nomor 321 Tahun 2024 tentang Nilai Ambang Batas SKD Pengadaan PNS Tahun Anggaran 2024",
        url: "https://jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-321-tahun-2024-tentang-1851",
        publisher: "JDIH Kementerian PANRB",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Beredar Informasi Seleksi Kemenkes 2026, Prof. Zudan: Itu Hoaks, Rekrutmen ASN Terintegrasi dan Diawasi BKN",
        url: "https://www.bkn.go.id/beredar-informasi-seleksi-kemenkes-2026-prof-zudan-itu-hoaks-rekrutmen-asn-terintegrasi-dan-diawasi-bkn/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
    ],
  },
  {
    slug: "pppk-paruh-waktu-jadi-penuh-waktu",
    title: "Begini Cara PPPK Paruh Waktu Jadi Penuh Waktu dan Jadwalnya",
    description:
      "PPPK paruh waktu jadi penuh waktu diatur Permen PANRB 9/2026. Guru direncanakan diangkat otomatis mulai 1 Januari 2027. Cek tahapan dan jalur non-guru.",
    excerpt:
      "PPPK paruh waktu jadi penuh waktu bisa lewat usulan instansi atau seleksi. Khusus guru, pemerintah menyiapkan pengangkatan otomatis mulai 1 Januari 2027.",
    kategori: ["karier"],
    examTrack: ["pppk"],
    cover: {
      src: "/img/blog/cover-pppk-paruh-waktu-jadi-penuh-waktu.jpg",
      alt: "PPPK paruh waktu: jalur jadi PPPK penuh waktu dari Akademi ASN",
    },
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-10-16",
    updatedAt: "2026-11-05",
    focusKeyword: "pppk paruh waktu jadi penuh waktu",
    related: ["perbedaan-cpns-dan-pppk"],
    references: [
      {
        title:
          "Peraturan Menteri PANRB Nomor 9 Tahun 2026 tentang Pegawai Pemerintah dengan Perjanjian Kerja Paruh Waktu",
        url: "https://peraturan.bpk.go.id/Details/351339/permen-panrb-no-9-tahun-2026",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Penataan Guru Jadi Fokus Pemerintah, Kepastian Status Disiapkan Mulai 2027",
        url: "https://www.kemendikdasmen.go.id/siaran-pers/16271-penataan-guru-jadi-fokus-pemerintah-kepastian-status-disiapkan-mulai-2027",
        publisher: "Kemendikdasmen",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Kepala BKN: Dari 2.722, hanya 384 yang Keluar Dari ASN, Mayoritas Beralih Status dari PPPK Paruh Waktu menjadi PPPK",
        url: "https://www.bkn.go.id/kepala-bkn-dari-2-722-hanya-384-yang-keluar-dari-asn-mayoritas-beralih-status-dari-pppk-paruh-waktu-menjadi-pppk/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
    ],
  },
  {
    slug: "materi-tkp-cpns",
    title: "Memahami 6 Aspek Materi TKP CPNS dan Cara Penilaiannya",
    description:
      "Materi TKP CPNS mencakup enam aspek, dari pelayanan publik hingga anti-radikalisme. Pahami sistem nilai 1–5 dan ambang batas TKP CPNS 2024.",
    excerpt:
      "Materi TKP CPNS menguji enam aspek, dari pelayanan publik hingga anti-radikalisme. Pelajari isi tiap aspek, cara penilaian, dan ambang batasnya.",
    kategori: ["materi", "latihan-soal"],
    examTrack: ["cpns"],
    cover: {
      src: "/img/blog/cover-materi-tkp-cpns.jpg",
      alt: "Materi TKP CPNS: 6 aspek dan sistem penilaian dari Akademi ASN",
    },
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-10-15",
    updatedAt: "2026-11-05",
    focusKeyword: "materi tkp cpns",
    related: ["perbedaan-cpns-dan-pppk"],
    references: [
      {
        title:
          "Keputusan Menteri PANRB Nomor 321 Tahun 2024 tentang Nilai Ambang Batas Seleksi Kompetensi Dasar Pengadaan Pegawai Negeri Sipil Tahun Anggaran 2024",
        url: "https://jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-321-tahun-2024-tentang-1851",
        publisher: "JDIH Kementerian PANRB",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Keputusan Menteri PANRB Nomor 406 Tahun 2026 tentang Nilai Ambang Batas Seleksi Kompetensi Dasar Seleksi Penerimaan Peserta Didik Sekolah Kedinasan Tahun 2026",
        url: "https://jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-406-tahun-2026-tentang-2121",
        publisher: "JDIH Kementerian PANRB",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Karo Komlik BKN: Wisudo Putro Nugroho: Poster Pembukaan CPNS 2026 yang Beredar Dipastikan HOAKS",
        url: "https://www.bkn.go.id/karo-komlik-bkn-wisudo-putro-nugroho-poster-pembukaan-cpns-2026-yang-beredar-dipastikan-hoaks/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Kemenag Tegaskan Belum Buka Pengadaan CPNS 2026, Publik Diimbau Waspada Informasi Palsu",
        url: "https://kemenag.go.id/nasional/kemenag-tegaskan-belum-buka-pengadaan-cpns-2026-publik-diimbau-waspada-informasi-palsu-6I5hY",
        publisher: "Kementerian Agama",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Lowongan CPNS Kemenag 2026 Belum Dibuka, Masyarakat Diminta Waspadai Info dan Link Rekrutmen Palsu",
        url: "https://cahaya.kompas.com/aktual/26J10221814590/kemenag-belum-buka-lowongan-cpns-2026-masyarakat-diminta-waspadai-info-dan-link",
        publisher: "Kompas.com",
        accessedAt: "2026-11-05",
      },
    ],
  },
  {
    slug: "rekrutmen-bersama-bumn-2026",
    title: "Menanti Rekrutmen Bersama BUMN 2026 dan Cara Mempersiapkannya",
    description:
      "Rekrutmen Bersama BUMN 2026 belum diumumkan BP BUMN per November 2026. Cek alur seleksi RBB 2025 dan cara mengenali link pendaftaran palsu.",
    excerpt:
      "Rekrutmen Bersama BUMN 2026 belum diumumkan Badan Pengaturan BUMN (BP BUMN) per 5 November 2026. Pelajari alur Rekrutmen Bersama BUMN 2025 sebagai acuan dan kenali tautan pendaftaran palsu.",
    kategori: ["informasi", "tips"],
    examTrack: ["bumn"],
    cover: {
      src: "/img/blog/cover-rekrutmen-bersama-bumn-2026.jpg",
      alt: "Rekrutmen Bersama BUMN 2026: status pendaftaran dan cara bersiap dari Akademi ASN",
    },
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-10-13",
    updatedAt: "2026-11-05",
    focusKeyword: "rekrutmen bersama bumn 2026",
    references: [
      {
        title: "Rilis dan Pernyataan",
        url: "https://bumn.go.id/publikasi/berita/rilis",
        publisher: "Badan Pengaturan BUMN",
        accessedAt: "2026-11-05",
      },
      {
        title: "Karir dan Magang BUMN",
        url: "https://bumn.go.id/peluang/karir/karir-bumn",
        publisher: "Badan Pengaturan BUMN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Pengumuman penutupan seluruh proses seleksi Rekrutmen Bersama BUMN 2025",
        url: "https://www.instagram.com/fhci.bumn/p/DOaJszXkdC6/",
        publisher: "Forum Human Capital Indonesia (Instagram @fhci.bumn)",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Rekrutmen Bersama BUMN 2025 Resmi Dibuka, Lebih Inklusif Merangkul Disabilitas Hingga Semua Suku di Nusantara",
        url: "https://bumn.go.id/publikasi/berita/rilis/detail/67f5f71ed5c0d",
        publisher: "Badan Pengaturan BUMN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Kabar Gembira, Rekrutmen Bersama BUMN (RBB) Tahun 2024, akan Segera Dibuka",
        url: "https://bumn.go.id/index.php/publikasi/berita/rilis/detail/65cd8686b397c",
        publisher: "Badan Pengaturan BUMN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Undang-Undang Nomor 16 Tahun 2025 tentang Perubahan Keempat atas Undang-Undang Nomor 19 Tahun 2003 tentang BUMN",
        url: "https://peraturan.bpk.go.id/Details/330668/uu-no-16-tahun-2025",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Presiden Nomor 105 Tahun 2025 tentang Badan Pengaturan Badan Usaha Milik Negara",
        url: "https://peraturan.bpk.go.id/Details/334645/perpres-no-105-tahun-2025",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Danantara Indonesia in Numbers: State-Owned Enterprises Transformation",
        url: "https://www.danantaraindonesia.co.id/",
        publisher: "Danantara Indonesia",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Pendaftaran dan Job Apply Rekrutmen Bersama BUMN (RBB) 2025 resmi ditutup",
        url: "https://www.instagram.com/fhci.bumn/p/DHZLQL6TGyL/",
        publisher: "Forum Human Capital Indonesia (Instagram @fhci.bumn)",
        accessedAt: "2026-11-05",
      },
      {
        title: "[HOAKS] Tautan Rekrutmen Bersama BUMN 2026",
        url: "https://diskominfo.lamongankab.go.id/posting/50183",
        publisher: "Diskominfo Kabupaten Lamongan",
        accessedAt: "2026-11-05",
      },
      {
        title: "[HOAKS] Lowongan Pekerjaan BUMN 2026",
        url: "https://jalahoaks.jakarta.go.id/detail/Hoaks-Lowongan-Pekerjaan-BUMN-2026",
        publisher: "Jala Hoaks Jakarta",
        accessedAt: "2026-11-05",
      },
      {
        title: "RDAP domain fhcibumn.id",
        url: "https://rdap.pandi.id/rdap/domain/fhcibumn.id",
        publisher: "PANDI",
        accessedAt: "2026-11-05",
      },
      {
        title: "ParkingCrew: domain monetization platform",
        url: "https://www.parkingcrew.com/",
        publisher: "ParkingCrew",
        accessedAt: "2026-11-05",
      },
    ],
  },
  {
    slug: "perbedaan-cpns-dan-pppk",
    title: "Mengenal Perbedaan CPNS dan PPPK dari Status hingga Hak Kerja",
    description:
      "Apa perbedaan CPNS dan PPPK? Bandingkan status, masa kerja, batas usia melamar, jaminan pensiun, dan jenis seleksinya menurut sumber resmi.",
    excerpt:
      "Perbedaan CPNS dan PPPK ada pada status, masa kerja, dan syarat usia melamar. Pahami juga aturan jaminan pensiun PPPK sebelum memilih jalur seleksi.",
    kategori: ["informasi"],
    examTrack: ["cpns", "pppk"],
    cover: {
      src: "/img/blog/cover-perbedaan-cpns-dan-pppk.jpg",
      alt: "Perbedaan CPNS dan PPPK: status, masa kerja, dan syarat usia melamar dari Akademi ASN",
    },
    penulis: "dimas-maulana",
    status: "published",
    publishedAt: "2026-10-02",
    updatedAt: "2026-11-05",
    focusKeyword: "perbedaan cpns dan pppk",
    references: [
      {
        title:
          "Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara",
        url: "https://peraturan.bpk.go.id/Details/269470/uu-no-20-tahun-2023",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Pemerintah Nomor 11 Tahun 2017 tentang Manajemen Pegawai Negeri Sipil",
        url: "https://peraturan.go.id/id/pp-no-11-tahun-2017",
        publisher: "Peraturan.go.id",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Pemerintah Nomor 17 Tahun 2020 tentang Perubahan atas Peraturan Pemerintah Nomor 11 Tahun 2017 tentang Manajemen Pegawai Negeri Sipil",
        url: "https://peraturan.go.id/id/pp-no-17-tahun-2020",
        publisher: "Peraturan.go.id",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Pemerintah Nomor 49 Tahun 2018 tentang Manajemen PPPK",
        url: "https://peraturan.bpk.go.id/Details/99181/pp-no-49-tahun-2018",
        publisher: "JDIH BPK",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Peraturan Pemerintah Nomor 7 Tahun 1977 tentang Peraturan Gaji Pegawai Negeri Sipil",
        url: "https://jdih.kemenkeu.go.id/dok/pp-7-tahun-1977",
        publisher: "JDIH Kemenkeu",
        accessedAt: "2026-11-05",
      },
      {
        title: "3 Juta Pelamar CPNS 2024 Berkompetisi di Tahap SKD",
        url: "https://www.bkn.go.id/3-juta-pelamar-cpns-2024-berkompetisi-di-tahap-skd/",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "Hasil Akhir Seleksi PPPK Tahap II, Pelamar Dapat Cek Pengumuman Instansi Secara Berkala",
        url: "https://www.bkn.go.id/storage/2025/06/SIARAN-PERS-022_RILIS_BKN_VI_2025-17-Juni-2025.pdf",
        publisher: "BKN",
        accessedAt: "2026-11-05",
      },
      {
        title:
          "TASPEN Desak Regulasi Jaminan Pensiun bagi PPPK Segera Diterbitkan",
        url: "https://rri.co.id/info-parlemen/2553397/taspen-desak-regulasi-jaminan-pensiun-bagi-pppk-segera-diterbitkan",
        publisher: "RRI",
        accessedAt: "2026-11-05",
      },
      {
        title: "DPR Dorong Regulasi Jaminan Pensiun untuk PPPK",
        url: "https://www.pantau.com/nasional/352358/dpr-dorong-regulasi-jaminan-pensiun-untuk-pppk",
        publisher: "Pantau",
        accessedAt: "2026-11-05",
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
    kategori: ["tips"],
    examTrack: ["cpns"],
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
