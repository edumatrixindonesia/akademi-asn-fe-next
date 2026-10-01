import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export type ArtikelDetailProps = {
  kategori: { name: string; href: string };
  title: string;
  penulis: { name: string; href: string };
  publishedAt?: { iso: string; label: string };
  updatedAt?: { iso: string; label: string };
  readingTime: string;
  cover: { src: string; alt: string };
  excerpt: string;
  jsonLd: Record<string, unknown>;
};

const ArtikelDetail = ({
  kategori,
  title,
  penulis,
  publishedAt,
  updatedAt,
  readingTime,
  cover,
  excerpt,
  jsonLd,
  children,
}: ArtikelDetailProps & { children: ReactNode }) => (
  <article className="container-section max-w-3xl! pt-4! md:pt-6!">
    <Link
      href={kategori.href}
      className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark hover:bg-primary/20"
    >
      {kategori.name}
    </Link>

    <h1 className="mt-4 text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
      {title}
    </h1>

    <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
      <Link href={penulis.href} className="font-medium text-foreground hover:underline">
        {penulis.name}
      </Link>
      {publishedAt && <time dateTime={publishedAt.iso}>{publishedAt.label}</time>}
      {updatedAt && (
        <span>
          Diperbarui <time dateTime={updatedAt.iso}>{updatedAt.label}</time>
        </span>
      )}
      <span>{readingTime}</span>
    </p>

    <Image
      src={cover.src}
      alt={cover.alt}
      width={1200}
      height={630}
      sizes="(min-width: 768px) 768px, 100vw"
      // The cover is the LCP element, so skip lazy loading.
      loading="eager"
      fetchPriority="high"
      className="mt-6 h-auto w-full rounded-xl"
    />

    <p className="mx-auto mt-8 max-w-2xl text-center text-lg italic leading-relaxed text-foreground/80">
      {excerpt}
    </p>

    <div className="artikel-body mt-8">{children}</div>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  </article>
);

export default ArtikelDetail;
