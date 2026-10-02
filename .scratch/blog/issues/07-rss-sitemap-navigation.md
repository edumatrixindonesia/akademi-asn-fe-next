# 07: RSS, sitemap, and site navigation

**Parent:** `.scratch/blog/spec.md`

**What to build:** The Blog becomes discoverable: RSS feed, sitemap entries, and "Blog" links in the navbar and footer.

**Blocked by:** 05

**Status:** done

- [x] `/blog/rss.xml` route handler: valid RSS 2.0 with the 20 newest published Artikel (title, link, description from excerpt, `pubDate`, category); linked from blog pages via `alternates.types`
- [x] `app/sitemap.ts` adds `/blog` and its pages, Kategori pages and their pages, indexable Penulis pages, and published Artikel with `lastModified`
- [x] "Blog" link in `data/navbar.ts` and the footer data
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
