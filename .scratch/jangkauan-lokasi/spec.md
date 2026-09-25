# Jangkauan section and location pages

Status: ready-for-agent

## Summary

The reference site's home page ends with a Jangkauan section that links to one page per province. This project deferred that section from the home landing page spec (`.scratch/beranda-design-system/spec.md`), because the location pages it links to did not exist yet. This effort builds the location pages for all four page families, plus the Jangkauan, Lokasi Lain, and breadcrumb navigation that connects them. See `CONTEXT.md` for Location page, Jangkauan, Lokasi Lain, Kabupaten Besar, and Jabodetabekjur.

## Known decisions

### Page set

- Every page family gets location variants: `/<loc>` (home), `/bimbel-cpns/<loc>`, `/bimbel-pppk/<loc>`, `/bimbel-bumn/<loc>`, using the `[...locations]` routes.
- Location pages exist for exactly this set of regions, all read from region-service:
  - every province (38) and every regency/city (514);
  - districts only in regencies of the `kabupaten-besar` region group (589);
  - villages only in regencies of the `jabodetabekjur` region group (1,868). Every `jabodetabekjur` regency is also in `kabupaten-besar`.
- This depth rule is recorded in `docs/adr/0001-location-page-depth.md`.
- That is about 3,009 pages per family and about 12,000 in total. Any other path returns 404, including paths that exist in region-service but fall outside this set (e.g. `/aceh/kabupaten-aceh-selatan/bakongan`).
- URLs use region-service `path` verbatim (e.g. `/jawa-barat/kota-bandung`). Slugs keep the `kabupaten-` / `kota-` prefix, which keeps Kabupaten Bandung and Kota Bandung apart.
- The reference site (bimbelcpnsindonesia.com) is a separate project. Its URLs are not mirrored or redirected.

### Region-service

- Owner's own service at `REGION_SERVICE_URL`, JWT bearer auth with `REGION_SERVICE_TOKEN` (server-only), fetched from Server Components.
- Endpoint: `GET /wilayah.php`. Response items are `{ kode, nama, slug, path }`, plus `pagination` and `rate_limit`.
- Query parameters: `type` (`provinsi` | `kabupaten` | `kecamatan` | `kelurahan`, default `provinsi`), `parent_id` (descendants of an ancestor `kode`), `region` (named group such as `kabupaten-besar` or `jabodetabekjur`; ignored for `provinsi`), `search` (substring of `nama` or `slug`), `page`, `limit` (max 4000, default 50).
- Rate limit is 32 requests per 60 seconds. Each list fits in one request, so the whole page set needs about 4 requests: `type=provinsi`, `type=kabupaten`, `type=kecamatan&region=kabupaten-besar`, `type=kelurahan&region=jabodetabekjur`. Resolve paths, children, and siblings from those lists in memory rather than one request per page.
- Some `nama` values carry trailing whitespace (e.g. `"Kota Jakarta Utara "`); trim them.

### Rendering

- The production build reaches a deployed region-service URL. All location paths are statically generated with `generateStaticParams`, and `dynamicParams = false` makes unknown paths 404.
- `app/sitemap.ts` lists every location page of every family.

### Keywords and names

- Home-location pages target the combined query ("Bimbel CPNS, PPPK & BUMN <location>") in metadata and `h1`. Each exam-track location page targets only its own track ("Bimbel CPNS <location>"), so the families do not compete for the same query.
- Region names are used verbatim from `nama`, including the type prefix ("Bimbel CPNS Kabupaten Sleman").
- The `location` string is the deepest region name plus its parent (e.g. "Coblong, Kota Bandung"), because district and village names repeat across regencies. Province pages use the province name only.

### Section content

- Keunggulan, CTA Footer, and Paket Program get location variants: `keunggulanLocation`, `ctaFooterLocation`, `paketProgramLocation`. Each spreads the shared static entry and overrides only the text that names the location. They take no exam track; the track keyword comes from the Jumbotron and metadata.
- `paketProgramLocation` overrides only `offlineTitle` (e.g. "Program Bimbel Privat di <location>"). This claim is true everywhere because Privat Home Visit is available anywhere.
- Lembaga, Media Massa, and Testimoni stay static on location pages; they are logos or screenshots, and a location in their titles would be false or forced.
- Location pages under DI Yogyakarta get extra Kelas Offline content (the office address, studying at the Akademi ASN office). This is the only DIY-specific branch. The address is the strongest local signal for queries like "bimbel cpns jogja", alongside Google Business Profile, NAP consistency, and `LocalBusiness` schema.

### Location intro

- Each location page has an intro directly after the Jumbotron, headed by an `h2` such as "Bimbel CPNS di Kabupaten Sleman".
- The intro is one base text per region, shared across the four families, followed by one templated track-specific sentence per family (e.g. "Formasi CPNS di Jawa Barat …").
- The 38 provinces and 34 Kabupaten Besar (72 regions) get hand-written base texts, stored in a `data/` map keyed by region `kode` (stable across slug changes). Every other region, and any of the 72 not yet written, falls back to a template.
- Launch does not wait for the hand-written texts. Agents draft them in batches for the owner's review, and they land one region at a time.

### Navigation

- **Breadcrumb** at the top of every location page, above the Jumbotron (e.g. Home › Jawa Barat › Kota Bandung), with `BreadcrumbList` JSON-LD. Within an exam-track family, the root is that track's page.
- **Jangkauan** links to the location pages one level below the current page, within the same family. Home and exam-track pages list the 38 provinces; a location page lists its children in the page set. A page with no children in the page set shows no Jangkauan.
- **Lokasi Lain** links to the other regions under the same parent, within the same family, on every location page, uncapped. Its heading names the parent ("Lokasi lain di Kota Bandung"), or reads "Provinsi lain" on a province page.
- Section order on a location page: Breadcrumb, Jumbotron, intro, the existing landing-page sections in their current order, Jangkauan, Lokasi Lain, CTA Footer. Non-location landing pages show Jangkauan at the same position, before CTA Footer.

## Out of scope

- District pages outside Kabupaten Besar and village pages outside Jabodetabekjur.
- Data-driven local facts such as per-pemda formasi counts. A possible follow-up once a formasi data source exists.
- Hand-written intros beyond the 72 regions.
- Any change to region-service.

## Comments

### Agent brief

> *This was generated by AI during triage.*

**Category:** enhancement

**Summary:** Build location pages for all four page families (home, CPNS, PPPK, BUMN), fed by region-service, with Jangkauan, Lokasi Lain, and breadcrumb navigation, plus the Jangkauan section on the existing non-location landing pages.

**Current behavior:** Only `/`, `/bimbel-cpns`, `/bimbel-pppk`, and `/bimbel-bumn` exist. The four `*-location` page components are empty stubs, no `[...locations]` routes exist, nothing reads region-service, and the sitemap lists only the four pages.

**Desired behavior:** Every path in the page set above renders a statically generated location page in each family, with location-specific metadata, `h1`, intro, section variants, breadcrumb with `BreadcrumbList` JSON-LD, Jangkauan (when the region has children in the page set), and Lokasi Lain. Every other path returns 404. The sitemap lists all location pages. Home and exam-track pages gain a Jangkauan section listing the 38 provinces.

**Key interfaces:**

- Region-service `GET /wilayah.php` as documented under Known decisions. The token is server-only and never reaches a `"use client"` file.
- The `[...locations]` routes under `app/` and `app/bimbel-*/`, each rendering the matching `components/pages/*-location.tsx`.
- New sections for the intro, Jangkauan, Lokasi Lain, and breadcrumb, following the data pattern in `AGENTS.md` (props type exported from the section, entries in `data/`, location entries as functions of the location).
- `keunggulanLocation`, `ctaFooterLocation`, `paketProgramLocation`, and per-track Jumbotron location entries.

**Acceptance criteria:**

- [ ] `/di-yogyakarta`, `/bimbel-cpns/jawa-barat/kota-bandung`, `/bimbel-pppk/jawa-barat/kota-bandung/coblong`, and `/bimbel-bumn/dki-jakarta/kota-jakarta-pusat/gambir/<village>` render with the region name in `<title>`, `h1`, and intro.
- [ ] `/aceh/kabupaten-aceh-selatan/bakongan` and `/not-a-province` return 404.
- [ ] Each page has exactly one `h1`; content is in the initial HTML (Server Components).
- [ ] Home-location metadata names all three tracks; exam-track location metadata names only its track.
- [ ] Breadcrumb renders with valid `BreadcrumbList` JSON-LD.
- [ ] Jangkauan lists the correct children and is absent on leaf pages (e.g. `/aceh/kabupaten-aceh-selatan`, `/jawa-barat/kota-bandung/coblong`).
- [ ] Lokasi Lain lists the siblings, with the parent named in its heading ("Provinsi lain" on province pages).
- [ ] A region with a hand-written intro in `data/` shows it; any other region shows the template intro; both are followed by the track sentence.
- [ ] DIY location pages show the Kelas Offline office content; no other region does.
- [ ] `app/sitemap.ts` includes every location page of every family.
- [ ] A full build makes no more than a handful of region-service requests (well under 32 per minute).
- [ ] `bun run lint` and `bun run typecheck` pass.

**Out of scope:** see the Out of scope section above. Writing the 72 hand-written intros is a separate, ongoing content task.
