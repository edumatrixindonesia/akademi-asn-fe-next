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
import Faq from "@/components/sections/faq";
import MediaMassa from "@/components/sections/media-massa";
import { breadcrumbHomeLocation } from "@/data/breadcrumb";
import { jumbotronHomeLocation } from "@/data/jumbotron";
import { introHomeLocation } from "@/data/intro";
import { keunggulanLocation } from "@/data/keunggulan";
import { materiHome } from "@/data/materi";
import { paketProgramLocation } from "@/data/paket-program";
import { kelasOfflineLocation } from "@/data/kelas-offline";
import { seleksiHome } from "@/data/seleksi";
import { passingGradeHome } from "@/data/passing-grade";
import { tantanganSeleksiHome } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanHomeLocation } from "@/data/jangkauan";
import { lokasiLainHomeLocation } from "@/data/lokasi-lain";
import { ctaFooterLocation } from "@/data/cta-footer";
import { faqHome } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { getKonsultasiUrl } from "@/data/contact";
import { headlineLabel, locationLabel, type ResolvedLocation } from "@/lib/location-tree";

type HomeLocationProps = { location: ResolvedLocation };

const HomeLocation = ({ location }: HomeLocationProps) => {
  const konsultasiUrl = getKonsultasiUrl();
  const label = locationLabel(location);
  const kelasOffline = kelasOfflineLocation(location);
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbHomeLocation(location)} />
      <Jumbotron {...jumbotronHomeLocation(konsultasiUrl, headlineLabel(location))} />
      <Intro {...introHomeLocation(location)} />
      <Keunggulan {...keunggulanLocation(label)} />
      <Materi {...materiHome(konsultasiUrl)} />
      <PaketProgram {...paketProgramLocation(konsultasiUrl, label)} />
      {kelasOffline && <KelasOffline {...kelasOffline} />}
      <Seleksi {...seleksiHome} />
      <PassingGrade {...passingGradeHome} />
      <TantanganSeleksi {...tantanganSeleksiHome(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanHomeLocation(location)} />
      <LokasiLain {...lokasiLainHomeLocation(location)} />
      <CtaFooter {...ctaFooterLocation(konsultasiUrl, label)} />
      <MediaMassa {...mediaMassa} />
      <Faq {...faqHome} />
    </main>
  );
};

export default HomeLocation;
