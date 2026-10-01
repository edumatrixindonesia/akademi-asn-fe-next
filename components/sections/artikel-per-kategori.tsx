import Link from "next/link";
import ArtikelCard, { type ArtikelCardProps } from "@/components/shared/artikel-card";

export type ArtikelPerKategoriProps = {
  title: string;
  linkLabel: string;
  href: string;
  items: ArtikelCardProps[];
};

const ArtikelPerKategori = ({ title, linkLabel, href, items }: ArtikelPerKategoriProps) => (
  <section aria-label={title} className="container-section pt-0! md:pt-0!">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h2 className="text-2xl font-bold text-primary-dark">{title}</h2>
      <Link href={href} className="font-medium text-primary hover:underline">
        {linkLabel}
        <span className="sr-only"> {title}</span>
      </Link>
    </div>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ArtikelCard key={item.href} {...item} />
      ))}
    </div>
  </section>
);

export default ArtikelPerKategori;
