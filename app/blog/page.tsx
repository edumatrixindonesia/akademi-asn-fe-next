import type { Metadata } from "next";
import BlogPage from "@/components/pages/blog";
import { blogIndex } from "@/data/artikel-listing";
import { listingMetadata } from "../shared-metadata";

export const metadata: Metadata = listingMetadata({
  title: blogIndex.metaTitle,
  description: blogIndex.metaDescription,
  path: "/blog",
});

export default function Page() {
  return <BlogPage page={1} />;
}
