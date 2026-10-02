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
import { breadcrumbPppkLocation } from "@/data/breadcrumb";
import { jumbotronPppkLocation } from "@/data/jumbotron";
import { introPppkLocation } from "@/data/intro";
import { keunggulanLocation } from "@/data/keunggulan";
import { materiPppk } from "@/data/materi";
import { paketProgramLocation } from "@/data/paket-program";
import { kelasOfflineLocation } from "@/data/kelas-offline";
import { seleksiPppk } from "@/data/seleksi";
import { passingGradePppk } from "@/data/passing-grade";
import { tantanganSeleksiPppk } from "@/data/tantangan-seleksi";
import { lembaga } from "@/data/lembaga";
import { testimoni } from "@/data/testimoni";
import { jangkauanPppkLocation } from "@/data/jangkauan";
import { lokasiLainPppkLocation } from "@/data/lokasi-lain";
import { ctaFooterLocation } from "@/data/cta-footer";
import { faqPppk } from "@/data/faq";
import { mediaMassa } from "@/data/media-massa";
import { artikelTerbaru } from "@/data/artikel-terbaru";
import { getKonsultasiUrl } from "@/data/contact";
import {
  headlineLabel,
  locationLabel,
  type ResolvedLocation,
} from "@/lib/location-tree";

type BimbelPppkLocationProps = { location: ResolvedLocation };

const BimbelPppkLocation = ({ location }: BimbelPppkLocationProps) => {
  const konsultasiUrl = getKonsultasiUrl();
  const terbaru = artikelTerbaru("pppk");
  const label = locationLabel(location);
  const kelasOffline = kelasOfflineLocation(location);
  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbPppkLocation(location)} />
      <Jumbotron
        {...jumbotronPppkLocation(konsultasiUrl, headlineLabel(location))}
      />
      <Intro {...introPppkLocation(location)} />
      <Keunggulan {...keunggulanLocation(label)} />
      <Materi {...materiPppk(konsultasiUrl)} />
      <PaketProgram {...paketProgramLocation(konsultasiUrl, label)} />
      {kelasOffline && <KelasOffline {...kelasOffline} />}
      <Seleksi {...seleksiPppk} />
      <PassingGrade {...passingGradePppk} />
      <TantanganSeleksi {...tantanganSeleksiPppk(konsultasiUrl)} />
      <Lembaga {...lembaga} />
      <Testimoni {...testimoni} />
      <Jangkauan {...jangkauanPppkLocation(location)} />
      <LokasiLain {...lokasiLainPppkLocation(location)} />
      <CtaFooter {...ctaFooterLocation(konsultasiUrl, label)} />
      <MediaMassa {...mediaMassa} />
      {terbaru && <ArtikelTerbaru {...terbaru} />}
      <Faq {...faqPppk} />
    </main>
  );
};

export default BimbelPppkLocation;
