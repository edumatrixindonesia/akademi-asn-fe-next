import Image from "next/image";
import { Button } from "@/components/ui/button";

export type MateriProps = {
  title: string;
  description: string;
  listTitle: string;
  items: string[];
  illustration: string;
  illustrationAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

const Materi = ({
  title,
  description,
  listTitle,
  items,
  illustration,
  illustrationAlt,
  ctaLabel,
  ctaHref,
}: MateriProps) => (
  <section aria-labelledby="materi-title">
    <div className="container-section">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="materi-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
          {title}
        </h2>
        <p className="mt-4 leading-relaxed text-foreground/80">{description}</p>
      </div>
      <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-primary-dark">{listTitle}</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="rounded-lg bg-muted px-4 py-3 font-medium">
                {item}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 bg-cta px-6 text-cta-foreground hover:bg-cta/90">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
            </a>
          </Button>
        </div>
        <Image
          src={illustration}
          alt={illustrationAlt}
          width={672}
          height={837}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="mx-auto h-auto w-full max-w-md"
        />
      </div>
    </div>
  </section>
);

export default Materi;
