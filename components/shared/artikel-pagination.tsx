import Link from "next/link";
import { cn } from "@/lib/utils";

export type ArtikelPaginationProps = {
  label: string;
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
  // `null` marks a gap between page numbers.
  pages: ({ page: number; href: string; current: boolean; ariaLabel: string } | null)[];
};

const linkClass = "rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted";

const ArtikelPagination = ({ label, previous, next, pages }: ArtikelPaginationProps) => (
  <nav aria-label={label} className="mt-10 flex flex-wrap items-center justify-center gap-2">
    {previous && (
      <Link href={previous.href} rel="prev" className={linkClass}>
        {previous.label}
      </Link>
    )}
    {pages.map((item, index) =>
      item ? (
        <Link
          key={item.page}
          href={item.href}
          aria-label={item.ariaLabel}
          aria-current={item.current ? "page" : undefined}
          className={cn(linkClass, item.current && "border-primary bg-primary text-primary-foreground hover:bg-primary")}
        >
          {item.page}
        </Link>
      ) : (
        <span key={`gap-${index}`} aria-hidden="true">
          …
        </span>
      ),
    )}
    {next && (
      <Link href={next.href} rel="next" className={linkClass}>
        {next.label}
      </Link>
    )}
  </nav>
);

export default ArtikelPagination;
