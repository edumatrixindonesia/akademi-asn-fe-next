import type { Metadata } from "next";
import BimbelBumnLocationPage from "@/components/pages/bimbel-bumn-location";
import { headlineLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "../../shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/bimbel-bumn/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = headlineLabel(found);
  const url = `/bimbel-bumn${found.region.path}`;

  return {
    title: {
      absolute: `Bimbel BUMN Terbaik di ${location} - Persiapan Tes RBB TKD & AKHLAK | Akademi ASN`,
    },
    description: `Persiapkan tes BUMN di ${location} bersama bimbel BUMN online & privat. Pelajari TKD, AKHLAK, Bahasa Inggris, Learning Agility, latihan soal, tryout, dan pembahasan.`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({
  params,
}: PageProps<"/bimbel-bumn/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <BimbelBumnLocationPage location={found} />;
}
