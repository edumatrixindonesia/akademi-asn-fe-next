import type { Metadata } from "next";
import BimbelBumnLocationPage from "@/components/pages/bimbel-bumn-location";
import { locationLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "../../shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/bimbel-bumn/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = locationLabel(found);
  const url = `/bimbel-bumn${found.region.path}`;

  return {
    title: `Bimbel BUMN ${location}`,
    description: `Bimbel BUMN untuk peserta dari ${location}. Persiapan Rekrutmen Bersama BUMN: TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility.`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({ params }: PageProps<"/bimbel-bumn/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <BimbelBumnLocationPage location={found} />;
}
