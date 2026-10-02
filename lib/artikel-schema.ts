export type KategoriSlug = "cpns" | "pppk" | "bumn" | "tips-info";
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
  kategori: KategoriSlug;
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
  cover: Image;
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

// Returns one message per broken rule; the loader throws on any, so a bad
// entry fails the build instead of shipping.
export const validateArtikel = (
  entries: Artikel[],
  bodySlugs: string[],
): string[] => {
  const errors: string[] = [];
  const bodies = new Set(bodySlugs);
  const slugs = new Set<string>();
  const keywords = new Set<string>();

  for (const entry of entries) {
    const { slug } = entry;
    if (slugs.has(slug)) errors.push(`Duplicate slug "${slug}".`);
    slugs.add(slug);

    const keyword = entry.focusKeyword.trim().toLowerCase();
    if (keywords.has(keyword)) errors.push(`Duplicate focusKeyword "${keyword}" ("${slug}").`);
    keywords.add(keyword);

    if (!bodies.has(slug)) errors.push(`"${slug}" has no data/artikel/${slug}.mdx.`);
    if ((entry.seoTitle ?? entry.title).length > 50) {
      errors.push(`"${slug}" title or seoTitle is over 50 characters.`);
    }
    if (entry.description.length < 120 || entry.description.length > 160) {
      errors.push(`"${slug}" description must be 120-160 characters.`);
    }
    if (entry.status === "published") {
      if (!entry.publishedAt) errors.push(`Published "${slug}" has no publishedAt.`);
      if (entry.references.length === 0) errors.push(`Published "${slug}" has no references.`);
    }
  }

  for (const slug of bodySlugs) {
    if (!slugs.has(slug)) errors.push(`data/artikel/${slug}.mdx has no entry in data/artikel.ts.`);
  }

  return errors;
};
