import Breadcrumb from "@/components/sections/breadcrumb";
import ArtikelListing from "@/components/sections/artikel-listing";
import { artikelListingCari } from "@/data/artikel-listing";
import { breadcrumbCari } from "@/data/breadcrumb";
import { searchArtikel } from "@/lib/artikel";

type BlogCariProps = { query: string };

const BlogCari = ({ query }: BlogCariProps) => (
  <main className="flex-1">
    <Breadcrumb {...breadcrumbCari} />
    <ArtikelListing
      {...artikelListingCari(query, query ? searchArtikel(query) : [])}
    />
  </main>
);

export default BlogCari;
