# 03: Location section variants and intro

**Parent:** `.scratch/jangkauan-lokasi/spec.md`

**What to build:** Every location page carries location-specific text beyond the Jumbotron: an intro right after the Jumbotron, and Keunggulan, Paket Program, and CTA Footer copy that names the location. Location pages under DI Yogyakarta also show the Kelas Offline office content. This is the unique content that keeps location pages from being name-swapped templates.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] An intro section renders directly after the Jumbotron with an `h2` naming the track and location (e.g. "Bimbel CPNS di Kabupaten Sleman"; home-location names all three tracks)
- [ ] The intro body is the region's base text followed by one templated track-specific sentence per family (e.g. "Formasi CPNS di Jawa Barat …")
- [ ] Hand-written base texts live in a `data/` map keyed by region `kode`; the map ships empty or with any texts already reviewed, and any region without an entry falls back to a template base text
- [ ] `keunggulanLocation(location)` and `ctaFooterLocation(…, location)` spread the shared entries and override only the text that names the location; they take no exam track
- [ ] `paketProgramLocation(…, location)` spreads `paketProgram` and overrides only `offlineTitle` (e.g. "Program Bimbel Privat di <location>")
- [ ] Lembaga, Media Massa, and Testimoni stay on their shared static entries
- [ ] Location pages under DI Yogyakarta (the province and everything below it) show extra Kelas Offline content with the office address; no other region does
- [ ] All four `*-location` page components use these entries; content stays in Server Components
- [ ] A `bun test` file checks that a region with a hand-written entry gets that text and a region without one gets the template, both followed by the track sentence
- [ ] The HTML test harness asserts the intro `h2` and the location name in Keunggulan, Paket Program, and CTA Footer on one location page; the office address appears on `/di-yogyakarta/kabupaten-sleman` and not on `/jawa-barat`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass

Drafting the 72 hand-written texts is a separate content task: agents draft batches for the owner's review, and they land one region at a time after this ticket.
