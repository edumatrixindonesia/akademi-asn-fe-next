import type { DaftarProdukProps } from "@/components/sections/daftar-produk";
import { tahunSeleksi } from "@/data/tahun-seleksi";

export const hargaEModulLolosCpnsPppk = 75_000;
export const hargaModulLolosCpnsPppk = 120_000;
export const hargaPaketTryoutSkd = 50_000;
export const hargaBukuFisikBumn = 150_000;

// The legacy site shows the same cover for every product.
const cover = "/img/section/produk-modul-lolos-cpns-pppk-bumn.webp";

const product = (
  konsultasiUrl: (topic: string) => string,
  name: string,
  price: number,
  sold: number,
  details: Pick<DaftarProdukProps["products"][number], "description" | "aggregateRating">,
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
    products: [
      product(konsultasiUrl, "E-Modul Lolos CPNS & PPPK", hargaEModulLolosCpnsPppk, 167, {
        description: "E-book/PDF sekitar 250 halaman berisi ringkasan TWK, TIU, TKP, strategi mencapai ambang batas, dan bank soal untuk persiapan CPNS dan PPPK. Akses berlaku selamanya.",
        aggregateRating: { ratingValue: 4.8, ratingCount: 120, reviewCount: 45 },
      }),
      product(konsultasiUrl, "Modul Lolos CPNS & PPPK", hargaModulLolosCpnsPppk, 50, {
        description: "Buku cetak sekitar 400 halaman untuk persiapan CPNS dan PPPK, membahas TWK, TIU, TKP, SKB dasar, serta tips dan trik menjawab soal psikotes.",
        aggregateRating: { ratingValue: 4.9, ratingCount: 85, reviewCount: 30 },
      }),
      product(konsultasiUrl, `Paket Tryout SKD ${tahunSeleksi}`, hargaPaketTryoutSkd, 250, {
        description: `Lima paket tryout SKD ${tahunSeleksi} berbasis web dengan simulasi CAT, timer, skor langsung, grafik progres nilai, dan e-book pembahasan untuk evaluasi. Akses berlaku 1 tahun sejak aktivasi.`,
        aggregateRating: { ratingValue: 4.8, ratingCount: 250, reviewCount: 110 },
      }),
      product(konsultasiUrl, "Buku Fisik BUMN Lengkap", hargaBukuFisikBumn, 10, {
        description: "Buku cetak sekitar 350 halaman untuk persiapan Rekrutmen Bersama BUMN, berisi Tes Kemampuan Dasar (TKD), Core Values AKHLAK, dan Bahasa Inggris BUMN.",
        aggregateRating: { ratingValue: 4.9, ratingCount: 60, reviewCount: 25 },
      }),
    ],
  }) satisfies DaftarProdukProps;
