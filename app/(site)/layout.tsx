import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { getKonsultasiUrl } from "@/data/contact";
import { footerDefault } from "@/data/footer";
import { navbarDefault } from "@/data/navbar";

// Every page except Link Bio, which stands alone (docs/adr/0008-link-bio-outside-site-layout.md).
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar {...navbarDefault(getKonsultasiUrl())} />
      {children}
      <Footer {...footerDefault()} />
    </>
  );
}
