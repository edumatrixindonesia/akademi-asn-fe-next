import { Button } from "@/components/ui/button";

export type MateriProps = {
  title: string;
  description: string;
  listTitle: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
};

const Materi = ({
  title,
  description,
  listTitle,
  items,
  ctaLabel,
  ctaHref,
}: MateriProps) => (
  <section aria-labelledby="materi-title">
    <div className="container-section">
      <div className="mx-auto bg-primary rounded-2xl px-6 py-6 md:px-7 text-primary-foreground">
        <h2 id="materi-title" className="text-2xl md:text-3xl font-bold">
          {title}
        </h2>

        <p className="mt-4 leading-relaxed">{description}</p>
      </div>

      <div className="mt-8 bg-primary rounded-2xl px-6 py-6 md:px-7">
        <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground">
          {listTitle}
        </h3>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-lg bg-muted px-3 py-2 text-sm font-medium text-primary-dark"
            >
              {item}
            </li>
          ))}
        </ul>

        <Button
          asChild
          size="lg"
          className="mt-8 bg-cta px-6 text-white hover:bg-cta/90 w-full"
        >
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Materi;
