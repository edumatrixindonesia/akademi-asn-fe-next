# 02: Guide and /write-article keep the Tabel Klaim

**What to build:** The editorial contract tells agents and the owner how evidence is stored and how a published Artikel is edited. The article-writing guide defines Sumber Resmi (government bodies on `.go.id`, laws and regulations, plus FHCI and Danantara), and states that news media and official social media accounts back only dated statements. It describes the Tabel Klaim: where it lives, its format (the Gate 1 table grouped by `h2`, with sentence, source URL, exact location, and verbatim quote; non-klaim rows marked), and the `Disetujui owner: <date>` header line. It adds "Editing a published Artikel": any edit that adds, changes, or removes a sentence stating a fact (including a factual title), or changes `references`, shows the owner a delta table with Gate 1 evidence, waits for approval, updates the Tabel Klaim and its approval date, and sets `updatedAt`. Edits that change no Klaim skip this. `/write-article` writes the Tabel Klaim at the Draft step from the approved Gate 1 table, and updates it at Gate 2 if a Klaim changed. See the spec: `.scratch/artikel-claims/spec.md`.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] The guide's Validation rules use the term Sumber Resmi, and list the same domains as the build check.
- [ ] The guide has a Tabel Klaim section with location, format, and approval line, and says the build cross-checks its URLs against `references`.
- [ ] The guide has an "Editing a published Artikel" section with the Klaim-change definition and the delta-table flow.
- [ ] `/write-article` Draft step writes the Tabel Klaim. Gate 2 updates it when a Klaim changed.
- [ ] Wording uses the terms Klaim, Tabel Klaim, and Sumber Resmi as defined in `CONTEXT.md`.
- [ ] Owner reviews and approves the wording.
