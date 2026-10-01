import Breadcrumb from "@/components/sections/breadcrumb";
import ArtikelDetail from "@/components/sections/artikel-detail";
import { artikelDetail } from "@/data/artikel-detail";
import { breadcrumbArtikel } from "@/data/breadcrumb";
import { getKategori, getWordCount } from "@/lib/artikel";
import type { Artikel as ArtikelEntry } from "@/lib/artikel-schema";

type ArtikelProps = { entry: ArtikelEntry };

const Artikel = async ({ entry }: ArtikelProps) => {
  const { default: Body } = await import(`@/data/artikel/${entry.slug}.mdx`);
  const kategori = getKategori(entry.kategori)!;

  return (
    <main className="flex-1">
      <Breadcrumb {...breadcrumbArtikel(kategori, entry.title, entry.slug)} />
      <ArtikelDetail {...artikelDetail(entry, getWordCount(entry.slug))}>
        <Body />
      </ArtikelDetail>
    </main>
  );
};

export default Artikel;
