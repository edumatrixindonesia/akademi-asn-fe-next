import Image from "next/image";
import Link from "next/link";
import type { ArtikelCardProps } from "@/components/shared/artikel-card";
import KonsultasiCard, { type KonsultasiCardProps } from "@/components/shared/konsultasi-card";
import SearchArtikelForm, { type SearchArtikelFormProps } from "@/components/shared/search-artikel-form";

export type ArtikelSidebarProps = {
  konsultasi: KonsultasiCardProps;
  search: SearchArtikelFormProps;
  terbaruTitle: string;
  terbaru: ArtikelCardProps[];
};

const ArtikelSidebar = ({ konsultasi, search, terbaruTitle, terbaru }: ArtikelSidebarProps) => (
  <aside className="space-y-6 lg:sticky lg:top-24">
    <KonsultasiCard {...konsultasi} />
    <SearchArtikelForm {...search} />
    {terbaru.length > 0 && (
      <section aria-labelledby="artikel-terbaru-title">
        <h2 id="artikel-terbaru-title" className="text-xl font-bold text-primary-dark">
          {terbaruTitle}
        </h2>
        <ul className="mt-3 space-y-4">
          {terbaru.map(({ href, title, cover }) => (
            <li key={href} className="flex items-center gap-3">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={96}
                height={50}
                sizes="96px"
                className="h-auto w-24 shrink-0 rounded-md"
              />
              <Link href={href} className="font-medium leading-snug hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )}
  </aside>
);

export default ArtikelSidebar;
