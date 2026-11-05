# Tabel Klaim for every Artikel

Status: ready-for-agent

## Problem Statement

The owner's rule is that every published Artikel must be 100% accountable: every sentence that states a fact can be traced to a source. The editorial rules in the article-writing guide already demand this, and Gate 1 of `/write-article` shows the owner a table of every Klaim with its source, location, and verbatim quote. But that table lives only in the chat. Once the owner approves it, the evidence is gone. Months later nobody can answer "what backs this sentence?" without researching it again.

Three more gaps follow from that:

- An edit to a published Artikel does not go through any gate, so a new or changed Klaim can ship without evidence or owner approval.
- The build only checks that a published Artikel has at least one reference. It does not check that one of them is a Sumber Resmi, although the guide requires it.
- Nothing checks that `references` lists every source behind a Klaim and only those, although the guide requires that too.

The six published Artikel have no stored evidence at all.

## Solution

Every Artikel keeps its Tabel Klaim as a committed Markdown file next to the docs, in the same shape the owner approves at Gate 1. The file records when the owner last approved it. `/write-article` writes it at the Draft step. Any edit to a published Artikel that changes a Klaim shows the owner a delta table, updates the Tabel Klaim, and sets `updatedAt`. The six published Artikel are backfilled one by one, which re-verifies every Klaim they make.

The build enforces what it can check mechanically:

- A published Artikel cites at least one Sumber Resmi.
- A published Artikel has a Tabel Klaim.
- The URLs in a Tabel Klaim and in `references` are the same set.

Terms (Klaim, Tabel Klaim, Sumber Resmi) are defined in `CONTEXT.md`.

## User Stories

1. As the owner, I want every Klaim of a published Artikel stored with its source, location, and verbatim quote, so that I can account for any sentence long after I approved it.
2. As the owner, I want the stored Tabel Klaim to be the same table I approved at Gate 1, so that what I approved is what is kept.
3. As the owner, I want the Tabel Klaim grouped by `h2`, so that I can find the evidence for a sentence by its section.
4. As the owner, I want non-klaim sentences (hook, transitions, calls to action) marked as such, so that I can see that no factual sentence was skipped.
5. As the owner, I want the Tabel Klaim to show the date I last approved it, so that I know how fresh the evidence is without opening git.
6. As the owner, I want the full approval history to come from git, so that the file carries no duplicated log.
7. As the owner, I want the Tabel Klaim kept out of the public site, so that internal evidence is not published as content.
8. As the owner, I want `/write-article` to write the Tabel Klaim at the Draft step from the table I approved at Gate 1, so that no new Artikel ships without it.
9. As the owner, I want the Tabel Klaim updated before publishing when a Klaim changes between Gate 1 and Gate 2, so that the stored table matches the published text.
10. As the owner, I want any edit to a published Artikel that adds, changes, or removes a Klaim to show me a delta table with the same evidence as Gate 1, so that no Klaim reaches readers without my approval.
11. As the owner, I want edits that change no fact (typos, wording, internal links, `<BacaJuga>`, non-factual metadata) to skip that gate, so that small fixes stay cheap.
12. As the owner, I want a title that states a fact to count as a Klaim, so that the most visible sentence is held to the same rule.
13. As the owner, I want `updatedAt` set whenever an approved edit changes a Klaim, so that readers and search engines see the Artikel was revised.
14. As the owner, I want a news outlet or an official social media account counted only as backing for a dated statement, so that no rule or figure rests on them.
15. As the owner, I want FHCI and Danantara counted as Sumber Resmi, so that BUMN Artikel can cite the official organizer of Rekrutmen Bersama BUMN.
16. As the owner, I want the build to fail when a published Artikel cites no Sumber Resmi, so that the official-source rule cannot be forgotten.
17. As the owner, I want the build to fail when a published Artikel has no Tabel Klaim, so that the stored-evidence rule is not only on paper.
18. As the owner, I want the build to fail when a Tabel Klaim cites a URL that `references` does not list, so that every source behind a Klaim is shown to readers.
19. As the owner, I want the build to fail when `references` lists a URL that no Klaim uses, so that `references` never pads the Artikel with unused sources.
20. As the owner, I want the build to fail when a Tabel Klaim has no matching Artikel entry, so that orphaned evidence is caught like an orphaned body.
21. As the owner, I want a draft Artikel to build without a Tabel Klaim, so that drafting is not blocked.
22. As the owner, I want a draft that already has a Tabel Klaim checked against its `references`, so that mismatches surface before Gate 2.
23. As the owner, I want each of the six published Artikel backfilled in its own ticket, so that I can review one Artikel at a time.
24. As the owner, I want a backfill to re-verify every Klaim against its source, so that Klaim made stale by newer regulations are found.
25. As the owner, I want a Klaim that fails verification during backfill fixed or removed through the edit flow, so that the backfill leaves the published text accountable.
26. As the owner, I want the "Tabel Klaim required" rule switched on in the build only after the backfill, so that the build stays green while backfill runs, and each backfilled Tabel Klaim cross-checked as soon as it lands.
27. As an agent editing an Artikel, I want the edit flow written in the article-writing guide, so that I find it in the document I must read before editing.
28. As an agent, I want the Sumber Resmi definition in one place in the guide and one place in code, so that both agree.
29. As a future maintainer, I want build errors that name the Artikel slug and the offending URL, so that I can fix a failure without guessing.

## Implementation Decisions

- **Tabel Klaim file.** One Markdown file per Artikel, named by slug, in a dedicated folder under `docs/`. Not under the Artikel content folder, so the Artikel loader's body listing is untouched. Never rendered or routed.
- **Tabel Klaim format.** Human-readable Markdown, the same as the Gate 1 table. A header line records the last owner approval as `Disetujui owner: <date in "5 November 2026" form>`. Then one table per `h2`, with columns for the sentence as published, source URL, exact location (pasal, ayat, lampiran page, or section), and verbatim quote. Non-klaim sentences are marked "non-klaim". The build does not validate the approval date or the table layout.
- **Sumber Resmi rule in code.** A reference counts as Sumber Resmi when its URL hostname ends in `.go.id`, or equals or is a subdomain of `fhcibumn.com` or `danantaraindonesia.co.id`. Regulations hosted on `.go.id` sites (JDIH, peraturan.bpk.go.id) are covered by the first rule. The allowlist lives beside `validateArtikel` as a short constant, and the guide lists the same domains.
- **`validateArtikel` interface.** It gains a third argument: the raw text of each Tabel Klaim, keyed by slug. The loader reads the Tabel Klaim folder and passes the text in, as it already does for body slugs. All URL extraction and comparison happens inside `validateArtikel`, so it is covered by tests.
- **New validation rules.**
  - A published Artikel with no Sumber Resmi in `references` fails.
  - A published Artikel with no Tabel Klaim fails.
  - A Tabel Klaim whose slug has no Artikel entry fails.
  - For any Artikel that has a Tabel Klaim, published or draft, every `http(s)` URL in the Tabel Klaim must equal a `references` URL, and every `references` URL must appear in the Tabel Klaim.
  - Comparison is exact string equality. There is no normalisation of trailing slashes, query strings, or case. Every `http(s)` URL anywhere in the file counts as a cited source.
  - Each error names the slug and, for URL mismatches, the URL.
- **Rollout order.** The Sumber Resmi rule, the orphan check, and the cross-check ship first. All six published Artikel already pass the Sumber Resmi rule, and the other two apply only where a Tabel Klaim exists, so the build stays green. Each backfill is then checked by the build as soon as its Tabel Klaim lands. The "Tabel Klaim required" rule ships last, after all six backfills are done.
- **Guide changes (article-writing).** Define Sumber Resmi with the allowlist and state that news media and official social media accounts back only dated statements. Add the Tabel Klaim section: location, format, approval line. Add "Editing a published Artikel": what counts as a Klaim change (any added, changed, or removed sentence that states a fact, including a factual title, or any change to `references`), the delta table, owner approval, updating the Tabel Klaim and its date, and setting `updatedAt`. Edits that change no Klaim skip this.
- **`/write-article` changes.** At the Draft step, write the Tabel Klaim from the approved Gate 1 table with the approval date. At Gate 2, if any Klaim changed, update the Tabel Klaim and its approval date before publishing. Gate 1's evidence columns stay as they are.
- **Backfill.** One ticket per published Artikel: `gaji-pppk`, `cpns-2027`, `pppk-paruh-waktu-jadi-penuh-waktu`, `materi-tkp-cpns`, `rekrutmen-bersama-bumn-2026`, `perbedaan-cpns-dan-pppk`. Each ticket builds the Tabel Klaim from the current text, re-verifies every Klaim against its source, and presents the table to the owner. Failing or stale Klaim go through the edit flow, so `references` is corrected to match the table. `draft-artikel-contoh` is excluded because it is a draft.
- **Glossary.** Klaim, Tabel Klaim, and Sumber Resmi are already added to `CONTEXT.md` (uncommitted).

## Testing Decisions

- One seam: `validateArtikel`, a pure function. Tests give it entries, body slugs, and Tabel Klaim texts, and check the returned error messages. They never touch the filesystem or the loader.
- Good tests check observable behaviour only: which inputs produce an error and which pass, and that an error names the slug or URL. They do not check internals such as the regex or the allowlist constant.
- Cases to cover:
  - Sumber Resmi: a published Artikel citing only news or social media URLs fails; one `.go.id` URL passes; `fhcibumn.com`, a subdomain such as `rekrutmenbersama.fhcibumn.com`, and `danantaraindonesia.co.id` pass; a look-alike such as `notfhcibumn.com` or `go.id.example.com` fails; a draft with no Sumber Resmi passes.
  - Tabel Klaim required: a published Artikel without one fails, a draft without one passes, and an orphan Tabel Klaim fails.
  - Cross-check: a URL only in the table fails, a URL only in `references` fails, the same set passes, and a trailing-slash difference fails.
- Prior art: the existing validation tests use an `entry(overrides)` factory and assert on error counts and message substrings. Extend that file in the same style. Existing calls with two arguments are updated to pass an empty Tabel Klaim map where needed.
- Docs, skill text, and the six Tabel Klaim are verified by owner review. The build passing after the last ticket proves the six tables match their `references`.
- Run `bun run lint`, `bun run typecheck`, and `bun test` after each code change.

## Out of Scope

- Periodic re-review of published Artikel (every three months, or when a new ASN regulation is issued). The Tabel Klaim is its foundation, but scheduling and triggers are a separate decision.
- Archiving source pages (for example web.archive.org snapshots) against link rot.
- Checking that each figure row cites a Sumber Resmi. The build cannot tell a figure from a statement. The owner checks this at Gate 1.
- Checking that quotes really appear in the source, or that URLs are still live.
- Rendering the Tabel Klaim or its approval date on the public site.
- A new skill for editing Artikel. The edit flow lives in the guide.

## Further Notes

- Today all six published Artikel have at least three `.go.id` references, so the Sumber Resmi rule does not break the build.
- `rekrutmen-bersama-bumn-2026` cites `x.com` and `instagram.com` posts. Under this spec they may only back dated statements, so its backfill may need to rework Klaim that rest on them.
- No ADR: every rule here is cheap to reverse and is recorded in the guide.
