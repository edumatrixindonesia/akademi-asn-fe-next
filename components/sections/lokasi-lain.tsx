import RegionLinks from "@/components/shared/region-links";

export type LokasiLainProps = {
  title: string;
  description: string;
  items: { name: string; href: string }[];
};

const LokasiLain = (props: LokasiLainProps) => (
  <RegionLinks id="lokasi-lain" className="bg-muted" {...props} />
);

export default LokasiLain;
