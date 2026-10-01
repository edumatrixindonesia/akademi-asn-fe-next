import KonsultasiCard from "@/components/shared/konsultasi-card";
import { konsultasiMdx } from "@/data/artikel-konsultasi";
import { getKonsultasiUrl } from "@/data/contact";

const CtaKonsultasi = ({ topic }: { topic?: string }) => (
  <KonsultasiCard {...konsultasiMdx(getKonsultasiUrl(topic))} />
);

export default CtaKonsultasi;
