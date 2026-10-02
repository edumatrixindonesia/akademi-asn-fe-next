import type { ArtikelCardProps } from "@/components/shared/artikel-card";
import type { Artikel } from "@/lib/artikel-schema";
import { dated, getReadingLabel, getWordCount, resolveArtikel } from "@/lib/artikel";

export const artikelCard = (entry: Artikel) => {
  const { kategori, cover } = resolveArtikel(entry);

  return {
    href: `/blog/${entry.slug}`,
    title: entry.title,
    excerpt: entry.excerpt,
    kategori: kategori.name,
    cover,
    publishedAt: dated(entry.publishedAt),
    readingTime: getReadingLabel(getWordCount(entry.slug)),
  } satisfies ArtikelCardProps;
};
