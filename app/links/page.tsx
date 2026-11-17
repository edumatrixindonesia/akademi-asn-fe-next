import type { Metadata } from "next";
import LinkBioPage from "@/components/pages/link-bio";

export const metadata: Metadata = {
  title: "Link Bio",
  description:
    "Konsultasi gratis, info bimbel CPNS, PPPK, dan BUMN, serta artikel terbaru dari Akademi ASN.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LinkBioPage />;
}
