# 01: MDX setup, content model, and a minimal Artikel page

**Parent:** `.scratch/blog/spec.md`

**What to build:** The thinnest end-to-end path: an Artikel stored as metadata in `data/artikel.ts` plus a body in `data/artikel/{slug}.mdx` renders at `/blog/{slug}` with correct SEO. Drafts render in `next dev` only. A permanent draft fixture exercises the page for tests and review.

**Blocked by:** none

**Status:** ready-for-agent

- [ ] `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx` installed with `bun add`; `next.config.ts` and `mdx-components.tsx` configured per `node_modules/next/dist/docs/01-app/02-guides/mdx.md`
- [ ] `data/artikel.ts`, `data/kategori.ts`, `data/penulis.ts` hold the fields in the spec, typed and checked with `satisfies`; Kategori and Penulis copy as approved in the spec
- [ ] The build fails when a metadata entry has no `.mdx` file, an `.mdx` file has no entry, a slug or `focusKeyword` is duplicated, or a published Artikel lacks `publishedAt` or `references`
- [ ] A draft fixture Artikel (`status: "draft"`) renders under `bun dev`; in a production build its URL returns 404 and no published route depends on it
- [ ] `/blog/{slug}` renders: breadcrumb (Beranda › Blog › Kategori › title) with `BreadcrumbList` JSON-LD, Kategori pill, one `h1`, Penulis name, publish date, "Diperbarui" when set, computed reading time, cover (Kategori fallback path when absent, eager/priority), lead, MDX body
- [ ] Metadata: `<title>` via the layout template, description, canonical, `openGraph` with `type: "article"`, cover image, published/modified times, section
- [ ] `BlogPosting` JSON-LD with the fields listed in the spec; `author` is `Person` or the existing `#organization`
- [ ] Unknown slugs return 404
- [ ] HTML test (`tests/`) on the draft fixture under `bun dev`: one `h1`, canonical, `BlogPosting` and `BreadcrumbList` JSON-LD present
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
