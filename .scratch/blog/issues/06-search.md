# 06: Artikel search

**Parent:** `.scratch/blog/spec.md`

**What to build:** `/blog/cari?q=…`, a server-rendered results page behind the native search forms.

**Blocked by:** 04

**Status:** ready-for-agent

- [ ] Case-insensitive match of `q` in title, excerpt, and focus keyword of published Artikel; results in the shared card grid
- [ ] "Hasil pencarian: {q}" heading, "Tidak ada artikel yang cocok" when empty; an empty `q` shows the form only
- [ ] `noindex, follow`; absent from the sitemap; no client JS; `q` is rendered as text only (no HTML injection)
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
