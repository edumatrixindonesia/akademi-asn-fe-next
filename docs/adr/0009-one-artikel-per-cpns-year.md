# 9. One Artikel per CPNS recruitment year

Date: 2026-11-26

## Status

Accepted.

## Context

The Blog has two CPNS Artikel that look alike: `cpns-2027` (published 2026-10-20, `focusKeyword` "cpns 2027") and `cpns-2026` (published 2026-11-16, `focusKeyword` "cpns 2026"). Both cite the same KemenPANRB press release and both carry a syarat list, a tes section, and a hoaks section. The owner proposed deleting `cpns-2027` because its content seemed to repeat `cpns-2026`.

Search Console data for the 28 days to 2026-11-23 showed no cannibalization. Every query that reached `cpns-2027` asked about 2027 (`cpns 2027`, `pendaftaran cpns 2027`, `bulan berapa cpns 2027 dibuka`, …); no "cpns 2026" query landed on it. `cpns-2027` had 16 impressions at an average position of 34.6. `cpns-2026` had none yet.

## Decision

- Each CPNS recruitment year gets its own Artikel, and it owns that year as its `focusKeyword`. `cpns-2026` and `cpns-2027` both stay.
- An Artikel covers its own year. It may summarise another year in a short section and links to that year's Artikel with `<BacaJuga>`, without repeating its detail.
- Sections that both years share, such as the syarat umum from PermenPANRB 6/2024, use the same wording and the same list in both Artikel.
- No year Artikel is deleted or redirected while its year is still searched.

## Considered options

- **Delete `cpns-2027` and redirect it to `cpns-2026`**: rejected. It drops the only page targeting "cpns 2027", a search that grows through 2027, and throws away the older page's indexing.
- **Delete `cpns-2026` and redirect it to `cpns-2027`**: rejected. It drops the "cpns 2026" target while that recruitment has not opened yet.
- **One evergreen "CPNS" Artikel updated every year**: not chosen. Both year slugs were already published and indexed, and a year in the keyword matches how people search.

## Consequences

- The two Artikel are revised together whenever an official CPNS announcement lands (`.scratch/blog/issues/13-update-cpns-2027.md`).
- Search Console data for both URLs is checked again around 2026-12-24. If a year's queries start landing on the other year's Artikel, trim the overlapping section rather than deleting either Artikel.
- Deleting a year Artikel later means a 301 redirect and losing its keyword target, so it needs a new decision that replaces this one.
