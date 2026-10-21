import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { getKonsultasiAdmin } from "@/data/contact";

// Builds a timestamp from a WIB (UTC+7) wall-clock time.
const wib = (day: number, hour: number, minute = 0) =>
  Date.UTC(2026, 9, day, hour - 7, minute);

describe("getKonsultasiAdmin", () => {
  test("switches at 00.00 and 12.00 WIB", () => {
    assert.equal(getKonsultasiAdmin(wib(21, 23, 59)).name, "Ista");
    assert.equal(getKonsultasiAdmin(wib(22, 0)).name, "Nevita");
    assert.equal(getKonsultasiAdmin(wib(22, 11, 59)).name, "Nevita");
    assert.equal(getKonsultasiAdmin(wib(22, 12)).name, "Putri");
  });

  test("skips one admin per day so every admin gets both Giliran", () => {
    const schedule = [22, 23, 24, 25, 26].map((day) =>
      [0, 12].map((hour) => getKonsultasiAdmin(wib(day, hour)).name),
    );

    assert.deepEqual(schedule, [
      ["Nevita", "Putri"],
      ["Asyah", "Nevita"],
      ["Ista", "Asyah"],
      ["Putri", "Ista"],
      ["Nevita", "Putri"],
    ]);
  });
});
