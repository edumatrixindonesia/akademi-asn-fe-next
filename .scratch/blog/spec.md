# Blog

Status: ready-for-human (Rich Results Test blocked by a Google sign-in error; see issue 10)

## Summary

Akademi ASN gets a Blog of Artikel that answer informational searches about CPNS, PPPK, and BUMN selection ("perbedaan CPNS dan PPPK", "materi TWK") and lead readers to Konsultasi and the exam-track landing pages. The structure and look follow the English Academy blog (`.scratch/blog/research.md`, screenshots in `.scratch/blog/ref/`), minus its SEO weak points. Artikel are stored statically in the repo and drafted by a project skill, `/write-article`, then approved by the owner. See `CONTEXT.md` for Blog, Artikel, Kategori, Tips & Info, Penulis, Artikel Terbaru, and Artikel Terkait.

## Known decisions

### Content model

- Artikel metadata is a typed list in `data/artikel.ts` (checked with `satisfies`); each body is `data/artikel/{slug}.mdx`. See `docs/adr/0002-artikel-body-in-mdx.md`. The build fails when a metadata entry has no body file or a body file has no entry.
- New dependencies, approved by the owner: `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`. No others.
- Artikel fields:

  | Field          | Required       | Notes                                                                          |
  | -------------- | -------------- | ------------------------------------------------------------------------------ |
  | `slug`         | yes            | Unique. URL `/blog/{slug}`.                                                    |
  | `title`        | yes            | `h1` and card title. ≤ 50 characters so `"{title} \| Akademi ASN"` stays ≤ 65. |
  | `seoTitle`     | no             | Overrides the `<title>` part when it must differ from `h1`.                    |
  | `description`  | yes            | Meta description, 120–160 characters.                                          |
  | `excerpt`      | yes            | Lead at the top of the Artikel, card text, RSS description.                    |
  | `kategori`     | yes            | One Kategori slug.                                                             |
  | `penulis`      | yes            | One Penulis slug. Default `tim-akademi-asn`.                                   |
  | `status`       | yes            | `"draft"` or `"published"`.                                                    |
  | `publishedAt`  | when published | ISO date. Set once, never changed.                                             |
  | `updatedAt`    | no             | ISO date, shown as "Diperbarui {date}".                                        |
  | `focusKeyword` | yes            | Unique across Artikel. Never rendered.                                         |
  | `cover`        | no             | `{ src, alt }`, 1200×630. Falls back to the Kategori default cover.            |
  | `references`   | yes            | `{ title, url, publisher, accessedAt }[]`, at least one official source.       |
  | `related`      | no             | Up to 3 slugs for Artikel Terkait.                                             |

- Reading time is computed from the body's word count at about 200 words per minute, never stored.
- Kategori (`data/kategori.ts`): `slug`, `name`, `title` (`h1`), `seoTitle`, `metaDescription`, `description`, `cover`. Exactly four: `cpns`, `pppk`, `bumn`, `tips-info`. Each exam-track Kategori links to its landing page (`/bimbel-cpns`, …).
- Penulis (`data/penulis.ts`): `slug`, `name`, `type` (`"organization"` or `"person"`), `jobTitle` (person only), `bio`, `avatar`, `sameAs`. At launch: `tim-akademi-asn` and `dimas-maulana`.

### Draft and publish

- `status: "draft"` Artikel render only under `next dev`. In production they are not built, not listed, not in search, RSS, or the sitemap, and their URL returns 404.
- An Artikel is published when the owner approves it at the skill's second gate: `status` becomes `"published"` and `publishedAt` is set.

### Routes

All blog routes are statically generated with `generateStaticParams`, except search. The root `app/[...locations]` catch-all does not interfere, because `blog` is a static segment.

| Route                                 | Content                                                                                                                                                                                                                                                                                                                                                              | robots                                                                                                    |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `/blog`, `/blog/page/{n}`             | `h1` + intro, search form, Artikel Terbaru (6 newest), one section per Kategori (3 cards + "Lihat Semua"; hidden when empty), CTA Konsultasi, pagination to page 2. From page 2 on: only `h1` and a 12-card grid continuing the chronological list after the 6 on `/blog` (page _n_ shows Artikel 6 + (n−2)×12 + 1 to 6 + (n−1)×12; there are 1 + ⌈(N−6)/12⌉ pages). | index                                                                                                     |
| `/blog/{slug}`                        | The Artikel page, below.                                                                                                                                                                                                                                                                                                                                             | index                                                                                                     |
| `/blog/kategori/{slug}`, `…/page/{n}` | `h1`, unique description, 12-card grid, pagination.                                                                                                                                                                                                                                                                                                                  | index                                                                                                     |
| `/blog/penulis/{slug}`, `…/page/{n}`  | Avatar, name, job title, bio, `sameAs` links, 12-card grid or "Belum ada artikel".                                                                                                                                                                                                                                                                                   | index when the Penulis has ≥ 1 published Artikel, otherwise `noindex, follow` and absent from the sitemap |
| `/blog/cari?q=…`                      | Results grid. Matches `q` case-insensitively in title, excerpt, and focus keyword.                                                                                                                                                                                                                                                                                   | `noindex, follow`                                                                                         |
| `/blog/rss.xml`                       | RSS 2.0, the 20 newest published Artikel.                                                                                                                                                                                                                                                                                                                            | –                                                                                                         |

- Pagination: path segments, 12 per page, the first page lives at the base URL and `…/page/1` permanently redirects there, every page canonical to itself, numbered links plus previous/next. A page number past the last page returns 404.
- The `…/page/1` redirects are three `redirects()` rules in `next.config.ts` with `permanent: true` (308).
- Intro text and Kategori descriptions appear on page 1 only. From page 2 on, `<title>` and `h1` end with " – Halaman {n}", so no two URLs share a title or intro.
- The search form is a native `<form method="get" action="/blog/cari">`, shown on `/blog`, Kategori pages, Penulis pages, and in the Artikel sidebar. It is not added to the global navbar.

### Artikel page

Layout follows `ref/article-desktop.jpg` and `ref/article-mobile.jpg`: an 8/12 Artikel column and a sticky 4/12 sidebar on desktop; one column on mobile with the sidebar after the Artikel.

Artikel column, in order:

1. Breadcrumb: Beranda › Blog › {Kategori} › {title}, with `BreadcrumbList` JSON-LD (existing breadcrumb section).
2. Kategori pill (link to the Kategori page).
3. `h1`.
4. Penulis name (link to the Penulis page), publish date, "Diperbarui {date}" when set, reading time.
5. Cover image, eager and high priority (it is the LCP element), with `alt`.
6. Lead: the `excerpt`, styled as a centred italic quote.
7. Daftar isi: a native `<details>` listing every `h2` as an anchor link, shown only when the body has 3 or more `h2`.
8. Body (MDX).
9. Referensi: numbered list of `references`.
10. "Masih ada pertanyaan?" block with a Konsultasi CTA (replaces comments).
11. Author box: avatar, name, job title, bio, link to the Penulis page.
12. Share row: WhatsApp, Facebook, X, LinkedIn, as plain links (no share SDKs).

Sidebar: CTA Konsultasi card, search form, Artikel Terbaru (5, excluding the current one: thumbnail + title).

After both columns: Artikel Terkait, 3 cards: `related` first, then the newest from the same Kategori, then the newest from other Kategori; hidden when there is no other Artikel.

No pop-ups, floating banners, or comments. The page is a Server Component; it needs no client JS.

### MDX components

The writing guide may use only these, plus standard Markdown (headings `##`/`###`, lists, bold, italic, links, tables, blockquotes):

| Component                                                           | Renders                                                                                                                                                |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<BacaJuga slug="…" />`                                             | "Baca Juga: {title}" link, title read from `data/artikel.ts`. Fails the build on an unknown or draft slug in production.                               |
| `<CtaKonsultasi topic="…" />`                                       | A Konsultasi CTA block linking to `getKonsultasiUrl(topic)`.                                                                                           |
| `<LatihanSoal>` with `question`, `options`, `answer`, `explanation` | A question with options; the answer and explanation sit in a native `<details>` ("Lihat jawaban").                                                     |
| `<Contoh title="…">`                                                | A labelled "Contoh" box that keeps line breaks and formatting, for example documents and answers ("contoh surat lamaran", "contoh jawaban wawancara"). |

Dialogues (e.g. interview simulations) use plain Markdown, one bold speaker label per paragraph; no `<Dialog>` component until Markdown proves insufficient.

Headings get stable `id`s for the Daftar isi. Links to landing pages use `next/link`. Body images are not used by the skill (owner may add them later with `next/image`).

### SEO

- `<title>`: `"{seoTitle ?? title}"` through the layout template `"%s | Akademi ASN"`.
- `alternates.canonical` on every blog page; `openGraph` spreads `openGraphBase`, with `type: "article"`, the cover as image, `publishedTime`, `modifiedTime`, and `section` on Artikel pages.
- RSS is linked through `alternates.types` on blog pages.
- JSON-LD on the Artikel page: `BlogPosting` with `headline`, `description`, `image`, `datePublished`, `dateModified`, `author` (`Person` or the existing `#organization`), `publisher` (`#organization`), `mainEntityOfPage`, `articleSection`, `wordCount`, `inLanguage: "id-ID"`. Penulis pages emit `ProfilePage` with `Person` (`name`, `jobTitle`, `image`, `sameAs`, `worksFor` → Edumatrix Indonesia) or reference the organization.
- `app/sitemap.ts` adds `/blog`, its pages, Kategori pages with published Artikel and their pages, indexable Penulis pages, and every published Artikel with `lastModified` (`updatedAt ?? publishedAt`). Empty Kategori pages stay reachable but are omitted from the sitemap to avoid promoting thin listings.

### Default covers

- Four JPEG 1200×630 images, one per Kategori, in `public/img/blog/`: navy background with an orange accent shape (brand colors from the existing OG image), the Akademi ASN logo top left, a large label ("Artikel CPNS", "Artikel PPPK", "Artikel BUMN", "Tips & Info"), a short tagline, and one simple icon. No photos of people.
- Built from an HTML template rendered with Playwright (no new dependency). The owner approves them before they are used.

### Site-wide links

- "Blog" link in `data/navbar.ts` and in the footer.
- Artikel Terbaru section, placed directly before FAQ: on the home page (3 newest of any Kategori), on each exam-track page and all of its location pages (3 newest of that Kategori). Hidden when there are none. It links to the Kategori page ("Lihat Semua").

### Writing skill

- `docs/agents/article-writing.md`: the editorial contract. Template from the research: lead (excerpt), short hook, `h2`s phrased as the questions people search, `h3` sub-points, 2–5 `<BacaJuga>` (other Artikel or landing pages), `<CtaKonsultasi>` once mid-Artikel, Latihan Soal for material topics, closing recap, references. Also: the field rules above, the allowed components, the keyword rules, the validation rules, the Penulis rule.
- `.claude/skills/write-article/SKILL.md`: the workflow for `/write-article <keyword>`:
  1. Reject the keyword if another Artikel already uses it or if it is a landing-page keyword ("bimbel …", "les …", "tryout …", any keyword with a city or region name that a location page targets).
  2. Research with Exa. Prefer official sources (BKN, KemenPANRB, SSCASN, `.go.id`, laws and regulations).
  3. **Gate 1**: show the outline, every factual claim with its sources, and the metadata. Wait for approval.
  4. Write `data/artikel/{slug}.mdx` and the `data/artikel.ts` entry with `status: "draft"`. Run `bun run lint` and `bun run typecheck`. Give the `bun dev` preview URL.
  5. **Gate 2**: wait for approval. Ask whether the owner edited the Artikel; if so, credit `dimas-maulana`, otherwise `tim-akademi-asn`. On approval set `status: "published"` and `publishedAt`.
- Validation: every factual claim needs a source; at least one official source per Artikel; year-dependent figures name their year; superlatives need two independent agreeing sources (Wikipedia counts as at most one); anything unverifiable is dropped, not softened.
- Keywords come from the owner only. The skill never picks topics itself.

### First Artikel

"Perbedaan CPNS dan PPPK", Kategori Tips & Info, written through `/write-article` as the end-to-end test of the skill and the pages.

## Copy for approval

All copy below states only facts already in the repo. Approved by the owner on 2026-10-01.

### `/blog`

- `<title>`: Blog Info & Tips Seleksi CPNS, PPPK, BUMN | Akademi ASN
- Meta description: Artikel seputar seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN dari Akademi ASN: tahapan seleksi, materi tes, dan tips persiapan, lengkap dengan sumbernya.
- `h1`: Info & Tips Seleksi CPNS, PPPK, dan BUMN
- Intro: Kumpulan artikel tentang seleksi CPNS, PPPK, dan Rekrutmen Bersama BUMN, mulai dari tahapan seleksi, materi tes, hingga tips persiapannya. Setiap data seleksi di artikel ini mencantumkan sumbernya.

### Kategori

| Slug        | Name        | `h1`                                     | `<title>` part                                    | Meta description                                                                                                                        | Description (on the page)                                                                                                                                                                             |
| ----------- | ----------- | ---------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cpns`      | CPNS        | Artikel Seleksi CPNS                     | Artikel Seleksi CPNS: SKD, SKB, dan Tips          | Artikel seputar seleksi CPNS: tahapan SKD dan SKB, materi TWK, TIU, dan TKP, serta tips persiapannya dari Akademi ASN.                  | Artikel tentang seleksi Calon Pegawai Negeri Sipil (CPNS), mulai dari tahapan Seleksi Kompetensi Dasar (SKD) dan Seleksi Kompetensi Bidang (SKB), materi TWK, TIU, dan TKP, hingga tips persiapannya. |
| `pppk`      | PPPK        | Artikel Seleksi PPPK                     | Artikel Seleksi PPPK: Seleksi Kompetensi dan Tips | Artikel seputar seleksi PPPK: kompetensi teknis, manajerial, sosial kultural, dan wawancara, serta tips persiapannya dari Akademi ASN.  | Artikel tentang seleksi Pegawai Pemerintah dengan Perjanjian Kerja (PPPK), mulai dari seleksi kompetensi teknis, manajerial, sosial kultural, dan wawancara, hingga tips persiapannya.                |
| `bumn`      | BUMN        | Artikel Rekrutmen Bersama BUMN           | Artikel Rekrutmen Bersama BUMN: Tes dan Tips      | Artikel seputar Rekrutmen Bersama BUMN: tes online tahap awal, tes lanjutan di tiap perusahaan, dan tips persiapannya dari Akademi ASN. | Artikel tentang Rekrutmen Bersama BUMN, mulai dari tes online tahap awal, tes lanjutan di masing-masing perusahaan, hingga tips persiapannya.                                                         |
| `tips-info` | Tips & Info | Tips & Info Seleksi CPNS, PPPK, dan BUMN | Tips & Info Seleksi CPNS, PPPK, BUMN              | Tips dan info lintas seleksi CPNS, PPPK, dan BUMN dari Akademi ASN: perbedaan jalur, persiapan dokumen, dan cara belajar.               | Tips dan informasi yang berlaku lintas seleksi CPNS, PPPK, dan BUMN, seperti perbedaan jalur seleksi, persiapan dokumen, dan cara belajar.                                                            |

Cover taglines: CPNS "Info & tips seleksi CPNS", PPPK "Info & tips seleksi PPPK", BUMN "Info & tips Rekrutmen Bersama BUMN", Tips & Info "Seleksi CPNS, PPPK, dan BUMN".

### Penulis

- **Tim Akademi ASN** (`tim-akademi-asn`, organization, avatar: the Akademi ASN logo): Tim Akademi ASN menyusun artikel di blog ini. Akademi ASN adalah bimbel persiapan seleksi CPNS, PPPK, dan BUMN dari Edumatrix Indonesia yang berkantor di Sleman, DI Yogyakarta. Setiap data seleksi di artikel diperiksa terhadap sumber resminya sebelum terbit.
- **Dimas Maulana** (`dimas-maulana`, person, approved): job title "Fullstack Web Developer & IT Support Specialist"; photo `public/img/writer/dimas-maulana.webp`; `sameAs` `https://www.instagram.com/dimassmaulanaaa/`, `https://github.com/dimassmaulanaaa/`, `https://www.linkedin.com/in/dimas-maulana-idn/`. Bio: Dimas Maulana adalah Fullstack Web Developer dan IT Support Specialist di Edumatrix Indonesia, induk perusahaan Akademi ASN. Ia membangun dan mengelola situs Akademi ASN, serta menyunting Artikel di blog ini dengan memeriksa setiap data seleksi terhadap sumber resmi seperti BKN dan KemenPANRB sebelum terbit.

### UI labels

Artikel Terbaru, Lihat Semua, Artikel Terkait, Daftar Isi, Referensi, Diperbarui, "{n} menit baca", Bagikan artikel ini, Masih ada pertanyaan?, Lihat jawaban, Cari artikel, "Hasil pencarian: {q}", Tidak ada artikel yang cocok, Belum ada artikel, Sebelumnya, Berikutnya.

## Out of scope

- Comments (replaced by the "Masih ada pertanyaan?" Konsultasi block).
- Tags or a second taxonomy; one Kategori per Artikel.
- Searching Artikel bodies.
- Body images chosen by the skill.
- Artikel beyond the first one; later Artikel go through `/write-article` one keyword at a time.
