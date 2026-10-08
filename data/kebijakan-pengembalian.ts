import type { KebijakanPengembalianProps } from "@/components/sections/kebijakan-pengembalian";
import { siteUrl } from "@/app/shared-metadata";
import { callCenterPhone, officeHoursText } from "@/data/contact";
import { tahunSeleksi } from "@/data/tahun-seleksi";

export const kebijakanPengembalianPath = "/kebijakan-pengembalian";
export const kebijakanPengembalianTitle = "Kebijakan Pengiriman dan Pengembalian";

const merchantReturnLink = `${siteUrl}${kebijakanPengembalianPath}`;

// Single source for delivery and return terms. Product cards, Product JSON-LD,
// and the policy page all use these. Approved by Akademi ASN management on
// 2026-10-06; the double-payment refund was approved on 2026-10-08.
// See docs/business-facts.md.
export const digitalDelivery = "Akses digital tersedia di seluruh Indonesia dan dunia melalui email dan member area/dashboard website Akademi ASN, dengan konfirmasi melalui WhatsApp dan email. Biaya pengiriman Rp0 tanpa minimum pembelian dan tanpa kurir atau waktu transit. Aktivasi otomatis setelah pembayaran terverifikasi; transfer manual maksimal 1×24 jam. Tanpa biaya aktivasi. Jika akses atau file bermasalah, hubungi admin melalui WhatsApp dengan ID Pesanan. Perbaikan akses maksimal 1×24 jam.";
export const physicalDelivery = "Pengiriman ke seluruh Indonesia melalui JNE REG, J&T Reguler, atau SiCepat REG. Untuk pesanan hingga 1 kg (perkiraan 1–2 buku), ongkir yang dibayar pelanggan maksimal Rp40.000 tanpa pengecualian wilayah; Akademi ASN menanggung biaya di atas batas tersebut. Pemesanan dan konfirmasi ongkir dilakukan melalui WhatsApp admin. Batas Rp40.000 tidak berlaku untuk pesanan di atas 1 kg; konfirmasikan ongkir kepada admin sebelum pembayaran. Pesanan diproses 1–2 hari kerja setelah konfirmasi pembayaran; perjalanan kurir 2–7 hari kerja. Hari kerja Senin–Jumat, tidak termasuk libur nasional. Subsidi ongkir hingga Rp20.000 untuk pembelian minimal Rp200.000 tetap berlaku; biaya pelanggan untuk pesanan hingga 1 kg tidak melebihi Rp40.000.";

export const digitalReturnPolicy = {
  applicableCountry: "ID",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  merchantReturnLink,
  description: "Berlaku di Indonesia. Produk digital tidak dapat diretur atau diuangkan kembali setelah diakses. Kendala akses ditangani melalui perbaikan atau pemulihan akses maksimal 1×24 jam, bukan pengembalian uang tunai. Pembayaran ganda untuk pesanan yang sama dikembalikan setelah diverifikasi admin.",
};
export const physicalReturnPolicy = {
  applicableCountry: "ID",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 3,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
  merchantReturnLink,
  description: "Berlaku di Indonesia. Retur hanya untuk salah kirim, halaman hilang, atau cacat cetak. Ajukan maksimal 3 hari sejak status resi diterima, dengan video unboxing tanpa putus dari paket tersegel hingga cacat terlihat. Hubungi admin melalui WhatsApp dengan nama, nomor invoice, keluhan, dan video. Ongkos retur dan kirim ulang ditanggung Akademi ASN jika cacat atau salah kirim terbukti, tanpa biaya administrasi atau potongan.",
};

export const kebijakanPengembalian = (konsultasiUrl: (topic: string) => string) =>
  ({
    title: kebijakanPengembalianTitle,
    description:
      "Kebijakan ini berlaku untuk seluruh produk Akademi ASN, baik produk digital maupun buku cetak.",
    sections: [
      {
        heading: "Produk yang Dicakup",
        paragraphs: [],
        items: [
          `Produk digital: Tryout CPNS, E-Book Modul CPNS, Paket Hemat Komplit, E-Modul Lolos CPNS & PPPK, dan Paket Tryout SKD ${tahunSeleksi}.`,
          "Buku cetak: Modul Lolos CPNS & PPPK dan Buku Fisik BUMN Lengkap.",
        ],
      },
      { heading: "Pengiriman Produk Digital", paragraphs: [digitalDelivery] },
      { heading: "Pengiriman Buku Cetak", paragraphs: [physicalDelivery] },
      { heading: "Pengembalian Produk Digital", paragraphs: [digitalReturnPolicy.description] },
      { heading: "Retur Buku Cetak", paragraphs: [physicalReturnPolicy.description] },
      {
        heading: "Prosedur Komplain",
        paragraphs: ["Ikuti langkah berikut jika Anda mengalami kendala:"],
        items: [
          "Hubungi admin melalui WhatsApp.",
          "Sertakan ID Pesanan atau nomor invoice, bukti pembayaran, dan keterangan kendala. Untuk buku cetak, sertakan juga video unboxing.",
          "Kendala akses produk digital diperbaiki maksimal 1×24 jam.",
          "Pembayaran ganda dikembalikan setelah diverifikasi admin.",
        ],
      },
      {
        heading: "Hubungi Kami",
        paragraphs: [
          `Nomor Call Center: ${callCenterPhone.display}`,
          `Jam operasional: ${officeHoursText}`,
        ],
        link: {
          label: "Hubungi Admin via WhatsApp",
          href: konsultasiUrl("Kebijakan Pengiriman dan Pengembalian"),
        },
      },
    ],
  }) satisfies KebijakanPengembalianProps;
