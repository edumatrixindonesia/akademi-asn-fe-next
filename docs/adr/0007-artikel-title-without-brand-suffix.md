# 7. Artikel title without brand suffix

Date: 2026-10-20

## Status

Accepted. Replaces the Artikel `<title>` rule in `.scratch/blog/spec.md` (`"%s | Akademi ASN"`, `title` at most 50 characters).

## Context

Every page renders its `<title>` through the layout template `"%s | Akademi ASN"`. Artikel titles were capped at 50 characters so the full `<title>` stayed within 65. The owner now wants Artikel titles that read like news-portal headlines: one flowing phrase with no "Topik: Penjelasan" separator (`docs/agents/article-writing.md`, Title). Those headlines run longer, often 55–64 characters. With the suffix, the `<title>` would reach 78 characters, and Google would cut the end of the headline or rewrite it.

## Decision

- An Artikel `title` (and `seoTitle`, when the owner approves one) holds at most 64 characters.
- The Artikel page sets `title: { absolute }`, so its `<title>` is the `title` alone, without " | Akademi ASN". The `h1` and the `<title>` stay identical.
- Every other page keeps the suffix.

## Considered options

- **Keep the suffix and the 50-character cap**: rejected. The cap forces terse titles that drift back toward the "Topik: Penjelasan" pattern.
- **Long `h1`, short `seoTitle` with the suffix**: rejected. The owner wants one title for the `h1` and the `<title>`, which keeps them consistent.
- **Raise the cap and keep the suffix**: rejected. Google would truncate the suffix and often the end of the headline.

## Consequences

- Artikel results in Google do not show "Akademi ASN" in the title. The site name shown above the result and the `Organization` structured data still carry the brand.
- Reverting means rewriting every published Artikel title back to 50 characters, which changes titles Google has already indexed.
