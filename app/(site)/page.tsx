import type { Metadata } from "next";
import HomePage from "@/components/pages/home";
import { getProvinces } from "@/lib/region-service";
import { openGraphBase } from "@/app/shared-metadata";
import { jumbotronHomeText } from "@/data/jumbotron";

const { title, description } = jumbotronHomeText();

export const metadata: Metadata = {
  title: { absolute: `${title} | Akademi ASN` },
  description,
  alternates: { canonical: "/" },
  openGraph: { ...openGraphBase, url: "/" },
};

export default async function Home() {
  return <HomePage provinces={await getProvinces()} />;
}
