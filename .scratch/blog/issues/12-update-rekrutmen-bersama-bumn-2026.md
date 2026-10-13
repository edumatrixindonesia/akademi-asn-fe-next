# 12: Update the "Rekrutmen Bersama BUMN 2026" Artikel when RBB 2026 is announced

**Parent:** `.scratch/blog/spec.md`

**What to build:** Revise `data/artikel/rekrutmen-bersama-bumn-2026.mdx` as soon as FHCI or BP BUMN publishes an official RBB 2026 announcement (opening, postponement, or cancellation), then set `updatedAt` in `data/artikel.ts`.

**Blocked by:** an official RBB 2026 announcement on fhcibumn.com, Instagram @fhci.bumn, or bumn.go.id

**Status:** ready-for-agent

**Category:** content

## Why

The Artikel targets "rekrutmen bersama bumn 2026" and states the status "as of 13 Oktober 2026" (not announced). A year-labelled Artikel that goes stale loses ranking and trust. The owner chose to update it on announcement (2026-10-13).

## What to check and change

- The "Apakah Rekrutmen Bersama BUMN 2026 sudah dibuka?" section and the Kesimpulan: replace the dated status with the official one.
- The organiser: whether BP BUMN, Danantara, or FHCI runs RBB 2026.
- The new portal URL. Never link any `*.fhcibumn.id` URL unless RDAP shows FHCI control again.
- RBB 2026 schedule, formasi, tests, and passing grades: add them from Tier A sources only (FHCI channels, bumn.go.id, regulations). News stays discovery only.
- Whether the bumn.go.id Karir BUMN "Lihat Detail" link still points to the parked portal; drop that sentence if it changed.
- Re-run the RDAP check for fhcibumn.id.
- Refresh `accessedAt` on every reference re-read; set `updatedAt` to the day of the change.

Research behind the current version: `.scratch/update-seleksi-bumn/research.md`.
