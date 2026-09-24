import type { Metadata } from "next";
import BimbelPppkPage from "@/components/pages/bimbel-pppk";
import { openGraphBase } from "../shared-metadata";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bimbel PPPK Online & Offline Terbaik - Teknis Guru & Kesehatan | Akademi ASN",
  },
  description:
    "Bimbel PPPK online untuk formasi teknis, guru, dan tenaga kesehatan. Belajar terarah dengan mentor, materi, latihan soal, dan tryout CAT.",
  alternates: { canonical: "/bimbel-pppk" },
  openGraph: { ...openGraphBase, url: "/bimbel-pppk" },
};

export default function Page() {
  return <BimbelPppkPage />;
}
