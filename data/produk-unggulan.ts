import type { ProdukUnggulanProps } from "@/components/sections/produk-unggulan";
import { tahunSeleksi } from "@/data/tahun-seleksi";
import { productDemo } from "@/data/product-demo";

export const hargaTryoutCpns = 30_000;
export const hargaEbookModulCpns = 50_000;

export const produkUnggulan = (konsultasiUrl: (topic: string) => string) =>
  ({
    title: "Produk Unggulan Akademi ASN",
    description: `Pilih produk yang sesuai dengan kebutuhan persiapan CPNS ${tahunSeleksi} Anda`,
    products: [
      {
        name: "Tryout CPNS",
        demoDetails: productDemo("Tryout CPNS", 1),
        image: "/img/section/Paket Tryout Bimbel Les Privat CPNS & PPPK BUMN Terbaik di Indonesia.webp",
        imageAlt: "Ilustrasi peserta Akademi ASN berlatih tryout CPNS melalui laptop",
        features: [
          `Simulasi CAT CPNS ${tahunSeleksi}`,
          "500+ Soal Terbaru",
          "Pembahasan Lengkap",
          "Ranking Nasional",
          "Akses 30 Hari",
        ],
        price: hargaTryoutCpns,
        ctaLabel: "Daftar Sekarang",
        ctaHref: konsultasiUrl("Tryout CPNS"),
      },
      {
        name: "E-Book Modul CPNS",
        demoDetails: productDemo("E-Book Modul CPNS", 2),
        image: "/img/section/produk-modul-lolos-cpns-pppk-bumn.webp",
        imageAlt: "Sampul modul panduan SKD CPNS dan PPPK Akademi ASN",
        features: [
          "Materi SKD Lengkap",
          "300+ Halaman PDF",
          "Ringkasan Materi",
          "Tips & Trik Jitu",
          `Update Terbaru ${tahunSeleksi}`,
        ],
        price: hargaEbookModulCpns,
        ctaLabel: "Daftar Sekarang",
        ctaHref: konsultasiUrl("E-Book Modul CPNS"),
      },
    ],
  }) satisfies ProdukUnggulanProps;
