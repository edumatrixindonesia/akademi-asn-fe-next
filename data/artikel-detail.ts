import { siteUrl } from "@/app/shared-metadata";
import type { ArtikelDetailProps } from "@/components/sections/artikel-detail";
import type { Artikel } from "@/lib/artikel-schema";
import { getKategori, getPenulis, getReadingMinutes } from "@/lib/artikel";

const dateLabel = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "UTC",
});

const dated = (iso?: string) => (iso ? { iso, label: dateLabel.format(new Date(iso)) } : undefined);

export const artikelDetail = (entry: Artikel, wordCount: number) => {
  const kategori = getKategori(entry.kategori)!;
  const penulis = getPenulis(entry.penulis)!;
  const cover = entry.cover ?? kategori.cover;
  const url = `${siteUrl}/blog/${entry.slug}`;

  return {
    kategori: { name: kategori.name, href: `/blog/kategori/${kategori.slug}` },
    title: entry.title,
    penulis: { name: penulis.name, href: `/blog/penulis/${penulis.slug}` },
    publishedAt: dated(entry.publishedAt),
    updatedAt: dated(entry.updatedAt),
    readingTime: `${getReadingMinutes(wordCount)} menit baca`,
    cover,
    excerpt: entry.excerpt,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: entry.title,
      description: entry.description,
      image: `${siteUrl}${cover.src}`,
      datePublished: entry.publishedAt,
      dateModified: entry.updatedAt ?? entry.publishedAt,
      author:
        penulis.type === "person"
          ? {
              "@type": "Person",
              name: penulis.name,
              jobTitle: penulis.jobTitle,
              url: `${siteUrl}/blog/penulis/${penulis.slug}`,
              sameAs: penulis.sameAs,
            }
          : { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: kategori.name,
      wordCount,
      inLanguage: "id-ID",
    },
  } satisfies ArtikelDetailProps;
};
