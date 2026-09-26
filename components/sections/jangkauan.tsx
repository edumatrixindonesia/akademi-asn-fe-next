import RegionLinks from "@/components/shared/region-links";

export type JangkauanProps = {
  title: string;
  description: string;
  items: { name: string; href: string }[];
};

const Jangkauan = (props: JangkauanProps) => (
  <RegionLinks id="jangkauan" className="bg-background" {...props} />
);

export default Jangkauan;
