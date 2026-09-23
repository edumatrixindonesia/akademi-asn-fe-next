import Jumbotron from "@/components/sections/jumbotron";
import { jumbotronHome } from "@/data/jumbotron";

const Home = () => {
  return (
    <main className="container-section flex-1">
      <Jumbotron {...jumbotronHome} />
    </main>
  );
};

export default Home;
