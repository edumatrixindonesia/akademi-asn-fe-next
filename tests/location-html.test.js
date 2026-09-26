import { expect, test } from "bun:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://localhost:3000/";
const get = (path) => fetch(new URL(path, baseUrl));

const pages = [
  { path: "/di-yogyakarta", name: "DI Yogyakarta", keyword: "Bimbel CPNS, PPPK &amp; BUMN" },
  { path: "/bimbel-cpns/jawa-barat/kota-bandung", name: "Kota Bandung, Jawa Barat", keyword: "Bimbel CPNS" },
  { path: "/bimbel-pppk/jawa-barat/kota-bandung/coblong", name: "Coblong, Kota Bandung", keyword: "Bimbel PPPK" },
  { path: "/bimbel-bumn/dki-jakarta/kota-jakarta-pusat/gambir/gambir", name: "Gambir, Gambir", keyword: "Bimbel BUMN" },
];

for (const { path, name, keyword } of pages) {
  test(`${path} renders a location page`, async () => {
    const response = await get(path);
    expect(response.status).toBe(200);

    const html = await response.text();
    const h1s = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)];
    expect(h1s).toHaveLength(1);
    expect(h1s[0][1]).toContain(`${keyword} ${name}`);

    const title = html.match(/<title>(.*?)<\/title>/)[1];
    expect(title).toContain(`${keyword} ${name}`);

    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    expect(new URL(canonical).pathname).toBe(path);
    const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)[1];
    expect(new URL(ogUrl).pathname).toBe(path);
  });
}

test("a regency page that was not prerendered is cached after its first visit", async () => {
  const path = "/bimbel-cpns/jawa-tengah/kota-semarang";
  expect((await get(path)).status).toBe(200);

  const second = await get(path);
  expect(second.status).toBe(200);
  expect(second.headers.get("x-nextjs-cache")).toBe("HIT");
});

test("paths outside the page set return 404", async () => {
  for (const path of ["/aceh/kabupaten-aceh-selatan/bakongan", "/not-a-province"]) {
    expect((await get(path)).status).toBe(404);
  }
});

// The HTML of the <section> (or <nav>) that carries `marker`, or undefined.
const block = (html, marker, tag = "section") => {
  const at = html.indexOf(marker);
  if (at === -1) return undefined;
  const start = html.lastIndexOf(`<${tag}`, at);
  return html.slice(start, html.indexOf(`</${tag}>`, at));
};

const breadcrumbJsonLd = (html) => {
  const match = html.match(/<script type="application\/ld\+json">(\{[^<]*"@type":"BreadcrumbList".*?\})<\/script>/);
  return match && JSON.parse(match[1]);
};

test("a district page links up through the breadcrumb and sideways through Lokasi Lain", async () => {
  const html = await (await get("/jawa-barat/kota-bandung/coblong")).text();

  const breadcrumb = block(html, 'aria-label="breadcrumb"', "nav");
  expect(breadcrumb).toContain('href="/"');
  expect(breadcrumb).toContain('href="/jawa-barat"');
  expect(breadcrumb).toContain('href="/jawa-barat/kota-bandung"');
  expect(html.indexOf('aria-label="breadcrumb"')).toBeLessThan(html.indexOf("<h1"));

  const jsonLd = breadcrumbJsonLd(html);
  expect(jsonLd).not.toBeNull();
  const urls = jsonLd.itemListElement.map((item) => new URL(item.item).pathname);
  expect(urls).toEqual(["/", "/jawa-barat", "/jawa-barat/kota-bandung", "/jawa-barat/kota-bandung/coblong"]);
  expect(jsonLd.itemListElement.map((item) => item.position)).toEqual([1, 2, 3, 4]);

  expect(html).not.toContain('id="jangkauan"');

  const lokasiLain = block(html, 'id="lokasi-lain"');
  expect(lokasiLain).toContain("Lokasi lain di Kota Bandung");
  expect(lokasiLain).toContain('href="/jawa-barat/kota-bandung/sukajadi"');
  expect(lokasiLain).not.toContain('href="/jawa-barat/kota-bandung/coblong"');
});

test("an exam-track location page roots its breadcrumb at the track page", async () => {
  const html = await (await get("/bimbel-cpns/jawa-barat")).text();

  const breadcrumb = block(html, 'aria-label="breadcrumb"', "nav");
  expect(breadcrumb).toContain('href="/bimbel-cpns"');
  const urls = breadcrumbJsonLd(html).itemListElement.map((item) => new URL(item.item).pathname);
  expect(urls).toEqual(["/", "/bimbel-cpns", "/bimbel-cpns/jawa-barat"]);

  expect(block(html, 'id="jangkauan"')).toContain('href="/bimbel-cpns/jawa-barat/kota-bandung"');
  const lokasiLain = block(html, 'id="lokasi-lain"');
  expect(lokasiLain).toContain("Provinsi lain");
  expect(lokasiLain).toContain('href="/bimbel-cpns/di-yogyakarta"');
});

test("landing pages list the provinces in Jangkauan before CTA Footer", async () => {
  for (const [path, prefix] of [["/", ""], ["/bimbel-pppk", "/bimbel-pppk"]]) {
    const html = await (await get(path)).text();
    const jangkauan = block(html, 'id="jangkauan"');
    expect(jangkauan).toContain(`href="${prefix}/di-yogyakarta"`);
    expect([...jangkauan.matchAll(/<a\b/g)]).toHaveLength(38);
    expect(html.indexOf('id="jangkauan"')).toBeLessThan(html.indexOf('id="cta-footer-title"'));
    expect(html).not.toContain('id="lokasi-lain"');
  }
});

test("a location page names the location in the intro and section variants", async () => {
  const html = await (await get("/bimbel-cpns/jawa-barat/kota-bandung")).text();
  const label = "Kota Bandung, Jawa Barat";

  const intro = block(html, 'id="intro"');
  expect(intro).toMatch(/<h2\b[^>]*>Bimbel CPNS di Kota Bandung<\/h2>/);
  expect(intro).toContain("Formasi CPNS di Kota Bandung");
  expect(html.indexOf('id="intro"')).toBeGreaterThan(html.indexOf("<h1"));
  expect(html.indexOf('id="intro"')).toBeLessThan(html.indexOf('id="keunggulan-title"'));

  expect(block(html, 'id="keunggulan-title"')).toContain(label);
  expect(block(html, 'id="paket-program"')).toContain(`Program Bimbel Privat di ${label}`);
  expect(block(html, 'id="cta-footer-title"')).toContain(label);
});

test("only DI Yogyakarta location pages show the Kelas Offline office content", async () => {
  const sleman = await (await get("/di-yogyakarta/kabupaten-sleman")).text();
  const kelasOffline = block(sleman, 'id="kelas-offline"');
  expect(kelasOffline).toContain("<address");
  expect(kelasOffline).toContain("Jalan Monjali No 3");

  const jawaBarat = await (await get("/jawa-barat")).text();
  expect(jawaBarat).not.toContain('id="kelas-offline"');
});
