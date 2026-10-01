import Breadcrumb from "@/components/sections/breadcrumb";
import ArtikelDetail from "@/components/sections/artikel-detail";
import ArtikelSidebar from "@/components/sections/artikel-sidebar";
import ArtikelTerkait from "@/components/sections/artikel-terkait";
import { artikelDetail } from "@/data/artikel-detail";
import { artikelSidebar } from "@/data/artikel-sidebar";
import { artikelTerkait } from "@/data/artikel-terkait";
import { breadcrumbArtikel } from "@/data/breadcrumb";
import { getKonsultasiUrl } from "@/data/contact";
import { getKategori, getLatestArtikel, getRelatedArtikel, getWordCount } from "@/lib/artikel";
import type { Artikel as ArtikelEntry } from "@/lib/artikel-schema";

type ArtikelProps = { entry: ArtikelEntry };

const Artikel = async ({ entry }: ArtikelProps) => {
  const { default: Body } = await import(`@/data/artikel/${entry.slug}.mdx`);
  const kategori = getKategori(entry.kategori)!;
  const konsultasiUrl = getKonsultasiUrl(`artikel "${entry.title}"`);
  const related = getRelatedArtikel(entry);

  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbArtikel(kategori, entry.title, entry.slug)} />
      <div className="container-section pt-4! md:pt-6!">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <ArtikelDetail {...artikelDetail(entry, getWordCount(entry.slug), konsultasiUrl)}>
              <Body />
            </ArtikelDetail>
          </div>
          <div className="lg:col-span-4">
            <ArtikelSidebar {...artikelSidebar(konsultasiUrl, getLatestArtikel(5, entry.slug))} />
          </div>
        </div>
        {related.length > 0 && <ArtikelTerkait {...artikelTerkait(related)} />}
      </div>
    </main>
  );
};

export default Artikel;
