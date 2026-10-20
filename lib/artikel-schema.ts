export type KategoriSlug = "informasi" | "tips" | "latihan-soal" | "materi" | "karier";
export type ExamTrack = "cpns" | "pppk" | "bumn";
export type PenulisSlug = "tim-akademi-asn" | "dimas-maulana";

export type Image = { src: string; alt: string };

export type Reference = {
  title: string;
  url: string;
  publisher: string;
  accessedAt: string;
};

export type Artikel = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  excerpt: string;
  // The first Kategori is the primary one, shown in the breadcrumb.
  kategori: [KategoriSlug, ...KategoriSlug[]];
  // The first exam track picks the default cover.
  examTrack: [ExamTrack, ...ExamTrack[]];
  penulis: PenulisSlug;
  status: "draft" | "published";
  publishedAt?: string;
  updatedAt?: string;
  focusKeyword: string;
  cover?: Image;
  references: Reference[];
  related?: string[];
};

export type Kategori = {
  slug: KategoriSlug;
  name: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  description: string;
};

export type Penulis = {
  slug: PenulisSlug;
  name: string;
  type: "organization" | "person";
  jobTitle?: string;
  bio: string;
  avatar: Image;
  sameAs: { label: string; href: string }[];
};

const isIsoDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  return new Date(`${value}T00:00:00.000Z`).toISOString().slice(0, 10) === value;
};

// Returns one message per broken rule; the loader throws on any, so a bad
// entry fails the build instead of shipping.
export const validateArtikel = (
  entries: Artikel[],
  bodySlugs: string[],
): string[] => {
  const errors: string[] = [];
  const bodies = new Set(bodySlugs);
  const slugs = new Set<string>();
  const entriesBySlug = new Map<string, Artikel>();
  const keywords = new Set<string>();

  for (const entry of entries) {
    const { slug } = entry;
    if (slugs.has(slug)) errors.push(`Duplicate slug "${slug}".`);
    slugs.add(slug);
    entriesBySlug.set(slug, entry);

    const keyword = entry.focusKeyword.trim().toLowerCase();
    if (keywords.has(keyword)) errors.push(`Duplicate focusKeyword "${keyword}" ("${slug}").`);
    keywords.add(keyword);

    if (new Set(entry.kategori).size < entry.kategori.length) errors.push(`"${slug}" repeats a Kategori.`);
    if (new Set(entry.examTrack).size < entry.examTrack.length) errors.push(`"${slug}" repeats an exam track.`);
    if (!bodies.has(slug)) errors.push(`"${slug}" has no data/artikel/${slug}.mdx.`);
    if (entry.title.length > 64) errors.push(`"${slug}" title is over 64 characters.`);
    if (entry.seoTitle && entry.seoTitle.length > 64) errors.push(`"${slug}" seoTitle is over 64 characters.`);
    if (entry.description.length < 120 || entry.description.length > 160) {
      errors.push(`"${slug}" description must be 120-160 characters.`);
    }
    if (entry.status === "published") {
      if (!entry.publishedAt) errors.push(`Published "${slug}" has no publishedAt.`);
      if (entry.references.length === 0) errors.push(`Published "${slug}" has no references.`);
    }
    if (entry.publishedAt && !isIsoDate(entry.publishedAt)) errors.push(`"${slug}" publishedAt must be a valid YYYY-MM-DD date.`);
    if (entry.updatedAt && !isIsoDate(entry.updatedAt)) errors.push(`"${slug}" updatedAt must be a valid YYYY-MM-DD date.`);
    if (entry.publishedAt && entry.updatedAt && isIsoDate(entry.publishedAt) && isIsoDate(entry.updatedAt) && entry.updatedAt < entry.publishedAt) {
      errors.push(`"${slug}" updatedAt cannot be earlier than publishedAt.`);
    }
  }

  for (const { slug, related = [] } of entries) {
    if (related.length > 3) errors.push(`"${slug}" has more than 3 related slugs.`);
    if (new Set(related).size < related.length) errors.push(`"${slug}" repeats a related slug.`);
    for (const other of related) {
      if (other === slug) errors.push(`"${slug}" lists itself as related.`);
      else if (!slugs.has(other)) errors.push(`"${slug}" related "${other}" has no entry.`);
      else if (entriesBySlug.get(other)?.status !== "published") {
        errors.push(`"${slug}" related "${other}" is draft.`);
      }
    }
  }

  for (const slug of bodySlugs) {
    if (!slugs.has(slug)) errors.push(`data/artikel/${slug}.mdx has no entry in data/artikel.ts.`);
  }

  return errors;
};
