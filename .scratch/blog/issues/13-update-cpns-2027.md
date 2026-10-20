# 13: Update the "CPNS 2027" Artikel and the CPNS Update Seleksi block on official announcement

**Parent:** `.scratch/blog/spec.md`

**What to build:** Revise `data/artikel/cpns-2027.mdx` and the CPNS entries in `data/update-seleksi.ts` together whenever KemenPANRB or BKN publishes an official CPNS 2026 or CPNS 2027 announcement: schedule, formasi (kebutuhan ASN decree), requirements, or passing grade. Then set `updatedAt` in `data/artikel.ts` and in `updateSeleksiCpns`.

**Blocked by:** an official announcement on menpan.go.id, bkn.go.id, or sscasn.bkn.go.id

**Status:** ready-for-agent

**Category:** content

## Why

The Artikel targets "cpns 2027" and states the status as of 20 Oktober 2026: registration is expected in early 2027, with no official schedule or formasi yet. Google Trends (Indonesia, 20 Jul–20 Oct 2026) showed "cpns 2027" rising (+1.200%) while "cpns 2026 kapan dibuka" declined. A year-labelled Artikel that goes stale loses ranking and trust. On 2026-10-20 the owner chose to update the Artikel and the `/bimbel-cpns` block at the same time, triggered by an official announcement on menpan.go.id or bkn.go.id.

## What to check and change

- "CPNS 2027 kapan dibuka?" and the Kesimpulan: replace the estimate ("awal 2027") with the official dates.
- "Apakah CPNS 2027 dibuka untuk umum?" and "Berapa formasi CPNS 2027?": add the KepmenPANRB kebutuhan ASN figures. Check whether non-teacher formasi are opened.
- "Apa syarat CPNS 2027?": check whether a new PermenPANRB replaces PermenPANRB 6/2024 (JDIH KemenPANRB and JDIH BPK).
- "Seperti apa tes CPNS 2027?": add the new nilai ambang batas decree. Keep TA 2024 values only as history.
- "Bagaimana status CPNS 2026 jalur umum?": update or remove once the 2026 status is officially settled.
- Teacher figures (464.856 kebutuhan, 242.482 guru PPPK paruh waktu) come from Kemendikdasmen Siaran Pers 858/sipers/A6/IX/2026. Replace them if a newer official figure appears.
- `data/update-seleksi.ts`: the "Status CPNS 2026 Jalur Umum" and "Rencana CPNS 2027" entries must state the same facts as the Artikel.
- Refresh `accessedAt` on every reference re-read; set `updatedAt` to the day of the change.

Research behind the current version: `.scratch/update-seleksi-cpns/research.md` (2026-10-10, re-checked 2026-10-20), plus the sources listed in the Artikel's `references`.
