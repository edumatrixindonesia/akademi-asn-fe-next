import type { Metadata } from "next";
import KebijakanPengembalianPage from "@/components/pages/kebijakan-pengembalian";
import { openGraphBase } from "../shared-metadata";

const path = "/kebijakan-pengembalian";

export const metadata: Metadata = {
  title: {
    absolute: "Kebijakan Pengiriman dan Pengembalian | Akademi ASN",
  },
  description:
    "Kebijakan pengiriman dan pengembalian dana produk digital Akademi ASN: waktu pengiriman akses, syarat pengembalian dana, dan prosedur komplain.",
  alternates: { canonical: path },
  openGraph: { ...openGraphBase, url: path },
};

export default function Page() {
  return <KebijakanPengembalianPage />;
}
