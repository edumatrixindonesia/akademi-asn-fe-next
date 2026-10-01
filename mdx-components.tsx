import { isValidElement, type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import BacaJuga from "@/components/shared/baca-juga";
import Contoh from "@/components/shared/contoh";
import CtaKonsultasi from "@/components/shared/cta-konsultasi";
import LatihanSoal from "@/components/shared/latihan-soal";
import { headingId } from "@/lib/heading-id";

const textOf = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
};

// Only h2 gets an id (the Daftar isi lists h2 only); the page styles the rest
// of the body through CSS on its wrapper.
const components = {
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 id={headingId(textOf(children))} {...props}>
      {children}
    </h2>
  ),
  a: ({ href = "", ...props }: ComponentProps<"a">) =>
    href.startsWith("/") && !href.startsWith("//") ? <Link href={href} {...props} /> : <a href={href} {...props} />,
  BacaJuga,
  CtaKonsultasi,
  LatihanSoal,
  Contoh,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
