# 1. Location pages go deeper only in Kabupaten Besar and Jabodetabekjur

Date: 2026-09-25

## Status

Accepted

## Context

Location pages capture local searches such as "bimbel cpns <city>", and ranking #1 for those queries is the project's top priority. Region-service covers four levels: 38 provinces, 514 regencies/cities, 7,285 districts, and 83,762 villages. Every region gets a page in each of the four page families (home, CPNS, PPPK, BUMN), so full depth would mean about 366,000 pages.

`AGENTS.md` requires unique, location-specific content on every location page. At full depth that cannot be met: nearly all pages would be name-swapped templates, which Google treats as thin or doorway pages. That weakens the whole domain, including the pages that matter. Stopping at regencies avoids this but loses district and village searches in the markets where they have real volume.

## Decision

Location pages exist for every province and every regency/city. Districts get pages only in Kabupaten Besar (the region-service group `kabupaten-besar`, 34 regencies/cities, 589 districts). Villages get pages only in Jabodetabekjur (the group `jabodetabekjur`, 15 regencies/cities, 1,868 villages), which is a subset of Kabupaten Besar. Every other path returns 404, even when region-service knows the region.

That is about 3,009 pages per family and about 12,000 in total.

## Consequences

- Page depth varies by region. Whether a page is a leaf (and so shows no Jangkauan) depends on its group membership, not only on its level.
- The owner controls depth through region-service group membership. Adding a regency to `kabupaten-besar` adds its district pages on the next build, with no code change.
- District and village searches outside these groups are not targeted. Revisit if indexed Kabupaten Besar and Jabodetabekjur pages show traction.
- Hand-written intros cover the 72 regions that carry most search volume (38 provinces, 34 Kabupaten Besar). The rest rely on templates plus Jangkauan, Lokasi Lain, and breadcrumb links.
