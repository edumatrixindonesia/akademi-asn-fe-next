import { expect, test } from "bun:test";

test("home HTML declares Indonesian and an absolute canonical URL", async () => {
  const response = await fetch(process.env.TEST_BASE_URL ?? "http://localhost:3000/");
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect(html).toMatch(/<html\b[^>]*\blang="id"/);
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toContain("Keunggulan Bimbel Akademi ASN");
  expect(html).toContain("Program Persiapan Siap Lulus CPNS");
  expect(html.indexOf("Keunggulan Bimbel Akademi ASN")).toBeLessThan(
    html.indexOf("Program Persiapan Siap Lulus CPNS"),
  );
  for (const item of [
    "Pengetahuan Umum", "Bahasa Indonesia", "Tes Kemampuan Dasar (TKD)",
    "Tes Bidang Studi", "Teknik Menjawab Soal", "Simulasi Ujian",
    "Psikotes &amp; Wawancara", "Bimbingan &amp; Konsultasi",
  ]) {
    expect(html).toContain(item);
  }
  expect(html).toContain('alt="Perempuan berbaju batik biru memegang dan menunjuk laptop"');
  expect([...html.matchAll(/>Daftarkan Sekarang<\/a>/g)]).toHaveLength(2);
  expect(html).not.toMatch(/\.gif(?:["?])/i);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  expect(canonical).not.toBeNull();
  expect(new URL(canonical[1]).protocol).toMatch(/^https?:$/);

  const whatsappUrls = [...html.matchAll(/<a\b[^>]*href="([^"]*(?:wa\.me|api\.whatsapp\.com)[^"]*)"[^>]*>/g)]
    .map((match) => new URL(match[1].replaceAll("&amp;", "&")));
  expect(whatsappUrls.length).toBeGreaterThanOrEqual(2);
  expect(new Set(whatsappUrls.map((url) => url.searchParams.get("phone"))).size).toBe(1);
  for (const url of whatsappUrls) {
    expect(url.searchParams.get("phone")).toMatch(/^628\d+$/);
    expect(url.searchParams.get("text")).toContain(process.env.NEXT_PUBLIC_SITE_URL);
  }
});
