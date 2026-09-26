import type { Metadata } from "next";
import HomePage from "@/components/pages/home";
import { getProvinces } from "@/lib/region-service";
import { openGraphBase } from "./shared-metadata";

export const metadata: Metadata = {
  title: { absolute: "Bimbel CPNS PPPK BUMN Terbaik | Akademi ASN" },
  description:
    "Persiapkan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN bersama Akademi ASN. Tersedia kelas online & offline, materi terarah, latihan soal, tryout CAT, dan pendampingan tutor.",
  alternates: { canonical: "/" },
  openGraph: { ...openGraphBase, url: "/" },
};

export default async function Home() {
  return <HomePage provinces={await getProvinces()} />;
}
