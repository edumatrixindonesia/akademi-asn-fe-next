import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { bimbelLainnyaCpns, bimbelLainnyaCpnsLocation } from "@/data/bimbel-lainnya";
import type { Region } from "@/lib/location-tree";

const region = (nama: string, nama_singkat: string, path: string): Region => ({
  kode: path,
  nama,
  nama_singkat,
  slug: path.split("/").at(-1) ?? "",
  path,
});

const coblong = {
  region: region("Coblong", "Coblong", "/jawa-barat/kota-bandung/coblong"),
  ancestors: [
    region("Jawa Barat", "Jawa Barat", "/jawa-barat"),
    region("Kota Bandung", "Bandung", "/jawa-barat/kota-bandung"),
  ],
  children: [],
  siblings: [],
};

const links = (props: { items: { title: string; href: string }[] }) =>
  props.items.map(({ title, href }) => [title, href]);

describe("Bimbel Lainnya", () => {
  test("an exam-track page links to the other tracks and Tryout, not itself", () => {
    assert.deepEqual(links(bimbelLainnyaCpns), [
      ["Bimbel PPPK", "/bimbel-pppk"],
      ["Bimbel BUMN", "/bimbel-bumn"],
      ["Tryout CPNS, PPPK & BUMN", "/tryout"],
    ]);
  });

  test("a location page links to the same region in the other page families", () => {
    const props = bimbelLainnyaCpnsLocation(coblong);

    assert.equal(props.title, "Pilihan Bimbel Akademi ASN di Coblong Bandung");
    assert.deepEqual(links(props), [
      ["Bimbel PPPK Coblong Bandung", "/bimbel-pppk/jawa-barat/kota-bandung/coblong"],
      ["Bimbel BUMN Coblong Bandung", "/bimbel-bumn/jawa-barat/kota-bandung/coblong"],
      ["Tryout CPNS, PPPK & BUMN", "/tryout"],
    ]);
  });
});
