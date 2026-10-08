import { Button } from "@/components/ui/button";

export type KebijakanPengembalianProps = {
  title: string;
  description: string;
  sections: {
    heading: string;
    paragraphs: string[];
    items?: string[];
    link?: { label: string; href: string };
  }[];
};

const KebijakanPengembalian = ({
  title,
  description,
  sections,
}: KebijakanPengembalianProps) => (
  <section
    aria-labelledby="kebijakan-pengembalian-title"
    className="container-section max-w-3xl pb-16"
  >
    <h1
      id="kebijakan-pengembalian-title"
      className="text-3xl font-bold text-primary-dark md:text-4xl"
    >
      {title}
    </h1>

    <p className="mt-4 text-foreground/80">{description}</p>

    {sections.map(({ heading, paragraphs, items, link }) => (
      <div key={heading} className="mt-10 space-y-4">
        <h2 className="text-xl font-bold text-primary-dark md:text-2xl">
          {heading}
        </h2>

        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-foreground/90">
            {paragraph}
          </p>
        ))}

        {items && (
          <ol className="list-decimal space-y-2 ps-6 text-foreground/90">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        )}

        {link && (
          <Button asChild size="lg" className="bg-cta text-white hover:bg-cta/90">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </Button>
        )}
      </div>
    ))}
  </section>
);

export default KebijakanPengembalian;
