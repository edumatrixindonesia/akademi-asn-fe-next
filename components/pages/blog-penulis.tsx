import { notFound } from "next/navigation";
import Breadcrumb from "@/components/sections/breadcrumb";
import ArtikelListing from "@/components/sections/artikel-listing";
import { artikelListingPenulis, penulisJsonLd } from "@/data/artikel-listing";
import { breadcrumbPenulis } from "@/data/breadcrumb";
import { getPenulisListing } from "@/lib/artikel";

type BlogPenulisProps = { slug: string; page: number };

const BlogPenulis = ({ slug, page }: BlogPenulisProps) => {
  const listing = getPenulisListing(slug, page);
  if (!listing) notFound();

  const { penulis, entries, totalPages } = listing;

  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbPenulis(penulis)} />
      <ArtikelListing
        {...artikelListingPenulis(penulis, page, entries, totalPages)}
      />
      {page === 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(penulisJsonLd(penulis)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      )}
    </main>
  );
};

export default BlogPenulis;
