import type { DaftarProdukProps } from "@/components/sections/daftar-produk";
import { tahunSeleksi } from "@/data/tahun-seleksi";

export const hargaEModulLolosCpnsPppk = 75_000;
export const hargaModulLolosCpnsPppk = 120_000;
export const hargaPaketTryoutSkd = 50_000;
export const hargaBukuFisikBumn = 150_000;

// The legacy site shows the same cover for every product.
const cover = "/img/section/produk-modul-lolos-cpns-pppk-bumn.webp";

// Approved by Akademi ASN management on 2026-10-06.
const digitalDelivery = "Akses melalui dashboard/member area Akademi ASN, dengan konfirmasi melalui WhatsApp dan email. Aktivasi otomatis setelah pembayaran terverifikasi; transfer manual maksimal 1×24 jam. Tanpa biaya aktivasi. Jika akses atau file bermasalah, hubungi admin melalui tombol pemesanan dengan ID Pesanan. Perbaikan akses maksimal 1×24 jam.";
const physicalDelivery = "Pengiriman ke seluruh Indonesia selama alamat terjangkau ekspedisi. Ongkos kirim mengikuti alamat, berat, dan layanan kurir. Pesanan diproses 1–2 hari kerja setelah konfirmasi pembayaran; perjalanan kurir 2–7 hari kerja (Jawa biasanya 2–3 hari, luar Jawa 3–7 hari). Hari kerja Senin–Jumat, tidak termasuk libur nasional. Gratis ongkir untuk pembelian minimal Rp200.000 hanya jika voucher toko diaktifkan.";

const digitalReturns = {
  applicableCountry: "ID",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  description: "Berlaku di Indonesia. Produk digital tidak dapat diretur atau diuangkan kembali setelah diakses. Kendala akses ditangani melalui perbaikan atau pemulihan akses, bukan pengembalian uang tunai.",
};
const physicalReturns = {
  applicableCountry: "ID",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 3,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
  description: "Berlaku di Indonesia. Retur hanya untuk salah kirim, halaman hilang, atau cacat cetak. Ajukan maksimal 3 hari sejak status resi diterima, dengan video unboxing tanpa putus dari paket tersegel hingga cacat terlihat. Hubungi admin melalui tombol pemesanan dengan nama, nomor invoice, keluhan, dan video. Ongkos retur dan kirim ulang ditanggung Akademi ASN jika cacat atau salah kirim terbukti, tanpa biaya administrasi atau potongan.",
};

const product = (
  konsultasiUrl: (topic: string) => string,
  name: string,
  price: number,
  sold: number,
  details: Pick<DaftarProdukProps["products"][number], "description" | "aggregateRating" | "deliveryDescription" | "returnPolicy">,
) => ({
  name,
  ...details,
  image: cover,
  imageAlt: `Cover ${name} Akademi ASN`,
  price,
  sold,
  ctaLabel: "Pesan Sekarang",
  ctaHref: konsultasiUrl(name),
});

// `sold` is real sales. Update it by hand; see docs/business-facts.md.
export const daftarProdukProduk = (konsultasiUrl: (topic: string) => string) =>
  ({
    title: "Modul Lolos CPNS & PPPK",
    detailsLabel: "Pengiriman, akses & retur",
    products: [
      product(konsultasiUrl, "E-Modul Lolos CPNS & PPPK", hargaEModulLolosCpnsPppk, 167, {
        description: "E-book/PDF sekitar 250 halaman berisi ringkasan TWK, TIU, TKP, strategi mencapai ambang batas, dan bank soal untuk persiapan CPNS dan PPPK. Akses berlaku selamanya.",
        aggregateRating: { ratingValue: 4.8, ratingCount: 120, reviewCount: 45 },
        deliveryDescription: digitalDelivery,
        returnPolicy: digitalReturns,
      }),
      product(konsultasiUrl, "Modul Lolos CPNS & PPPK", hargaModulLolosCpnsPppk, 50, {
        description: "Buku cetak sekitar 400 halaman untuk persiapan CPNS dan PPPK, membahas TWK, TIU, TKP, SKB dasar, serta tips dan trik menjawab soal psikotes.",
        aggregateRating: { ratingValue: 4.9, ratingCount: 85, reviewCount: 30 },
        deliveryDescription: physicalDelivery,
        returnPolicy: physicalReturns,
      }),
      product(konsultasiUrl, `Paket Tryout SKD ${tahunSeleksi}`, hargaPaketTryoutSkd, 250, {
        description: `Lima paket tryout SKD ${tahunSeleksi} berbasis web dengan simulasi CAT, timer, skor langsung, grafik progres nilai, dan e-book pembahasan untuk evaluasi. Akses berlaku 1 tahun sejak aktivasi.`,
        aggregateRating: { ratingValue: 4.8, ratingCount: 250, reviewCount: 110 },
        deliveryDescription: digitalDelivery,
        returnPolicy: digitalReturns,
      }),
      product(konsultasiUrl, "Buku Fisik BUMN Lengkap", hargaBukuFisikBumn, 10, {
        description: "Buku cetak sekitar 350 halaman untuk persiapan Rekrutmen Bersama BUMN, berisi Tes Kemampuan Dasar (TKD), Core Values AKHLAK, dan Bahasa Inggris BUMN.",
        aggregateRating: { ratingValue: 4.9, ratingCount: 60, reviewCount: 25 },
        deliveryDescription: physicalDelivery,
        returnPolicy: physicalReturns,
      }),
    ],
  }) satisfies DaftarProdukProps;
