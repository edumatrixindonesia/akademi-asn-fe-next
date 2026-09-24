import { expect, test } from "bun:test";

test("home HTML declares Indonesian and absolute canonical and Open Graph URLs", async () => {
  const response = await fetch(process.env.TEST_BASE_URL ?? "http://localhost:3000/");
  expect(response.ok).toBe(true);

  const html = await response.text();
  expect(html).toMatch(/<html\b[^>]*\blang="id"/);
  expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  expect(html).toContain("Keunggulan Bimbel Akademi ASN");
  expect(html).toContain("Program Persiapan Siap Lulus CPNS");
  expect(html).toContain('id="paket-program"');
  expect(html).toContain('id="testimoni"');
  expect(html).toContain("SKD (Seleksi Kompetensi Dasar)");
  for (const score of ["65", "80", "166"]) {
    expect(html).toMatch(new RegExp(`<strong[^>]*>${score}</strong>`));
  }
  expect(html).toContain("3 kali jumlah formasi");
  expect(html.indexOf("Paket Program Akademi ASN")).toBeLessThan(html.indexOf("SKD (Seleksi Kompetensi Dasar)"));
  expect(html.indexOf("SKD (Seleksi Kompetensi Dasar)")).toBeLessThan(html.indexOf("Mengenal Konsep Passing Grade"));
  expect(html.indexOf("Mengenal Konsep Passing Grade")).toBeLessThan(html.indexOf("Kenapa Banyak Peserta Gagal?"));
  expect(html).toContain("Terlalu Fokus pada Satu Sub-Tes");
  expect(html).toContain("Gagal Manajemen Waktu");
  expect(html).toContain('alt="Pria berseragam cokelat menulis pada papan catatan"');
  expect(html).toContain("Konsultasi Pola Soal");
  expect(html).toMatch(/<h2\b[^>]*>Paket Program Akademi ASN<\/h2>/);
  expect(html).toContain("Program Bimbel Offline");
  expect(html).toContain("Program Bimbel Online &amp; Tryout");
  for (const price of ["Rp1.960.000", "Rp2.000.000", "Rp2.793.000", "Rp2.800.000", "Rp5.292.000", "Rp5.300.000"]) {
    expect(html).toContain(price);
  }
  expect([...html.matchAll(/>Tanyakan Kelas<\/a>/g)]).toHaveLength(6);
  expect(html.indexOf("Keunggulan Bimbel Akademi ASN")).toBeLessThan(
    html.indexOf("Program Persiapan Siap Lulus CPNS"),
  );
  expect(html.indexOf("Program Persiapan Siap Lulus CPNS")).toBeLessThan(
    html.indexOf("Program Bimbel Offline"),
  );
  for (const item of [
    "Pengetahuan Umum", "Bahasa Indonesia", "Tes Kemampuan Dasar (TKD)",
    "Tes Bidang Studi", "Teknik Menjawab Soal", "Simulasi Ujian",
    "Psikotes &amp; Wawancara", "Bimbingan &amp; Konsultasi",
  ]) {
    expect(html).toContain(item);
  }
  expect([...html.matchAll(/>Daftarkan Sekarang<\/a>/g)]).toHaveLength(1);
  expect(html).not.toMatch(/\.gif(?:["?])/i);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  expect(canonical).not.toBeNull();
  expect(new URL(canonical[1]).protocol).toMatch(/^https?:$/);

  const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/);
  expect(ogUrl).not.toBeNull();
  expect(new URL(ogUrl[1]).protocol).toMatch(/^https?:$/);

  const whatsappUrls = [...html.matchAll(/<a\b[^>]*href="([^"]*(?:wa\.me|api\.whatsapp\.com)[^"]*)"[^>]*>/g)]
    .map((match) => new URL(match[1].replaceAll("&amp;", "&")));
  expect(whatsappUrls.length).toBeGreaterThanOrEqual(2);
  expect(new Set(whatsappUrls.map((url) => url.searchParams.get("phone"))).size).toBe(1);
  for (const url of whatsappUrls) {
    expect(url.searchParams.get("phone")).toMatch(/^628\d+$/);
    expect(url.searchParams.get("text")).toContain(process.env.NEXT_PUBLIC_SITE_URL);
  }

  const jsonLdMatch = html.match(
    /<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"FAQPage".*?\})<\/script>/,
  );
  expect(jsonLdMatch).not.toBeNull();
  const faqJsonLd = JSON.parse(jsonLdMatch[1]);
  expect(faqJsonLd["@type"]).toBe("FAQPage");
  expect(faqJsonLd.mainEntity.length).toBeGreaterThan(0);
  for (const question of faqJsonLd.mainEntity) {
    expect(html).toContain(question.name);
    expect(question.acceptedAnswer["@type"]).toBe("Answer");
  }
});
