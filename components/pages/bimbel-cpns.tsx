import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import Materi from "@/components/sections/materi";
import PaketProgram from "@/components/sections/paket-program";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import TantanganSeleksi from "@/components/sections/tantangan-seleksi";
import Lembaga from "@/components/sections/lembaga";
import Testimoni from "@/components/sections/testimoni";
import CtaFooter from "@/components/sections/cta-footer";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { jumbotronCpns } from "@/data/jumbotron";
import { keunggulan } from "@/data/keunggulan";
import { materiCpns } from "@/data/materi";
import { paketProgram } from "@/data/paket-program";
import { seleksiHome } from "@/data/seleksi";
import { passingGradeHome } from "@/data/passing-grade";
import { tantanganSeleksiCpns } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { ctaFooter } from "@/data/cta-footer";
import { faqCpns } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { getKonsultasiUrl } from "@/data/contact";

const BimbelCpns = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronCpns(konsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <Materi {...materiCpns(konsultasiUrl)} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Seleksi {...seleksiHome} />
      <PassingGrade {...passingGradeHome} />
      <TantanganSeleksi {...tantanganSeleksiCpns(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqCpns} />
    </main>
  );
};

export default BimbelCpns;
