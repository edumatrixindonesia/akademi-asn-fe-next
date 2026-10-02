import type { Metadata } from "next";
import BlogCariPage from "@/components/pages/blog-cari";
import { rssAlternate } from "../../shared-metadata";

// Results are never indexed and the canonical stays the bare search URL, so
// no query URL competes with the listings.
export const metadata: Metadata = {
  title: "Cari Artikel",
  alternates: { canonical: "/blog/cari", types: rssAlternate },
  robots: { index: false, follow: true },
};

export default async function Page({ searchParams }: PageProps<"/blog/cari">) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? "";

  return <BlogCariPage query={query} />;
}
