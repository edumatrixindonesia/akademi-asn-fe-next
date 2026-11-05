# Article writing

The editorial contract for every Artikel on the Blog. `/write-article` follows it; the owner reviews against it. Terms (Artikel, Kategori, Penulis, Konsultasi, Klaim, Tabel Klaim, Sumber Resmi) are defined in `CONTEXT.md`.

An Artikel answers one informational search. It earns trust with sources and leads the reader to Konsultasi and the exam-track landing pages.

## Files

Each Artikel is two files that share a slug, plus a Tabel Klaim once it is approved:

- `data/artikel.ts`: one entry in the typed list, checked with `satisfies Artikel[]`. Newest first.
- `data/artikel/{slug}.mdx`: the body.
- `docs/klaim/{slug}.md`: the Tabel Klaim. See Tabel Klaim.

`lib/artikel.ts` throws at build when one exists without the other, and `lib/artikel-schema.ts` (`validateArtikel`) holds the enforced limits.

## Template

The body is MDX. The page already renders the `h1` (`title`), the lead (`excerpt`), the Daftar isi, Referensi, the "Masih ada pertanyaan?" block, and the author box. Write none of those in the body.

Body, in order:

1. **Hook**: one short paragraph that opens on the reader's problem. It continues the lead and never repeats it.
2. **Question `h2`s**: each `h2` is phrased as the question people search ("Apa perbedaan CPNS dan PPPK?"), answered in the first sentence beneath it. Use `h3` for sub-points inside an `h2`. Never write `#` (the page owns the `h1`).
3. **`<BacaJuga>`**: Link 2–5 other published Artikel with `<BacaJuga>`, placed between sections where the reader would want the next step. When fewer than 2 exist, link all of them (0 is allowed).
4. **`<CtaKonsultasi>`**: exactly once, mid-Artikel.
5. **Latihan Soal**: for material topics (TWK, TIU, TKP, kompetensi PPPK, tes BUMN) only; one to three `<LatihanSoal>`.
6. **Recap**: the last `h2`, titled "Kesimpulan", in a few sentences or a short list.

Every `h2` holds plain text with letters or digits (its anchor `id` is built from it) and is unique within the Artikel. The Daftar isi appears from three `h2` onwards.

## Metadata

| Field | Rule |
| --- | --- |
| `slug` | Kebab-case from the keyword, unique. Becomes `/blog/{slug}`. |
| `title` | The `h1`, the `<title>` (without the " \| Akademi ASN" suffix, `docs/adr/0007-artikel-title-without-brand-suffix.md`), and the card title. At most 64 characters. Holds the focus keyword. Follows Title. |
| `seoTitle` | Omit: one title serves the `h1` and the `<title>`. Only for an exception the owner approves; same 64-character limit and Title rules. |
| `description` | Meta description, 120–160 characters. Holds the focus keyword and a reason to click. |
| `excerpt` | One or two sentences. It is the lead, the card text, and the RSS description. Holds the focus keyword. |
| `kategori` | One or more of `informasi`, `tips`, `latihan-soal`, `materi`, `karier`: the content type, never the exam track. List the best fit first; it is the primary Kategori in the breadcrumb. |
| `examTrack` | One or more of `cpns`, `pppk`, `bumn`: the tracks the Artikel is about. It ranks Artikel Terkait; Artikel Terbaru ignores it. List all three for a topic that applies to every track. |
| `penulis` | `tim-akademi-asn` or `dimas-maulana`. See Penulis. |
| `status` | `"draft"` while writing; `"published"` after owner approval. |
| `publishedAt` | ISO date (`2026-10-02`). Set once at publish, never changed. |
| `updatedAt` | ISO date. Set only after a substantive change to published content. |
| `focusKeyword` | The keyword the owner gave, lowercase. Unique across Artikel. Never rendered. |
| `cover` | Required: `{ src, alt }`, 1200×630 JPEG at `public/img/blog/cover-{slug}.jpg`, unless the owner supplies one. See Cover. |
| `references` | `{ title, url, publisher, accessedAt }[]`. At least one official source. `accessedAt` is the day the source was read. |
| `related` | Up to 3 slugs of published Artikel for Artikel Terkait. |

`validateArtikel` fails the build on: duplicate `slug` or `focusKeyword`, a missing body, a repeated Kategori or exam track, a `title` or `seoTitle` over 64 characters, a `description` outside 120–160, and a published entry without `publishedAt` or `references`.

## Title

The `title` reads like a headline a person wrote for a news portal: one flowing phrase that varies from Artikel to Artikel, never the rigid "Topik: Penjelasan". The owner checks every title by hand at Gate 1; no validator enforces these rules.

Never:

- Separator punctuation: `:`, `?`, `!`, `;`, `,`, `|`, `(`, `)`, quotation marks, `–`, `—`, or a spaced hyphen ` - `. A hyphen inside a word (`Kisi-kisi`) and the dot in a number (`4.770`) are fine.
- A question. No question word (Apa, Bagaimana, Kapan, Berapa, Siapa, Mengapa, Di mana) opens the title, even without `?`. State the answer instead; questions belong in the `h2`s.
- A list joined by commas. Join items with "dan", "serta", "beserta", or "dari … hingga …".

Always:

- At most 64 characters.
- The focus keyword, whole and in its usual word order.
- PUEBI capitalization: every word capitalized except function words (di, ke, dari, dan, yang, untuk, hingga, dengan, atau, serta, pada), which stay lowercase unless they open the title.
- Facts in the title come from the Artikel's sources, like any other claim.
- No timing that a later announcement can prove wrong ("Awal Tahun", "Segera", "Bulan Depan"). A year that is part of the keyword is fine.

Vary the opening. The first word of a new title differs from the first word of each of the three newest published Artikel. Openings that read naturally:

| Opening | Example |
| --- | --- |
| Verb | Memahami 6 Aspek Materi TKP CPNS dan Cara Penilaiannya |
| Verb | Mengenal Perbedaan CPNS dan PPPK dari Status hingga Hak Kerja |
| "Begini" or "Ini" | Begini Cara PPPK Paruh Waktu Jadi Penuh Waktu dan Jadwalnya |
| News sentence (subject, predicate, object) | Pemerintah Siapkan 4.770 Kebutuhan CPNS Sekolah Kedinasan 2026 |
| "Seputar" | Seputar CPNS 2027 dari Jadwal Pendaftaran hingga Syarat Pelamar |
| Number | 20 Contoh Soal TKP SKD CPNS 2024 Lengkap dengan Kunci Jawaban |
| Noun phrase | Kisi-kisi Materi TKP SKD CPNS 2024 |

| Forbidden | Better |
| --- | --- |
| Materi TKP CPNS: 6 Aspek dan Sistem Penilaiannya | Memahami 6 Aspek Materi TKP CPNS dan Cara Penilaiannya |
| Perbedaan CPNS dan PPPK: Status, Hak, dan Syarat | Mengenal Perbedaan CPNS dan PPPK dari Status hingga Hak Kerja |
| CPNS 2027 Kapan Dibuka? Cek Status CPNS 2026 | Seputar CPNS 2027 dari Jadwal Pendaftaran hingga Syarat Pelamar |
| 8 Perbedaan PNS dan PPPK, dari Hak, Gaji, dan Masa Kerja | 8 Perbedaan PNS dan PPPK dari Hak hingga Masa Kerja |

Why these rules: in 17 CPNS and PPPK headlines from Kompas, detik, Tempo, and BKN (sampled October 2026), 8 used a comma, 6 of them as a "Topik, Penjelasan" separator, and colon and question titles were common too. The headlines without them ("Mengenal Lebih Dekat Perbedaan antara PNS dan PPPK", "Ini Perbedaan Gaji PNS dan PPPK") show the voice the Blog wants. Journalism style guides agree: short, active, understood in one read, never ending in `?` (RRI news style guide; Politeknik Negeri Jakarta).

## Cover

Every Artikel has its own cover; there is no default. `cover` is required in `lib/artikel-schema.ts`, so typecheck fails without it. The cover is the card thumbnail and the social preview, so it names this Artikel, not its exam track.

- Add an entry `slug: [label, tagline, icon]` to `.scratch/blog/covers/cover.html`, open `cover.html#{slug}` at 1200×630, and save the screenshot as `public/img/blog/cover-{slug}.jpg`.
- Label: the core topic, usually the focus keyword in title case (`CPNS 2027`, `Materi TKP CPNS`). At most two lines.
- Tagline: what the Artikel covers, summarised from its `title` and `h2`s (`Jadwal pendaftaran dan syarat pelamar`). No date: it would date the cover.
- Icon: one simple line icon that fits the topic (calendar for a schedule, rising line for a career move).
- `alt`: `{label}: {tagline in lowercase} dari Akademi ASN`.
- Never generic text that fits any Artikel of a track, such as "Artikel CPNS" or "Info & tips seleksi CPNS".
- Show the cover at Gate 1 with the metadata entry.

## Keyword rules

- The owner supplies the keyword. Never pick a topic.
- One Artikel per keyword. Reject a keyword already used as a `focusKeyword`.
- Reject landing-page keywords: anything starting "bimbel", "les", or "tryout", and anything holding a city or region name. Landing and location pages own those searches, and an Artikel on them would compete with the pages that sell.
- Place the keyword in `title`, `description`, `excerpt`, the hook, and at least one `h2`, worded naturally. Never repeat it to fill space.

## MDX components

Use only these, plus standard Markdown: `##` and `###` headings, lists, bold, italic, links, tables, blockquotes. Never write `import`, `export`, raw HTML tags, or any other component.

**`<BacaJuga slug="…" />`** links to another published Artikel; the title comes from `data/artikel.ts`. The component accepts only an Artikel slug (the build fails on an unknown slug, and on a draft in production). Link a landing page with a Markdown link in a sentence: `[Bimbel CPNS](/bimbel-cpns)`.

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

- Every factual claim has a source. The owner accepts no word or sentence that cannot be accounted for.
- At least one source per Artikel is a Sumber Resmi. The build fails a published Artikel without one.
- A Sumber Resmi is a source published by a government body or the official organizer of a selection: any `.go.id` site (BKN, KemenPANRB, SSCASN, JDIH, peraturan.bpk.go.id), a law or regulation (UU, PP, Perpres, Permen) hosted on one, `fhcibumn.com` (FHCI, Rekrutmen Bersama BUMN) and `danantaraindonesia.co.id` (Danantara), each with its subdomains. `lib/artikel-schema.ts` holds the same list.
- Figures, requirements, and rules come only from a Sumber Resmi: the regulation text, BKN, KemenPANRB, SSCASN, other `.go.id` sites, FHCI, or Danantara.
- News media and official social media accounts (`x.com`, `instagram.com`) are not Sumber Resmi. They only back a dated statement ("Menteri PANRB menyatakan … pada 3 Oktober 2026"), never a rule or a figure.
- When news media and a regulation disagree, the regulation wins and the media claim is dropped.
- A plan or proposal not yet in a published official document (regulation, circular, or official ministry press release) is dropped. A circular or press release is written as a dated announcement, not as a rule in force.
- A figure that changes by year (formasi, passing grade, usia, kuota) names its year in the text.
- A superlative ("terbesar", "pertama", "satu-satunya", "paling") needs two independent sources that agree. Wikipedia counts as at most one. Check the competing candidate too.
- Anything unverifiable is dropped. Never soften it into "biasanya" or "umumnya".
- A `<LatihanSoal>` states a fact the Artikel's sources confirm, or tests a method the explanation proves. Write original questions; never copy tryout or exam items.
- A source's date decides what it proves: a regulation that a newer one replaced proves history, not the current rule.

`references` lists every source behind a claim, and only those.

## Tabel Klaim

The Tabel Klaim is the record of every Klaim in one Artikel. It is the table the owner approves at Gate 1, kept so that any sentence can be traced to its evidence later.

- **Location:** `docs/klaim/{slug}.md`, one file per Artikel, named by slug. It is never rendered or routed.
- **Header line:** `Disetujui owner: 5 November 2026`, the date of the owner's last approval. Git holds the history; the file keeps no log.
- **Body:** one table per `h2` of the Artikel, in order. Columns: the sentence as published, the source URL, the exact location (pasal, ayat, lampiran page, or section), and the verbatim quote. A sentence that states no fact (hook, transitions, calls to action) gets the row "non-klaim". A factual title is a Klaim and gets a row.
- **Cross-check:** the build compares every `http(s)` URL in the file with `references` by exact string match. Both sets must be the same; a mismatch fails the build and names the slug and the URL. A Tabel Klaim with no matching Artikel fails too. A draft may omit the file; a published Artikel needs it once the backfill of the existing Artikel is done.

## Editing a published Artikel

A **Klaim change** is any of these: adding, changing, or removing a sentence that states a fact (a factual title included), or changing `references`.

An edit with a Klaim change goes through this flow:

1. Research the new or changed Klaim, applying the Validation rules.
2. Show the owner a delta table: only the added, changed, and removed Klaim, with the same columns as Gate 1 (sentence, source URL, exact location, verbatim quote). Mark a removed Klaim "dihapus".
3. Stop. Wait for the owner's approval. Write no file before it.
4. Edit the body and `references`, update `docs/klaim/{slug}.md`, and set its `Disetujui owner` date to today.
5. Set `updatedAt` to today's date.
6. Run `bun run lint` and `bun run typecheck`.

An edit that changes no Klaim (typos, wording, internal links, `<BacaJuga>`, non-factual metadata) skips this flow, and leaves the Tabel Klaim and `updatedAt` as they are.

## Penulis

`tim-akademi-asn` is the default. Use `dimas-maulana` only when the owner edited the Artikel. The owner answers this at Gate 2; the skill never decides it.

## Indonesian style

- Formal but friendly. Address the reader as "kamu" or "Anda": the Blog uses "kamu"; other pages use "Anda".
- Follow PUEBI spelling and KBBI forms.
- Short sentences, one idea each. Short paragraphs of two to four sentences.
- Write foreign terms in *italic* on every use (*tryout*, *passing grade*, *e-learning*). Terms that KBBI lists, and official names (SKD, SSCASN), stay upright.
- Spell out an abbreviation on its first use: "Seleksi Kompetensi Dasar (SKD)".
- Format dates as "2 Oktober 2026" and money as "Rp1.500.000".
- Write no hype. Claims come from sources, not enthusiasm.
