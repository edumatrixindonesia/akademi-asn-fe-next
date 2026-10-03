import Breadcrumb from "@/components/sections/breadcrumb";
import Jumbotron from "@/components/sections/jumbotron";
import Intro from "@/components/sections/intro";
import Keunggulan from "@/components/sections/keunggulan";
import Materi from "@/components/sections/materi";
import PaketProgram from "@/components/sections/paket-program";
import KelasOffline from "@/components/sections/kelas-offline";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import TantanganSeleksi from "@/components/sections/tantangan-seleksi";
import Lembaga from "@/components/sections/lembaga";
import Testimoni from "@/components/sections/testimoni";
import Jangkauan from "@/components/sections/jangkauan";
import LokasiLain from "@/components/sections/lokasi-lain";
import CtaFooter from "@/components/sections/cta-footer";
import ArtikelTerbaru from "@/components/sections/artikel-terbaru";
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { breadcrumbCpnsLocation } from "@/data/breadcrumb";
import { jumbotronCpnsLocation } from "@/data/jumbotron";
import { introCpnsLocation } from "@/data/intro";
import { keunggulanLocation } from "@/data/keunggulan";
import { materiCpns } from "@/data/materi";
import { paketProgramLocation } from "@/data/paket-program";
import { kelasOfflineLocation } from "@/data/kelas-offline";
import { seleksiHome } from "@/data/seleksi";
import { passingGradeHome } from "@/data/passing-grade";
import { tantanganSeleksiCpns } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanCpnsLocation } from "@/data/jangkauan";
import { lokasiLainCpnsLocation } from "@/data/lokasi-lain";
import { ctaFooterLocation } from "@/data/cta-footer";
import { faqCpns } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { artikelTerbaru } from "@/data/artikel-terbaru";
import { getKonsultasiUrl } from "@/data/contact";
import {
  headlineLabel,
  locationLabel,
  type ResolvedLocation,
} from "@/lib/location-tree";

type BimbelCpnsLocationProps = { location: ResolvedLocation };

const BimbelCpnsLocation = ({ location }: BimbelCpnsLocationProps) => {
  const konsultasiUrl = getKonsultasiUrl();
  const terbaru = artikelTerbaru("cpns");
  const label = locationLabel(location);
  const kelasOffline = kelasOfflineLocation(location);
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbCpnsLocation(location)} />
      <Jumbotron
        {...jumbotronCpnsLocation(konsultasiUrl, headlineLabel(location))}
      />
      <Intro {...introCpnsLocation(location)} />
      <Keunggulan {...keunggulanLocation(label)} />
      <Materi {...materiCpns(konsultasiUrl)} />
      <PaketProgram {...paketProgramLocation(konsultasiUrl, label)} />
      {kelasOffline && <KelasOffline {...kelasOffline} />}
      <Seleksi {...seleksiHome} />
      <PassingGrade {...passingGradeHome} />
      <TantanganSeleksi {...tantanganSeleksiCpns(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanCpnsLocation(location)} />
      <LokasiLain {...lokasiLainCpnsLocation(location)} />
      <CtaFooter {...ctaFooterLocation(konsultasiUrl, label)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqCpns} />
      {terbaru && <ArtikelTerbaru {...terbaru} />}
    </main>
  );
};

export default BimbelCpnsLocation;
