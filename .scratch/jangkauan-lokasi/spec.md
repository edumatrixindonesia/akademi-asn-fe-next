# Jangkauan section and location pages

Status: needs-triage

## Summary

The reference site's home page ends with a Jangkauan section that links to one page per province (38 in total). This project deferred that section from the home landing page spec (`.scratch/beranda-design-system/spec.md`), because the location pages it links to do not exist yet. Linking to them now would produce 404s.

## Known decisions

- Province names and the region hierarchy come from the owner's own region-service (`REGION_SERVICE_URL`, currently `http://localhost:8085/api/v1`, running in a separate WSL instance), fetched in a Server Component.
- Location pages use the `[...locations]` routes and link as `/<province-slug>`.
- The reference site (bimbelcpnsindonesia.com) is a separate project. Its URLs are not mirrored or redirected.

## Open questions

- What does the region-service response look like, and how are slugs formed?
- What unique, location-specific content does each location page need (per the SEO goal in AGENTS.md)?
- Does the Jangkauan section link to every province, or also to regencies?
