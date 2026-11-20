import type { Metadata } from "next";
import BimbelCpnsLocationPage from "@/components/pages/bimbel-cpns-location";
import { headlineLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "@/app/shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/bimbel-cpns/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = headlineLabel(found);
  const url = `/bimbel-cpns${found.region.path}`;

  return {
    title: {
      absolute: `Bimbel CPNS di ${location} Bimbingan SKD [TWK, TIU & TKP] | Akademi ASN`,
    },
    description: `Bimbel CPNS di ${location} Terbaik. Bimbingan SKD [TWK, TIU & TKP] CPNS siap membantu lolos CPNS dengan metode Online dan ke Rumah sesuai kebutuhan Anda`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({
  params,
}: PageProps<"/bimbel-cpns/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <BimbelCpnsLocationPage location={found} />;
}
