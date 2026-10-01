# Blog tech debt

Logged from the review of ticket 01. Accepted for now; address in an optimization phase.

- **Draft body may ship in the production bundle.** `components/pages/artikel.tsx` uses a dynamic `import(\`@/data/artikel/${slug}.mdx\`)`, so the bundler may include every `.mdx` file, drafts included, even though the draft route returns 404. Not yet verified; check the build output and, if confirmed, restrict the import to published slugs.
- **Duplicated lookups.** `entry.cover ?? kategori.cover` appears in `app/blog/[slug]/page.tsx` and `data/artikel-detail.ts`. `getKategori(entry.kategori)!` appears in `page.tsx`, `components/pages/artikel.tsx`, and `data/artikel-detail.ts`. `seoTitle ?? title` appears twice in `page.tsx`. Extract one resolver when a third caller appears.
- **Duplicated URL patterns.** `/blog/kategori/{slug}` is built in both `data/breadcrumb.ts` and `data/artikel-detail.ts`; a route rename needs both edits.
- **Slug unions mirror data.** `KategoriSlug` and `PenulisSlug` in `lib/artikel-schema.ts` must be edited together with `data/kategori.ts` and `data/penulis.ts`.
- **Word count is approximate.** `getWordCount` in `lib/artikel.ts` strips markup with regexes (hyphens become spaces). The same number feeds reading time and JSON-LD `wordCount`.
- **Missing validation.** Nothing checks that `related` has at most 3 slugs or that they exist.
- **Known 404s until later tickets.** Kategori and Penulis links, the breadcrumb "Blog" link, and the Kategori fallback covers resolve in tickets 03, 04, and 05.
- **Unrelated failing tests (5).** The home intro test and four location page tests (`/di-yogyakarta`, `/bimbel-cpns/jawa-barat/kota-bandung`, `/bimbel-pppk/jawa-barat/kota-bandung/coblong`, `/bimbel-bumn/dki-jakarta/kota-jakarta-pusat/gambir/gambir`) fail on existing copy. They go to a separate debugging session.
