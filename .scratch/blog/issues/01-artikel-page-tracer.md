# 01: MDX setup, content model, and a minimal Artikel page

**Parent:** `.scratch/blog/spec.md`

**What to build:** The thinnest end-to-end path: an Artikel stored as metadata in `data/artikel.ts` plus a body in `data/artikel/{slug}.mdx` renders at `/blog/{slug}` with correct SEO. Drafts render in `next dev` only. A permanent draft fixture exercises the page for tests and review.

**Blocked by:** none

**Status:** done

- [x] `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx` installed with `bun add`; `next.config.ts` and `mdx-components.tsx` configured per `node_modules/next/dist/docs/01-app/02-guides/mdx.md`
- [x] `data/artikel.ts`, `data/kategori.ts`, `data/penulis.ts` hold the fields in the spec, typed and checked with `satisfies`; Kategori and Penulis copy as approved in the spec
- [x] The build fails when a metadata entry has no `.mdx` file, an `.mdx` file has no entry, a slug or `focusKeyword` is duplicated, or a published Artikel lacks `publishedAt` or `references`
- [x] A draft fixture Artikel (`status: "draft"`) renders under `bun dev`; in a production build its URL returns 404 and no published route depends on it
- [x] `/blog/{slug}` renders: breadcrumb (Beranda › Blog › Kategori › title) with `BreadcrumbList` JSON-LD, Kategori pill, one `h1`, Penulis name, publish date, "Diperbarui" when set, computed reading time, cover (Kategori fallback path when absent, eager/priority), lead, MDX body
- [x] Metadata: `<title>` via the layout template, description, canonical, `openGraph` with `type: "article"`, cover image, published/modified times, section
- [x] `BlogPosting` JSON-LD with the fields listed in the spec; `author` is `Person` or the existing `#organization`
- [x] Unknown slugs return 404
- [x] HTML test (`tests/`) on the draft fixture under `bun dev`: one `h1`, canonical, `BlogPosting` and `BreadcrumbList` JSON-LD present
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass (5 unrelated location and home-intro tests fail; excluded by the owner, tracked for a separate debugging session)

## Comments

- 2026-10-05: Resolution. The five failures in the 2026-10-02 baseline are resolved. `bun test` against `bun dev` reported 63 pass, 0 fail. Fixing commits: `dfe312c`, `e36b9e4`, `b22553c`, `7228f69` (from `git log -- tests/`).
