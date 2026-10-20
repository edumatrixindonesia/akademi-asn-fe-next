import Link from "next/link";
import { headingId } from "@/lib/heading-id";
import { dated, getArtikel } from "@/lib/artikel";

export type UpdateSeleksiProps = {
  title: string;
  description: string;
  updatedAt: string;
  updates: {
    title: string;
    description: string;
    sourceLabel: string;
    sourceHref: string;
    // Slug of the Artikel linked as "Baca: <title>".
    artikel?: string;
  }[];
};

// Fails the build on an unknown slug, and on a draft in production (drafts
// are hidden from getArtikel there).
const linkedArtikel = (slug: string) => {
  const entry = getArtikel(slug);
  if (!entry)
    throw new Error(
      `UpdateSeleksi artikel "${slug}" points to an unknown or draft Artikel.`,
    );
  return entry;
};

const UpdateSeleksi = ({
  title,
  description,
  updatedAt,
  updates,
}: UpdateSeleksiProps) => {
  const titleId = headingId(title);
  const updated = dated(updatedAt);
  return (
    <section aria-labelledby={titleId}>
      <div className="container-section">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id={titleId}
            className="text-2xl font-bold text-primary-dark md:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/80">
            {description}
          </p>
          {updated && (
            <p className="mt-3 text-sm text-foreground/70">
              Diperbarui <time dateTime={updated.iso}>{updated.label}</time>
            </p>
          )}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update) => {
            const artikel = update.artikel && linkedArtikel(update.artikel);
            return (
              <article
                key={update.title}
                className="flex flex-col rounded-xl bg-muted p-6"
              >
                <h3 className="text-lg font-semibold text-primary-dark">
                  {update.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-foreground/80">
                  {update.description}
                </p>
                <p className="mt-4 text-sm text-foreground/70">
                  <a
                    href={update.sourceHref}
                    className="underline underline-offset-4 hover:text-primary-dark"
                  >
                    Sumber: {update.sourceLabel}
                  </a>
                </p>
                {artikel && (
                  <p className="mt-2 text-sm text-foreground/70">
                    <Link
                      href={`/blog/${artikel.slug}`}
                      className="underline underline-offset-4 hover:text-primary-dark"
                    >
                      Baca: {artikel.title}
                    </Link>
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdateSeleksi;
