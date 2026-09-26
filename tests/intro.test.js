import { expect, test } from "bun:test";
import { introCpnsLocation, introHomeLocation } from "../data/intro";

const region = (kode, nama, path) => ({ kode, nama, slug: path.split("/").at(-1), path });

const jawaBarat = region("32", "Jawa Barat", "/jawa-barat");
const kotaBandung = {
  region: region("32.73", "Kota Bandung", "/jawa-barat/kota-bandung"),
  ancestors: [jawaBarat],
  children: [],
  siblings: [],
};

const texts = { "32.73": "Kota Bandung adalah ibu kota Jawa Barat." };

test("a region with a hand-written text gets it, followed by the track sentence", () => {
  const intro = introCpnsLocation(kotaBandung, texts);

  expect(intro.title).toBe("Bimbel CPNS di Kota Bandung");
  expect(intro.description).toStartWith("Kota Bandung adalah ibu kota Jawa Barat. Formasi CPNS di Kota Bandung");
});

test("a region without a hand-written text gets the template, followed by the track sentence", () => {
  const intro = introCpnsLocation(kotaBandung, {});

  expect(intro.description).not.toContain("ibu kota");
  expect(intro.description).toContain("Kota Bandung berada di Jawa Barat.");
  expect(intro.description).toContain("Formasi CPNS di Kota Bandung");
});

test("the home intro names all three tracks", () => {
  const intro = introHomeLocation({ region: jawaBarat, ancestors: [], children: [], siblings: [] }, {});

  expect(intro.title).toBe("Bimbel CPNS, PPPK & BUMN di Jawa Barat");
  expect(intro.description).toContain("Jawa Barat berada di Indonesia.");
});
