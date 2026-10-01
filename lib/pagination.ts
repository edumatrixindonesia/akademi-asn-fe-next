// Pages after the first hold `pageSize` items; the first page may be smaller
// (the `/blog` index shows 6 Artikel Terbaru before the 12-card pages).
export const pageSize = 12;
export const blogFirstPageSize = 6;

export const pageCount = (total: number, firstPageSize: number) =>
  total <= firstPageSize ? 1 : 1 + Math.ceil((total - firstPageSize) / pageSize);

export const pageSlice = <T>(items: T[], page: number, firstPageSize: number): T[] => {
  if (page === 1) return items.slice(0, firstPageSize);
  const start = firstPageSize + (page - 2) * pageSize;
  return items.slice(start, start + pageSize);
};

// Route segments after `/page/`: only canonical numbers from 2 ("1" has its
// own redirect, "02" is not a real URL).
export const parsePage = (raw: string): number | undefined =>
  /^[1-9]\d*$/.test(raw) && Number(raw) >= 2 && Number.isSafeInteger(Number(raw))
    ? Number(raw)
    : undefined;

export const pagePath = (basePath: string, page: number) =>
  page === 1 ? basePath : `${basePath}/page/${page}`;

export const pageSuffix = (page: number) => (page > 1 ? ` – Halaman ${page}` : "");

// Page numbers to link: all when few, otherwise first, last, and the current
// page with its neighbours; `null` marks a gap.
export const pageWindow = (current: number, total: number): (number | null)[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const shown = [...new Set([1, total, current - 1, current, current + 1])]
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b);

  // A gap hiding a single page is no shorter than its link, so list that page.
  return shown.flatMap((page, i) => {
    const gap = i > 0 ? page - shown[i - 1] : 1;
    return gap === 2 ? [page - 1, page] : gap > 2 ? [null, page] : [page];
  });
};
