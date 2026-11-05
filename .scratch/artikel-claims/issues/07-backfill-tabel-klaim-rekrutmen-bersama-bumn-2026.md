# 07: Backfill the Tabel Klaim for `rekrutmen-bersama-bumn-2026`

**What to build:** The published Artikel `rekrutmen-bersama-bumn-2026` becomes accountable sentence by sentence. Build its Tabel Klaim from the text as published now, following the format in the article-writing guide. Re-verify every Klaim against its source, applying the guide's validation rules as they stand today. A source a newer regulation replaced proves history, not the current rule. Show the owner the table as at Gate 1. A Klaim that fails verification or is stale is fixed or removed through the "Editing a published Artikel" flow, which also corrects `references` and sets `updatedAt`. See the spec: `.scratch/artikel-claims/spec.md`.

**Blocked by:** 01, 02

**Status:** ready-for-agent

- [ ] Every sentence of the Artikel that states a fact, including the title if it states one, has a row with source URL, exact location, and verbatim quote. Every other sentence is marked non-klaim.
- [ ] Every Klaim was checked against its source during this ticket, not copied from the existing `references`.
- [ ] Figures, requirements, and rules rest on a Sumber Resmi. News media and social media back only dated statements.
- [ ] Failing or stale Klaim are fixed or removed in the Artikel, and `updatedAt` is set if the text changed.
- [ ] The owner approved the table, and its `Disetujui owner:` line carries that date.
- [ ] The build passes with the cross-check from 01, so the Tabel Klaim URLs and `references` match.
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments

This Artikel cites posts on `x.com` and `instagram.com`. Under the Sumber Resmi rule they back only dated statements, so any figure or rule that rests on them needs a Sumber Resmi or must be dropped.
