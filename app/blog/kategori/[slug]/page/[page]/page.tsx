import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogKategoriPage from "@/components/pages/blog-kategori";
import { kategori } from "@/data/kategori";
import { getArtikelByKategori, getKategori } from "@/lib/artikel";
import { kategoriPath } from "@/lib/blog-path";
import {
  pageCount,
  pagePath,
  pageSize,
  pageSuffix,
  parsePage,
} from "@/lib/pagination";
import { listingMetadata } from "../../../../../shared-metadata";

export const dynamicParams = false;

// Page 1 is the Kategori's base URL, so the numbered pages start at 2.
export const generateStaticParams = () =>
  kategori.flatMap(({ slug }) =>
    Array.from(
      { length: pageCount(getArtikelByKategori(slug).length, pageSize) - 1 },
      (_, i) => ({ slug, page: String(i + 2) }),
    ),
  );

export async function generateMetadata({
  params,
}: PageProps<"/blog/kategori/[slug]/page/[page]">): Promise<Metadata> {
  const { slug, page: rawPage } = await params;
  const entry = getKategori(slug);
  const page = parsePage(rawPage);
  if (!entry || !page) return {};

  return listingMetadata({
    title: `${entry.seoTitle}${pageSuffix(page)}`,
    description: entry.metaDescription,
    path: pagePath(kategoriPath(entry.slug), page),
  });
}

export default async function Page({
  params,
}: PageProps<"/blog/kategori/[slug]/page/[page]">) {
  const { slug, page: rawPage } = await params;
  const page = parsePage(rawPage);
  if (!page) notFound();

  return <BlogKategoriPage slug={slug} page={page} />;
}
