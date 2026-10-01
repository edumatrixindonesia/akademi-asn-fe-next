import Image from "next/image";
import Link from "next/link";

export type ArtikelCardProps = {
  href: string;
  title: string;
  excerpt: string;
  kategori: string;
  cover: { src: string; alt: string };
  publishedAt?: { iso: string; label: string };
  readingTime: string;
  // The first row is above the fold, so its cover is the LCP candidate.
  priority?: boolean;
};

const ArtikelCard = ({
  href,
  title,
  excerpt,
  kategori,
  cover,
  publishedAt,
  readingTime,
  priority,
}: ArtikelCardProps) => (
  <article className="flex flex-col overflow-hidden rounded-xl border bg-card">
    <Link href={href} tabIndex={-1} aria-hidden="true">
      <Image
        src={cover.src}
        alt={cover.alt}
        width={1200}
        height={630}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={priority}
        className="h-auto w-full"
      />
    </Link>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <span className="text-sm font-medium text-primary-dark">{kategori}</span>
      <h3 className="line-clamp-2 text-lg font-semibold leading-snug">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
      <p className="mt-auto flex flex-wrap gap-x-3 pt-2 text-xs text-muted-foreground">
        {publishedAt && <time dateTime={publishedAt.iso}>{publishedAt.label}</time>}
        <span>{readingTime}</span>
      </p>
    </div>
  </article>
);

export default ArtikelCard;
