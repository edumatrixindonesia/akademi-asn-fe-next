# 5. Artikel Terbaru ignores exam track

Date: 2026-10-14

## Status

Accepted. Supersedes the Artikel Terbaru part of [0003](0003-kategori-by-content-type.md). The default-cover part is superseded 2026-10-20: every Artikel has its own cover and there is no default (`docs/agents/article-writing.md`, Cover).

## Context

ADR 0003 let each exam-track landing page and its location pages show only Artikel of that exam track in Artikel Terbaru. It rejected the newest Artikel of any track because a BUMN Artikel on `/bimbel-cpns` is a weak internal link. The Blog has few Artikel so far, so that filter left the section on `/bimbel-pppk` and `/bimbel-bumn` with one card or none.

## Decision

- Artikel Terbaru shows the three newest published Artikel of any exam track. Every landing page (home, exam-track, and location pages) shows the same three.
- The `examTrack` attribute stays. It still ranks Artikel Terkait and picks the default cover.

## Considered options

- **Keep the per-track filter (ADR 0003)**: rejected for now. A section with one card looks empty and links into the Blog less.
- **Page track first, then the newest of other tracks**: rejected. The owner wants one list for every page, with no track preference.

## Consequences

- Some landing pages link to an Artikel about another exam track. That internal link is less relevant than a same-track link.
- Revisit this decision when every exam track has at least three published Artikel. At that point the per-track filter no longer leaves the section empty.
