import type { Metadata } from "next";
import KebijakanPengirimanDanPengembalianPage from "@/components/pages/kebijakan-pengiriman-dan-pengembalian";
import { kebijakanPengirimanDanPengembalianPath as path, kebijakanPengirimanDanPengembalianTitle } from "@/data/kebijakan-pengiriman-dan-pengembalian";
import { openGraphBase } from "../shared-metadata";

export const metadata: Metadata = {
  title: {
    absolute: `${kebijakanPengirimanDanPengembalianTitle} | Akademi ASN`,
  },
  description:
    "Kebijakan pengiriman dan pengembalian Akademi ASN untuk produk digital dan buku cetak: waktu akses, ongkir, syarat retur dan pengembalian dana, serta prosedur komplain.",
  alternates: { canonical: path },
  openGraph: { ...openGraphBase, url: path },
};

export default function Page() {
  return <KebijakanPengirimanDanPengembalianPage />;
}
