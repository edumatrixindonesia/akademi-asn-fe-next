import Jumbotron from "@/components/sections/jumbotron";
import { jumbotronBumn } from "@/data/jumbotron";
import { getKonsultasiUrl } from "@/data/contact";

const BimbelBumn = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronBumn(konsultasiUrl)} />
    </main>
  );
};

export default BimbelBumn;
