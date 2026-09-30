# Akademi ASN — Landing Pages

Next.js landing-page site for Akademi ASN (bimbel CPNS, PPPK, and BUMN), including
location pages such as `/bimbel-cpns/jawa-barat`.

This README covers setup and recovery: how to go from a fresh machine to a running
project. For architecture, conventions, and commit rules, read [AGENTS.md](AGENTS.md).
For domain terms, read [CONTEXT.md](CONTEXT.md).

## 1. Prerequisites

| Tool | Version                      | Notes                                                    |
| ---- | ---------------------------- | -------------------------------------------------------- |
| git  | any recent                   | Access to the `edumatrixindonesia` GitHub organization.  |
| Node | 24 (see `.nvmrc`)            | Next.js runs on Node even when started through bun.      |
| bun  | 1.4.2 (see `packageManager`) | Package manager and test runner. Do not use npm or yarn. |

```bash
# Node via nvm
nvm install        # reads .nvmrc
nvm use

# bun
curl -fsSL https://bun.sh/install | bash -s "bun-v1.4.2"
bun --version      # 1.4.2
```

You also need the **region-service** API (location data). See step 3.

## 2. Clone and install

```bash
git clone https://github.com/edumatrixindonesia/akademi-asn-fe-next.git
cd akademi-asn-fe-next
nvm use
bun install
```

`bun install` also runs the `prepare` script, which sets `core.hooksPath` to
`.githooks` so commitlint checks every commit message. Verify it:

```bash
git config core.hooksPath   # .githooks
```

## 3. region-service

Location pages, `generateStaticParams`, and `sitemap.xml` all read region data from
the internal region-service API. Without it, `bun run build` fails and location
pages return errors. Non-location pages still work in `bun dev`.

### Main path: run it locally

Clone [edumatrixindonesia/region-service](https://github.com/edumatrixindonesia/region-service)
and follow its README until it serves `http://localhost:8085/api/v1`.

Check that it responds (use the token from step 4):

```bash
curl -H "Authorization: Bearer <token>" \
  "http://localhost:8085/api/v1/wilayah.php?type=provinsi&limit=1"
```

A JSON body with a `data` array means it works.

### Fallback: production

If you cannot run it locally, point `REGION_SERVICE_URL` at production:

```bash
REGION_SERVICE_URL="https://region-service.bimbeledumatrix.com/api/v1"
```

The same token works for local and production. region-service is rate-limited
(the `rate_limit` field in each response shows the current limit; 40 requests per
60 seconds at the time of writing). A cold `bun run build` fetches the region lists
once per build worker, so repeated builds can hit it. Prefer the local service for
regular work.

## 4. Environment variables

```bash
cp .env.example .env
```

| Variable               | Example                        | Notes                                                |
| ---------------------- | ------------------------------ | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000`        | Absolute site URL. The build fails when it is empty. |
| `REGION_SERVICE_URL`   | `http://localhost:8085/api/v1` | Server-only. See step 3.                             |
| `REGION_SERVICE_TOKEN` | `<jwt>`                        | Server-only. Never commit it or put it in code/docs. |

**Where the token comes from:** copy it from `region-service/.env`. If that file is
lost too, get it from the `.env` on the production region-service server, or
generate a new one as described in the region-service README.

Keep a backup of the token outside this machine (for example, a password manager),
so a broken laptop does not take the only copy with it.

`.env*` is gitignored except `.env.example`. Never prefix `REGION_SERVICE_*` with
`NEXT_PUBLIC_`: that would ship the token to the browser.

## 5. Run

```bash
bun dev            # http://localhost:3000
```

Production mode:

```bash
bun run build
bun run start
```

## 6. Verify

Run these in order. All must pass.

```bash
bun run lint
bun run typecheck
bun run build
```

Tests use `bun test`. The HTML tests fetch a running server, so start `bun dev` in
another terminal first (or set `TEST_BASE_URL` to another server):

```bash
bun dev            # terminal 1
bun test           # terminal 2
```

Quick manual check: open `http://localhost:3000`, `http://localhost:3000/bimbel-cpns`,
and one location page such as `http://localhost:3000/bimbel-cpns/jawa-barat`.

## 7. Troubleshooting

| Symptom                                                        | Fix                                                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL must be set to the site's absolute URL.` | `.env` is missing or the value is empty. Redo step 4.                                                  |
| `REGION_SERVICE_URL and REGION_SERVICE_TOKEN must be set.`     | Same as above, for the region-service variables.                                                       |
| `region-service type=provinsi responded 401.`                  | Wrong or expired token. Copy it again from `region-service/.env`.                                      |
| `fetch failed` / `ECONNREFUSED` on build or location pages     | region-service is not running. Start it and rerun the `curl` check in step 3, or use the fallback.     |
| `region-service … responded 429.`                              | Rate limit hit (usually production). Wait a minute, or switch to the local service.                    |
| Commit rejected by commitlint                                  | Use `<type>: <description>` without a scope, e.g. `fix: correct footer link`. Never use `--no-verify`. |
| Commit hook does not run                                       | Run `git config core.hooksPath .githooks` (or `bun install` again).                                    |
| Odd syntax or engine errors from Next.js                       | Wrong Node version. Run `nvm use` and check `node --version`.                                          |
| Stale behavior after pulling changes                           | `rm -rf .next node_modules && bun install`.                                                            |

## 8. Optional

- **graphify** (AI-agent knowledge graph): `graphify-out/` is gitignored. Rebuild it
  with `graphify update .` so agent hooks stop warning about it.
