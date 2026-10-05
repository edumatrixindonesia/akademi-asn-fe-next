import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArtikelPage from "@/components/pages/artikel";
import { artikelDateTime, getArtikel, getVisibleArtikel, resolveArtikel } from "@/lib/artikel";
import { openGraphBase, rssAlternate } from "../../shared-metadata";

export const dynamicParams = false;

export const generateStaticParams = () =>
  getVisibleArtikel().map(({ slug }) => ({ slug }));

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const entry = getArtikel((await params).slug);
  if (!entry) return {};

  const { kategori, cover, seoTitle } = resolveArtikel(entry);
  const url = `/blog/${entry.slug}`;

  return {
    title: seoTitle,
    description: entry.description,
    alternates: { canonical: url, types: rssAlternate },
    openGraph: {
      ...openGraphBase,
      type: "article",
      url,
      title: seoTitle,
      description: entry.description,
      images: [{ url: cover.src, width: 1200, height: 630, alt: cover.alt }],
      publishedTime: artikelDateTime(entry.publishedAt),
      modifiedTime: artikelDateTime(entry.updatedAt ?? entry.publishedAt),
      section: kategori.name,
    },
  };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const entry = getArtikel((await params).slug);
  if (!entry) notFound();

  return <ArtikelPage entry={entry} />;
}
