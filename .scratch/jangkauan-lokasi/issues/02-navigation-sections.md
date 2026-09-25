# 02: Breadcrumb, Jangkauan, and Lokasi Lain

**Parent:** `.scratch/jangkauan-lokasi/spec.md`

**What to build:** A visitor or crawler can move through the location tree in every direction: up through a breadcrumb, down through Jangkauan, and sideways through Lokasi Lain. The home and exam-track pages gain a Jangkauan section listing the 38 provinces, which is the entry point into each family's location pages.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] A breadcrumb renders at the top of every location page, above the Jumbotron (e.g. Home › Jawa Barat › Kota Bandung); on exam-track location pages the second crumb is that track's page (Home › Bimbel CPNS › Jawa Barat › …)
- [ ] The breadcrumb emits valid `BreadcrumbList` JSON-LD with absolute URLs that match the visible crumbs
- [ ] Jangkauan links to the location pages one level below the current page, within the same family: the 38 provinces on `/`, `/bimbel-cpns`, `/bimbel-pppk`, and `/bimbel-bumn`; the region's children in the page set on a location page
- [ ] Jangkauan is absent on pages with no children in the page set (e.g. `/aceh/kabupaten-aceh-selatan`, `/jawa-barat/kota-bandung/coblong`, any village page)
- [ ] Lokasi Lain lists every other region under the same parent, within the same family, uncapped, on every location page
- [ ] The Lokasi Lain heading names the parent ("Lokasi lain di Kota Bandung"), or reads "Provinsi lain" on a province page
- [ ] Section order on a location page: breadcrumb, Jumbotron, (intro slot from 03), existing sections in their current order, Jangkauan, Lokasi Lain, CTA Footer; non-location landing pages show Jangkauan just before CTA Footer
- [ ] All three are Server Components with plain `<a>`/`next/link` links in the initial HTML; section headings keep one `h1` per page
- [ ] Section props describe content (`title`, `items`), and their data follows the `data/` pattern in `AGENTS.md`
- [ ] The HTML test harness asserts on a district page in a Kabupaten Besar that is not in Jabodetabekjur (e.g. `/jawa-barat/kota-bandung/coblong`): breadcrumb links to `/jawa-barat/kota-bandung` and `/jawa-barat`, `BreadcrumbList` JSON-LD is present, no Jangkauan, Lokasi Lain lists a sibling district; and on `/`: Jangkauan links to `/di-yogyakarta`
- [ ] `bun run lint`, `bun run typecheck`, and `bun test` pass
