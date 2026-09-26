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
import LokasiLain from "@/components/sections/lokasi-lain";
import CtaFooter from "@/components/sections/cta-footer";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { breadcrumbBumnLocation } from "@/data/breadcrumb";
import { jumbotronBumnLocation } from "@/data/jumbotron";
import { keunggulan } from "@/data/keunggulan";
import { materiBumn } from "@/data/materi";
import { paketProgram } from "@/data/paket-program";
import { seleksiBumn } from "@/data/seleksi";
import { passingGradeBumn } from "@/data/passing-grade";
import { tantanganSeleksiBumn } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanBumnLocation } from "@/data/jangkauan";
import { lokasiLainBumnLocation } from "@/data/lokasi-lain";
import { ctaFooter } from "@/data/cta-footer";
import { faqBumn } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { getKonsultasiUrl } from "@/data/contact";
import { locationLabel, type ResolvedLocation } from "@/lib/location-tree";

type BimbelBumnLocationProps = { location: ResolvedLocation };

const BimbelBumnLocation = ({ location }: BimbelBumnLocationProps) => {
  const konsultasiUrl = getKonsultasiUrl();
  const label = locationLabel(location);
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbBumnLocation(location)} />
      <Jumbotron {...jumbotronBumnLocation(konsultasiUrl, label)} />
      <Keunggulan {...keunggulan} />
      <Materi {...materiBumn(konsultasiUrl)} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Seleksi {...seleksiBumn} />
      <PassingGrade {...passingGradeBumn} />
      <TantanganSeleksi {...tantanganSeleksiBumn(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanBumnLocation(location)} />
      <LokasiLain {...lokasiLainBumnLocation(location)} />
      <CtaFooter {...ctaFooter(konsultasiUrl)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqBumn} />
    </main>
  );
};

export default BimbelBumnLocation;
