# Akademi ASN — Landing Pages

Next.js landing-page site for Akademi ASN (bimbel CPNS, PPPK, and BUMN), including
location pages such as `/bimbel-cpns/jawa-barat`.

This README covers setup and recovery: how to go from a fresh machine to a running
project. For architecture, conventions, and commit rules, read [AGENTS.md](AGENTS.md).
For domain terms, read [CONTEXT.md](CONTEXT.md).

## 0. Before wiping the old machine

A clone restores only what is in git. The files below are gitignored or live
outside the repo, so they exist only on the old machine. Copy each one to private
storage (a password manager or a private cloud drive) before you wipe the OS.

| Back up                                                                                   | Why                                                       | Restore after                       |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------- |
| `.env`                                                                                    | Holds `REGION_SERVICE_TOKEN`. See step 4.                 | Step 2, into the repo root.         |
| `docs/private/`                                                                           | Real review sources with contact data. Never commit it.   | Step 2, into `docs/private/`.       |
| `region-service/.env` (if you have a local clone)                                         | Source of the token and the region-service config.        | Step 3, into the region-service clone. |
| `~/.claude/projects/-home-edumatrix-dimas-webdev-repo-cpns-akademi-asn-fe-next/memory/`   | Claude Code memory: SEO and content decisions for this project. | Step 2, to the same path.     |
| `~/.claude/` (`CLAUDE.md`, `RTK.md`, `settings.json`)                                     | Personal Claude Code setup.                               | After installing Claude Code.       |

Then confirm that nothing is left unpushed:

```bash
git status                  # working tree clean
git log origin/main..HEAD   # no output: every commit is pushed
git stash list              # no output: no stashed work
```

## 1. Prerequisites

Written for Ubuntu 26.04 LTS and newer.

| Tool    | Version                      | Notes                                                       |
| ------- | ---------------------------- | ----------------------------------------------------------- |
| git     | any recent                   | Access to the `edumatrixindonesia` GitHub organization.     |
| gh      | any recent                   | GitHub CLI. Stores the credentials for the private repo.    |
| Node    | 24 (see `.nvmrc`)            | Next.js runs on Node even when started through bun.         |
| bun     | 1.4.2 (see `packageManager`) | Package manager and test runner. Do not use npm or yarn.    |
| python3 | any (Ubuntu default)         | Used by the Claude Code hooks in `.claude/settings.json`.   |

```bash
# System packages (unzip is required by the bun installer)
sudo apt update
sudo apt install -y git gh curl unzip build-essential python3

# GitHub login and commit identity
gh auth login      # GitHub.com > HTTPS > authenticate Git with your credentials: Yes
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# nvm, then open a new terminal so nvm is on PATH
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# bun, then open a new terminal so bun is on PATH
curl -fsSL https://bun.sh/install | bash -s "bun-v1.4.2"
bun --version      # 1.4.2
```

Node itself is installed in step 2, from inside the repo, so `nvm install` can
read `.nvmrc`.

You also need the **region-service** API (location data). See step 3.

## 2. Clone and install

Use the same username (`edumatrix`) and path as before. `.codex/hooks.json`
hardcodes `/home/edumatrix/.local/bin/graphify`, and Claude Code names its memory
folder after the project path, so the restored memory only loads at this path.

```bash
mkdir -p ~/dimas-webdev/repo/cpns
cd ~/dimas-webdev/repo/cpns
git clone https://github.com/edumatrixindonesia/akademi-asn-fe-next.git
cd akademi-asn-fe-next
nvm install        # reads .nvmrc
nvm use
node --version     # v24.x
bun install
```

Now restore `.env`, `docs/private/`, and the Claude Code memory from step 0.

`bun install` also runs the `prepare` script, which sets `core.hooksPath` to
`.githooks` so commitlint checks every commit message. Verify it:

```bash
git config core.hooksPath   # .githooks
```

## 3. region-service

`app/page.tsx`, `/bimbel-cpns`, `/bimbel-pppk`, `/bimbel-bumn`, every location
page, and `sitemap.xml` all read region data from the internal region-service API.
Tryout, Produk, and Blog pages do not call it. Without it, `bun run build` fails
and dependent pages return errors. A warm cache can hide an outage, so a page that
loads is not proof that it does not depend on the service.

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
(the `rate_limit` field in each response shows the current limit; 32 requests per
60 seconds locally and in production as of 2026-10-05). A cold `bun run build`
fetches the region lists once per build worker, so repeated builds can hit it.
Prefer the local service for regular work.

## 4. Environment variables

If you restored `.env` from step 0, check it against the table below and move on.
Otherwise start from the example:

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
| `error: unzip is required to install bun`                      | `sudo apt install -y unzip`, then rerun the bun installer.                                             |
| `nvm: command not found` / `bun: command not found`            | Open a new terminal (or `source ~/.bashrc`) after the installer.                                       |
| Clone fails with `Repository not found` or `403`               | Run `gh auth login`, and check that your account is in the `edumatrixindonesia` organization.          |
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

- **graphify** (AI-agent knowledge graph): the agent hooks in `.claude/` and
  `.codex/` call it, and `graphify-out/` is gitignored. Install it with uv, then
  rebuild the graph:

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh   # then open a new terminal
  uv tool install graphifyy
  graphify update .
  ```
