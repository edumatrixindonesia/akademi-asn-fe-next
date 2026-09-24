import Jumbotron from "@/components/sections/jumbotron";
import { jumbotronPppk } from "@/data/jumbotron";
import { getKonsultasiUrl } from "@/data/contact";

const BimbelPppk = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronPppk(konsultasiUrl)} />
    </main>
  );
};

export default BimbelPppk;
