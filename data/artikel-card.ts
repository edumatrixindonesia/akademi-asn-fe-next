import type { ArtikelCardProps } from "@/components/shared/artikel-card";
import type { Artikel } from "@/lib/artikel-schema";
import { dated, getKategori, getReadingLabel, getWordCount } from "@/lib/artikel";

export const artikelCard = (entry: Artikel) => {
  const kategori = getKategori(entry.kategori)!;

  return {
    href: `/blog/${entry.slug}`,
    title: entry.title,
    excerpt: entry.excerpt,
    kategori: kategori.name,
    cover: entry.cover ?? kategori.cover,
    publishedAt: dated(entry.publishedAt),
    readingTime: getReadingLabel(getWordCount(entry.slug)),
  } satisfies ArtikelCardProps;
};
