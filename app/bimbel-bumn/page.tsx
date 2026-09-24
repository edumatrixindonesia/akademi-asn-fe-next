import type { Metadata } from "next";
import BimbelBumnPage from "@/components/pages/bimbel-bumn";
import { openGraphBase } from "../shared-metadata";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bimbel BUMN Terbaik - Persiapan Tes RBB TKD & AKHLAK | Akademi ASN",
  },
  description:
    "Persiapkan tes BUMN bersama bimbel BUMN online & privat. Pelajari TKD, AKHLAK, Bahasa Inggris, Learning Agility, latihan soal, tryout, dan pembahasan.",
  alternates: { canonical: "/bimbel-bumn" },
  openGraph: { ...openGraphBase, url: "/bimbel-bumn" },
};

export default function Page() {
  return <BimbelBumnPage />;
}
