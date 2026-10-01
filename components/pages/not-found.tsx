import NotFoundSection from "@/components/sections/not-found";
import PaketProgram from "@/components/sections/paket-program";
import Testimoni from "@/components/sections/testimoni";
import { notFound } from "@/data/not-found";
import { paketProgram } from "@/data/paket-program";
import { testimoni } from "@/data/testimoni";
import { getKonsultasiUrl } from "@/data/contact";

// Paket Program and Testimoni are here so the navbar's #paket-program and
// #testimoni anchors still land somewhere on the 404 page.
const NotFound = () => {
  const konsultasiUrl = getKonsultasiUrl();
  return (
    <main className="flex-1">
      <NotFoundSection {...notFound(konsultasiUrl)} />
      <PaketProgram {...paketProgram(konsultasiUrl)} />
      <Testimoni {...testimoni} />
    </main>
  );
};

export default NotFound;
