import type { Metadata } from "next";
import KebijakanPengembalianPage from "@/components/pages/kebijakan-pengembalian";
import { kebijakanPengembalianPath as path, kebijakanPengembalianTitle } from "@/data/kebijakan-pengembalian";
import { openGraphBase } from "../shared-metadata";

export const metadata: Metadata = {
  title: {
    absolute: `${kebijakanPengembalianTitle} | Akademi ASN`,
  },
  description:
    "Kebijakan pengiriman dan pengembalian Akademi ASN untuk produk digital dan buku cetak: waktu akses, ongkir, syarat retur dan pengembalian dana, serta prosedur komplain.",
  alternates: { canonical: path },
  openGraph: { ...openGraphBase, url: path },
};

export default function Page() {
  return <KebijakanPengembalianPage />;
}
