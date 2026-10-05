import type { Metadata } from "next";
import NotFoundPage from "@/components/pages/not-found";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description:
    "Halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke beranda Akademi ASN atau pilih bimbel CPNS, PPPK, dan BUMN.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage />;
}
