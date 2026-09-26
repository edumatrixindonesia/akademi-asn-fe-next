# 04: Location pages in the sitemap

**Parent:** `.scratch/jangkauan-lokasi/spec.md`

**What to build:** Search engines discover every location page through `sitemap.xml`, not only through internal links.

**Blocked by:** 01

**Status:** done

- [x] `app/sitemap.ts` lists the four existing pages plus every location page of every family (about 12,000 URLs), built from the same location tree as the routes so the two cannot drift
- [x] The stale "Location pages join this list once their routes exist" comment is removed
- [x] The relevant Next.js 16 sitemap guide was read first; if one sitemap is over the protocol limit of 50,000 URLs or 50 MB it is split with `generateSitemaps`, otherwise it stays a single file
- [x] The sitemap reuses the cached region-service lists (7-day revalidate) and adds no requests of its own; it refreshes when those lists do
- [x] The HTML test harness fetches `/sitemap.xml` and asserts absolute URLs for `/di-yogyakarta`, `/bimbel-cpns/jawa-barat/kota-bandung/coblong`, and one Jabodetabekjur village page, and that `/aceh/kabupaten-aceh-selatan/bakongan` is absent
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
