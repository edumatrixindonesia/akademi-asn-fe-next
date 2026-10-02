import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { artikel } from "@/data/artikel";
import { kategori } from "@/data/kategori";
import { penulis } from "@/data/penulis";
import { artikelMatches } from "@/lib/artikel-search";
import { validateArtikel, type Artikel } from "@/lib/artikel-schema";
import { headingId } from "@/lib/heading-id";
import { blogFirstPageSize, pageCount, pageSize, pageSlice } from "@/lib/pagination";

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

const readBody = (slug: string) =>
  readFileSync(path.join(bodyDir, `${slug}.mdx`), "utf8");

// ponytail: strips markup with regexes, so counts are approximate (about
// 200 wpm); use an MDX AST walk if exact counts ever matter.
const wordCounts = new Map<string, number>();

export const getWordCount = (slug: string): number => {
  let count = wordCounts.get(slug);
  if (count === undefined) {
    count = readBody(slug)
      .replace(/<[^>]*>/g, " ")
      .replace(/[#*_>`|[\]()-]/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
    wordCounts.set(slug, count);
  }
  return count;
};

export const getReadingMinutes = (wordCount: number) =>
  Math.max(1, Math.ceil(wordCount / 200));

export const getReadingLabel = (wordCount: number) =>
  `${getReadingMinutes(wordCount)} menit baca`;

const dateLabel = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "UTC",
});

export const dated = (iso?: string) =>
  iso ? { iso, label: dateLabel.format(new Date(iso)) } : undefined;

// ponytail: finds `## ` lines with a regex (skipping code fences) and strips
// inline Markdown the same way the rendered text does; an MDX AST walk if
// headings ever hold JSX.
export const getHeadings = (slug: string) => {
  let inFence = false;
  const headings: { id: string; title: string }[] = [];

  for (const line of readBody(slug).split("\n")) {
    if (line.startsWith("```")) inFence = !inFence;
    const match = !inFence && /^##\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    const title = match[1].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "");
    const id = headingId(title);
    if (!id) throw new Error(`"${slug}" has an h2 ("${title}") with no letters or digits for its id.`);
    if (headings.some((heading) => heading.id === id)) {
      throw new Error(`"${slug}" has two h2 headings with the id "${id}".`);
    }
    headings.push({ id, title });
  }

  return headings;
};

const newestFirst = (a: Artikel, b: Artikel) =>
  (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "");

// Artikel Terbaru: newest first, optionally leaving one Artikel out.
export const getLatestArtikel = (limit: number, excludeSlug?: string): Artikel[] =>
  getVisibleArtikel()
    .filter((entry) => entry.slug !== excludeSlug)
    .sort(newestFirst)
    .slice(0, limit);

// Artikel Terkait: `related` first, then the newest of the same Kategori,
// then the newest of other Kategori.
export const getRelatedArtikel = (entry: Artikel, limit = 3): Artikel[] => {
  const others = getLatestArtikel(Infinity, entry.slug);
  const picked = (entry.related ?? [])
    .map((slug) => others.find((other) => other.slug === slug))
    .filter((other) => other !== undefined);
  const rest = others.filter((other) => !picked.includes(other));

  return [
    ...picked,
    ...rest.filter((other) => other.kategori === entry.kategori),
    ...rest.filter((other) => other.kategori !== entry.kategori),
  ].slice(0, limit);
};

export const getArtikelByKategori = (slug: string): Artikel[] =>
  getLatestArtikel(Infinity).filter((entry) => entry.kategori === slug);

export const searchArtikel = (query: string): Artikel[] =>
  getLatestArtikel(Infinity).filter((entry) => artikelMatches(entry, query));

export const getArtikelByPenulis = (slug: string): Artikel[] =>
  getLatestArtikel(Infinity).filter((entry) => entry.penulis === slug);

// A Penulis page is indexable only with a published Artikel; the draft
// fixture under `next dev` does not count.
export const isPenulisIndexable = (slug: string) =>
  entries.some((entry) => entry.status === "published" && entry.penulis === slug);

// `undefined` for a page past the last one: the route turns it into a 404.
const listing = (all: Artikel[], page: number, firstPageSize: number) => {
  const totalPages = pageCount(all.length, firstPageSize);
  if (page > totalPages) return undefined;
  return { entries: pageSlice(all, page, firstPageSize), totalPages };
};

// Kategori sections on /blog: three newest each, empty Kategori left out.
export const getKategoriSections = () =>
  kategori
    .map((entry) => ({ kategori: entry, entries: getArtikelByKategori(entry.slug).slice(0, 3) }))
    .filter(({ entries }) => entries.length > 0);

export const getBlogListing = (page: number) =>
  listing(getLatestArtikel(Infinity), page, blogFirstPageSize);

export const getKategoriListing = (slug: string, page: number) => {
  const kategori = getKategori(slug);
  const result = kategori && listing(getArtikelByKategori(slug), page, pageSize);
  return result && { kategori, ...result };
};

export const getPenulisListing = (slug: string, page: number) => {
  const penulis = getPenulis(slug);
  const result = penulis && listing(getArtikelByPenulis(slug), page, pageSize);
  return result && { penulis, ...result };
};
