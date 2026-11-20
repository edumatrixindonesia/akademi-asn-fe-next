import type { Metadata } from "next";
import HomeLocationPage from "@/components/pages/home-location";
import { headlineLabel } from "@/lib/location-tree";
import { getLocationOrNotFound, getProvinceParams } from "@/lib/region-service";
import { openGraphBase } from "@/app/shared-metadata";
import { jumbotronHomeText } from "@/data/jumbotron";

export const generateStaticParams = getProvinceParams;

export async function generateMetadata({
  params,
}: PageProps<"/[...locations]">): Promise<Metadata> {
  const found = await getLocationOrNotFound((await params).locations);
  const location = headlineLabel(found);
  const url = `${found.region.path}`;
  const { title, description } = jumbotronHomeText(location);

  return {
    title: { absolute: `${title} | Akademi ASN` },
    description,
    alternates: { canonical: url },
    openGraph: { ...openGraphBase, url },
  };
}

export default async function Page({ params }: PageProps<"/[...locations]">) {
  const found = await getLocationOrNotFound((await params).locations);
  return <HomeLocationPage location={found} />;
}
