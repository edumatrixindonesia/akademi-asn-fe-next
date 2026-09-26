import type { Metadata } from "next";
import HomeLocationPage from "@/components/pages/home-location";
import { locationLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "../shared-metadata";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = locationLabel(found);
  const url = `${found.region.path}`;

  return {
    title: `Bimbel CPNS, PPPK & BUMN ${location}`,
    description: `Bimbel CPNS, PPPK, dan BUMN untuk peserta dari ${location}. Kelas online & les privat, materi terarah, latihan soal, tryout CAT, dan pendampingan tutor Akademi ASN.`,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({ params }: PageProps<"/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <HomeLocationPage location={found} />;
}
