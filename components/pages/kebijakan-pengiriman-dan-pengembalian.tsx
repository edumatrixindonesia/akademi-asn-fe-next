import Breadcrumb from "@/components/sections/breadcrumb";
import KebijakanPengirimanDanPengembalian from "@/components/sections/kebijakan-pengiriman-dan-pengembalian";
import { breadcrumbKebijakanPengirimanDanPengembalian } from "@/data/breadcrumb";
import { getKonsultasiUrl } from "@/data/contact";
import { kebijakanPengirimanDanPengembalian } from "@/data/kebijakan-pengiriman-dan-pengembalian";

const KebijakanPengirimanDanPengembalianPage = () => (
  <main className="flex-1">
    <Breadcrumb {...breadcrumbKebijakanPengirimanDanPengembalian} />
    <KebijakanPengirimanDanPengembalian {...kebijakanPengirimanDanPengembalian(getKonsultasiUrl)} />
  </main>
);

export default KebijakanPengirimanDanPengembalianPage;
