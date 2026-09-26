import type { Metadata } from "next";
import BimbelPppkLocationPage from "@/components/pages/bimbel-pppk-location";
import { headlineLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "../../shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/bimbel-pppk/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = headlineLabel(found);
  const url = `/bimbel-pppk${found.region.path}`;

  return {
    title: { absolute: `Bimbel PPPK Online & Offline Terbaik di ${location} - Teknis Guru & Kesehatan | Akademi ASN` },
    description: `Bimbel PPPK online di ${location} untuk formasi teknis, guru, dan tenaga kesehatan. Belajar terarah dengan mentor, materi, latihan soal, dan tryout CAT.`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({ params }: PageProps<"/bimbel-pppk/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <BimbelPppkLocationPage location={found} />;
}
