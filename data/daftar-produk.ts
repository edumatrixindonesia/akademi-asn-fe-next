import type { DaftarProdukProps } from "@/components/sections/daftar-produk";
import { tahunSeleksi } from "@/data/tahun-seleksi";

export const hargaEModulLolosCpnsPppk = 75_000;
export const hargaModulLolosCpnsPppk = 120_000;
export const hargaPaketTryoutSkd = 50_000;
export const hargaBukuFisikBumn = 150_000;

// The legacy site shows the same cover for every product.
const cover = "/img/section/produk-modul-lolos-cpns-pppk-bumn.webp";

// Approved by Akademi ASN management on 2026-10-06.
const digitalDelivery = "Akses digital tersedia di seluruh Indonesia dan dunia melalui email dan member area/dashboard website Akademi ASN, dengan konfirmasi melalui WhatsApp dan email. Biaya pengiriman Rp0 tanpa minimum pembelian dan tanpa kurir atau waktu transit. Aktivasi otomatis setelah pembayaran terverifikasi; transfer manual maksimal 1×24 jam. Tanpa biaya aktivasi. Jika akses atau file bermasalah, hubungi admin melalui tombol pemesanan dengan ID Pesanan. Perbaikan akses maksimal 1×24 jam.";
const physicalDelivery = "Pengiriman ke seluruh Indonesia melalui JNE REG, J&T Reguler, atau SiCepat REG. Untuk pesanan hingga 1 kg (perkiraan 1–2 buku), ongkir yang dibayar pelanggan maksimal Rp40.000 tanpa pengecualian wilayah; Akademi ASN menanggung biaya di atas batas tersebut. Pemesanan dan konfirmasi ongkir dilakukan melalui admin pada tombol Pesan Sekarang. Batas Rp40.000 tidak berlaku untuk pesanan di atas 1 kg; konfirmasikan ongkir kepada admin sebelum pembayaran. Pesanan diproses 1–2 hari kerja setelah konfirmasi pembayaran; perjalanan kurir 2–7 hari kerja. Hari kerja Senin–Jumat, tidak termasuk libur nasional. Subsidi ongkir hingga Rp20.000 untuk pembelian minimal Rp200.000 tetap berlaku; biaya pelanggan untuk pesanan hingga 1 kg tidak melebihi Rp40.000.";

// Mark up the Indonesian destination; worldwide digital access is also described above.
const digitalShippingDetails = {
  shippingDestination: { "@type": "DefinedRegion", addressCountry: "ID" },
  shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "IDR" },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
  },
} satisfies NonNullable<DaftarProdukProps["products"][number]["shippingDetails"]>;

const physicalShippingDetails = {
  description: physicalDelivery,
  shippingDestination: { "@type": "DefinedRegion", addressCountry: "ID" },
  shippingRate: { "@type": "MonetaryAmount", maxValue: 40_000, currency: "IDR" },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 7, unitCode: "DAY" },
    businessDays: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
  },
} satisfies NonNullable<DaftarProdukProps["products"][number]["shippingDetails"]>;

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
  details: Pick<DaftarProdukProps["products"][number], "description" | "aggregateRating" | "deliveryDescription" | "shippingDetails" | "returnPolicy">,
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
        shippingDetails: digitalShippingDetails,
        returnPolicy: digitalReturns,
      }),
      product(konsultasiUrl, "Modul Lolos CPNS & PPPK", hargaModulLolosCpnsPppk, 50, {
        description: "Buku cetak sekitar 400 halaman untuk persiapan CPNS dan PPPK, membahas TWK, TIU, TKP, SKB dasar, serta tips dan trik menjawab soal psikotes.",
        aggregateRating: { ratingValue: 4.9, ratingCount: 85, reviewCount: 30 },
        deliveryDescription: physicalDelivery,
        shippingDetails: physicalShippingDetails,
        returnPolicy: physicalReturns,
      }),
      product(konsultasiUrl, `Paket Tryout SKD ${tahunSeleksi}`, hargaPaketTryoutSkd, 250, {
        description: `Lima paket tryout SKD ${tahunSeleksi} berbasis web dengan simulasi CAT, timer, skor langsung, grafik progres nilai, dan e-book pembahasan untuk evaluasi. Akses berlaku 1 tahun sejak aktivasi.`,
        aggregateRating: { ratingValue: 4.8, ratingCount: 250, reviewCount: 110 },
        deliveryDescription: digitalDelivery,
        shippingDetails: digitalShippingDetails,
        returnPolicy: digitalReturns,
      }),
      product(konsultasiUrl, "Buku Fisik BUMN Lengkap", hargaBukuFisikBumn, 10, {
        description: "Buku cetak sekitar 350 halaman untuk persiapan Rekrutmen Bersama BUMN, berisi Tes Kemampuan Dasar (TKD), Core Values AKHLAK, dan Bahasa Inggris BUMN.",
        aggregateRating: { ratingValue: 4.9, ratingCount: 60, reviewCount: 25 },
        deliveryDescription: physicalDelivery,
        shippingDetails: physicalShippingDetails,
        returnPolicy: physicalReturns,
      }),
    ],
  }) satisfies DaftarProdukProps;
