import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import MasterTeacher from "@/components/sections/master-teacher";
import Materi from "@/components/sections/materi";
import PaketProgram from "@/components/sections/paket-program";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import UpdateSeleksi from "@/components/sections/update-seleksi";
import TantanganSeleksi from "@/components/sections/tantangan-seleksi";
import Lembaga from "@/components/sections/lembaga";
import Testimoni from "@/components/sections/testimoni";
import Jangkauan from "@/components/sections/jangkauan";
import BimbelLainnya from "@/components/sections/bimbel-lainnya";
import CtaFooter from "@/components/sections/cta-footer";
import ArtikelTerbaru from "@/components/sections/artikel-terbaru";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { jumbotronHome } from "@/data/jumbotron";
import { keunggulan } from "@/data/keunggulan";
import { masterTeacher } from "@/data/master-teacher";
import { materiHome } from "@/data/materi";
import { paketProgram } from "@/data/paket-program";
import { seleksiBumn, seleksiCpns, seleksiPppk } from "@/data/seleksi";
import {
  passingGradeBumn,
  passingGradeCpns,
  passingGradePppk,
} from "@/data/passing-grade";
import {
  updateSeleksiBumn,
  updateSeleksiCpns,
  updateSeleksiPppk,
} from "@/data/update-seleksi";
import { tantanganSeleksiHome } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanHome } from "@/data/jangkauan";
import { bimbelLainnyaHome } from "@/data/bimbel-lainnya";
import { ctaFooter } from "@/data/cta-footer";
import { faqHome } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { artikelTerbaru } from "@/data/artikel-terbaru";
import { konsultasiPage, pageKonsultasiUrl } from "@/data/contact";
import type { Region } from "@/lib/location-tree";

type HomeProps = { provinces: Region[] };

const Home = ({ provinces }: HomeProps) => {
  const konsultasiUrl = pageKonsultasiUrl(konsultasiPage.home);
  const terbaru = artikelTerbaru();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronHome(konsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <MasterTeacher {...masterTeacher} />
      <Materi {...materiHome(konsultasiUrl)} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Seleksi {...seleksiCpns} />
      <UpdateSeleksi {...updateSeleksiCpns} />
      <PassingGrade {...passingGradeCpns} />
      <Seleksi {...seleksiPppk} />
      <UpdateSeleksi {...updateSeleksiPppk} />
      <PassingGrade {...passingGradePppk} />
      <Seleksi {...seleksiBumn} />
      <UpdateSeleksi {...updateSeleksiBumn} />
      <PassingGrade {...passingGradeBumn} />
      <TantanganSeleksi {...tantanganSeleksiHome(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanHome(provinces)} />
      <BimbelLainnya {...bimbelLainnyaHome} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqHome} />
      {terbaru && <ArtikelTerbaru {...terbaru} />}
    </main>
  );
};

export default Home;
