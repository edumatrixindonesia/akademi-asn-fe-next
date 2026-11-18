import { expect, test } from "bun:test";
import { introCpnsLocation, introHomeLocation } from "../data/intro";

const region = (kode, nama, path, nama_singkat = nama) => ({
  kode,
  nama,
  nama_singkat,
  slug: path.split("/").at(-1),
  path,
});

const jawaBarat = region("32", "Jawa Barat", "/jawa-barat");
const kotaBandung = {
  region: region("32.73", "Kota Bandung", "/jawa-barat/kota-bandung", "Bandung"),
  ancestors: [jawaBarat],
  children: [],
  siblings: [],
};

const texts = { "32.73": "Kota Bandung adalah ibu kota Jawa Barat." };

test("a region with a hand-written text gets it, followed by the track sentence", () => {
  const intro = introCpnsLocation(kotaBandung, texts);

  expect(intro.title).toBe("Bimbel CPNS di Bandung");
  expect(intro.description).toStartWith("Kota Bandung adalah ibu kota Jawa Barat. Peserta CPNS dari Bandung menghadapi SKD");
});

test("a region without a hand-written text gets the template, followed by the track sentence", () => {
  const intro = introCpnsLocation(kotaBandung, {});

  expect(intro.description).not.toContain("ibu kota");
  expect(intro.description).toContain("Bandung berada di Jawa Barat.");
  expect(intro.description).toContain("Peserta CPNS dari Bandung menghadapi SKD");
});

test("the home intro names all three tracks", () => {
  const intro = introHomeLocation({ region: jawaBarat, ancestors: [], children: [], siblings: [] }, {});

  expect(intro.title).toBe("Bimbel CPNS PPPK BUMN di Jawa Barat");
  expect(intro.description).toContain("Jawa Barat berada di Indonesia.");
});

test("the template names a district parent with its level when it shares the region's name", () => {
  const koja = region("31.72.03", "Koja", "/dki-jakarta/kota-jakarta-utara/koja");
  const intro = introCpnsLocation(
    {
      region: region("31.72.03.1003", "Koja", "/dki-jakarta/kota-jakarta-utara/koja/koja"),
      ancestors: [region("31", "DKI Jakarta", "/dki-jakarta"), region("31.72", "Kota Jakarta Utara", "/dki-jakarta/kota-jakarta-utara"), koja],
      children: [],
      siblings: [],
    },
    {},
  );

  expect(intro.description).toContain("Koja berada di Kecamatan Koja.");
});

test("the template names a parent in full when it shares the region's short name", () => {
  const intro = introCpnsLocation(
    {
      region: region("34.04.08", "Sleman", "/di-yogyakarta/kabupaten-sleman/sleman"),
      ancestors: [
        region("34", "DI Yogyakarta", "/di-yogyakarta"),
        region("34.04", "Kabupaten Sleman", "/di-yogyakarta/kabupaten-sleman", "Sleman"),
      ],
      children: [],
      siblings: [],
    },
    {},
  );

  expect(intro.description).toContain("Sleman berada di Kabupaten Sleman.");
});

test("the template names the parent by its short name", () => {
  const intro = introCpnsLocation(
    {
      region: region("32.73.21", "Coblong", "/jawa-barat/kota-bandung/coblong"),
      ancestors: [jawaBarat, kotaBandung.region],
      children: [],
      siblings: [],
    },
    {},
  );

  expect(intro.description).toContain("Coblong berada di Bandung.");
});
