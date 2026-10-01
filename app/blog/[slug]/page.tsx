import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArtikelPage from "@/components/pages/artikel";
import { getArtikel, getKategori, getVisibleArtikel } from "@/lib/artikel";
import { openGraphBase } from "../../shared-metadata";

export const dynamicParams = false;

export const generateStaticParams = () =>
  getVisibleArtikel().map(({ slug }) => ({ slug }));

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const entry = getArtikel((await params).slug);
  if (!entry) return {};

  const kategori = getKategori(entry.kategori)!;
  const cover = entry.cover ?? kategori.cover;
  const url = `/blog/${entry.slug}`;

  return {
    title: entry.seoTitle ?? entry.title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      ...openGraphBase,
      type: "article",
      url,
      title: entry.seoTitle ?? entry.title,
      description: entry.description,
      images: [{ url: cover.src, width: 1200, height: 630, alt: cover.alt }],
      publishedTime: entry.publishedAt,
      modifiedTime: entry.updatedAt ?? entry.publishedAt,
      section: kategori.name,
    },
  };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const entry = getArtikel((await params).slug);
  if (!entry) notFound();

  return <ArtikelPage entry={entry} />;
}
