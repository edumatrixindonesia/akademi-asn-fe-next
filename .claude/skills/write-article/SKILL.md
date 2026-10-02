---
name: write-article
description: Draft one Blog Artikel for a keyword, with two owner approval gates.
disable-model-invocation: true
argument-hint: <keyword>
---

# Write article

Draft one Artikel for the keyword in `$ARGUMENTS`. Read `docs/agents/article-writing.md` first: it holds the template, field rules, components, validation rules, and Penulis rule. This file holds only the order of work.

The owner approves twice. Publishing happens only at Gate 2.

## 1. Reject the keyword

Done when the keyword is accepted, or rejected with its reason and the run has ended.

Reject when any holds:

- A `focusKeyword` in `data/artikel.ts` equals it (compare lowercase).
- It is a landing-page keyword: starts with "bimbel", "les", or "tryout", or holds a city or region name that a location page targets.

Check duplicates with `grep -i 'focusKeyword: "<keyword>"' data/artikel.ts`. Check region names against `lib/region-service.ts` data, or ask the owner when unsure. On rejection, name the rule, stop, and write no file.

## 2. Research

Done when every claim the Artikel will make has at least one source, the Artikel has at least one official source, and every superlative has two independent agreeing sources.

Use Exa. Prefer BKN, KemenPANRB, SSCASN, `.go.id` sites, and laws and regulations. Apply the validation rules in the guide to each claim. Drop what cannot be verified.

## 3. Gate 1

Show the owner:

- the outline (`h2`s as questions, `h3`s, where `<BacaJuga>`, `<CtaKonsultasi>`, and `<LatihanSoal>` go),
- every factual claim with its sources, grouped by `h2`,
- the full metadata entry.

Stop. Wait for the owner's approval. Apply requested changes and show Gate 1 again until approved. Write no file before approval.

## 4. Draft

Done when `bun run lint` and `bun run typecheck` pass and the preview URL is given.

Write `data/artikel/{slug}.mdx` and add the entry to `data/artikel.ts` with `status: "draft"`, no `publishedAt`, and `penulis: "tim-akademi-asn"`. Run `bun run lint`, then `bun run typecheck`. Give the preview URL: `http://localhost:3000/blog/{slug}` under `bun dev`.

## 5. Gate 2

Stop. Wait for the owner's approval of the preview. Ask whether the owner edited the Artikel. If yes, set `penulis: "dimas-maulana"`; if no, keep `tim-akademi-asn`.

On approval, set `status: "published"` and `publishedAt` to today's date, then run `bun run lint` and `bun run typecheck` again. Report the final URL `/blog/{slug}`.
