import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { footerDefault } from "@/data/footer";
import { navbarDefault } from "@/data/navbar";
import { getKonsultasiUrl } from "@/data/contact";
import { openGraphBase, organizationJsonLd, siteUrl } from "./shared-metadata";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const revalidate = 86400;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bimbel CPNS PPPK BUMN Terbaik",
    template: "%s | Akademi ASN",
  },
  description:
    "Persiapkan seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN bersama Akademi ASN. Tersedia kelas online & offline, materi terarah, latihan soal, tryout CAT, dan pendampingan tutor.",
  applicationName: "Akademi ASN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: openGraphBase,
  // Title, description, and image are filled in from openGraph by Next.js.
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#237DC1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const konsultasiUrl = getKonsultasiUrl();

  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar {...navbarDefault(konsultasiUrl)} />

        {children}

        <Footer {...footerDefault()} />
      </body>
    </html>
  );
}
