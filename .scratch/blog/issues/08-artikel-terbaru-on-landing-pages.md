# 08: Artikel Terbaru on landing pages

**Parent:** `.scratch/blog/spec.md`

**What to build:** Every landing page links into the Blog through an Artikel Terbaru section directly before FAQ.

**Blocked by:** 04

**Status:** ready-for-agent

- [ ] New section following the `data/` pattern in `AGENTS.md`; reuses the Artikel card; "Lihat Semua" links to the Kategori page (or `/blog` on home)
- [ ] Home and home-location pages: 3 newest of any Kategori; each exam-track page and its location pages: 3 newest of that Kategori
- [ ] Hidden when there is no published Artikel for that page; never shows drafts in production
- [ ] Section `h2`, no extra `h1`; location pages keep their ISR behaviour and existing tests pass
- [ ] HTML test: the section appears before FAQ when a matching published Artikel exists
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
