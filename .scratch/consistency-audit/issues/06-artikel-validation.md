# 06: Validate the documented Artikel data contract

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** `validateArtikel` in `lib/artikel-schema.ts` rejects each invalid case the audit reproduced, with a useful error message.

**Blocked by:** none

**Status:** ready-for-agent

**Category:** enhancement

- [ ] `title` and `seoTitle` are checked against their own limits from `docs/agents/article-writing.md`. Today line 71 checks only `(seoTitle ?? title).length`, so a 51-character `title` with a short `seoTitle` passes.
- [ ] A published Artikel whose `related` lists a draft slug fails (lines 83–89 check only that the slug exists).
- [ ] `publishedAt` and `updatedAt` must be valid `YYYY-MM-DD` dates. `"2026-02-30"` and `"02-10-2026"` fail.
- [ ] `updatedAt` earlier than `publishedAt` fails.
- [ ] No "not in the future" check.
- [ ] One test case per rule in the existing validation test file. Current entries still pass.
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass.

## Comments
