import Breadcrumb from "@/components/sections/breadcrumb";
import ArtikelListing from "@/components/sections/artikel-listing";
import ArtikelPerKategori from "@/components/sections/artikel-per-kategori";
import KonsultasiCard from "@/components/shared/konsultasi-card";
import { artikelListingBlog, artikelPerKategori } from "@/data/artikel-listing";
import { konsultasiMdx } from "@/data/artikel-konsultasi";
import { breadcrumbBlog } from "@/data/breadcrumb";
import { getKonsultasiUrl } from "@/data/contact";
import { getBlogListing, getKategoriSections } from "@/lib/artikel";
import { notFound } from "next/navigation";

type BlogProps = { page: number };

const Blog = ({ page }: BlogProps) => {
  const listing = getBlogListing(page);
  if (!listing) notFound();

  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbBlog} />
      <ArtikelListing
        {...artikelListingBlog(page, listing.entries, listing.totalPages)}
      />
      {page === 1 && (
        <>
          {getKategoriSections().map(({ kategori, entries }) => (
            <ArtikelPerKategori
              key={kategori.slug}
              {...artikelPerKategori(kategori, entries)}
            />
          ))}
          <div className="container-section pt-0! md:pt-0!">
            <KonsultasiCard
              {...konsultasiMdx(getKonsultasiUrl("Blog Akademi ASN"))}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default Blog;
