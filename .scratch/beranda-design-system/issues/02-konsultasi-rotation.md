# 02: Konsultasi rotation across four CS admins

**Parent:** `.scratch/beranda-design-system/spec.md`

**What to build:** Every Konsultasi link opens WhatsApp with one of four admins (Asyah, Nevita, Putri, Sari). The admin rotates in turn every hour, and all links on a page point to the same admin. The Navbar and Footer already use it.

**Blocked by:** 01 (Brand foundation and live home route)

**Status:** done

- [x] A contact data module holds the four admins and their phone numbers as static data
- [x] `getKonsultasiUrl(now?)` picks the admin by `Math.floor(now / 3_600_000) % 4` and returns an `api.whatsapp.com/send` URL with the phone number and the URL-encoded message `Halo Kak <name> <SITE_URL>, Saya ingin bertanya tentang Bimbel Akademi ASN. Mohon info selengkapnya...`
- [x] A seam 2 unit test shows that four consecutive hours give the four admins in turn, the fifth hour wraps back to the first, and each URL contains the right phone number, name, and site URL
- [x] The Navbar and Footer data become functions of the Konsultasi URL; the layout calls `getKonsultasiUrl()` once and passes the result in
- [x] No WhatsApp number is hardcoded outside the contact module
- [x] The seam 1 test asserts that every WhatsApp link on `/` uses the same phone number and that its message contains the site URL
- [x] `bun run lint`, `bun run typecheck`, and `bun test` pass
