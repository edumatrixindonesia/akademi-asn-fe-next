# 04: Blog index, Kategori pages, and pagination

**Parent:** `.scratch/blog/spec.md`

**What to build:** `/blog` and `/blog/kategori/{slug}` with 12-per-page path pagination, so the listing structure is ready for hundreds of Artikel from day one.

**Blocked by:** 01

**Status:** done

- [x] Shared Artikel card: cover, title (2-line clamp), date and reading time; links to the Artikel
- [x] `/blog`: approved `h1`, intro, metadata; search form; Artikel Terbaru (6); one section per Kategori with 3 cards and "Lihat Semua", hidden when empty; CTA Konsultasi
- [x] `/blog/page/{n}` (n ≥ 2): only `h1` and a 12-card grid continuing after the 6 Artikel on `/blog` (offset 6 + (n−2)×12); `/blog` links to page 2 when there are more than 6 Artikel
- [x] `/blog/kategori/{slug}` and `…/page/{n}`: approved `h1`, description, metadata, 12-card grid; exam-track Kategori link to their landing page
- [x] Pagination: numbered links plus Sebelumnya/Berikutnya, every page canonical to itself, `…/page/1` permanently redirects (308, `redirects()` in `next.config.ts`) to the base URL, intro and descriptions only on page 1, `<title>` and `h1` end with " – Halaman {n}" from page 2, pages past the last one return 404, unknown Kategori return 404
- [x] All pages statically generated via `generateStaticParams`; drafts never appear in production
- [x] HTML test: `/blog` has one `h1`; with 6 or fewer published Artikel `/blog/page/2` returns 404; `/blog/page/1` responds 308 to `/blog`
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass (the same 5 unrelated location and home-intro tests still fail)
