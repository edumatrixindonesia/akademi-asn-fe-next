# 07: One source for each business fact

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** Changing one price, the office address, or the selection year in its source updates every place that repeats it. Business numbers have a recorded owner.

**Blocked by:** none

**Status:** done

**Category:** enhancement

- [x] `data/faq.ts` (around lines 13–14): build the Optima, Maxima, and Ultima prices and session counts from `data/paket-program.ts` with template literals, like `hargaPaketPrivat` already does.
- [x] `data/faq.ts` (around line 137): use the full `officeAddress` from `data/contact.ts` instead of the shortened "No. 3" text. Keep opening hours in one place and reuse it.
- [x] `data/faq.ts` (around line 100): "PPPK Teknis 2026" uses `tahunSeleksi` from `data/tahun-seleksi.ts`. Leave dated historical evidence (CPNS 2024, PPPK 2024, RBB 2025) literal.
- [x] Add a line to the annual-update comment in `data/tahun-seleksi.ts` (or wherever the annual instruction lives) listing every copy that follows `tahunSeleksi`.
- [x] Create `docs/business-facts.md`: one row per fact with value, where it appears, source, approval date, and owner. Facts: 15.000+ alumni, 500+ soal, 300+ halaman, sold counts 167/50/250/10, and the Paket Program prices. Every row: source "Akademi ASN", approved 2026-10-05, owner Dimas Maulana.
- [x] Replace code comments that say these values were "copied from the reference site" with a pointer to `docs/business-facts.md`.
- [x] Rendered FAQ text and FAQ JSON-LD still match each other and the current prices (Optima Rp1.960.000, Maxima Rp2.793.000, Ultima Rp5.292.000).
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments

Implemented in 9d63aa1. Lint, typecheck, and `bun test` (72 tests, against `bun dev`) pass.
