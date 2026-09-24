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
import { jumbotronHome } from "@/data/jumbotron";
import { keunggulanHome } from "@/data/keunggulan";
import { materiHome } from "@/data/materi";
import { paketProgramHome } from "@/data/paket-program";
import { seleksiHome } from "@/data/seleksi";
import { passingGradeHome } from "@/data/passing-grade";
import { tantanganSeleksiHome } from "@/data/tantangan-seleksi";
import { lembagaHome } from "@/data/lembaga";
import { testimoniHome } from "@/data/testimoni";
import { ctaFooterHome } from "@/data/cta-footer";
import { faqHome } from "@/data/faq";
import { mediaMassaHome } from "@/data/media-massa";
import { getKonsultasiUrl } from "@/data/contact";

const Home = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronHome(konsultasiUrl)} />
      <Keunggulan {...keunggulanHome} />
      <Materi {...materiHome(konsultasiUrl)} />
      <PaketProgram {...paketProgramHome(konsultasiUrl)} />
      <Seleksi {...seleksiHome} />
      <PassingGrade {...passingGradeHome} />
      <TantanganSeleksi {...tantanganSeleksiHome(konsultasiUrl)} />
      <Lembaga {...lembagaHome} />
      <Testimoni {...testimoniHome} />
      <CtaFooter {...ctaFooterHome(konsultasiUrl)} />
      <MediaMassa {...mediaMassaHome} />
      <Faq {...faqHome} />
    </main>
  );
};

export default Home;
