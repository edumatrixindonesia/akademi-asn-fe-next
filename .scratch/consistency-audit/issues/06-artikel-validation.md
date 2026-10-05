# 06: Validate the documented Artikel data contract

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** `validateArtikel` in `lib/artikel-schema.ts` rejects each invalid case the audit reproduced, with a useful error message.

**Blocked by:** none

**Status:** done

**Category:** enhancement

- [x] `title` and `seoTitle` are checked against their own limits from `docs/agents/article-writing.md`. Today line 71 checks only `(seoTitle ?? title).length`, so a 51-character `title` with a short `seoTitle` passes.
- [x] A published Artikel whose `related` lists a draft slug fails (lines 83–89 check only that the slug exists).
- [x] `publishedAt` and `updatedAt` must be valid `YYYY-MM-DD` dates. `"2026-02-30"` and `"02-10-2026"` fail.
- [x] `updatedAt` earlier than `publishedAt` fails.
- [x] No "not in the future" check.
- [x] One test case per rule in the existing validation test file. Current entries still pass.
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments

- 2026-10-05: Completed in `290e80d`. `bun run lint`, `bun run typecheck`, and `bun test` pass (70 tests).
