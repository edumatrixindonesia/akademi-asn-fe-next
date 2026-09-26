import type { Metadata } from "next";
import BimbelCpnsLocationPage from "@/components/pages/bimbel-cpns-location";
import { headlineLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "../../shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/bimbel-cpns/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = headlineLabel(found);
  const url = `/bimbel-cpns${found.region.path}`;

  return {
    title: { absolute: `Bimbel CPNS Online & Offline Terbaik di ${location} - Persiapan SKD & SKB | Akademi ASN` },
    description: `Ikuti bimbel CPNS online & offline terbaik di ${location} untuk persiapan SKD & SKB. Materi TWK, TIU, TKP, tryout CAT, pembahasan soal, dan pendampingan tutor.`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({ params }: PageProps<"/bimbel-cpns/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <BimbelCpnsLocationPage location={found} />;
}
