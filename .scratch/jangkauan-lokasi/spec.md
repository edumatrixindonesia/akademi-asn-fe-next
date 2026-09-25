# Jangkauan section and location pages

Status: needs-triage

## Summary

The reference site's home page ends with a Jangkauan section that links to one page per province (38 in total). This project deferred that section from the home landing page spec (`.scratch/beranda-design-system/spec.md`), because the location pages it links to do not exist yet. Linking to them now would produce 404s.

## Known decisions

- Province names and the region hierarchy come from the owner's own region-service (`REGION_SERVICE_URL`, currently `http://localhost:8085/api/v1`, running in a separate WSL instance), fetched in a Server Component.
- Location pages use the `[...locations]` routes and link as `/<province-slug>`.
- The reference site (bimbelcpnsindonesia.com) is a separate project. Its URLs are not mirrored or redirected.
- Location-specific content, decided 2026-09-25. Location pages and region-service integration are not implemented yet; these functions are written together with the location pages, not before.
  - Keunggulan, CTA Footer, and Paket Program get location variants: `keunggulanLocation(location)`, `ctaFooterLocation(location)`, `paketProgramLocation(location)`. Each spreads the shared static entry and overrides only the text that names the location. They take no exam track; the track keyword comes from the Jumbotron and metadata.
  - `paketProgramLocation` overrides only `offlineTitle` (e.g. "Program Bimbel Privat di <location>"). This claim is true everywhere because Privat Home Visit is available anywhere.
  - Lembaga, Media Massa, and Testimoni stay static on location pages; they are logos or screenshots, and a location in their titles would be false or forced.
  - The `location` string is the deepest region name plus its parent (e.g. "Coblong, Kota Bandung"), because district and village names repeat across regencies. Province pages use the province name only.
  - Location pages under DI Yogyakarta get extra Kelas Offline content (the office address, studying at the Akademi ASN office). This is the only DIY-specific branch. The address is the strongest local signal for queries like "bimbel cpns jogja", alongside Google Business Profile, NAP consistency, and `LocalBusiness` schema.

## Open questions

- What does the region-service response look like, and how are slugs formed?
- What unique, location-specific content does each location page need (per the SEO goal in AGENTS.md)?
- Does the Jangkauan section link to every province, or also to regencies?
