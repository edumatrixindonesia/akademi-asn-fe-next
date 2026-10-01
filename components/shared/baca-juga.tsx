import Link from "next/link";
import { getArtikel } from "@/lib/artikel";

// Fails the build on an unknown slug, and on a draft in production (drafts
// are hidden from getArtikel there).
const BacaJuga = ({ slug }: { slug: string }) => {
  const entry = getArtikel(slug);
  if (!entry) throw new Error(`<BacaJuga slug="${slug}" /> points to an unknown or draft Artikel.`);

  return (
    <p className="rounded-lg border-l-4 border-cta bg-muted px-4 py-3">
      <strong>Baca Juga: </strong>
      <Link href={`/blog/${entry.slug}`}>{entry.title}</Link>
    </p>
  );
};

export default BacaJuga;
