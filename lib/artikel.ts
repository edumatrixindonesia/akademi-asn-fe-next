import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { artikel } from "@/data/artikel";
import { kategori } from "@/data/kategori";
import { penulis } from "@/data/penulis";
import { validateArtikel, type Artikel } from "@/lib/artikel-schema";

// `satisfies` keeps literal types in data; widen so filters compare freely.
const entries: Artikel[] = artikel;

const bodyDir = path.join(process.cwd(), "data", "artikel");

const bodySlugs = readdirSync(bodyDir)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.slice(0, -".mdx".length));

const errors = validateArtikel(entries, bodySlugs);
if (errors.length > 0) {
  throw new Error(`Invalid Artikel data:\n${errors.join("\n")}`);
}

// Drafts exist only under `next dev`: in production they are not built,
// listed, or served.
export const getVisibleArtikel = (): Artikel[] =>
  entries.filter(
    (entry) => entry.status === "published" || process.env.NODE_ENV !== "production",
  );

export const getArtikel = (slug: string) =>
  getVisibleArtikel().find((entry) => entry.slug === slug);

export const getKategori = (slug: string) => kategori.find((entry) => entry.slug === slug);
export const getPenulis = (slug: string) => penulis.find((entry) => entry.slug === slug);

// ponytail: strips markup with regexes, so counts are approximate (about
// 200 wpm); use an MDX AST walk if exact counts ever matter.
export const getWordCount = (slug: string): number =>
  readFileSync(path.join(bodyDir, `${slug}.mdx`), "utf8")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_>`|[\]()-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

export const getReadingMinutes = (wordCount: number) =>
  Math.max(1, Math.ceil(wordCount / 200));
