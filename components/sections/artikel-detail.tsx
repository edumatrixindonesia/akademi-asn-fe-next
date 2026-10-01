import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import KonsultasiCard, { type KonsultasiCardProps } from "@/components/shared/konsultasi-card";

export type ArtikelDetailProps = {
  kategori: { name: string; href: string };
  title: string;
  penulis: {
    name: string;
    href: string;
    jobTitle?: string;
    bio: string;
    avatar: { src: string; alt: string };
    linkLabel: string;
  };
  publishedAt?: { iso: string; label: string };
  updatedAt?: { iso: string; label: string };
  readingTime: string;
  cover: { src: string; alt: string };
  excerpt: string;
  tocTitle: string;
  toc: { id: string; title: string }[];
  referensiTitle: string;
  references: { title: string; url: string; publisher: string; accessedLabel: string }[];
  pertanyaan: KonsultasiCardProps;
  shareTitle: string;
  share: { name: string; href: string }[];
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
  tocTitle,
  toc,
  referensiTitle,
  references,
  pertanyaan,
  shareTitle,
  share,
  jsonLd,
  children,
}: ArtikelDetailProps & { children: ReactNode }) => (
  <article className="min-w-0">
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
      sizes="(min-width: 1024px) 800px, 100vw"
      // The cover is the LCP element, so skip lazy loading.
      loading="eager"
      fetchPriority="high"
      className="mt-6 h-auto w-full rounded-xl"
    />

    <p className="mx-auto mt-8 max-w-2xl text-center text-lg italic leading-relaxed text-foreground/80">
      {excerpt}
    </p>

    {toc.length >= 3 && (
      <details className="mt-8 rounded-xl border bg-muted p-4">
        <summary className="cursor-pointer font-semibold text-primary-dark">{tocTitle}</summary>
        <ol className="mt-3 list-decimal space-y-1 pl-6">
          {toc.map(({ id, title: heading }) => (
            <li key={id}>
              <a href={`#${id}`} className="text-primary hover:underline">
                {heading}
              </a>
            </li>
          ))}
        </ol>
      </details>
    )}

    <div className="artikel-body mt-8">{children}</div>

    <section aria-labelledby="referensi-title" className="mt-10">
      <h2 id="referensi-title" className="text-xl font-bold text-primary-dark">
        {referensiTitle}
      </h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm">
        {references.map(({ title: refTitle, url, publisher, accessedLabel }, index) => (
          <li key={`${index}-${url}`}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-primary hover:underline"
            >
              {refTitle}
            </a>
            , {publisher}. {accessedLabel}
          </li>
        ))}
      </ol>
    </section>

    <KonsultasiCard {...pertanyaan} className="mt-10" />

    <section className="mt-10 flex gap-4 rounded-xl border p-4">
      <Image
        src={penulis.avatar.src}
        alt={penulis.avatar.alt}
        width={64}
        height={64}
        className="size-16 shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold">
          <Link href={penulis.href} className="hover:underline">
            {penulis.name}
          </Link>
        </p>
        {penulis.jobTitle && <p className="text-sm text-muted-foreground">{penulis.jobTitle}</p>}
        <p className="mt-2 text-sm leading-relaxed">{penulis.bio}</p>
        <Link href={penulis.href} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
          {penulis.linkLabel}
        </Link>
      </div>
    </section>

    <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      <strong>{shareTitle}</strong>
      {share.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {name}
        </a>
      ))}
    </p>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  </article>
);

export default ArtikelDetail;
