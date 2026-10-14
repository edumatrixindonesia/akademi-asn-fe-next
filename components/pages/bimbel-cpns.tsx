import Breadcrumb from "@/components/sections/breadcrumb";
import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import Materi from "@/components/sections/materi";
import PaketProgram from "@/components/sections/paket-program";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import UpdateSeleksi from "@/components/sections/update-seleksi";
import TantanganSeleksi from "@/components/sections/tantangan-seleksi";
import Lembaga from "@/components/sections/lembaga";
import Testimoni from "@/components/sections/testimoni";
import Jangkauan from "@/components/sections/jangkauan";
import CtaFooter from "@/components/sections/cta-footer";
import ArtikelTerbaru from "@/components/sections/artikel-terbaru";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { breadcrumbCpns } from "@/data/breadcrumb";
import { jumbotronCpns } from "@/data/jumbotron";
import { keunggulan } from "@/data/keunggulan";
import { materiCpns } from "@/data/materi";
import { paketProgram } from "@/data/paket-program";
import { seleksiCpns } from "@/data/seleksi";
import { passingGradeCpns } from "@/data/passing-grade";
import { updateSeleksiCpns } from "@/data/update-seleksi";
import { tantanganSeleksiCpns } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanCpns } from "@/data/jangkauan";
import { ctaFooter } from "@/data/cta-footer";
import { faqCpns } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { artikelTerbaru } from "@/data/artikel-terbaru";
import { konsultasiPage, pageKonsultasiUrl } from "@/data/contact";
import type { Region } from "@/lib/location-tree";

type BimbelCpnsProps = { provinces: Region[] };

const BimbelCpns = ({ provinces }: BimbelCpnsProps) => {
  const konsultasiUrl = pageKonsultasiUrl(konsultasiPage.cpns);
  const terbaru = artikelTerbaru();
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbCpns} />
      <Jumbotron {...jumbotronCpns(konsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <Materi {...materiCpns(konsultasiUrl)} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Seleksi {...seleksiCpns} />
      <UpdateSeleksi {...updateSeleksiCpns} />
      <PassingGrade {...passingGradeCpns} />
      <TantanganSeleksi {...tantanganSeleksiCpns(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanCpns(provinces)} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqCpns} />
      {terbaru && <ArtikelTerbaru {...terbaru} />}
    </main>
  );
};

export default BimbelCpns;
