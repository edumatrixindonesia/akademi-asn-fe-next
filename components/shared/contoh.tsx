import type { ReactNode } from "react";

// whitespace-pre-line keeps the author's line breaks and drops the MDX
// indentation.
const Contoh = ({ title, children }: { title: string; children: ReactNode }) => (
  <figure className="rounded-xl border border-dashed bg-muted p-4">
    <figcaption className="text-sm font-semibold uppercase text-primary-dark">
      Contoh: {title}
    </figcaption>
    <div className="mt-2 whitespace-pre-line">{children}</div>
  </figure>
);

export default Contoh;
