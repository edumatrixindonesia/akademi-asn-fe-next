import { notFound } from "next/navigation";
import Breadcrumb from "@/components/sections/breadcrumb";
import ArtikelListing from "@/components/sections/artikel-listing";
import { artikelListingKategori } from "@/data/artikel-listing";
import { breadcrumbKategori } from "@/data/breadcrumb";
import { getKategoriListing } from "@/lib/artikel";

type BlogKategoriProps = { slug: string; page: number };

const BlogKategori = ({ slug, page }: BlogKategoriProps) => {
  const listing = getKategoriListing(slug, page);
  if (!listing) notFound();

  const { kategori, entries, totalPages } = listing;

  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbKategori(kategori)} />
      <ArtikelListing
        {...artikelListingKategori(kategori, page, entries, totalPages)}
      />
    </main>
  );
};

export default BlogKategori;
