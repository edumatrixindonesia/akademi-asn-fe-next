# 01: Brand foundation and live home route

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** A visitor who opens `/` sees the Akademi ASN home page (an empty Home shell for now) in brand colors and Poppins, instead of the create-next-app template. The Navbar CTA is yellow and the Footer uses the blue gradient. The root layout sets the correct SEO basics. This ticket also sets up the HTML test harness (spec seam 1) that later tickets extend.

**Blocked by:** None (can start immediately)

**Status:** done

- [x] Brand tokens `primary` (#237DC1), `primary-dark` (#00559F), `muted` (#F6F7FC), and `cta` / `cta-foreground` (#FFB04F) are defined and exposed to Tailwind; `secondary` keeps its neutral value
- [x] A `container-section` utility provides the section wrapper (centered, max-w-7xl, px 4/8, py 12/16)
- [x] Poppins 400–700 is loaded through `next/font`; Geist and Geist Mono are removed
- [x] The root layout sets `lang="id"`, a `metadataBase` from `NEXT_PUBLIC_SITE_URL`, a title template, a default description, and `revalidate = 3600`
- [x] The build fails with a clear message when `NEXT_PUBLIC_SITE_URL` is missing or empty (verified manually once)
- [x] The home route is a thin wrapper that exports home `metadata` and renders the Home page component
- [x] The Navbar CTA uses the `cta` token, and the Footer background is a gradient from `primary` to `primary-dark`; props of both are unchanged
- [x] A `bun test` file builds against a running production server, fetches `/`, and asserts `lang="id"` and an absolute canonical URL
- [x] The relevant Next.js 16 guides (metadata, ISR without Cache Components, `next/font`) in the installed package docs were read first
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
