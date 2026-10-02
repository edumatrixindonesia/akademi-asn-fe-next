import { siteUrl } from "@/app/shared-metadata";
import type { ArtikelDetailProps } from "@/components/sections/artikel-detail";
import type { Artikel } from "@/lib/artikel-schema";
import { konsultasiPertanyaan } from "@/data/artikel-konsultasi";
import { dated, getHeadings, getPenulis, getReadingLabel, resolveArtikel } from "@/lib/artikel";
import { kategoriPath, penulisPath } from "@/lib/blog-path";

export const artikelDetail = (entry: Artikel, wordCount: number, konsultasiUrl: string) => {
  const { kategori, cover } = resolveArtikel(entry);
  const penulis = getPenulis(entry.penulis)!;
  const url = `${siteUrl}/blog/${entry.slug}`;
  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(entry.title);

  return {
    kategori: { name: kategori.name, href: kategoriPath(kategori.slug) },
    title: entry.title,
    penulis: {
      name: penulis.name,
      href: penulisPath(penulis.slug),
      jobTitle: penulis.jobTitle,
      bio: penulis.bio,
      avatar: penulis.avatar,
      linkLabel: `Lihat semua artikel ${penulis.name}`,
    },
    publishedAt: dated(entry.publishedAt),
    updatedAt: dated(entry.updatedAt),
    readingTime: getReadingLabel(wordCount),
    cover,
    excerpt: entry.excerpt,
    tocTitle: "Daftar Isi",
    toc: getHeadings(entry.slug),
    referensiTitle: "Referensi",
    references: entry.references.map(({ title, url, publisher, accessedAt }) => ({
      title,
      url,
      publisher,
      accessedLabel: `Diakses ${dated(accessedAt)!.label}.`,
    })),
    pertanyaan: konsultasiPertanyaan(konsultasiUrl),
    shareTitle: "Bagikan artikel ini",
    share: [
      { name: "WhatsApp", href: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}` },
      { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
      { name: "X", href: `https://x.com/intent/post?url=${shareUrl}&text=${shareText}` },
      { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` },
    ],
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
              url: `${siteUrl}${penulisPath(penulis.slug)}`,
              sameAs: penulis.sameAs.map(({ href }) => href),
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
