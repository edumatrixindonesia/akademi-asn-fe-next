import { expect, test } from "bun:test";
import { buildLocationTree, locationLabel, resolveLocation } from "../lib/location-tree";

const region = (kode, nama, path) => ({ kode, nama, slug: path.split("/").at(-1), path });

// Lists as region-service returns them: kecamatan only for Kabupaten Besar,
// kelurahan only for Jabodetabekjur.
const lists = {
  provinsi: [
    region("11", "Aceh", "/aceh"),
    region("31", "DKI Jakarta", "/dki-jakarta"),
    region("32", "Jawa Barat", "/jawa-barat"),
  ],
  kabupaten: [
    region("11.01", "Kabupaten Aceh Selatan", "/aceh/kabupaten-aceh-selatan"),
    region("31.72", "Kota Jakarta Utara ", "/dki-jakarta/kota-jakarta-utara"),
    region("32.04", "Kabupaten Bandung", "/jawa-barat/kabupaten-bandung"),
    region("32.73", "Kota Bandung", "/jawa-barat/kota-bandung"),
  ],
  kecamatan: [
    region("31.72.03", "Koja", "/dki-jakarta/kota-jakarta-utara/koja"),
    region("32.73.07", "Sukajadi", "/jawa-barat/kota-bandung/sukajadi"),
    region("32.73.21", "Coblong", "/jawa-barat/kota-bandung/coblong"),
    region("32.73.22", "Cidadap", "/jawa-barat/kota-bandung/cidadap"),
  ],
  kelurahan: [
    region("31.72.03.1001", "Tugu Utara", "/dki-jakarta/kota-jakarta-utara/koja/tugu-utara"),
    region("31.72.03.1002", "Lagoa", "/dki-jakarta/kota-jakarta-utara/koja/lagoa"),
  ],
};

const tree = buildLocationTree(lists);
const names = (regions) => regions.map((r) => r.nama);

test("a district resolves with its ancestors, children, and siblings", () => {
  const found = resolveLocation(tree, ["jawa-barat", "kota-bandung", "coblong"]);

  expect(found.region.nama).toBe("Coblong");
  expect(names(found.ancestors)).toEqual(["Jawa Barat", "Kota Bandung"]);
  expect(found.children).toEqual([]);
  expect(names(found.siblings)).toEqual(["Sukajadi", "Cidadap"]);
  expect(locationLabel(found)).toBe("Coblong, Kota Bandung");
});

test("a province resolves with its regencies and the other provinces", () => {
  const found = resolveLocation(tree, ["jawa-barat"]);

  expect(found.ancestors).toEqual([]);
  expect(names(found.children)).toEqual(["Kabupaten Bandung", "Kota Bandung"]);
  expect(names(found.siblings)).toEqual(["Aceh", "DKI Jakarta"]);
  expect(locationLabel(found)).toBe("Jawa Barat");
});

test("a village resolves under Jabodetabekjur and is a leaf", () => {
  const found = resolveLocation(tree, ["dki-jakarta", "kota-jakarta-utara", "koja", "lagoa"]);

  expect(names(found.ancestors)).toEqual(["DKI Jakarta", "Kota Jakarta Utara", "Koja"]);
  expect(found.children).toEqual([]);
  expect(names(found.siblings)).toEqual(["Tugu Utara"]);
});

test("a regency outside Kabupaten Besar is a leaf", () => {
  expect(resolveLocation(tree, ["aceh", "kabupaten-aceh-selatan"]).children).toEqual([]);
});

test("paths outside the page set resolve to nothing", () => {
  expect(resolveLocation(tree, ["aceh", "kabupaten-aceh-selatan", "bakongan"])).toBeUndefined();
  expect(resolveLocation(tree, ["not-a-province"])).toBeUndefined();
  expect(resolveLocation(tree, [])).toBeUndefined();
});

test("trailing whitespace in nama is trimmed", () => {
  const found = resolveLocation(tree, ["dki-jakarta", "kota-jakarta-utara"]);

  expect(found.region.nama).toBe("Kota Jakarta Utara");
  expect(locationLabel(found)).toBe("Kota Jakarta Utara, DKI Jakarta");
});
