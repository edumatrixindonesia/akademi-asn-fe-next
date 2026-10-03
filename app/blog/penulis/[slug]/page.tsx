import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPenulisPage from "@/components/pages/blog-penulis";
import { penulisMeta } from "@/data/artikel-listing";
import { penulis } from "@/data/penulis";
import { getPenulis, isPenulisIndexable } from "@/lib/artikel";
import { penulisPath } from "@/lib/blog-path";
import { listingMetadata } from "../../../shared-metadata";

export const dynamicParams = false;

export const generateStaticParams = () => penulis.map(({ slug }) => ({ slug }));

export async function generateMetadata({
  params,
}: PageProps<"/blog/penulis/[slug]">): Promise<Metadata> {
  const entry = getPenulis((await params).slug);
  if (!entry) return {};

  return {
    ...listingMetadata({
      ...penulisMeta(entry, 1),
      path: penulisPath(entry.slug),
    }),
    robots: { index: isPenulisIndexable(entry.slug), follow: true },
  };
}

export default async function Page({
  params,
}: PageProps<"/blog/penulis/[slug]">) {
  const { slug } = await params;
  if (!getPenulis(slug)) notFound();

  return <BlogPenulisPage slug={slug} page={1} />;
}
