import Breadcrumb from "@/components/sections/breadcrumb";
import Jumbotron from "@/components/sections/jumbotron";
import DaftarProduk from "@/components/sections/daftar-produk";
import TipsLolos from "@/components/sections/tips-lolos";
import PaketProgram from "@/components/sections/paket-program";
import Keunggulan from "@/components/sections/keunggulan";
import MasterTeacher from "@/components/sections/master-teacher";
import Testimoni from "@/components/sections/testimoni";
import BimbelLainnya from "@/components/sections/bimbel-lainnya";
import CtaFooter from "@/components/sections/cta-footer";
import MediaMassa from "@/components/sections/media-massa";
import Faq from "@/components/sections/faq";
import { breadcrumbProduk } from "@/data/breadcrumb";
import { jumbotronProduk } from "@/data/jumbotron";
import { daftarProdukProduk } from "@/data/daftar-produk";
import { tipsLolosProduk } from "@/data/tips-lolos";
import { paketProgram } from "@/data/paket-program";
import { keunggulan } from "@/data/keunggulan";
import { masterTeacher } from "@/data/master-teacher";
import { testimoni } from "@/data/testimoni";
import { bimbelLainnyaProduk } from "@/data/bimbel-lainnya";
import { ctaFooter } from "@/data/cta-footer";
import { mediaMassa } from "@/data/media-massa";
import { faqProduk } from "@/data/faq";
import { getKonsultasiUrl, konsultasiPage, pageKonsultasiUrl } from "@/data/contact";

// Not a landing page (see CONTEXT.md): no location pages, no Jangkauan.
const Produk = () => {
  const konsultasiUrl = pageKonsultasiUrl(konsultasiPage.home);
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbProduk} />
      <Jumbotron {...jumbotronProduk(pageKonsultasiUrl(konsultasiPage.produk))} />
      <DaftarProduk {...daftarProdukProduk(getKonsultasiUrl)} />
      <TipsLolos {...tipsLolosProduk} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <MasterTeacher {...masterTeacher} />
      <Testimoni {...testimoni} />
      <BimbelLainnya {...bimbelLainnyaProduk} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqProduk} />
    </main>
  );
};

export default Produk;
