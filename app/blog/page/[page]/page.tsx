import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPage from "@/components/pages/blog";
import { blogIndex } from "@/data/artikel-listing";
import { blogFirstPageSize, pageCount, pageSuffix, parsePage } from "@/lib/pagination";
import { getVisibleArtikel } from "@/lib/artikel";
import { listingMetadata } from "../../../shared-metadata";

export const dynamicParams = false;

// Page 1 is `/blog` itself, so the numbered pages start at 2.
export const generateStaticParams = () =>
  Array.from(
    { length: pageCount(getVisibleArtikel().length, blogFirstPageSize) - 1 },
    (_, i) => ({ page: String(i + 2) }),
  );

export async function generateMetadata({
  params,
}: PageProps<"/blog/page/[page]">): Promise<Metadata> {
  const page = parsePage((await params).page);
  if (!page) return {};

  return listingMetadata({
    title: `${blogIndex.metaTitle}${pageSuffix(page)}`,
    description: blogIndex.metaDescription,
    path: `/blog/page/${page}`,
  });
}

export default async function Page({ params }: PageProps<"/blog/page/[page]">) {
  const page = parsePage((await params).page);
  if (!page) notFound();

  return <BlogPage page={page} />;
}
