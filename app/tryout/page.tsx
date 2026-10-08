import type { Metadata } from "next";
import TryoutPage from "@/components/pages/tryout";
import { hargaTryoutCpns } from "@/data/produk-unggulan";
import { tahunSeleksi } from "@/data/tahun-seleksi";
import { formatRupiah } from "@/lib/utils";
import { openGraphBase } from "../shared-metadata";

const path = "/tryout";

export const metadata: Metadata = {
  title: {
    absolute: `Tryout CPNS PPPK BUMN ${tahunSeleksi} - Simulasi CAT Online | Akademi ASN`,
  },
  description: `Tryout CPNS, PPPK, dan BUMN ${tahunSeleksi} dengan simulasi CAT, 500+ soal terbaru, pembahasan lengkap, dan ranking nasional. Mulai ${formatRupiah(hargaTryoutCpns)}, akses 30 hari.`,
  alternates: { canonical: path },
  openGraph: { ...openGraphBase, url: path },
};

export default function Page() {
  return <TryoutPage />;
}
