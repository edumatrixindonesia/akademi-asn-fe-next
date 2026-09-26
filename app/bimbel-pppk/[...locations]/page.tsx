import type { Metadata } from "next";
import BimbelPppkLocationPage from "@/components/pages/bimbel-pppk-location";
import { locationLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "../../shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/bimbel-pppk/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = locationLabel(found);
  const url = `/bimbel-pppk${found.region.path}`;

  return {
    title: `Bimbel PPPK ${location}`,
    description: `Bimbel PPPK untuk peserta dari ${location}. Persiapan kompetensi teknis, manajerial, sosial kultural, dan wawancara dengan latihan soal dan tryout CAT.`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({ params }: PageProps<"/bimbel-pppk/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <BimbelPppkLocationPage location={locationLabel(found)} />;
}
