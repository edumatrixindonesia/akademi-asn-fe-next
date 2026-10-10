import type { UpdateSeleksiProps } from "@/components/sections/update-seleksi";

// Every claim is checked against BKN, SSCASN, or KemenPANRB primary sources.
// Sources and quotes: .scratch/update-seleksi-<cpns|pppk>/research.md. Re-check
// them and move `updatedAt` whenever an entry changes.
export const updateSeleksiCpns = {
  title: "Update Informasi Seleksi CPNS 2026",
  description:
    "Ringkasan informasi administratif seleksi CPNS dari kanal resmi BKN, SSCASN, dan Kementerian PANRB.",
  updatedAt: "2026-10-10",
  updates: [
    {
      title: "Status CPNS 2026 Jalur Umum",
      description:
        "Sampai 10 Oktober 2026, belum ada pengumuman resmi pembukaan seleksi CPNS 2026 jalur umum, termasuk jadwal pendaftaran dan jumlah formasinya. BKN memastikan poster pembukaan CPNS 2026 yang beredar pada Juni 2026 adalah hoaks.",
      sourceLabel: "BKN, 4 Juni 2026",
      sourceHref:
        "https://www.bkn.go.id/karo-komlik-bkn-wisudo-putro-nugroho-poster-pembukaan-cpns-2026-yang-beredar-dipastikan-hoaks/",
    },
    {
      title: "CPNS Jalur Sekolah Kedinasan 2026",
      description:
        "Pemerintah menyiapkan 4.770 kebutuhan CPNS melalui sekolah kedinasan di sembilan instansi, naik dari 3.257 formasi sekolah kedinasan pada 2025. Pendaftarannya lewat SSCASN, dan SKD ditargetkan pada September 2026.",
      sourceLabel: "Kementerian PANRB, 14 Agustus 2026",
      sourceHref:
        "https://www.menpan.go.id/site/berita-terkini/pemerintah-siapkan-4-770-kebutuhan-cpns-sekolah-kedinasan-2026",
    },
    {
      title: "Dasar Hukum Pengadaan ASN",
      description:
        "PermenPANRB Nomor 6 Tahun 2024 tentang Pengadaan Pegawai ASN masih berlaku. Seleksi CPNS terdiri atas seleksi administrasi, SKD, dan SKB. Nilai akhir dihitung dari 40% nilai SKD dan 60% nilai SKB.",
      sourceLabel: "JDIH Kementerian PANRB",
      sourceHref:
        "https://jdih.menpan.go.id/dokumen-hukum/peraturan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-6-tahun-2024-tentang-p-1849",
    },
    {
      title: "Syarat Umum Pelamar CPNS",
      description:
        "Syaratnya antara lain berusia 18–35 tahun saat melamar (dapat dikecualikan untuk jabatan tertentu), tidak berstatus CPNS, PNS, prajurit TNI, atau anggota Polri, bukan anggota atau pengurus partai politik, berpendidikan sesuai persyaratan jabatan, sehat jasmani dan rohani, serta bersedia ditempatkan di seluruh wilayah NKRI atau negara lain yang ditentukan instansi.",
      sourceLabel: "PermenPANRB 6/2024 Pasal 23, BKN",
      sourceHref:
        "https://www.bkn.go.id/wp-content/uploads/2024/08/2024permenpanrb-Pengadaan-CASN-.pdf",
    },
    {
      title: "Format SKD pada CPNS 2024",
      description:
        "SKD berisi 110 soal: TWK 30, TIU 35, dan TKP 45, dikerjakan dengan CAT BKN dalam 100 menit (130 menit bagi pelamar disabilitas netra pada kebutuhan khusus disabilitas). Nilai ambang batas SKD ditetapkan dengan Keputusan Menteri PANRB.",
      sourceLabel: "KepmenPANRB No. 321 Tahun 2024, BKN",
      sourceHref:
        "https://www.bkn.go.id/storage/2024/08/2024kepmenpanrb321-Nilai-Ambang-Batas.pdf",
    },
    {
      title: "Pendaftaran Gratis, Hanya Lewat SSCASN",
      description:
        "Sesuai PermenPANRB 6/2024, pengadaan ASN tidak dipungut biaya. BKN menegaskan seluruh pendaftaran ASN hanya dilakukan melalui portal resmi SSCASN (sscasn.bkn.go.id), bukan melalui tautan pribadi atau situs tidak dikenal.",
      sourceLabel: "BKN, 22 Januari 2026",
      sourceHref:
        "https://www.bkn.go.id/beredar-informasi-seleksi-kemenkes-2026-prof-zudan-itu-hoaks-rekrutmen-asn-terintegrasi-dan-diawasi-bkn/",
    },
  ],
} satisfies UpdateSeleksiProps;

export const updateSeleksiPppk = {
  title: "Update Informasi Seleksi PPPK 2026",
  description:
    "Ringkasan informasi administratif seleksi PPPK dari kanal resmi BKN, SSCASN, dan Kementerian PANRB.",
  updatedAt: "2026-10-10",
  updates: [
    {
      title: "Status PPPK 2026 Nasional",
      description:
        "Sampai 10 Oktober 2026, belum ada pengumuman resmi seleksi PPPK 2026 secara nasional. Seleksi PPPK yang berjalan pada 2026 adalah pengadaan tingkat instansi untuk formasi tertentu, seperti guru dan tenaga kependidikan Sekolah Rakyat.",
      sourceLabel: "SSCASN, dicek 10 Oktober 2026",
      sourceHref: "https://sscasn.bkn.go.id/",
    },
    {
      title: "PPPK Sekolah Rakyat 2026",
      description:
        "Seleksi PPPK Sekolah Rakyat 2026 memperebutkan 8.180 formasi: 3.053 guru dan 5.127 tenaga kependidikan. Seleksi kompetensi dengan CAT BKN dimulai serentak pada 17 Juli 2026 dan diikuti 118.432 peserta.",
      sourceLabel: "BKN Kanreg XII Pekanbaru, 20 Juli 2026",
      sourceHref:
        "https://pekanbaru.bkn.go.id/home/seleksi-pppk-sekolah-rakyat-kanreg-xii-bkn/",
    },
    {
      title: "PPPK Paruh Waktu",
      description:
        "PermenPANRB Nomor 9 Tahun 2026 mengatur PPPK paruh waktu, yang berasal dari hasil seleksi ASN tahun anggaran 2024. Pejabat Pembina Kepegawaian dapat mengusulkan pengangkatannya menjadi PPPK berdasarkan ketersediaan anggaran dan hasil evaluasi kinerja.",
      sourceLabel: "PermenPANRB No. 9 Tahun 2026, JDIH Kementerian PANRB",
      sourceHref: "https://data-jdih.menpan.go.id/dokumen/2026permenpanrb009.pdf",
    },
    {
      title: "Syarat Usia dan Tahapan Seleksi",
      description:
        "Pelamar PPPK berusia paling rendah 20 tahun dan paling tinggi 1 tahun sebelum batas usia jabatan yang dilamar. Seleksinya terdiri atas seleksi administrasi dan seleksi kompetensi (teknis, manajerial, sosial kultural) serta wawancara dengan CAT BKN. Pengadaan tingkat instansi dapat memakai metode lain dengan persetujuan Menteri PANRB.",
      sourceLabel: "PermenPANRB 6/2024 Pasal 23–40, BKN",
      sourceHref:
        "https://www.bkn.go.id/wp-content/uploads/2024/08/2024permenpanrb-Pengadaan-CASN-.pdf",
    },
    {
      title: "Kelulusan Berdasarkan Peringkat",
      description:
        "Pada seleksi PPPK 2024, kelulusan ditentukan oleh peringkat terbaik, tanpa nilai ambang batas. Wawancara berbasis komputer dipakai untuk menilai integritas dan moralitas peserta.",
      sourceLabel: "Kementerian PANRB, 23 Agustus 2024",
      sourceHref:
        "https://www.menpan.go.id/site/berita-terkini/akan-segera-digelar-cermati-pedoman-kebijakan-pengadaan-pppk-teknis-pppk-guru-dan-pppk-nakes",
    },
    {
      title: "Pendaftaran Gratis, Hanya Lewat SSCASN",
      description:
        "Sesuai PermenPANRB 6/2024, pengadaan ASN tidak dipungut biaya. BKN menegaskan rekrutmen ASN, baik CPNS maupun PPPK, diawasi BKN dan pendaftarannya hanya melalui portal resmi SSCASN (sscasn.bkn.go.id).",
      sourceLabel: "BKN, 22 Januari 2026",
      sourceHref:
        "https://www.bkn.go.id/beredar-informasi-seleksi-kemenkes-2026-prof-zudan-itu-hoaks-rekrutmen-asn-terintegrasi-dan-diawasi-bkn/",
    },
  ],
} satisfies UpdateSeleksiProps;
