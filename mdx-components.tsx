import type { MDXComponents } from "mdx/types";

// The Artikel page styles the body through CSS on its wrapper; the approved
// MDX components are added here as they are built.
const components = {} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
