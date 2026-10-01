import { expect, test } from "bun:test";
import { pageCount, pagePath, pageSlice, pageWindow, parsePage } from "../lib/pagination";

const items = Array.from({ length: 40 }, (_, i) => i + 1);

test("pageCount: one page up to the first-page size, then 12 per page", () => {
  expect(pageCount(0, 6)).toBe(1);
  expect(pageCount(6, 6)).toBe(1);
  expect(pageCount(7, 6)).toBe(2);
  expect(pageCount(18, 6)).toBe(2);
  expect(pageCount(19, 6)).toBe(3);
  expect(pageCount(0, 12)).toBe(1);
  expect(pageCount(12, 12)).toBe(1);
  expect(pageCount(13, 12)).toBe(2);
});

test("pageSlice continues after the first page: offset 6 + (n-2) * 12", () => {
  expect(pageSlice(items, 1, 6)).toEqual(items.slice(0, 6));
  expect(pageSlice(items, 2, 6)).toEqual(items.slice(6, 18));
  expect(pageSlice(items, 3, 6)).toEqual(items.slice(18, 30));
  expect(pageSlice(items, 4, 6)).toEqual(items.slice(30, 40));
  expect(pageSlice(items, 2, 12)).toEqual(items.slice(12, 24));
});

test("parsePage accepts only canonical numbers from 2", () => {
  expect(parsePage("2")).toBe(2);
  expect(parsePage("12")).toBe(12);
  for (const raw of ["1", "0", "02", "-3", "2.5", "abc", "", "2e1"]) {
    expect(parsePage(raw)).toBeUndefined();
  }
});

test("pagePath puts page 1 at the base URL", () => {
  expect(pagePath("/blog", 1)).toBe("/blog");
  expect(pagePath("/blog", 3)).toBe("/blog/page/3");
});

test("pageWindow lists every page when few, else gaps around the current page", () => {
  expect(pageWindow(1, 1)).toEqual([1]);
  expect(pageWindow(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(pageWindow(1, 20)).toEqual([1, 2, null, 20]);
  expect(pageWindow(10, 20)).toEqual([1, null, 9, 10, 11, null, 20]);
  expect(pageWindow(4, 8)).toEqual([1, 2, 3, 4, 5, null, 8]);
  expect(pageWindow(20, 20)).toEqual([1, null, 19, 20]);
});
