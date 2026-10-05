# Spec: Design system and home landing page

> **Superseded for Konsultasi rotation:** See [daily rotation decision](../jangkauan-lokasi/issues/05-daily-konsultasi-rotation.md). Rotation is daily; `revalidate = 86400`; `getKonsultasiUrl(topic?, now?)` changes day at 00:00 UTC (07:00 WIB). Daily ISR means pages may switch admins at different times; issue 05 accepted this.

Status: done

## Problem Statement

The Akademi ASN site has no visual identity yet. The theme is still the neutral shadcn default (black and gray), the font is Geist, and the home route `/` still shows the create-next-app template instead of the Home page. Nothing on `/` tells a visitor from Google what Akademi ASN sells, and crawlers see no relevant content, so the site cannot rank for "bimbel CPNS / PPPK / BUMN" queries.

The owner wants the Akademi ASN brand from the reference site (bimbelcpnsindonesia.com: blue and yellow, Poppins, the same section order and copy) rebuilt in this project as a small set of reusable, token-driven components. The reference site is a separate project by other developers. It is used only as a design and content reference. It is not migrated, mirrored, or redirected.

## Solution

Define the brand as design tokens in the global CSS configuration, then build the home Landing page from Server Component sections that use only those tokens.

A visitor who opens `/` sees, in order: Jumbotron, Keunggulan, Materi, Paket Program, Seleksi, Passing Grade, Tantangan Seleksi, Lembaga, Testimoni, CTA Footer, FAQ, and Media Massa, framed by the existing Navbar and Footer restyled in brand colors. Every Konsultasi call to action opens WhatsApp with one of four customer-service admins. The admin rotates every hour, so the load spreads across the team while the page stays static. All content is in the initial HTML, so crawlers can read it.

## User Stories

1. As a visitor from Google, I want the home page to state clearly that Akademi ASN offers CPNS, PPPK, and BUMN tutoring, so that I know I found the right site.
2. As a visitor, I want the site to use consistent brand colors (blue primary, yellow call to action), so that the site feels trustworthy and recognizable.
3. As a visitor, I want the text to use the Poppins font, so that the reading experience matches the Akademi ASN brand.
4. As a visitor, I want the page to load fast on a mobile connection, so that I do not leave before I see the content.
5. As a visitor, I want the layout to have no shift while the page loads, so that I do not tap the wrong element.
6. As a visitor, I want a hero section with a clear headline, a short description, and a sign-up button, so that I understand the offer in a few seconds.
7. As a visitor, I want to see the Keunggulan of Akademi ASN (private 1-on-1 sessions, master teachers, tips and tricks, flexible schedule, up-to-date material), each with a title, a short description, and an animated illustration, so that I understand why I should choose this tutoring.
8. As a visitor, I want to see the Materi covered (Pengetahuan Umum, Bahasa Indonesia, TKD, Tes Bidang Studi, answering techniques, exam simulation, psikotes and wawancara, mentoring), so that I know the program covers the whole exam.
9. As a visitor, I want to see every Paket Program (Optima, Maxima, Ultima offline classes, the online Bootcamp, and the Tryout packages) with name, number of sessions, price, crossed-out original price when there is one, and a list of what is included, so that I can compare packages.
10. As a visitor, I want every package card to have an "ask about this class" button that opens WhatsApp, so that I can ask about a package directly.
11. As a visitor, I want to understand the Seleksi stages (SKD with TWK, TIU, and TKP) and what each sub-test measures, so that I know what the exam looks like.
12. As a visitor, I want to see the official Passing Grade values (TWK 65, TIU 80, TKP 166) and the note that passing is not enough without ranking inside the quota, so that I know the target score.
13. As a visitor, I want to read the Tantangan Seleksi (the common reasons candidates fail), so that I see why structured preparation matters.
14. As a visitor, I want to see the logos of the institutions (Lembaga) that alumni joined, moving slowly across the screen, so that I trust the track record.
15. As a visitor who has enabled reduced motion, I want the Lembaga logos to stay still, so that the animation does not bother me.
16. As a visitor, I want to see Testimoni from past students, so that I trust the results.
17. As a visitor, I want a closing call to action that offers a free trial class, so that I have a reason to contact the team now.
18. As a visitor, I want to expand answers to frequently asked questions without the page reloading, so that I can find answers quickly.
19. As a visitor, I want to see the media outlets (Media Massa) that covered Akademi ASN, so that I trust the brand.
20. As a visitor, I want every Konsultasi button to open WhatsApp with a pre-filled message that names the admin and includes this site's URL, so that I can start a chat with one tap.
21. As a visitor, I want all Konsultasi buttons on one page to go to the same admin, so that I do not get confused by different contacts.
22. As a visitor, I want the navbar links "Paket" and "Testimoni" to scroll to the matching sections, below the sticky navbar, so that I can jump to what I need.
23. As a visitor, I want the footer to use the brand blue gradient, so that the site looks consistent from top to bottom.
24. As a visitor using a screen reader, I want every meaningful image to have descriptive alt text and decorative images to be ignored, so that I get the same information as sighted visitors.
25. As a visitor using a keyboard, I want to reach and open every FAQ item and every button, so that I can use the whole page without a mouse.
26. As a customer-service admin, I want Konsultasi chats spread across the four admins (Asyah, Nevita, Putri, Sari) in turn, so that no admin gets all the leads.
27. As the owner, I want the admin rotation to keep the page static, so that speed and search ranking do not suffer.
28. As the owner, I want the admin phone numbers and message text in one place, so that I can change a number with one edit.
29. As the owner, I want the site URL in the WhatsApp message and in the page metadata to come from an environment variable, so that each environment uses its own domain.
30. As the owner, I want the build to fail with a clear message when the site URL variable is missing, so that production never ships broken canonical URLs.
31. As the owner, I want the page to declare Indonesian as its language, so that Google serves it to Indonesian searchers.
32. As the owner, I want a unique title and description for the home page and a title template for the other pages, so that search results show relevant snippets.
33. As the owner, I want the FAQ to be exposed as FAQPage structured data, so that Google can show it as a rich result.
34. As the owner, I want exactly one main heading on the page and a correct heading order, so that crawlers understand the page structure.
35. As the owner, I want all section copy stored in data files, separate from the components, so that I can edit copy without touching layout code.
36. As a developer, I want brand colors, font, and section spacing available as design tokens and utilities, so that new sections look consistent without hardcoded values.
37. As a developer, I want the existing shadcn components to pick up the brand colors automatically, so that I do not restyle each component.
38. As a developer, I want a reusable feature card and package card, so that other Landing pages (exam-track and location pages) can reuse them later.
39. As a developer, I want every section to be a Server Component, so that no client JavaScript ships for static content.
40. As a developer, I want the animated illustrations stored as small animated WebP files instead of multi-megabyte GIFs, so that the repo and the page stay light.

## Implementation Decisions

### Design tokens

- The brand overrides the shadcn semantic tokens rather than adding a parallel brand palette. `primary` is `#237DC1`. `muted` is `#F6F7FC`, used for alternating section backgrounds. `secondary` keeps its neutral meaning.
- New tokens: `primary-dark` (`#00559F`, used for hover states and as the end of the blue gradients) and `cta` / `cta-foreground` (`#ffb050`; corrected 2026-10-05 from `#FFB04F` to match `app/globals.css:66`, used for Konsultasi buttons). All tokens are exposed to Tailwind through the existing `@theme inline` block, so utilities such as `bg-cta` and `from-primary-dark` work.
- Spacing uses the default Tailwind scale. One custom utility, `container-section`, is the section wrapper: centered, `max-w-7xl`, horizontal padding 4 / 8 (mobile / md), and vertical padding 12 / 16. The Navbar and Footer inner wrappers adopt it where it fits.
- Font: Poppins, weights 400, 500, 600, and 700, loaded through `next/font/google`, so it is self-hosted and does not cause layout shift. Geist and Geist Mono are removed. No weight above 700 is used.
- The site stays light-only, as today.
- The reference site's values are documented in the design-system document under docs/context. This spec applies a simplified version of those values (Tailwind conventions instead of pixel parity).

### Root layout and route

- The root layout sets `lang="id"`, the Poppins font variable, `metadataBase` from `NEXT_PUBLIC_SITE_URL`, a root title with a `%s | Akademi ASN` style template, a default description, and `revalidate = 3600` (ISR without Cache Components; the project does not enable `cacheComponents`).
- A missing or empty `NEXT_PUBLIC_SITE_URL` throws an error with a clear message at build time.
- The home route becomes a thin wrapper: it exports the home `metadata` and renders the Home page component, following the existing routing convention.

### Konsultasi contact module

- A contact data module holds the four admins as static data (name and phone number): Asyah 6281215523902, Nevita 6285815095359, Putri 6285724543040, Sari 6285712217876. The phone numbers are public, so they do not go in environment variables.
- The module exports `getKonsultasiUrl(now?: number): string`. It picks the admin with an hour-based round robin, `Math.floor(now / 3_600_000) % 4`, and `now` defaults to `Date.now()`. It returns an `https://api.whatsapp.com/send` URL with that admin's phone number and the message `Halo Kak <name> <SITE_URL>, Saya ingin bertanya tentang Bimbel Akademi ASN. Mohon info selengkapnya...`, URL-encoded.
- Because the choice depends only on the hour, the layout (Navbar, Footer) and the page (sections) pick the same admin without shared memoization. ISR changes the admin at most once per hour, when the first request arrives after the page expires.

### Data pattern

- Each section has one data file named after it, with an entry named `<section>Home`, checked with `satisfies <Section>Props`.
- An entry that contains a Konsultasi link is a function of the link, following the pattern used for location pages: `(konsultasiUrl: string) => ({ … }) satisfies Props`. The page and the layout call `getKonsultasiUrl()` once and pass the result in. Entries without a Konsultasi link (FAQ, Lembaga, Media Massa, and others) stay static objects.
- The Navbar and Footer data move their hardcoded WhatsApp link to this pattern. Their props do not change shape.

### Components

- Sections (Server Components, one file each, domain names from the glossary): `jumbotron` (exists as a placeholder, now implemented), `keunggulan`, `materi`, `paket-program`, `seleksi`, `passing-grade`, `tantangan-seleksi`, `lembaga`, `testimoni`, `cta-footer`, `faq`, `media-massa`.
- Shared components: `feature-card` (props: illustration image, title, description) and `paket-card` (props: name, category, number of sessions, price, optional crossed-out price, list of included items, Konsultasi link). Both are generic UI names because they are UI pieces, not domain concepts.
- No section needs a `"use client"` file:
  - The FAQ uses native `<details>` / `<summary>`, so the answers stay in the HTML. This deliberately departs from the "shadcn first" rule: the Radix Accordion does not render closed content, and the SEO goal takes priority.
  - The Lembaga logos use a CSS-only marquee (`@keyframes`) that stops under `prefers-reduced-motion`.
  - Passing Grade values are static text. The counter animation from the reference site is dropped.
- Heading hierarchy: the Jumbotron owns the only `h1`. Every section title is an `h2`. Card titles are `h3`.
- Anchor ids match the existing navbar links: the Paket Program section is `paket-program`, and the Testimoni section is `testimoni`.
- Section backgrounds follow the reference order:
  - Jumbotron: gradient from `primary-dark` to `primary`, with the BKN building image as a decorative, transparent overlay (`next/image` `fill`, empty `alt`, not prioritized).
  - Paket Program and CTA Footer: the BKN building image as background.
  - Tantangan Seleksi: the orange wave image on `muted`.
  - Other sections alternate between white and `muted`.
- The Jumbotron hero image is the only `priority` image, because it is the LCP element. All other images load lazily.
- The Navbar CTA uses the `cta` token. The Footer background becomes a gradient from `primary` to `primary-dark`. Both keep their structure and props.
- The FAQ section also renders a FAQPage JSON-LD script built from the same FAQ data, so the structured data never drifts from the visible content.
- FAQ copy keeps the reference wording, including "Akademi ASN by Edumatrix".

### Content

- Copy comes from the reference site: hero, Keunggulan titles, Materi list, Paket Program prices (Optima Rp1.960.000, crossed-out Rp2.000.000; Maxima Rp2.793.000, crossed-out Rp2.800.000; Ultima Rp5.292.000, crossed-out Rp5.300.000), Seleksi, Passing Grade, Tantangan Seleksi, CTA Footer, and FAQ.
- Keunggulan descriptions (1 to 2 sentences each) are new. The implementer drafts them, and the owner reviews them.
- The two Testimoni images are the existing WhatsApp screenshots, with descriptive alt text. The owner confirmed they may be shown as they are.

### Assets

- The existing reference assets in the public assets folder are used as they are, including the hero image, backgrounds, testimonials, and icons.
- The 12 Lembaga logos, the 7 Media Massa logos, and the 5 Seleksi images are downloaded from the reference site into new `lembaga`, `media-massa`, and `seleksi` subfolders of the public image folder, with the original file names.
- The 5 Keunggulan GIFs (about 3.2 MB in total) are converted to animated WebP with the already-installed `sharp` (`animated: true`), through a one-off script outside the repo. The GIFs are deleted. The before and after sizes are reported. No dependency is added.

## Testing Decisions

- A good test checks behavior that a visitor or a crawler can observe: the HTML the server returns, and the URL a Konsultasi button opens. Tests do not check component internals, class names, or file structure.
- Test runner: the built-in `bun test`. No new dependency.
- Seam 1, the primary seam: the rendered HTML of `/`. After `bun run build` and `bun start`, one test file fetches `/` and asserts:
  - exactly one `h1`;
  - `lang="id"`;
  - elements with the ids `paket-program` and `testimoni`;
  - every WhatsApp link on the page uses the same admin phone number, and its message contains `NEXT_PUBLIC_SITE_URL`;
  - a FAQPage JSON-LD block whose questions also appear as visible text;
  - the Passing Grade values 65, 80, and 166 in the HTML;
  - an absolute canonical URL and an absolute Open Graph URL;
  - no `.gif` references.
- Seam 2: `getKonsultasiUrl` with an injected `now`. Four consecutive hours return the four admins in turn, the fifth hour returns the first admin again, and each URL contains the correct phone number, the admin's name, and the site URL.
- A build that fails on a missing `NEXT_PUBLIC_SITE_URL` is checked manually once. It has no automated test.
- There is no prior art: this is the first test in the repo. Place the tests next to the code under test, or in one top-level test folder, whichever `bun test` discovers without configuration.
- `bun run lint` and `bun run typecheck` must pass, as required by the working rules.

## Out of Scope

- The Jangkauan section (links to province pages) and all location pages. They depend on the owner's region-service and are a separate, later effort. See the Jangkauan follow-up issue in this tracker.
- Exam-track pages (CPNS, PPPK, BUMN) and their location variants. The shared cards are built so that those pages can reuse them later.
- The Tryout and Produk pages linked from the navbar.
- Any change to the reference site, including redirects, URL parity, or fixes to its issues.
- Replacing the Testimoni screenshots with text testimonials.
- Dark mode.
- Randomized or client-side rotation of Konsultasi admins.

## Further Notes

- Glossary terms added during design: Keunggulan, Materi, Tantangan Seleksi, and Edumatrix. Add Seleksi, Passing Grade, Lembaga, and Media Massa to the glossary during implementation.
- Before writing code, the implementer must read the relevant Next.js 16 guides in the installed Next.js package docs, as required by the project rules, especially for metadata, ISR (`revalidate` without Cache Components), and `next/font`.
- Animated WebP served through `next/image` may need `unoptimized`, because the image optimizer may flatten animation. Verify this in the browser.
- The previous WhatsApp number in the Navbar data (6285815095359) belongs to Nevita and is now part of the rotation.
