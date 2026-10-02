import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPenulisPage from "@/components/pages/blog-penulis";
import { penulisMeta } from "@/data/artikel-listing";
import { penulis } from "@/data/penulis";
import { getArtikelByPenulis, getPenulis, isPenulisIndexable } from "@/lib/artikel";
import { penulisPath } from "@/lib/blog-path";
import { pageCount, pagePath, pageSize, parsePage } from "@/lib/pagination";
import { listingMetadata } from "../../../../../shared-metadata";

export const dynamicParams = false;

// Page 1 is the Penulis's base URL, so the numbered pages start at 2.
export const generateStaticParams = () =>
  penulis.flatMap(({ slug }) =>
    Array.from(
      { length: pageCount(getArtikelByPenulis(slug).length, pageSize) - 1 },
      (_, i) => ({ slug, page: String(i + 2) }),
    ),
  );

export async function generateMetadata({
  params,
}: PageProps<"/blog/penulis/[slug]/page/[page]">): Promise<Metadata> {
  const { slug, page: rawPage } = await params;
  const entry = getPenulis(slug);
  const page = parsePage(rawPage);
  if (!entry || !page) return {};

  return {
    ...listingMetadata({
      ...penulisMeta(entry, page),
      path: pagePath(penulisPath(entry.slug), page),
    }),
    robots: { index: isPenulisIndexable(entry.slug), follow: true },
  };
}

export default async function Page({
  params,
}: PageProps<"/blog/penulis/[slug]/page/[page]">) {
  const { slug, page: rawPage } = await params;
  const page = parsePage(rawPage);
  if (!page) notFound();

  return <BlogPenulisPage slug={slug} page={page} />;
}
