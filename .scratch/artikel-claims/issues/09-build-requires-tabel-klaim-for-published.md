# 09: Build requires a Tabel Klaim for every published Artikel

**What to build:** No Artikel can be published without stored evidence. A published Artikel without a Tabel Klaim fails the build with an error naming its slug. Drafts still build without one. See the spec: `.scratch/artikel-claims/spec.md`.

**Blocked by:** 03, 04, 05, 06, 07, 08

**Status:** ready-for-agent

- [ ] A published Artikel without a Tabel Klaim fails, and a draft without one passes.
- [ ] Tests cover both cases in the existing `validateArtikel` test style.
- [ ] The build passes with all six published Artikel.
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass.
