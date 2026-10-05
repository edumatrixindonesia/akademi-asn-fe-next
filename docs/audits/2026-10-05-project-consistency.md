# Project consistency audit

Date: 2026-10-05. Baseline: `e36b9e4`.

This audit compares project documentation, approved local drafts, static data, routes, and rendered output. It covers consistency and completeness of the existing contracts. It proposes no performance work, SEO strategy, dependency changes, or architectural redesign. Application code and existing issues were not changed.

## Coverage and verification

- `.scratch/`: all 3 feature specs, 28 implementation issues, 6 approved intro batches, the Blog research document, and cover artifacts.
- Root instructions and setup documents, both ADRs, and all 7 existing documents under `docs/`.
- Application routes, page composition, section data, reusable components, region and Artikel helpers, configuration, and existing tests. Source inventory: 27 files under `app/`, 62 under `components/`, 38 under `data/`, 10 under `lib/`, and 15 under `tests/`.
- Graphify provided navigation; findings were checked against current source and runtime output.
- `bun run lint`: passed.
- `bun run typecheck`: passed.
- `bun test` against `bun dev`: **63 passed, 0 failed**, across 15 files.
- `bun run build`: passed. Exactly **152 province location pages** were prerendered. Landing pages revalidate daily; the sitemap revalidates weekly.
- Production server: 16 sampled pages returned 200, had one `h1`, and had a canonical matching the requested path. Every sampled FAQ JSON-LD question and answer matched visible content. Search and the Penulis without a published Artikel were `noindex, follow`.
- Production draft URL and two out-of-set location URLs returned 404. Production RSS contained 1 published Artikel and no draft. Production sitemap contained **12,046 distinct URLs**, no draft, and no empty Penulis page.
- Local region-service returned **38 provinces, 514 regencies/cities, 589 districts, and 1,868 villages**: 3,009 location nodes, no duplicate codes or paths within each list, and no missing parents.
- All **72 intro entries** exactly matched their approved draft texts after whitespace normalization. They covered precisely the 38 provinces and 34 Kabupaten Besar derived from the current API lists.
- All **48 distinct literal image paths** detected in application source existed. All four public Kategori covers were byte-identical to approved `.scratch/blog/covers/` artifacts. Literal file references and relative Markdown links checked in documentation resolved.

These results establish local consistency for the checked data and pages. They do not certify every one of the approximately 12,000 rendered location pages, current external legal rules, current business claims, live reference websites, or Google's Rich Results Test. Existing historical verification records were read, not reproduced in full; region-service outage behavior was not re-tested.

## Findings and actions

### 1. The displayed Call Center number can open another admin's WhatsApp

**Type:** Confirmed behavior mismatch. **Priority:** High.

Evidence: [data/footer.ts](../../data/footer.ts), lines 29–32, uses `callCenterPhone.display` and its matching `ariaLabel`, but sets the link to the rotating `konsultasiUrl`. [data/contact.ts](../../data/contact.ts), lines 9–12, defines one fixed published number. `CONTEXT.md` explicitly distinguishes that number from Admin Konsultasi.

A direct four-day probe showed the same displayed number, `0812-1552-3902`, linking to Asyah, Nevita, Putri, and Sari respectively. Three days out of four, the label and destination differ. Existing tests check that all Konsultasi links rotate together; they do not check that the displayed phone number matches the destination.

**Action:** Make the published phone link reach that published number. Keep a separately labelled Konsultasi action for the rotating admin. Align the accessible label with the actual destination.

**Complete when:** Clicking the displayed Call Center number always reaches its stated number, including on days assigned to another Konsultasi admin.

### 2. Seleksi copy names PPPK while its stages describe only CPNS

**Type:** Confirmed content mismatch. **Priority:** High.

Evidence: [data/seleksi.ts](../../data/seleksi.ts), line 8, titles `seleksiHome` as “Pahami Tahapan Seleksi & Sistem Penilaian Resmi CPNS & PPPK”. Its only stages are SKD and SKB. CPNS pages and their location variants also render this entry. The separate `seleksiPppk` entry and `CONTEXT.md` correctly describe the different PPPK selection components.

**Action:** Give the CPNS entry a CPNS title. For the combined Home and Tryout pages, make the heading accurately describe the content shown, or include the other selection tracks if that is the approved scope.

**Complete when:** A heading never presents SKD/SKB as the PPPK selection flow.

### 3. Global Paket and Testimoni links have no target on Blog pages

**Type:** Confirmed navigation mismatch. **Priority:** High.

Evidence: [data/navbar.ts](../../data/navbar.ts), lines 7–8, supplies page-local `#paket-program` and `#testimoni` links. The navbar is rendered from the root layout on all pages. Production checks found both targets absent on Blog, Kategori, Penulis, Artikel, and search pages.

**Action:** Define where these global links should lead on pages without the sections. The smallest consistent destination is an existing landing page plus the relevant fragment, such as `/#paket-program` and `/#testimoni`.

**Complete when:** Both links reach real sections from every page family, on desktop and mobile.

### 4. The published Artikel's modification date is stale

**Type:** Confirmed data/history mismatch. **Priority:** High.

Evidence: [data/artikel.ts](../../data/artikel.ts), lines 15–18, has `publishedAt: "2026-10-02"` and no `updatedAt`. Commit `231b2a4` on 2026-10-03 corrects the salary claim's legal attribution in the MDX body and replaces its source with PP 7/1977. The [writing guide](../agents/article-writing.md), line 44, reserves `updatedAt` for substantive changes to published content.

The rendered Artikel still shows only 2 October. Its `BlogPosting.dateModified`, Open Graph modification time, and sitemap `lastModified` fall back to the original publication date.

**Action:** Record `updatedAt: "2026-10-03"` for this substantive correction. Keep `publishedAt` unchanged.

**Complete when:** The visible update date, JSON-LD, Open Graph, and sitemap agree on the correction date.

### 5. Artikel Terbaru order differs between current documents

**Type:** Confirmed documentation drift. **Priority:** Medium.

Evidence: [CONTEXT.md](../../CONTEXT.md), line 138, and [Blog issue 08](../../.scratch/blog/issues/08-artikel-terbaru-on-landing-pages.md), lines 5 and 15, say “before FAQ”. The [Blog spec](../../.scratch/blog/spec.md), line 117, current page components, and current HTML tests say “after FAQ”. Commit `650b77d` records the change.

**Action:** Update the glossary. Append a dated amendment to issue 08 explaining that the order changed after completion. Preserve its original implementation history.

**Complete when:** All current instructions say “after FAQ”, and the old acceptance wording is clearly historical.

### 6. The five failing tests still appear as outstanding debt

**Type:** Confirmed documentation drift. **Priority:** Medium.

Evidence: Blog issues 01, 04, 06, 08, and especially [issue 11](../../.scratch/blog/issues/11-tech-debt-cleanup.md), lines 17–19 and 58–63, retain active wording about five failures awaiting a separate session. The audit ran the entire suite successfully: 63 passed, no exclusions. Later commits include location expectation fixes and FAQ order/title test updates.

**Action:** Append a dated resolution with the current command, result, and relevant fixing commits. Keep the dated 2026-10-02 baseline as history; do not rewrite it as if it had passed then.

**Complete when:** A reader can tell that the old failures are resolved and need no new debugging ticket.

### 7. README understates the dependency on region-service

**Type:** Confirmed documentation/code mismatch. **Priority:** Medium.

Evidence: [README.md](../../README.md), lines 46–49, says non-location pages still work without region-service in development. `app/page.tsx` and all three root exam-track routes call `getProvinces()` before rendering. These four non-location landing pages require region-service too.

**Action:** State which pages require the service: the four root landing pages, location pages, and sitemap. Explain that Tryout, Produk, and Blog page content does not use region-service directly. A warm cache can conceal an outage, so it is not proof of independence.

**Complete when:** Setup and outage expectations match the actual route dependencies.

### 8. Current region-service limit differs from old specs and comments

**Type:** Confirmed local contract drift. **Priority:** Medium.

Evidence: [jangkauan-lokasi/spec.md](../../.scratch/jangkauan-lokasi/spec.md), line 28, issue 01, and [lib/region-service.ts](../../lib/region-service.ts), line 11, say 32 requests per 60 seconds. README says 40. Every local API response inspected during this audit reported `limit: 40`, `window: 60`.

**Action:** Describe the limit as a service setting and identify the dated response that supplied any quoted number. Amend current comments/spec guidance to agree with the current local contract. The production limit was not queried in this audit.

**Complete when:** Current instructions do not present both 32 and 40 as the same current environment's limit.

### 9. The original Home spec still presents hourly rotation as current

**Type:** Superseded specification without a clear pointer. **Priority:** Medium.

Evidence: [beranda-design-system/spec.md](../../.scratch/beranda-design-system/spec.md), lines 15, 73, and 80–81, and its issues 01/02 describe hourly rotation, `revalidate = 3600`, and `getKonsultasiUrl(now?)`. [Jangkauan issue 05](../../.scratch/jangkauan-lokasi/issues/05-daily-konsultasi-rotation.md) intentionally supersedes the period. Current code rotates daily, sets 86400, and accepts `(topic?, now?)`.

**Action:** Add a supersession note linking the later decision and documenting the current signature. State that daily ISR does not guarantee every page changes admin simultaneously; this is already accepted in issue 05. Clarify whether the day boundary is UTC or WIB: the current epoch-based formula changes at 00:00 UTC, or 07:00 WIB.

**Complete when:** Readers cannot mistakenly implement the old hourly API or assume a midnight-WIB switch from the phrase “per day”.

### 10. The first Artikel cannot meet the unconditional BacaJuga rule

**Type:** Editorial contract contradiction. **Priority:** Medium.

Evidence: [article-writing.md](../agents/article-writing.md), line 24, requires 2–5 `<BacaJuga>` blocks. Line 63 requires their targets to be other published Artikel. The first published Artikel has none, and production currently has no other published Artikel. Its two links to landing pages are ordinary Markdown links. The Blog spec also describes BacaJuga as accepting Artikel or landing pages, while the implemented component accepts only an Artikel slug.

**Action:** Document an explicit first-Artikel/few-Artikel exception. Keep landing links as Markdown, or explicitly approve a different component contract before changing it. Do not create filler Artikel or self-links merely to satisfy the count.

**Complete when:** The first approved Artikel satisfies an achievable, clearly documented editorial rule.

### 11. A regulation named in the body is absent from the reference list

**Type:** Reference completeness gap. **Priority:** Medium.

Evidence: [the published MDX](../../data/artikel/perbedaan-cpns-dan-pppk.mdx), line 13, explicitly names PP 17/2020 as an amendment to PP 11/2017. [data/artikel.ts](../../data/artikel.ts) has no separate reference for PP 17/2020. The writing guide says references list every source behind a claim.

**Action:** Make the referenced regulation traceable from the list, either with its own source entry or a clearly identified consolidated text covering the amendment. Audit the claim-to-reference mapping before calling the reference list complete.

**Complete when:** A reader can reach the source behind the amendment statement from Referensi. This finding does not assert that the legal statement is false.

### 12. Artikel validation covers less than the documented data contract

**Type:** Reproduced validation gaps; current entries are valid. **Priority:** Medium.

Evidence: [lib/artikel-schema.ts](../../lib/artikel-schema.ts), line 71, checks `(seoTitle ?? title).length`, so a 51-character `title` with a short `seoTitle` yields no error. The guide limits both fields independently. Lines 83–89 check that a related slug exists, but not that it is published; a published Artikel pointing to the permanent draft fixture passes validation and later loses that manual selection when production filters drafts.

Direct probes also showed that invalid date strings and an `updatedAt` earlier than `publishedAt` pass this validator. Invalid dates may fail later during rendering; the probe does not establish that invalid dates survive a production build. Chronologically inconsistent valid dates are not checked here.

**Action:** Enforce the documented title limits independently and reject draft `related` targets where the contract requires published targets. Define and validate date format/order at the same data boundary. Keep source truth and official-source review in the editorial process unless a reliable mechanical rule is specified.

**Complete when:** Each reproduced invalid case receives a useful data validation error. One focused existing validation test can cover each agreed rule.

### 13. Prices and office information have competing editable copies

**Type:** Confirmed duplication with partial text drift; prices currently agree. **Priority:** Medium.

Evidence: [data/faq.ts](../../data/faq.ts), lines 13–14, repeats Optima/Maxima/Ultima prices and sessions from `data/paket-program.ts`. Its PPPK registration answer, line 137, repeats the address and opening hours, shortening the address and using “No. 3”. Footer and Kelas Offline use `officeAddress`; organization schema separately stores address pieces and hours.

The current price comparison passed: Optima Rp1.960.000, Maxima Rp2.793.000, Ultima Rp5.292.000. Office descriptions refer to the same site; this audit found no conflicting physical location or hours.

**Action:** Name one authoritative value for each business fact and derive the repeated text from it where practical. Distinguish a deliberate short address from an accidental separate source. Add a small consistency check only for the copies that remain independently editable.

**Complete when:** Updating one price or office fact updates all places that promise that fact, without requiring undocumented edits elsewhere.

### 14. The stated annual update point misses a current-year FAQ

**Type:** Confirmed maintenance contract gap. **Priority:** Medium.

Evidence: [data/tahun-seleksi.ts](../../data/tahun-seleksi.ts) is the shared year for Tryout and Produk copy. [data/faq.ts](../../data/faq.ts), line 100, independently hardcodes “PPPK Teknis 2026”. Updating `tahunSeleksi` will not update this question. Historical CPNS 2024, PPPK 2024, and RBB 2025 statements are explicitly dated evidence and serve a different purpose.

**Action:** Declare whether this PPPK question follows the shared promotional year. If yes, use the agreed shared value; if no, document a separate review date/owner. Preserve historical evidence years rather than replacing every year in the project.

**Complete when:** The annual maintenance instruction identifies all copy meant to change together.

### 15. AGENTS rules need explicit exceptions for the accepted implementation

**Type:** Documentation policy conflicts. **Priority:** Medium.

Three concrete differences need a written decision:

- `AGENTS.md:61` says SEO belongs in routes, not `data/`. ADR-0002 explicitly stores Artikel metadata in `data/artikel.ts`. Blog and Kategori metadata fields and `penulisMeta` also live in data. Route files do still export/generate Next metadata. Clarify the distinction between content fields and route metadata, and document the accepted Blog exception.
- `AGENTS.md:87` requires a data file mirroring every section. `components/sections/artikel-per-kategori.tsx` receives `artikelPerKategori` from `data/artikel-listing.ts`; there is no `data/artikel-per-kategori.ts`. Either accept and document this specific grouping or restore the stated file pairing.
- `AGENTS.md:18` requires unique location-specific content on each page. ADR-0001 expressly allows templates outside the 72 hand-written regions; the implementation follows that accepted page-set decision. Explain exactly which uniqueness requirement applies to template-based pages so the instructions no longer conflict.

**Action:** Resolve these contracts in the governing documents before asking an agent to enforce them. Do not mechanically move Artikel metadata out of data while ADR-0002 still requires it there.

**Complete when:** The same implementation can be assessed consistently against AGENTS, ADRs, and feature specs.

### 16. Issue lifecycle states are not fully documented

**Type:** Tracker documentation gap. **Priority:** Low.

All 28 implementation issues have a status; none is missing. Twenty-seven are `done`, and one is `ready-for-human` with a reason. The tracker docs describe triage roles and the separate Wayfinding `claimed`/`resolved` states, but do not define the normal implementation lifecycle's `done`. Specs use `Status:`, while issue files commonly use `**Status:**`. The research document's “no spec yet” state is a dated pre-spec snapshot.

**Action:** Document lifecycle states separately from triage roles, accept or standardize one status syntax, and mark the research snapshot as superseded by the Blog spec. Preserve the chronological history. No wholesale issue renaming or new tracker is needed.

**Complete when:** A person or script can distinguish triage state, implementation completion, pending verification, and archived research without guessing.

### 17. Blog completion still has one external acceptance condition open

**Type:** Correctly recorded incomplete work. **Priority:** Medium.

Evidence: [Blog issue 10](../../.scratch/blog/issues/10-first-artikel.md), lines 9 and 15–18, and the Blog spec remain `ready-for-human` because Google's Rich Results Test did not return results. The unchecked condition is explicit. Local production output contains the expected BlogPosting and BreadcrumbList, but this is not equivalent to the external test.

**Action:** Run the recorded external acceptance check against the current public Artikel or current production HTML, save the result and date, and close issue 10 and the parent spec only after success.

**Complete when:** The external result is recorded. The audit does not mark this issue done.

### 18. Small terminology and token differences need an explicit current convention

**Type:** Low-impact consistency notes. **Priority:** Low.

Evidence:

- `data/lembaga.ts` repeatedly spells visible alt text “Kementrian”; the normal spelling is “Kementerian”. Asset filenames can retain their original spelling without determining visible copy.
- `article-writing.md` describes “kamu” as the site's register; Jumbotron, Jangkauan, Tryout, and Produk also use “Anda”. Decide whether the register varies by page family or is site-wide.
- The original brand spec records CTA `#FFB04F`, while `app/globals.css:66` currently defines `#ffb050`. Decide which is the current approved token; record that decision. This is a small documented-value difference, not a performance finding.
- Some retained public asset names contain `ppk`, although the glossary prohibits it in URLs/identifiers. All checked page routes use `pppk` correctly. Clarify that retained reference asset names are an exception if intended; do not infer a broken exam-track route from an old filename.

**Complete when:** Current visible wording and approved tokens are unambiguous, with deliberate legacy filename exceptions recorded.

## Business facts that need owner records rather than technical inference

The code carries “15.000+ alumni”, “500+ soal”, “300+ halaman”, and sold counts 167/50/250/10. Some source comments say they were copied from the reference site. Internal rendering tests confirm that these values appear; they cannot establish that the business values remain true.

For future edits, record the approved source, approval date, and who updates these values. Also record the intended service distinctions between Kelas Offline, Privat Home Visit, Bootcamp Online, and private online tutoring. The current FAQ mentions private online tutoring, while the displayed package list focuses on offline packages and Bootcamp.

The current product-price distinctions match `CONTEXT.md`: Tryout CPNS Rp30.000 and E-Book Modul CPNS Rp50.000 are different offers from Paket Tryout SKD Rp50.000 and E-Modul Lolos CPNS & PPPK Rp75.000. Their differing prices are not a contradiction. Paket Hemat Komplit is Rp70.000 against Rp80.000 bought separately, so the displayed Rp10.000 saving is consistent.

## Suggested completion order

1. Correct the four current behavior/content mismatches: phone destination, Seleksi heading, Blog navigation, and Artikel modification date.
2. Amend current docs and old issue records: FAQ order, resolved test debt, region-service dependencies/limit, and superseded rotation.
3. Resolve editorial and data contracts: BacaJuga exception, reference completeness, validation rules, shared business facts, and annual review values.
4. Clarify governing-document exceptions and tracker states; record small terminology/token choices.
5. Finish the already-recorded external acceptance condition and then close the Blog effort.

No application fixes, issue status changes, commits, deployment, or external publication were performed by this audit.
