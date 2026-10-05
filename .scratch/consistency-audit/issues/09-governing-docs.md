# 09: Governing docs match the accepted implementation

**Parent:** `.scratch/consistency-audit/spec.md`

**What to build:** AGENTS, the tracker docs, and the brand spec state the exceptions the owner accepted, so the current code can be checked against them without contradiction.

**Blocked by:** none

**Status:** ready-for-agent

**Category:** documentation

Load the `writing-for-agents` skill before editing `AGENTS.md`.

- [ ] `AGENTS.md` (around line 61, "SEO lives here, not in `data/`"): routes own the Next `metadata` export; content fields such as `seoTitle` and `description` may live in `data/`. Point to `docs/adr/0002-artikel-body-in-mdx.md`.
- [ ] `AGENTS.md` (around line 87, data file per section): one exception, `components/sections/artikel-per-kategori.tsx` takes its data from `data/artikel-listing.ts`.
- [ ] `AGENTS.md` (around line 18, unique location content): hand-written unique copy is required for the 72 intro regions only. Template pages need a unique location name, hierarchy links, and Lokasi Lain. Point to `docs/adr/0001-location-page-depth.md`.
- [ ] `docs/agents/issue-tracker.md`: document implementation lifecycle states (`ready-for-agent` / `ready-for-human` → `done`) separately from triage roles. Both `Status:` and `**Status:**` are valid.
- [ ] `.scratch/blog/research.md`: add a note at the top that it is a pre-spec snapshot, superseded by `.scratch/blog/spec.md`.
- [ ] `.scratch/beranda-design-system/spec.md`: the CTA token is `#ffb050` (as in `app/globals.css:66`), not `#FFB04F`. Add a dated note.

## Comments
