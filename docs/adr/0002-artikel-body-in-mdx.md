# 2. Artikel bodies are MDX files in `data/artikel/`

Date: 2026-10-01

## Status

Accepted

## Context

The Blog stores every Artikel statically in the repo. Most Artikel will be drafted by a project skill (`/write-article`) and then reviewed by the owner. The body needs inline formatting (italic terms, bold, links mid-sentence) and a few custom blocks (Baca Juga, CTA Konsultasi, Latihan Soal).

Three formats were considered:

- **`.tsx` per Artikel**: no new dependency and type-checked. But Indonesian prose is full of quotes and apostrophes, and lint fails on each unescaped `"` and `'` in JSX text (`react/no-unescaped-entities`, verified). Drafts would need `&ldquo;` everywhere and would be hard to review.
- **Typed JSON blocks**: no new dependency, but inline formatting becomes deeply nested objects that are slow to write and review.
- **MDX**: Markdown is what an LLM writes most reliably and what the owner reviews most easily, and custom blocks stay available as components. It costs four dependencies (`@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`), which the owner approved.

## Decision

Each Artikel body is `data/artikel/{slug}.mdx`. Its metadata (title, slug, Kategori, Penulis, dates, cover, status, focus keyword, references) is a typed entry in `data/artikel.ts`, checked with `satisfies`, so listings, pagination, the sitemap and RSS read metadata without loading any body.

## Consequences

- An Artikel is two files that must share a slug. A build-time check should fail when one exists without the other.
- MDX can run arbitrary components, so the writing guide (`docs/agents/article-writing.md`) limits Artikel to the approved component set.
- Moving to a CMS later means converting MDX, which is easier than converting JSX.
