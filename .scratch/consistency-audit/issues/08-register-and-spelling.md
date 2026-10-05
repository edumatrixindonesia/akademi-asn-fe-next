# 08: "Anda" outside the Blog, "Kementerian" spelling

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** Every page outside the Blog addresses the reader as "Anda". The Blog keeps "kamu". Visible text spells "Kementerian" correctly.

**Blocked by:** none

**Status:** done

**Category:** enhancement

- [x] Replace "kamu" and the "-mu" suffix with "Anda" (and natural rephrasing where needed) in `data/faq.ts`, `data/intro.ts`, `data/tantangan-seleksi.ts`, `data/cta-footer.ts`, `data/materi.ts`, and `data/not-found.ts`. Search all of `data/` and `components/` outside the Blog for any others.
- [x] Leave `data/artikel/`, `data/artikel.ts`, and Blog-only data unchanged.
- [x] `data/intro.ts` must still exactly match the approved drafts. Apply the same edits to the intro drafts in `.scratch/jangkauan-lokasi/` (find them by the batch files) and add a dated note there that the register changed on owner approval, 2026-10-05.
- [x] `docs/agents/article-writing.md` (line 120): replace "as the rest of the site does" with "the Blog uses 'kamu'; other pages use 'Anda'".
- [x] `data/lembaga.ts`: visible `alt` text says "Kementerian", not "Kementrian". Asset filenames stay.
- [x] Rendered FAQ text and FAQ JSON-LD still match each other.
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass. Update tests that assert the old wording.

## Comments
