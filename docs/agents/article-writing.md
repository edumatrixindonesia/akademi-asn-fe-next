# Article writing

The editorial contract for every Artikel on the Blog. `/write-article` follows it; the owner reviews against it. Terms (Artikel, Kategori, Penulis, Konsultasi) are defined in `CONTEXT.md`.

An Artikel answers one informational search. It earns trust with sources and leads the reader to Konsultasi and the exam-track landing pages.

## Files

Each Artikel is two files that share a slug:

- `data/artikel.ts`: one entry in the typed list, checked with `satisfies Artikel[]`. Newest first.
- `data/artikel/{slug}.mdx`: the body.

`lib/artikel.ts` throws at build when one exists without the other, and `lib/artikel-schema.ts` (`validateArtikel`) holds the enforced limits.

## Template

The body is MDX. The page already renders the `h1` (`title`), the lead (`excerpt`), the Daftar isi, Referensi, the "Masih ada pertanyaan?" block, and the author box. Write none of those in the body.

Body, in order:

1. **Hook**: one short paragraph that opens on the reader's problem. It continues the lead and never repeats it.
2. **Question `h2`s**: each `h2` is phrased as the question people search ("Apa perbedaan CPNS dan PPPK?"), answered in the first sentence beneath it. Use `h3` for sub-points inside an `h2`. Never write `#` (the page owns the `h1`).
3. **`<BacaJuga>`**: 2–5 per Artikel, placed between sections where the reader would want the next step.
4. **`<CtaKonsultasi>`**: exactly once, mid-Artikel.
5. **Latihan Soal**: for material topics (TWK, TIU, TKP, kompetensi PPPK, tes BUMN) only; one to three `<LatihanSoal>`.
6. **Recap**: the last `h2`, titled "Kesimpulan", in a few sentences or a short list.

Every `h2` holds plain text with letters or digits (its anchor `id` is built from it) and is unique within the Artikel. The Daftar isi appears from three `h2` onwards.

## Metadata

| Field | Rule |
| --- | --- |
| `slug` | Kebab-case from the keyword, unique. Becomes `/blog/{slug}`. |
| `title` | The `h1` and card title. At most 50 characters, so `"{title} \| Akademi ASN"` stays within 65. Holds the focus keyword. |
| `seoTitle` | Only when the `<title>` must differ from the `h1`. Also at most 50 characters. |
| `description` | Meta description, 120–160 characters. Holds the focus keyword and a reason to click. |
| `excerpt` | One or two sentences. It is the lead, the card text, and the RSS description. Holds the focus keyword. |
| `kategori` | One of `cpns`, `pppk`, `bumn`, `tips-info`. Pick the track the Artikel is about; `tips-info` for cross-track topics. |
| `penulis` | `tim-akademi-asn` or `dimas-maulana`. See Penulis. |
| `status` | `"draft"` while writing; `"published"` after owner approval. |
| `publishedAt` | ISO date (`2026-10-02`). Set once at publish, never changed. |
| `updatedAt` | ISO date. Set only after a substantive change to published content. |
| `focusKeyword` | The keyword the owner gave, lowercase. Unique across Artikel. Never rendered. |
| `cover` | Omit. The Kategori default cover applies. When the owner supplies one: `{ src, alt }`, 1200×630. |
| `references` | `{ title, url, publisher, accessedAt }[]`. At least one official source. `accessedAt` is the day the source was read. |
| `related` | Up to 3 slugs of published Artikel for Artikel Terkait. |

`validateArtikel` fails the build on: duplicate `slug` or `focusKeyword`, a missing body, a title over 50 characters, a `description` outside 120–160, and a published entry without `publishedAt` or `references`.

## Keyword rules

- The owner supplies the keyword. Never pick a topic.
- One Artikel per keyword. Reject a keyword already used as a `focusKeyword`.
- Reject landing-page keywords: anything starting "bimbel", "les", or "tryout", and anything holding a city or region name. Landing and location pages own those searches, and an Artikel on them would compete with the pages that sell.
- Place the keyword in `title`, `description`, `excerpt`, the hook, and at least one `h2`, worded naturally. Never repeat it to fill space.

## MDX components

Use only these, plus standard Markdown: `##` and `###` headings, lists, bold, italic, links, tables, blockquotes. Never write `import`, `export`, raw HTML tags, or any other component.

**`<BacaJuga slug="…" />`** links to another Artikel; the title comes from `data/artikel.ts`. The slug must name a published Artikel (the build fails on an unknown slug, and on a draft in production). Link a landing page with a Markdown link in a sentence: `[Bimbel CPNS](/bimbel-cpns)`.

```mdx
<BacaJuga slug="perbedaan-cpns-dan-pppk" />
```

**`<CtaKonsultasi topic="…" />`** renders a Konsultasi block. `topic` names the subject in the WhatsApp message ("tentang {topic}"), for example the exam track or the Artikel subject.

```mdx
<CtaKonsultasi topic="Seleksi CPNS" />
```

**`<LatihanSoal>`** renders a question with options; the answer sits behind "Lihat jawaban". `options` lists the choice texts without letters, `answer` is the letter, `explanation` says why.

```mdx
<LatihanSoal
  question="…?"
  options={["Pilihan pertama", "Pilihan kedua", "Pilihan ketiga"]}
  answer="B"
  explanation="…"
/>
```

**`<Contoh title="…">`** renders a labelled box that keeps line breaks, for example documents and answers.

```mdx
<Contoh title="Surat lamaran">
Kepada Yth. …

Dengan hormat, …
</Contoh>
```

Dialogues (interview simulations) use plain Markdown, one bold speaker label per paragraph: `**Pewawancara:** …`.

Write `<`, `>`, `{`, and `}` in prose as `\<`, `\>`, `\{`, `\}`: MDX reads them as code otherwise. Body images are not used; the owner may add them later.

## Validation rules

Every claim is checked before it enters Gate 1.

- Every factual claim has a source.
- At least one source per Artikel is official: BKN, KemenPANRB, SSCASN, other `.go.id` sites, or a law or regulation (UU, PP, Perpres, Permen).
- A figure that changes by year (formasi, passing grade, usia, kuota) names its year in the text.
- A superlative ("terbesar", "pertama", "satu-satunya", "paling") needs two independent sources that agree. Wikipedia counts as at most one. Check the competing candidate too.
- Anything unverifiable is dropped. Never soften it into "biasanya" or "umumnya".
- A `<LatihanSoal>` states a fact the Artikel's sources confirm, or tests a method the explanation proves. Write original questions; never copy tryout or exam items.
- A source's date decides what it proves: a regulation that a newer one replaced proves history, not the current rule.

`references` lists every source behind a claim, and only those.

## Penulis

`tim-akademi-asn` is the default. Use `dimas-maulana` only when the owner edited the Artikel. The owner answers this at Gate 2; the skill never decides it.

## Indonesian style

- Formal but friendly. Address the reader as "kamu", as the rest of the site does.
- Follow PUEBI spelling and KBBI forms.
- Short sentences, one idea each. Short paragraphs of two to four sentences.
- Write foreign terms in *italic* on every use (*tryout*, *passing grade*, *e-learning*). Terms that KBBI lists, and official names (SKD, SSCASN), stay upright.
- Spell out an abbreviation on its first use: "Seleksi Kompetensi Dasar (SKD)".
- Format dates as "2 Oktober 2026" and money as "Rp1.500.000".
- Write no hype. Claims come from sources, not enthusiasm.
