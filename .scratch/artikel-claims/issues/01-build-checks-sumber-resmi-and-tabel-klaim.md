# 01: Build checks Sumber Resmi and Tabel Klaim URLs

**What to build:** The build enforces the two source rules it can check mechanically. A published Artikel with no Sumber Resmi in `references` fails the build. The loader reads every Tabel Klaim and passes its raw text, keyed by slug, to `validateArtikel` as a third argument. Wherever a Tabel Klaim exists (published or draft), its `http(s)` URLs and the Artikel's `references` URLs must be the same set by exact string match. A Tabel Klaim with no Artikel entry fails. Nothing is required of Artikel that have no Tabel Klaim yet, so the build stays green today. See the spec: `.scratch/artikel-claims/spec.md`.

**Blocked by:** None (can start immediately)

**Status:** done

- [x] A Sumber Resmi is a reference whose URL hostname ends in `.go.id`, or equals or is a subdomain of `fhcibumn.com` or `danantaraindonesia.co.id`.
- [x] A published Artikel with no Sumber Resmi fails with an error naming its slug. A draft with no Sumber Resmi passes.
- [x] Look-alike hosts (`notfhcibumn.com`, `go.id.example.com`) are not Sumber Resmi.
- [x] `validateArtikel` takes the Tabel Klaim texts keyed by slug. URL extraction and comparison happen inside it, not in the loader.
- [x] A URL in a Tabel Klaim but not in `references` fails, and so does a URL in `references` but not in the Tabel Klaim. Each error names the slug and the URL.
- [x] Comparison is exact: a trailing-slash difference fails.
- [x] A Tabel Klaim whose slug has no Artikel entry fails.
- [x] Tests extend the existing `validateArtikel` tests in their `entry(overrides)` style and cover every case above. Existing calls are updated for the new argument.
- [x] The current six published Artikel still build.
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass.
