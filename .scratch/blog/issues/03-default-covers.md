# 03: Four default Kategori covers

**Parent:** `.scratch/blog/spec.md`

**What to build:** One 1200×630 JPEG per Kategori in `public/img/blog/`, used when an Artikel has no cover, as the Kategori page image, and as `og:image`.

**Blocked by:** none

**Status:** done

- [x] An HTML template in `.scratch/blog/covers/` renders each cover: navy background, orange accent shape, Akademi ASN logo top left, large label ("Artikel CPNS", "Artikel PPPK", "Artikel BUMN", "Tips & Info"), the approved tagline, one simple icon; no photos of people
- [x] Rendered to JPEG with Playwright (no new dependency), each under 150 KB
- [x] Shown to the owner and approved before they are committed
- [x] `data/kategori.ts` `cover` entries point at the approved files with descriptive `alt`
