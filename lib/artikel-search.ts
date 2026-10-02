import type { Artikel } from "@/lib/artikel-schema";

// Case-insensitive substring match on title, excerpt, and focus keyword.
export const artikelMatches = (
  entry: Pick<Artikel, "title" | "excerpt" | "focusKeyword">,
  query: string,
) => {
  const needle = query.trim().toLowerCase();
  if (!needle) return false;

  return [entry.title, entry.excerpt, entry.focusKeyword].some((field) =>
    field.toLowerCase().includes(needle),
  );
};
