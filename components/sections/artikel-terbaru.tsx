import Link from "next/link";
import ArtikelCard, { type ArtikelCardProps } from "@/components/shared/artikel-card";

export type ArtikelTerbaruProps = {
  title: string;
  linkLabel: string;
  href: string;
  items: ArtikelCardProps[];
};

const ArtikelTerbaru = ({ title, linkLabel, href, items }: ArtikelTerbaruProps) => (
  <section aria-labelledby="artikel-terbaru-title">
    <div className="container-section">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="artikel-terbaru-title"
          className="text-2xl font-bold text-primary-dark md:text-3xl"
        >
          {title}
        </h2>
        <Link href={href} className="font-medium text-primary hover:underline">
          {linkLabel}
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ArtikelCard key={item.href} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default ArtikelTerbaru;
