<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Working rules

- **Always run `bun run lint` then `bun run typecheck`** after changing code.
- **Never install a new dependency without asking first.**

## Conventions

- **Server Components by default.** Add `"use client"` only when a component needs state, effects, or browser APIs — push it to the leaf, not the page.
- **English** for code, comments, commit messages, and identifiers.

## Commands

Package manager is bun (not npm).

```bash
bun install
bun dev        # http://localhost:3000
bun run build
bun run lint
bun run typecheck
```

## Stack gotchas

- Next.js 16.3 App Router (`app/`), React 19.2, TypeScript.
- Tailwind v4 has no `tailwind.config`. Theme tokens and CSS variables live in `app/globals.css`.
- shadcn/ui uses style `radix-vega` and imports primitives from the `radix-ui` package, not `@radix-ui/*`. Add components with `bunx shadcn add <name>`; they land in `components/ui/`.
- `cn` (`lib/utils.ts`) re-exports the `cn` npm package, which replaces clsx and tailwind-merge. Do not add clsx or tailwind-merge.
- Icons: `lucide-react`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
