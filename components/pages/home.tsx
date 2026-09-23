import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import Materi from "@/components/sections/materi";
import { jumbotronHome } from "@/data/jumbotron";
import { keunggulanHome } from "@/data/keunggulan";
import { materiHome } from "@/data/materi";
import { getKonsultasiUrl } from "@/data/contact";

const Home = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronHome(konsultasiUrl)} />
      <Keunggulan {...keunggulanHome} />
      <Materi {...materiHome(konsultasiUrl)} />
    </main>
  );
};

export default Home;
