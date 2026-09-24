import type { Metadata } from "next";
import BimbelCpnsPage from "@/components/pages/bimbel-cpns";
import { openGraphBase } from "../shared-metadata";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bimbel CPNS Online & Offline Terbaik - Persiapan SKD & SKB | Akademi ASN",
  },
  description:
    "Ikuti bimbel CPNS online & offline terbaik untuk persiapan SKD & SKB. Materi TWK, TIU, TKP, tryout CAT, pembahasan soal, dan pendampingan tutor.",
  alternates: { canonical: "/bimbel-cpns" },
  openGraph: { ...openGraphBase, url: "/bimbel-cpns" },
};

export default function Page() {
  return <BimbelCpnsPage />;
}
