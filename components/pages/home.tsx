import Jumbotron from "@/components/sections/jumbotron";
import { jumbotronHome } from "@/data/jumbotron";
import { getKonsultasiUrl } from "@/data/contact";

const Home = () => {
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronHome(getKonsultasiUrl())} />
    </main>
  );
};

export default Home;
