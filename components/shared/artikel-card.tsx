import Image from "next/image";
import Link from "next/link";

export type ArtikelCardProps = {
  href: string;
  title: string;
  excerpt: string;
  kategori: string;
  cover: { src: string; alt: string };
};

const ArtikelCard = ({ href, title, excerpt, kategori, cover }: ArtikelCardProps) => (
  <article className="flex flex-col overflow-hidden rounded-xl border bg-card">
    <Link href={href} tabIndex={-1} aria-hidden="true">
      <Image
        src={cover.src}
        alt={cover.alt}
        width={1200}
        height={630}
        sizes="(min-width: 768px) 33vw, 100vw"
        className="h-auto w-full"
      />
    </Link>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <span className="text-sm font-medium text-primary-dark">{kategori}</span>
      <h3 className="text-lg font-semibold leading-snug">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
    </div>
  </article>
);

export default ArtikelCard;
