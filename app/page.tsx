import type { Metadata } from "next";
import HomePage from "@/components/pages/home";

export const metadata: Metadata = {
  title: { absolute: "Bimbel CPNS, PPPK & BUMN | Akademi ASN" },
  description:
    "Persiapkan seleksi CPNS, PPPK, dan BUMN bersama Akademi ASN. Temukan bimbel dengan pengajar berpengalaman dan program belajar terarah.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return <HomePage />;
}
