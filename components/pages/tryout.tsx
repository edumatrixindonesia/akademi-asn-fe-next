import Breadcrumb from "@/components/sections/breadcrumb";
import Jumbotron from "@/components/sections/jumbotron";
import ProdukUnggulan from "@/components/sections/produk-unggulan";
import PaketHematKomplit from "@/components/sections/paket-hemat-komplit";
import Keunggulan from "@/components/sections/keunggulan";
import PaketProgram from "@/components/sections/paket-program";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import TantanganSeleksi from "@/components/sections/tantangan-seleksi";
import Lembaga from "@/components/sections/lembaga";
import Testimoni from "@/components/sections/testimoni";
import CtaFooter from "@/components/sections/cta-footer";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { breadcrumbTryout } from "@/data/breadcrumb";
import { jumbotronTryout } from "@/data/jumbotron";
import { produkUnggulan } from "@/data/produk-unggulan";
import { paketHematKomplit } from "@/data/paket-hemat-komplit";
import { keunggulan } from "@/data/keunggulan";
import { paketProgram } from "@/data/paket-program";
import { seleksiHome } from "@/data/seleksi";
import { passingGradeHome } from "@/data/passing-grade";
import { tantanganSeleksiHome } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { ctaFooter } from "@/data/cta-footer";
import { faqTryout } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { getKonsultasiUrl } from "@/data/contact";

// Not a landing page (see CONTEXT.md): no location pages, no Jangkauan.
const Tryout = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbTryout} />
      <Jumbotron {...jumbotronTryout(getKonsultasiUrl)} />
      <ProdukUnggulan {...produkUnggulan(getKonsultasiUrl)} />
      <PaketHematKomplit {...paketHematKomplit(getKonsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Seleksi {...seleksiHome} />
      <PassingGrade {...passingGradeHome} />
      <TantanganSeleksi {...tantanganSeleksiHome(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqTryout} />
    </main>
  );
};

export default Tryout;
