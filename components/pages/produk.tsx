import Breadcrumb from "@/components/sections/breadcrumb";
import Jumbotron from "@/components/sections/jumbotron";
import DaftarProduk from "@/components/sections/daftar-produk";
import TipsLolos from "@/components/sections/tips-lolos";
import PaketProgram from "@/components/sections/paket-program";
import Keunggulan from "@/components/sections/keunggulan";
import Testimoni from "@/components/sections/testimoni";
import CtaFooter from "@/components/sections/cta-footer";
import MediaMassa from "@/components/sections/media-massa";
import Faq from "@/components/sections/faq";
import { breadcrumbProduk } from "@/data/breadcrumb";
import { jumbotronProduk } from "@/data/jumbotron";
import { daftarProdukProduk } from "@/data/daftar-produk";
import { tipsLolosProduk } from "@/data/tips-lolos";
import { paketProgram } from "@/data/paket-program";
import { keunggulan } from "@/data/keunggulan";
import { testimoni } from "@/data/testimoni";
import { ctaFooter } from "@/data/cta-footer";
import { mediaMassa } from "@/data/media-massa";
import { faqProduk } from "@/data/faq";
import { getKonsultasiUrl } from "@/data/contact";

// Not a landing page (see CONTEXT.md): no location pages, no Jangkauan.
const Produk = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbProduk} />
      <Jumbotron {...jumbotronProduk(konsultasiUrl)} />
      <DaftarProduk {...daftarProdukProduk(getKonsultasiUrl)} />
      <TipsLolos {...tipsLolosProduk} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <Testimoni {...testimoni} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqProduk} />
    </main>
  );
};

export default Produk;
