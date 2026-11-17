import { expect, test } from "bun:test";
import { getLatestArtikel } from "../lib/artikel";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000/").replace(/\/+$/, "");

// Plain text, not attributes: `bun dev` sends a 404 page as an error shell
// whose content lives only in the RSC payload.
const navbar = "Menu utama";
const siteFooter = "footer-exam-tracks";
// Rendered HTML only: every page's RSC payload carries the root not-found,
// Navbar included, as a fallback.
const renderedNavbar = 'aria-label="Menu utama"';
const renderedSiteFooter = 'id="footer-exam-tracks"';

const html = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  return { status: response.status, html: (await response.text()).replaceAll("<!-- -->", "") };
};

test("site pages and the 404 page keep the Navbar and Footer", async () => {
  for (const [path, status] of [
    ["/", 200],
    ["/bukan-halaman-yang-ada", 404],
    ["/blog/bukan-artikel-yang-ada", 404],
  ]) {
    const page = await html(path);
    expect(page.status).toBe(status);
    expect(page.html).toContain(navbar);
    expect(page.html).toContain(siteFooter);
  }
});

test("Link Bio stands alone, has one h1, and stays out of search results", async () => {
  const page = await html("/links");
  expect(page.status).toBe(200);
  expect([...page.html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(page.html).toContain('<meta name="robots" content="noindex, follow"/>');
  expect(page.html).not.toContain(renderedNavbar);
  expect(page.html).not.toContain(renderedSiteFooter);
});

test("Link Bio sends visitors to Konsultasi with an Instagram Topik Konsultasi", async () => {
  const { html: page } = await html("/links");
  expect(page).toContain("Chat Admin Konsultasi");
  expect(page).toContain('href="/konsultasi?topik=Bimbel+Akademi+ASN+dari+Instagram"');
});

test("Link Bio links every exam-track landing page from Informasi Program", async () => {
  const { html: page } = await html("/links");
  expect(page).toContain("Informasi Program");
  for (const [label, href] of [
    ["Bimbel CPNS", "/bimbel-cpns"],
    ["Bimbel PPPK", "/bimbel-pppk"],
    ["Bimbel BUMN", "/bimbel-bumn"],
  ]) {
    expect(page).toMatch(new RegExp(`<a[^>]*href="${href}"[^>]*>[\\s\\S]*?${label}[\\s\\S]*?</a>`));
  }
});

test("Link Bio lists the 3 newest Artikel and links the Blog", async () => {
  const { html: page } = await html("/links");
  const block = page.slice(page.indexOf('id="link-bio-artikel-title"'));
  const newest = getLatestArtikel(3);
  expect(newest.length).toBeGreaterThan(0);
  for (const { slug } of newest) expect(block).toContain(`href="/blog/${slug}"`);
  expect([...block.matchAll(/href="\/blog\/[^"/]+"/g)]).toHaveLength(newest.length);
  expect(block).toMatch(/<a[^>]*href="\/blog"[^>]*>Lihat semua artikel/);
});

test("Link Bio is not in the sitemap", async () => {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  expect(response.status).toBe(200);
  expect(await response.text()).not.toContain("/links<");
});

test("Link Bio header names Akademi ASN and links its socials and the website", async () => {
  const { html: page } = await html("/links");
  expect(page).toMatch(/<h1\b[^>]*>Akademi ASN/);
  for (const href of [
    "https://www.instagram.com/akademiasnofficial",
    "https://www.tiktok.com/@akademi.asn",
    "https://www.youtube.com/@edumatrixindonesia",
  ]) {
    expect(page).toContain(`href="${href}"`);
  }
  expect(page).toMatch(/<a[^>]*href="\/"[^>]*>[\s\S]*?Website<\/span><\/a>/);
});
