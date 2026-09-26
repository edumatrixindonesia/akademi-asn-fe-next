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
