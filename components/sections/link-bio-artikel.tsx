import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LinkBioHeading from "@/components/shared/link-bio-heading";

export type LinkBioArtikelProps = {
  title: string;
  linkLabel: string;
  href: string;
  items: { title: string; kategori: string; href: string }[];
};

const LinkBioArtikel = ({ title, linkLabel, href, items }: LinkBioArtikelProps) => (
  <section aria-labelledby="link-bio-artikel-title" className="mt-6">
    <LinkBioHeading id="link-bio-artikel-title" title={title} />
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block rounded-2xl border bg-card px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
          >
            <span className="text-xs font-medium text-primary-dark">{item.kategori}</span>
            <h3 className="mt-0.5 line-clamp-2 font-semibold leading-snug">{item.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
    <Link
      href={href}
      className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
    >
      {linkLabel}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  </section>
);

export default LinkBioArtikel;
