import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import Materi from "@/components/sections/materi";
import PaketProgram from "@/components/sections/paket-program";
import Seleksi from "@/components/sections/seleksi";
import PassingGrade from "@/components/sections/passing-grade";
import { jumbotronHome } from "@/data/jumbotron";
import { keunggulanHome } from "@/data/keunggulan";
import { materiHome } from "@/data/materi";
import { paketProgramHome } from "@/data/paket-program";
import { seleksiHome } from "@/data/seleksi";
import { passingGradeHome } from "@/data/passing-grade";
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
    </main>
  );
};

export default Home;
