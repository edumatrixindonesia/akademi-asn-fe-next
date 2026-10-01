# 11: Artikel page tech debt cleanup

**Parent:** `.scratch/blog/spec.md`

**What to build:** Clear the debt accepted during the review of ticket 01, without changing behaviour.

**Blocked by:** 01

**Status:** needs-triage

- [ ] Check whether draft `.mdx` bodies ship in the production bundle (`components/pages/artikel.tsx` uses a dynamic `import(\`@/data/artikel/${slug}.mdx\`)`); if so, restrict the import to published slugs
- [ ] One resolver for `entry.cover ?? kategori.cover`, `seoTitle ?? title`, and `getKategori(entry.kategori)`, replacing the copies in `app/blog/[slug]/page.tsx`, `components/pages/artikel.tsx`, and `data/artikel-detail.ts`
- [ ] One place builds `/blog/kategori/{slug}` and `/blog/penulis/{slug}` (now duplicated in `data/breadcrumb.ts` and `data/artikel-detail.ts`)
- [ ] `validateArtikel` fails when `related` has more than 3 slugs or a slug that has no entry
- [ ] `getWordCount` (`lib/artikel.ts`) stops turning hyphens into word breaks, or the `ponytail:` comment records why it stays approximate
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass (the 5 known unrelated failures excluded until their own session)

**Not in this ticket:** the Kategori and Penulis 404s and the missing covers (tickets 03, 04, 05), and the 5 unrelated failing tests (separate debugging session).
