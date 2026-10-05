<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project goal

This is a landing-page site for Akademi ASN. It targets people who search Google for CPNS, PPPK, and BUMN tutoring (`bimbel`). **The top priority is to rank #1 in Google search for those queries.** When a trade-off comes up, choose the option that is better for search ranking.

- Treat SEO as part of every change, not a later pass. Check `metadata`, the heading hierarchy (one `h1` per page), semantic HTML, and image `alt` text.
- Keep page content in Server Components so it appears in the initial HTML that crawlers read.
- Protect Core Web Vitals (LCP, CLS, INP). Avoid client JS on landing pages unless it is needed.
- Location pages exist to capture local searches such as "bimbel cpns <city>". Hand-written unique copy is required for the 72 intro regions only. Template pages need a unique location name, hierarchy links, and Lokasi Lain (`docs/adr/0001-location-page-depth.md`).

## Environment

Copy `.env.example` to `.env` (gitignored via `.env*`) and fill in the token:

```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
REGION_SERVICE_URL="http://localhost:8085/api/v1"
REGION_SERVICE_TOKEN="<jwt>"
```

- `NEXT_PUBLIC_SITE_URL` is the site's absolute URL, used for `metadataBase` and the Konsultasi message. The build fails when it is missing or empty.
- `REGION_SERVICE_*` are server-only: never prefix with `NEXT_PUBLIC_` and never read them in a `"use client"` file — the token must not reach the browser.
- Never hardcode the URL or token, and never commit or paste the token into code or docs.

## Commands

Package manager is bun (not npm).

```bash
bun install
bun dev        # http://localhost:3000
bun run build
bun run lint
bun run typecheck
```

## Architecture

```
app/                      # Routes only: thin page.tsx wrappers + `metadata`
components/
  ui/                     # shadcn components only. Never edit by hand.
  shared/                 # Custom reusable pieces + small client leaves
  sections/               # Sections composed from ui/ + shared/
  pages/                  # Pages composed from sections/
  layouts/                # Navbar, footer, etc. Rendered from app/layout.tsx
data/                     # Section props, one file per section
public/                   # Static assets (e.g. logo-akademi-asn.webp)
```

- **Use shadcn first.** If shadcn has the component, add it with `bunx shadcn add <name>`. Otherwise build it in `components/shared/` on top of `radix-ui` primitives. Never modify files in `components/ui/`; customize via `className` or a wrapper in `shared/`.
- **`app/**/page.tsx` stays thin:** routes own the Next `metadata` export; content fields such as `seoTitle` and `description` may live in `data/` (`docs/adr/0002-artikel-body-in-mdx.md`). Render one component from `components/pages/`.
- **Sections are Server Components.** Move interactive parts (carousel, tabs, …) into a separate `"use client"` file in `components/shared/`.
- **Naming:** every file under `components/` is kebab-case (`program-bimbel-online.tsx`). The component inside is a PascalCase arrow function with a default export:
  ```tsx
  const ProgramBimbelOnline = () => { … };
  export default ProgramBimbelOnline;
  ```
  Indonesian domain terms are fine in names (`bimbel`, `cpns`); treat acronyms as words (`Cpns`, not `CPNS`).
- **Props describe content, not tags:** `title` / `description`, not `h1` / `p`.
- **Images:** reference by string path from `public/` and always render with `next/image`.

### Routes

| Page component                   | Route                                     |
| -------------------------------- | ----------------------------------------- |
| `pages/home.tsx`                 | `app/page.tsx`                            |
| `pages/home-location.tsx`        | `app/[...locations]/page.tsx`             |
| `pages/bimbel-cpns.tsx`          | `app/bimbel-cpns/page.tsx`                |
| `pages/bimbel-cpns-location.tsx` | `app/bimbel-cpns/[...locations]/page.tsx` |

`bimbel-pppk` and `bimbel-bumn` follow the same pattern as `bimbel-cpns`. `[...locations]` segments are province / regency / district / village. Only paths in the location page set (`docs/adr/0001-location-page-depth.md`) render; any other path 404s.

## Data pattern

Pages never pass literal values to sections. All section content lives in `data/`.

- `data/<section-file-name>.ts` mirrors `components/sections/<section-file-name>.tsx`. One exception: `components/sections/artikel-per-kategori.tsx` takes its data from `data/artikel-listing.ts`.
- The section exports its props type; each data entry is named `<section><Page>` and checked with `satisfies`:

  ```tsx
  // components/sections/jumbotron.tsx
  export type JumbotronProps = { title: string; description: string; backgroundImage: string; heroImage: string };
  const Jumbotron = ({ title, description, backgroundImage, heroImage }: JumbotronProps) => { … };
  export default Jumbotron;

  // data/jumbotron.ts
  import type { JumbotronProps } from "@/components/sections/jumbotron";
  export const jumbotronHome = { … } satisfies JumbotronProps;
  export const jumbotronCpns = { … } satisfies JumbotronProps;

  // components/pages/home.tsx
  <Jumbotron {...jumbotronHome} />
  ```

- **Shared entries** used unchanged on every landing page drop the page suffix: `keunggulan`, `paketProgram(konsultasiUrl)`. Page-specific entries keep `<section><Page>` (`jumbotronCpns`). `*Home` entries used on exam-track pages are placeholders until they are split per exam track.
- **Location pages** use data functions that fill in the location name: `export const jumbotronCpnsLocation = (location: string) => ({ … }) satisfies JumbotronProps;`. Location variants of shared entries are named `<section>Location(location)`, spread the static entry, and override only the text that names the location.
- **Location data** (region names, hierarchy) comes from the internal `region-service` API. Everything else is static in `data/`.

## Conventions

- **Server Components by default.** Add `"use client"` only when a component needs state, effects, or browser APIs — push it to the leaf, not the page.
- **English** for code, comments, commit messages, and identifiers.
- **No `any`.** Use a real type, a generic, or `unknown` + narrowing (e.g. for API responses). Lint already errors on it (`@typescript-eslint/no-explicit-any`); never silence it with `eslint-disable` or `@ts-ignore`.

## Stack gotchas

- Next.js 16.3 App Router (`app/`), React 19.2, TypeScript.
- Tailwind v4 has no `tailwind.config`. Theme tokens and CSS variables live in `app/globals.css`.
- shadcn/ui uses style `radix-vega` and imports primitives from the `radix-ui` package, not `@radix-ui/*`. Add components with `bunx shadcn add <name>`; they land in `components/ui/`.
- `cn` (`lib/utils.ts`) re-exports the `cn` npm package, which replaces clsx and tailwind-merge. Do not add clsx or tailwind-merge.
- Icons: `lucide-react`.

## Working rules

- **Always run `bun run lint` then `bun run typecheck`** after changing code.
- **Never install a new dependency without asking first.**

## Commits

Conventional Commits without scope (`<type>: <description>`), enforced by commitlint (`commitlint.config.mjs`) in the `.githooks/commit-msg` hook. Never bypass it with `--no-verify`.

- Write the description in the imperative mood. Use the body to explain _why_ the change was made.
- Breaking change: `feat!: …` plus a `BREAKING CHANGE: …` footer.

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Article writing

Before drafting or editing an Artikel under `data/artikel/` or `data/artikel.ts`, read `docs/agents/article-writing.md`. New Artikel go through `/write-article <keyword>`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
