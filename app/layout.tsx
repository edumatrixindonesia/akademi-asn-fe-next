import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { footerDefault } from "@/data/footer";
import { navbarDefault } from "@/data/navbar";
import { getKonsultasiUrl } from "@/data/contact";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.");
}

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akademi ASN",
    template: "%s | Akademi ASN",
  },
  description:
    "Akademi ASN menyediakan bimbel CPNS, PPPK, dan BUMN dengan pengajar berpengalaman dan program belajar terarah.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const konsultasiUrl = getKonsultasiUrl();

  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar {...navbarDefault(konsultasiUrl)} />
        {children}
        <Footer {...footerDefault(konsultasiUrl)} />
      </body>
    </html>
  );
}
