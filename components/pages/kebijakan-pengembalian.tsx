import Breadcrumb from "@/components/sections/breadcrumb";
import KebijakanPengembalian from "@/components/sections/kebijakan-pengembalian";
import { breadcrumbKebijakanPengembalian } from "@/data/breadcrumb";
import { getKonsultasiUrl } from "@/data/contact";
import { kebijakanPengembalian } from "@/data/kebijakan-pengembalian";

const KebijakanPengembalianPage = () => (
  <main className="flex-1">
    <Breadcrumb {...breadcrumbKebijakanPengembalian} />
    <KebijakanPengembalian {...kebijakanPengembalian(getKonsultasiUrl)} />
  </main>
);

export default KebijakanPengembalianPage;
