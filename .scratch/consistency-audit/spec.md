# Consistency audit fixes

Status: ready-for-agent

## Summary

Act on `docs/audits/2026-10-05-project-consistency.md` (baseline `e36b9e4`). The audit found 18 differences between documentation, data, and rendered output. The owner settled each one in a grilling session on 2026-10-05. This spec records those decisions; the issues under `issues/` carry them out. See `CONTEXT.md` for Nomor Call Center, Seleksi, Paket Program, Privat Online, Artikel Terbaru, and Exam track.

## Decisions

| Finding | Decision | Issue |
| ------- | -------- | ----- |
| 1. Call Center link rotates | Link the displayed number to `wa.me/6281215523902` on every page. The Konsultasi CTA keeps rotating. | 01 |
| 2. Seleksi heading names PPPK | Home, home-location, and Tryout show three stacked Seleksi sections: CPNS, PPPK, BUMN. `seleksiHome` becomes `seleksiCpns` with a CPNS-only title. | 02 |
| 3. Navbar Paket/Testimoni links on Blog | **wontfix.** The owner chose to keep `#paket-program` and `#testimoni` as they are. Known consequence: on Blog, Kategori, Penulis, Artikel, and search pages the two links have no target. | none |
| 4. Stale Artikel modification date | `updatedAt: "2026-10-03"` for the PP 7/1977 correction. `publishedAt` stays. | 03 |
| 5. Artikel Terbaru order | "After FAQ" is current. Glossary already fixed on 2026-10-05; issue 08 gets a dated amendment. | 04 |
| 6. Old failing tests still read as open | Append a dated resolution; keep the 2026-10-02 baseline as history. | 04 |
| 7. README understates region-service | Document that the four root landing pages, location pages, and the sitemap need region-service. | 04 |
| 8. Region-service limit 32 vs 40 | The owner set local and production to **32 requests per 60 seconds** on 2026-10-05. README changes 40 to 32. | 04 |
| 9. Hourly rotation spec | Keep the epoch formula. The Konsultasi day changes at 00:00 UTC (07:00 WIB). Document it in a supersession note. | 04 |
| 10. BacaJuga rule unreachable | Link 2–5 other published Artikel; when fewer exist, link all of them (0 allowed). Component contract unchanged. | 05 |
| 11. PP 17/2020 missing from Referensi | Add its own entry (official JDIH or peraturan.go.id page) and check every claim against Referensi. | 05 |
| 12. Validation gaps | Enforce four rules, one test each: independent `title`/`seoTitle` limits, published-only `related`, valid `YYYY-MM-DD` dates, `updatedAt` ≥ `publishedAt`. No "not in the future" check. | 06 |
| 13. Duplicated prices and address | FAQ builds prices from `data/paket-program.ts` and uses the full `officeAddress`. The derived strings are the check; no extra test. | 07 |
| 14. "PPPK Teknis 2026" hardcoded | Use `tahunSeleksi`. Dated historical evidence (CPNS 2024, RBB 2025) stays literal. | 07 |
| 15. AGENTS rule conflicts | Add three exceptions, each pointing to its ADR or file (see issue 09). | 09 |
| 16. Lifecycle states undocumented | Document `done` as a lifecycle state. Accept both `Status:` and `**Status:**`. Mark the Blog research doc superseded. | 09 |
| 17. Rich Results Test open | The owner runs it after issue 03 is deployed. | 10 |
| 18. Terminology and tokens | "Anda" on every page outside the Blog, "kamu" on the Blog. "Kementerian" in visible text. CTA token is `#ffb050`. Legacy `ppk` asset filenames stay. | 08, 09 |
| Business facts | Source is Akademi ASN, approved 2026-10-05, owner Dimas Maulana. Recorded in `docs/business-facts.md`. | 07 |

## Out of scope

- Showing Privat Online in the Paket Program section. The owner keeps the UI as it is; the FAQ mentions Privat Online.
- Moving the Konsultasi day boundary to midnight WIB.
- Renaming legacy asset files that contain `ppk`.

## Order

Issue 01 is the most urgent. Issues 01–09 can run in any order. Issue 10 is blocked by 03.
