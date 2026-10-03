import Breadcrumb from "@/components/sections/breadcrumb";
import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import Materi from "@/components/sections/materi";
import PaketProgram from "@/components/sections/paket-program";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import TantanganSeleksi from "@/components/sections/tantangan-seleksi";
import Lembaga from "@/components/sections/lembaga";
import Testimoni from "@/components/sections/testimoni";
import Jangkauan from "@/components/sections/jangkauan";
import CtaFooter from "@/components/sections/cta-footer";
import ArtikelTerbaru from "@/components/sections/artikel-terbaru";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { breadcrumbPppk } from "@/data/breadcrumb";
import { jumbotronPppk } from "@/data/jumbotron";
import { keunggulan } from "@/data/keunggulan";
import { materiPppk } from "@/data/materi";
import { paketProgram } from "@/data/paket-program";
import { seleksiPppk } from "@/data/seleksi";
import { passingGradePppk } from "@/data/passing-grade";
import { tantanganSeleksiPppk } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanPppk } from "@/data/jangkauan";
import { ctaFooter } from "@/data/cta-footer";
import { faqPppk } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { artikelTerbaru } from "@/data/artikel-terbaru";
import { getKonsultasiUrl } from "@/data/contact";
import type { Region } from "@/lib/location-tree";

type BimbelPppkProps = { provinces: Region[] };

const BimbelPppk = ({ provinces }: BimbelPppkProps) => {
  const konsultasiUrl = getKonsultasiUrl();
  const terbaru = artikelTerbaru("pppk");
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbPppk} />
      <Jumbotron {...jumbotronPppk(konsultasiUrl)} />
      <Keunggulan {...keunggulan} />
      <Materi {...materiPppk(konsultasiUrl)} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Seleksi {...seleksiPppk} />
      <PassingGrade {...passingGradePppk} />
      <TantanganSeleksi {...tantanganSeleksiPppk(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanPppk(provinces)} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqPppk} />
      {terbaru && <ArtikelTerbaru {...terbaru} />}
    </main>
  );
};

export default BimbelPppk;
