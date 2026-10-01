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
) => ({
  name,
  image: cover,
  imageAlt: `Cover ${name} Akademi ASN`,
  price,
  sold,
  ctaLabel: "Pesan Sekarang",
  ctaHref: konsultasiUrl(name),
});

// `sold` is real sales, copied from the legacy site. Update it by hand.
export const daftarProdukProduk = (konsultasiUrl: (topic: string) => string) =>
  ({
    title: "Modul Lolos CPNS & PPPK",
    products: [
      product(konsultasiUrl, "E-Modul Lolos CPNS & PPPK", hargaEModulLolosCpnsPppk, 167),
      product(konsultasiUrl, "Modul Lolos CPNS & PPPK", hargaModulLolosCpnsPppk, 50),
      product(konsultasiUrl, `Paket Tryout SKD ${tahunSeleksi}`, hargaPaketTryoutSkd, 250),
      product(konsultasiUrl, "Buku Fisik BUMN Lengkap", hargaBukuFisikBumn, 10),
    ],
  }) satisfies DaftarProdukProps;
