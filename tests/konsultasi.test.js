import { expect, test } from "bun:test";
import { getKonsultasiUrl, konsultasiAdmins } from "../data/contact";

test("Konsultasi rotates through four admins by day", () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  process.env.NEXT_PUBLIC_SITE_URL = "https://akademi-asn.test";

  try {
    const expectedNames = ["Asyah", "Nevita", "Putri", "Sari", "Asyah"];

    expectedNames.forEach((name, day) => {
      const url = new URL(getKonsultasiUrl(day * 86_400_000));
      const admin = konsultasiAdmins[day % konsultasiAdmins.length];

      expect(admin.name).toBe(name);
      expect(url.origin + url.pathname).toBe("https://api.whatsapp.com/send");
      expect(url.searchParams.get("phone")).toBe(admin.phone);
      expect(url.searchParams.get("text")).toBe(
        `Halo Kak ${name} https://akademi-asn.test, Saya ingin bertanya tentang Bimbel Akademi ASN. Mohon info selengkapnya...`,
      );
    });
  } finally {
    if (originalSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
    }
  }
});
