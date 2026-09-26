# 01: Region-service client and location routes

**Parent:** `.scratch/jangkauan-lokasi/spec.md`

**What to build:** A visitor who opens any path in the page set (for example `/di-yogyakarta` or `/bimbel-cpns/jawa-barat/kota-bandung/coblong`) gets a location page in the matching family, served through Incremental Static Regeneration (ISR), with the region name in `<title>`, metadata, and the Jumbotron `h1`. Every other path returns 404. The rest of the page reuses the family's existing sections unchanged; location variants, intro, and navigation come in later tickets. The depth rule is recorded in `docs/adr/0001-location-page-depth.md`.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] The relevant Next.js 16 guides (catch-all segments, `generateStaticParams`, `dynamicParams`, `generateMetadata`, fetch caching, and `02-guides/incremental-static-regeneration.md`) in `node_modules/next/dist/docs/` were read first
- [ ] A server-only region-service client fetches the four lists (`type=provinsi`, `type=kabupaten`, `type=kecamatan&region=kabupaten-besar`, `type=kelurahan&region=jabodetabekjur`, each with `limit=4000`) using `REGION_SERVICE_URL` and `REGION_SERVICE_TOKEN`; the token never reaches a `"use client"` file or the client bundle
- [ ] Responses are typed and narrowed from `unknown` (no `any`); `nama` is trimmed
- [ ] A pure module turns those lists into a location tree and, for a slug path, returns the region, its ancestors, its children in the page set, and its siblings; an unknown or out-of-depth path returns nothing
- [ ] The four lists are fetched with `next: { revalidate: 604800 }` (7 days), so each list is fetched at most once per 7 days per container, not once per page (rate limit is 32 per 60 seconds)
- [ ] If region-service fails while rendering a page that is not yet cached, the render throws (5xx) and nothing is cached; it never falls back to `notFound()`
- [ ] `[...locations]` routes exist under `app/`, `app/bimbel-cpns/`, `app/bimbel-pppk/`, and `app/bimbel-bumn/`, stay thin, and render the matching `components/pages/*-location.tsx`
- [ ] `generateStaticParams` returns only the 38 province paths per family; `dynamicParams` stays at its default `true`, so every other path in the page set renders on its first visit and is then served from the cache
- [ ] The page and `generateMetadata` resolve the path through the location tree and call `notFound()` for any path outside the page set
- [ ] Location routes export no `revalidate`; they inherit the root layout's value
- [ ] `bun run build` output shows the location routes as ISR with only the 152 province pages prerendered
- [ ] The `location` string is the deepest region name plus its parent ("Coblong, Kota Bandung"), or the province name alone on province pages; names are `nama` verbatim, including the type prefix
- [ ] Home-location metadata and `h1` target "Bimbel CPNS, PPPK & BUMN <location>"; each exam-track location page targets only its own track ("Bimbel CPNS <location>"), via per-track Jumbotron location entries in `data/jumbotron.ts`
- [ ] Each location page has a self-referencing absolute canonical URL and Open Graph URL
- [ ] A `bun test` file checks the tree module against a small fixture (no network): an in-set path resolves with the right ancestors, children, and siblings; `/aceh/kabupaten-aceh-selatan/bakongan` and an unknown slug resolve to nothing; a leaf has no children; trailing whitespace in `nama` is trimmed
- [ ] The HTML test harness fetches one location page per family and asserts status 200, exactly one `h1`, the region name in `<title>` and `h1`, and the family's keyword; it fetches a regency page that was not prerendered twice and asserts 200 both times, with the second response served from the cache (`x-nextjs-cache: HIT`); it asserts 404 for `/aceh/kabupaten-aceh-selatan/bakongan` and `/not-a-province`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
