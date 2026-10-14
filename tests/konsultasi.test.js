import { expect, setSystemTime, test } from "bun:test";
import { GET } from "../app/konsultasi/route";
import {
  getKonsultasiAdmin,
  getKonsultasiUrl,
  getKonsultasiWhatsappUrl,
  konsultasiPage,
  pageKonsultasiUrl,
} from "../data/contact";
import { siteUrl } from "../lib/site-url";

// WIB is UTC+7.
const wib = (day, hour, minute = 0) =>
  Date.UTC(2026, 9, day, hour - 7, minute);

test("Giliran Konsultasi start at 08.00, 13.00, and 17.00 WIB and carry over across days", () => {
  const cases = [
    [wib(15, 8), "Asyah"],
    [wib(15, 12, 59), "Asyah"],
    [wib(15, 13), "Nevita"],
    [wib(15, 16, 59), "Nevita"],
    [wib(15, 17), "Putri"],
    [wib(15, 23, 59), "Putri"],
    [wib(16, 0), "Putri"],
    [wib(16, 7, 59), "Putri"],
    [wib(16, 8), "Ista"],
    [wib(16, 13), "Asyah"],
    [wib(16, 17), "Nevita"],
    [wib(17, 8), "Putri"],
    [wib(17, 13), "Ista"],
    [wib(17, 17), "Asyah"],
    // Before the anchor, the order runs backwards from Asyah.
    [wib(15, 7, 59), "Ista"],
    [wib(14, 13), "Putri"],
  ];

  for (const [now, name] of cases) {
    expect([new Date(now).toISOString(), getKonsultasiAdmin(now).name]).toEqual(
      [new Date(now).toISOString(), name],
    );
  }
});

test("Konsultasi links point to the internal redirect route", () => {
  expect(getKonsultasiUrl()).toBe("/konsultasi?topik=Bimbel+Akademi+ASN");
  expect(getKonsultasiUrl('artikel "Passing Grade SKD"')).toBe(
    "/konsultasi?topik=artikel+%22Passing+Grade+SKD%22",
  );
});

test("Topik Konsultasi puts the offer before the page and the location last", () => {
  const topik = (url) => new URLSearchParams(url.split("?")[1]).get("topik");

  expect(topik(pageKonsultasiUrl(konsultasiPage.cpns)())).toBe(
    "Bimbel CPNS Akademi ASN",
  );
  expect(
    topik(
      pageKonsultasiUrl(konsultasiPage.cpns, "Coblong, Kota Bandung")(
        "Program Optima",
      ),
    ),
  ).toBe("Program Optima Bimbel CPNS Akademi ASN wilayah Coblong, Kota Bandung");
});

test(
  "WhatsApp URL greets the admin on duty and names the topic",
  () => {
    const url = new URL(getKonsultasiWhatsappUrl("Tryout CPNS", wib(15, 13)));

    expect(url.origin + url.pathname).toBe("https://api.whatsapp.com/send");
    expect(url.searchParams.get("phone")).toBe("6285815095359");
    expect(url.searchParams.get("text")).toBe(
      `Halo Kak Nevita ${siteUrl}, Saya ingin bertanya tentang Tryout CPNS. Mohon info selengkapnya...`,
    );
  },
);

test(
  "/konsultasi redirects to WhatsApp without caching",
  () => {
    setSystemTime(new Date(wib(16, 17)));
    try {
      const response = GET(
        new Request("https://akademi-asn.test/konsultasi?topik=Tryout+PPPK"),
      );
      const location = new URL(response.headers.get("location"));

      expect(response.status).toBe(302);
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(location.hostname).toBe("api.whatsapp.com");
      expect(location.searchParams.get("phone")).toBe("6285815095359");
      expect(location.searchParams.get("text")).toContain(
        "Halo Kak Nevita",
      );
      expect(location.searchParams.get("text")).toContain(
        "tentang Tryout PPPK.",
      );
    } finally {
      setSystemTime();
    }

    // An emoji on the 200-character cut is dropped whole, not split.
    const longTopic = `${"a".repeat(199)}😀`;
    expect(
      GET(
        new Request(
          `https://akademi-asn.test/konsultasi?topik=${encodeURIComponent(longTopic)}`,
        ),
      ).status,
    ).toBe(302);

    const fallback = new URL(
      GET(new Request("https://akademi-asn.test/konsultasi")).headers.get(
        "location",
      ),
    );
    expect(fallback.searchParams.get("text")).toContain(
      "tentang Bimbel Akademi ASN.",
    );
  },
);
