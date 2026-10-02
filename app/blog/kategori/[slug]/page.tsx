import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogKategoriPage from "@/components/pages/blog-kategori";
import { kategori } from "@/data/kategori";
import { getKategori } from "@/lib/artikel";
import { kategoriPath } from "@/lib/blog-path";
import { listingMetadata } from "../../../shared-metadata";

export const dynamicParams = false;

export const generateStaticParams = () => kategori.map(({ slug }) => ({ slug }));

export async function generateMetadata({
  params,
}: PageProps<"/blog/kategori/[slug]">): Promise<Metadata> {
  const entry = getKategori((await params).slug);
  if (!entry) return {};

  return listingMetadata({
    title: entry.seoTitle,
    description: entry.metaDescription,
    path: kategoriPath(entry.slug),
  });
}

export default async function Page({ params }: PageProps<"/blog/kategori/[slug]">) {
  const { slug } = await params;
  if (!getKategori(slug)) notFound();

  return <BlogKategoriPage slug={slug} page={1} />;
}
