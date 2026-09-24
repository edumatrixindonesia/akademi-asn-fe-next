import Jumbotron from "@/components/sections/jumbotron";
import { jumbotronCpns } from "@/data/jumbotron";
import { getKonsultasiUrl } from "@/data/contact";

const BimbelCpns = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <Jumbotron {...jumbotronCpns(konsultasiUrl)} />
    </main>
  );
};

export default BimbelCpns;
