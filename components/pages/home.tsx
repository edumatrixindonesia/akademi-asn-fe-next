import Jumbotron from "@/components/sections/jumbotron";
import Keunggulan from "@/components/sections/keunggulan";
import { jumbotronHome } from "@/data/jumbotron";
import { keunggulanHome } from "@/data/keunggulan";
import { getKonsultasiUrl } from "@/data/contact";

const Home = () => {
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronHome(getKonsultasiUrl())} />
      <Keunggulan {...keunggulanHome} />
    </main>
  );
};

export default Home;
