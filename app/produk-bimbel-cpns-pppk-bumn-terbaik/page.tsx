import type { Metadata } from "next";
import ProdukPage from "@/components/pages/produk";
import { hargaPaketTryoutSkd } from "@/data/daftar-produk";
import { tahunSeleksi } from "@/data/tahun-seleksi";
import { formatRupiah } from "@/lib/utils";
import { openGraphBase } from "../shared-metadata";

const path = "/produk-bimbel-cpns-pppk-bumn-terbaik";

export const metadata: Metadata = {
  title: {
    absolute: `Modul & Buku CPNS PPPK BUMN ${tahunSeleksi} - Produk Belajar | Akademi ASN`,
  },
  description: `Modul, buku fisik, dan tryout CPNS, PPPK, dan BUMN ${tahunSeleksi}: E-Modul dan Modul Lolos CPNS & PPPK, Paket Tryout SKD, dan Buku Fisik BUMN Lengkap. Mulai ${formatRupiah(hargaPaketTryoutSkd)}.`,
  alternates: { canonical: path },
  openGraph: { ...openGraphBase, url: path },
};

export default function Page() {
  return <ProdukPage />;
}
