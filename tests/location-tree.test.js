import { expect, test } from "bun:test";
import {
  buildLocationTree,
  headlineLabel,
  locationLabel,
  regionLink,
  resolveLocation,
} from "../lib/location-tree";

const region = (kode, nama, path, nama_singkat = nama) => ({
  kode,
  nama,
  nama_singkat,
  slug: path.split("/").at(-1),
  path,
});

// Lists as region-service returns them: kecamatan only for Kabupaten Besar,
// kelurahan only for Jabodetabekjur.
const lists = {
  provinsi: [
    region("11", "Aceh", "/aceh"),
    region("31", "DKI Jakarta", "/dki-jakarta"),
    region("32", "Jawa Barat", "/jawa-barat"),
  ],
  kabupaten: [
    region("11.01", "Kabupaten Aceh Selatan", "/aceh/kabupaten-aceh-selatan", "Aceh Selatan"),
    region("31.72", "Kota Jakarta Utara", "/dki-jakarta/kota-jakarta-utara", "Jakarta Utara"),
    region("32.04", "Kabupaten Bandung", "/jawa-barat/kabupaten-bandung"),
    region("32.73", "Kota Bandung", "/jawa-barat/kota-bandung", "Bandung"),
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
    region("31.72.03.1003", "Koja", "/dki-jakarta/kota-jakarta-utara/koja/koja"),
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
  expect(locationLabel(found)).toBe("Coblong Bandung");
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
  expect(names(found.siblings)).toEqual(["Tugu Utara", "Koja"]);
  expect(locationLabel(found)).toBe("Lagoa Koja");
});

test("a region whose name ends with its parent's name stands alone", () => {
  const district = resolveLocation(tree, ["dki-jakarta", "kota-jakarta-utara", "koja"]);
  const village = resolveLocation(tree, ["dki-jakarta", "kota-jakarta-utara", "koja", "koja"]);
  const jambi = region("15", "Jambi", "/jambi");
  const kotaBandung = region("32.73", "Kota Bandung", "/jawa-barat/kota-bandung", "Bandung");

  expect(locationLabel(district)).toBe("Koja Jakarta Utara");
  expect(locationLabel(village)).toBe("Koja");
  expect(locationLabel({ region: region("15.71", "Kota Jambi", "/jambi/kota-jambi"), ancestors: [jambi] })).toBe("Kota Jambi");
  expect(
    locationLabel({
      region: region("32.73.01", "Sumur Bandung", "/jawa-barat/kota-bandung/sumur-bandung"),
      ancestors: [region("32", "Jawa Barat", "/jawa-barat"), kotaBandung],
    }),
  ).toBe("Sumur Bandung");
});

test("a regency outside Kabupaten Besar is a leaf", () => {
  expect(resolveLocation(tree, ["aceh", "kabupaten-aceh-selatan"]).children).toEqual([]);
});

test("paths outside the page set resolve to nothing", () => {
  expect(resolveLocation(tree, ["aceh", "kabupaten-aceh-selatan", "bakongan"])).toBeUndefined();
  expect(resolveLocation(tree, ["not-a-province"])).toBeUndefined();
  expect(resolveLocation(tree, [])).toBeUndefined();
});

test("a regency headline stands alone; other labels add the parent's short name", () => {
  const regency = resolveLocation(tree, ["jawa-barat", "kota-bandung"]);
  const district = resolveLocation(tree, ["jawa-barat", "kota-bandung", "coblong"]);

  expect(headlineLabel(regency)).toBe("Bandung");
  expect(locationLabel(regency)).toBe("Bandung Jawa Barat");
  expect(headlineLabel(district)).toBe("Coblong Bandung");
  expect(regionLink("/bimbel-cpns")(regency.region)).toEqual({
    name: "Bandung",
    href: "/bimbel-cpns/jawa-barat/kota-bandung",
  });
});

test("a district named after its regency stands alone", () => {
  const sleman = {
    region: region("34.04.08", "Sleman", "/di-yogyakarta/kabupaten-sleman/sleman"),
    ancestors: [
      region("34", "DI Yogyakarta", "/di-yogyakarta"),
      region("34.04", "Kabupaten Sleman", "/di-yogyakarta/kabupaten-sleman", "Sleman"),
    ],
  };
  expect(locationLabel(sleman)).toBe("Sleman");
});
