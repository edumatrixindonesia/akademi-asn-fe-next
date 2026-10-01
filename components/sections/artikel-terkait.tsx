import ArtikelCard, { type ArtikelCardProps } from "@/components/shared/artikel-card";

export type ArtikelTerkaitProps = {
  title: string;
  items: ArtikelCardProps[];
};

const ArtikelTerkait = ({ title, items }: ArtikelTerkaitProps) => (
  <section aria-labelledby="artikel-terkait-title" className="mt-12">
    <h2 id="artikel-terkait-title" className="text-2xl font-bold text-primary-dark">
      {title}
    </h2>
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <ArtikelCard key={item.href} {...item} />
      ))}
    </div>
  </section>
);

export default ArtikelTerkait;
