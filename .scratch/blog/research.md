# Blog research: english-academy.id/blog as reference

Status: research (no spec yet)

Collected 2026-10-01. Goal: gather what we need to build a blog for Akademi ASN with articles stored statically under `data/`, using the English Academy blog as the structure and look reference. This file holds facts and a draft data model only; route, format and pagination decisions belong in a later `spec.md`.

## Sources and method

- Raw HTML of `/blog/`, the five articles below, `/blog/tag/business-english` (+ `/page/2`), `/blog/author/restu-sekar-arum`, `/blog/?s=tenses`.
- The WordPress REST API (`/blog/wp-json/wp/v2/posts|categories|tags|users`). It exposes the real stored fields, which is more precise than scraping rendered text.
- Theme stylesheet `wp-content/themes/englishacademy/css/style.css` for design tokens.
- Playwright screenshots at 1366px and 390px, saved in `ref/`.

Articles analysed:

| Slug | Tag | Words | Read time (Yoast) | h2 / h3 | Images | CTA banners | Internal blog links | References |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cerpen-bahasa-inggris` | General English | 12,005 | 54 min | 14 / 36 | 9 | 2 | 3 | 0 |
| `pitch-deck` | Business English | 1,983 | 11 min | 7 / 17 | 13 | 1 | 3 | 5 |
| `appositive-phrase` | Academic English | 1,776 | 9 min | 5 / 11 | 5 | 1 | 9 | 3 |
| `asking-attention-checking-understanding` | General English | 1,919 | 9 min | 7 / 2 | 5 | 2 | 11 | 0 |
| `cara-mengajar-bahasa-inggris-untuk-anak` | For Kids | 1,882 | 9 min | 2 / 10 | 4 | 2 | 3 | 3 |

Titles are 50–66 characters. Meta descriptions are 136–158 characters. Every article has a Yoast focus keyword (`cerpen`, `pitch deck`, `appositive phrase`, …) except one.

## Platform facts

- WordPress 6.8.1, custom theme `englishacademy` (Bootstrap 4 + jQuery + Glider.js carousels), served under `/blog` on the main domain.
- SEO plugin: Yoast (current) with leftover All in One SEO meta (`_aioseo_*`) from a migration.
- 581 posts, 1 author per post, ~10+ authors.
- Featured images are not WordPress media. A "featured image by URL" plugin stores an external CDN URL and alt in post meta (`_knawatfibu_url`, `_knawatfibu_alt`). Images live on `cdn-web*.ruangguru.com`.
- `_wp_old_date` shows posts are re-dated when refreshed (e.g. `pitch-deck` was published 2023 and re-dated 5 times). The visible date is the last re-date, not the original publish date.

## Information architecture

| Page | URL | robots | Notes |
| --- | --- | --- | --- |
| Blog index | `/blog/` | index | Not paginated. |
| Article | `/blog/{slug}` | index | Flat slug, no category or date in the URL. |
| Tag archive | `/blog/tag/{tag}` and `/blog/tag/{tag}/page/{n}` | index | 10 posts per page. `rel=prev/next` and a self canonical on every page. |
| Author archive | `/blog/author/{author}` | index | Paginated like tags. |
| Search | `/blog/?s={q}` | noindex, follow | Same grid as tag archive. |
| Sitemaps | `/blog/sitemap_index.xml` | – | `post-sitemap.xml` (582 URLs), `post_tag-sitemap.xml`, `author-sitemap.xml`. |

Taxonomy in practice: categories exist but are unused (all 581 posts are `Uncategorized`). **Tags act as the only real category**, one per post:

| Tag | Posts | In main nav |
| --- | --- | --- |
| General English | 243 | yes |
| Academic English | 225 | yes |
| For Kids | 42 | yes |
| Business English | 41 | yes |
| Info & Events | 22 | no |
| TOEFL / product tags | 1–3 | no |

## Page anatomy

### Blog index (`/blog/`, see `ref/blog-index-desktop.jpg`)

1. Header: logo, nav links (Blog + one link per main tag), "Pilih Program" dropdown to product pages, search box.
2. Product carousel: "Belajar Seru dengan Ruangguru Super App", 6 program cards (gradient card, icon, name, one-line description, "Lihat Detail" button).
3. **Artikel Terbaru** (the page `h1`): carousel of the 10 newest posts, 2 large cards visible on desktop. Card = cover image, title (`h2`, 2-line clamp), date • reading time.
4. One section per main tag (4 sections): `h2` tag name + "Lihat Semua" link to the tag archive, then a 3-column grid of the 3 newest posts in that tag.
5. Footer: contact, socials, link columns, app store badges.

### Article (`/blog/{slug}`, see `ref/article-desktop.jpg`, `ref/article-mobile.jpg`)

Two columns on desktop: post column 8/12 (~748px), sidebar 4/12 (~351px) with a vertical divider.

Post column, top to bottom:

1. Tag pill (link to tag archive).
2. Title `h1`.
3. Author name (link to author archive).
4. Date • "N minutes read".
5. Body (see next section).
6. Author box: 64px round avatar, name, description (empty on all five).
7. Share row: "Bagikan artikel ini:" + WhatsApp, Facebook, Twitter/X, LinkedIn.

Sidebar (sticky, `top: 112px`):

1. Promo banner carousel ("Coba kelas gratis sekarang").
2. "Artikel Terbaru": 5 newest posts, 144×72 thumbnail + title (4-line clamp).

Below both columns: **Artikel Lainnya**, 3 cards in a grid. These are simply the 3 newest posts, not related ones.

Extras: a promo pop-up modal (carousel of 4 banners) opens on load, and a dismissible floating product banner sits at the bottom. On mobile the promo banner moves above the tag pill.

### Tag archive

Product carousel, `h1` = tag name, 3-column grid of 10 cards (cover, title, date • reading time), numbered pagination (`1 2 … 5 >`, current page in a teal circle). No tag description text.

### Author archive

Same as the tag archive, but the `h1` says "Artikel Terbaru" and there is no author name, photo or bio.

## Article body anatomy

All five articles follow the same editorial template:

1. **Lead**: a centred, italic `blockquote` with the cover image and a 1–3 sentence summary (it is the excerpt), followed by an em dash `—` divider.
2. **Hook**: 2–4 short, conversational paragraphs ("Guys, …", "Yuk, …", "Nah, …").
3. **Sections**: `h2` per topic, `h3` for sub-points, often numbered in the text ("1. Airbnb", "Soal 1"). The `h2`s are mostly questions that match search queries ("Apa itu Appositive Phrase?", "Apa Perbedaan Novel dan Cerpen?").
4. **Inline elements** used inside sections:
   - paragraphs with heavy `em` (foreign terms are always italic) and `strong`;
   - ordered and unordered lists;
   - example sentences in italics with an Indonesian translation in brackets;
   - formula lines, centred and bold ("Noun + V-ing Phrase");
   - dialogues ("Alfi: …" + translation line);
   - images with caption-like alt text (screenshots of examples);
   - **Baca Juga** lines: bold "Baca Juga:" + a link to another post. 3–5 per article.
   - **CTA blocks**: a centred italic `blockquote` with a pitch, then an image banner that links to WhatsApp consultation or the payment page. 1–2 per article: one mid-article, one at the end.
5. **Latihan soal** (exercise posts): `h3` "Soal N", question, options A–D, "Jawaban: X", "Pembahasan: …".
6. **Closing**: a recap paragraph and the final CTA.
7. **References** (3 of 5 posts): "References:" + one line per source (title, URL, accessed date).

Not present on any of the five: table of contents, tables, embedded video, FAQ block, visible "updated on" date.

## Design tokens

| Token | Value |
| --- | --- |
| Font | Inter 400 / 600 / 700 (Google Fonts) |
| Text | `#2c313a` (headings and body), `#5e677b` (meta text) |
| Brand accent | `#20a4b0` / `#2eb5c0` (links, active page, hover), `#13939e` on `#def3f5` (tag pill) |
| Borders | `#cfd3db` |
| Author box background | `#e0eefa` |
| Article `h1` | 32px / 48px bold (24px / 36px on mobile) |
| Section heading (`page-title`, tag section `h2`) | 28px bold (22px on mobile) |
| Card title | 18px / 28px bold, 2-line clamp (14px, 3-line clamp on mobile) |
| Card meta | 14px semibold `#5e677b` (10px on mobile) |
| Body text | 16px / 1.5 (14px on mobile) |
| Card image | `border-radius: 12px` |
| Card hover | `translateY(-4px)` |
| Grid | 3 columns, gap 24px × 32px; 1 column on mobile with a horizontal card (90px image left, text right) |
| Tag pill | fully rounded, 10px semibold, `4px 12px` padding |
| Cover image | 2:1 (1023×512) |
| In-body CTA banner | 820×300 |
| Breakpoints | Bootstrap: 576 / 768 / 992 |

The body `h2`/`h3` have no theme styles (a CSS reset sets them to 16px); editors size them with inline `font-size: 14pt` spans. We should style them in CSS instead.

## Weak points not to copy

These hurt search ranking or Core Web Vitals. Our version should do better on each.

- **No Article / BlogPosting schema.** JSON-LD has only `WebPage`, `BreadcrumbList` (Home → title, skipping the tag), `WebSite`, `Person`. No `datePublished` on an article entity, no `author` link, no `image`.
- **No `og:image`** on any page, so social shares have no preview.
- **Wrong language signals**: `<html lang="en-US">` and `og:locale=en_US` on Indonesian content.
- **Overlong `<title>`**: "{title} - Belajar Bahasa Inggris Gratis & Mudah | Blog English Academy" (~120 characters), truncated in results.
- **Missing dates on cards**: when two posts share a day, the second shows only "•" (WordPress `the_date()` prints once per day).
- **Two reading-time numbers**: Yoast says 54 min, the theme says 59 min for the same post. Use one function.
- **"Artikel Lainnya" is not related content.** It repeats the newest posts, which the sidebar already shows.
- **Thin author pages**: wrong `h1`, no bio, empty author descriptions. Bad for E-E-A-T.
- **Thin tag pages**: no description text, so every tag page is only a list of cards.
- **Pop-up modal on load**: an intrusive interstitial on mobile, and extra JS.
- **Cover image is `loading="lazy"`** although it is the LCP element.
- **Image-only CTA banners** carry their message in pixels; 1 of 5 article images lacks `alt`.
- **No table of contents** on long posts (the 12,000-word `cerpen` post has 50 headings).
- Unused category taxonomy and leftover AIOSEO meta: dead data.

## Draft data model for `data/`

The reference stores posts, tags and users in WordPress tables. Mapped to static files, we need three collections. Field names follow this repo's conventions (content-describing, English). WordPress equivalents are listed so nothing is missed.

### `Article` (WP `wp_posts` + post meta)

| Field | Type | Required | WP source | Notes |
| --- | --- | --- | --- | --- |
| `slug` | string | yes | `post_name` | URL `/blog/{slug}`; unique. |
| `title` | string | yes | `post_title` | Page `h1`, card title. ≤ 60 chars to fit results. |
| `seoTitle` | string | no | `_yoast_wpseo_title` | Only when `<title>` must differ from `h1`. |
| `description` | string | yes | `_yoast_wpseo_metadesc` | Meta description, 120–160 chars. |
| `excerpt` | string | yes | `post_excerpt` | Lead shown at the top and on cards. |
| `coverImage` | `{ src, alt, width, height }` | yes | `_knawatfibu_url` / `_knawatfibu_alt` | Path under `public/`; 2:1 like the reference, also used as `og:image`. |
| `category` | category slug | yes | tag (one per post) | One category per article, see below. |
| `tags` | string[] | no | – | Skip until a second axis is needed. |
| `author` | author slug | yes | `post_author` | |
| `publishedAt` | ISO date | yes | `post_date` | Original publish date. Do not re-date on refresh. |
| `updatedAt` | ISO date | no | `post_modified` | Shown as "Diperbarui …" and `dateModified`. |
| `focusKeyword` | string | no | `_yoast_wpseo_focuskw` | Editorial only, never rendered. |
| `body` | content (see format options) | yes | `post_content` | |
| `references` | `{ title, url, accessedAt }[]` | no | inline text | Rendered as the References list. |
| `relatedSlugs` | string[] | no | – | Manual "Artikel Lainnya"; fall back to the same category. |
| `readingMinutes` | – | – | Yoast meta | **Computed** from `body` word count (~200 wpm), never stored. |

Dropped on purpose: `guid`, `status`, `sticky`, `format`, `template`, comment/ping status, `_edit_*`, AIOSEO meta, `_wp_old_date`, `featured_media` id.

### `Category` (WP tag used as category)

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `slug` | string | yes | URL segment. |
| `name` | string | yes | Nav label, pill, section heading. |
| `description` | string | yes | Unique intro paragraph on the category page (the reference has none; we need it to avoid thin pages). |
| `seoTitle` | string | no | |
| `metaDescription` | string | yes | |

Candidate categories map to the exam tracks in `CONTEXT.md`: CPNS, PPPK, BUMN, plus possibly a general one (tips belajar, info seleksi). To be decided in the spec.

### `Author` (WP `wp_users`)

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `slug` | string | yes | |
| `name` | string | yes | |
| `role` | string | yes | e.g. "Tutor TWK Akademi ASN"; becomes `jobTitle`. |
| `bio` | string | yes | Author box and author page; the reference leaves this empty. |
| `avatar` | `{ src, alt }` | yes | 64px circle in the author box. |
| `sameAs` | string[] | no | LinkedIn / Instagram for E-E-A-T. |

### Body block types

From the inventory above, the body needs these block types:

| Block | Fields | Seen in |
| --- | --- | --- |
| paragraph | rich inline text (italic, bold, link) | all |
| heading | level 2 or 3, text, anchor id | all |
| list | ordered or not, items (rich inline) | all |
| image | src, alt, width, height, optional caption | all |
| formula / highlight | text, centred and bold | appositive |
| example | sentence + translation | appositive, asking-attention |
| dialogue | lines of `{ speaker, text, translation? }` | asking-attention |
| readAlso ("Baca Juga") | article slug (title resolved from data) | all |
| cta | variant (konsultasi WhatsApp / paket), text | all |
| quiz ("Latihan Soal") | question, options, answer, explanation | appositive |
| table | rows | none of the five, but likely for passing-grade style posts |

### Body format options

Inline rich text (italic terms, bold, links mid-sentence) is the hard part. Three ways to store it, for the spec to choose:

1. **`.tsx` body per article** (e.g. `data/articles/<slug>.tsx` exporting the metadata object and a body component built from small shared components like `<ReadAlso slug="…" />`, `<Quiz … />`). No new dependency, fully type-checked, Server Components, inline formatting is plain JSX. Lazy default.
2. **MDX** via `@next/mdx` (documented in `node_modules/next/dist/docs/01-app/02-guides/mdx.md`). Nicest for writers, but adds dependencies, so it needs approval first.
3. **Typed JSON blocks** with inline marks. Most portable to a future CMS, but very verbose to write by hand.

## Page set we would build (draft)

Mirrors the reference, minus the weak points:

- `/blog`: `h1`, newest articles, one section per category (3 cards + "Lihat Semua").
- `/blog/{slug}`: breadcrumb (Beranda → Blog → Category → title), category pill, `h1`, author + dates + reading time, cover (eager, `priority`), lead, table of contents for long posts, body, references, author box, share row, related articles; sidebar with newest articles and a Konsultasi CTA instead of a pop-up.
- `/blog/kategori/{slug}` (or similar): `h1`, unique description, paginated grid.
- Author page: only if we publish author bios; otherwise skip.
- Search: skip (it is noindex anyway; YAGNI until there are many posts).
- JSON-LD per article: `BlogPosting` (headline, description, image, datePublished, dateModified, author → `Person`, publisher → existing `#organization`), plus `BreadcrumbList` from the existing breadcrumb section.
- `app/sitemap.ts`: add the blog, category and article URLs with `lastModified`.

Routing note: `/blog` is a static segment, so it wins over the root `app/[...locations]` catch-all. Still check that no region slug can be `blog`.

## Open questions for the spec

1. Categories: exam tracks only (CPNS / PPPK / BUMN), or add a general category?
2. Body format: `.tsx`, MDX (new dependency), or JSON blocks?
3. URL prefix for categories (`/blog/kategori/x` vs `/blog/x` with a slug collision risk) and pagination style (`/page/2` vs `?page=2`).
4. Real authors with bios, or one brand author ("Tim Akademi ASN")?
5. Blog link placement in the navbar and footer.
6. CTA targets: the Konsultasi WhatsApp rotation (`paketProgram(konsultasiUrl)` pattern) and/or Paket Program.
