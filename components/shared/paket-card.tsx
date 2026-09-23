import { Button } from "@/components/ui/button";

export type PaketCardProps = {
  name: string;
  category: string;
  sessions: string;
  price: string;
  originalPrice?: string;
  included: string[];
  ctaLabel: string;
  ctaHref: string;
};

const PaketCard = ({
  name,
  category,
  sessions,
  price,
  originalPrice,
  included,
  ctaLabel,
  ctaHref,
}: PaketCardProps) => (
  <article className="flex h-full flex-col rounded-xl bg-background p-6 text-foreground shadow-sm">
    <p className="text-sm font-medium text-primary">{category}</p>
    <h3 className="mt-1 text-xl font-bold text-primary-dark">{name}</h3>
    <p className="mt-2 text-sm text-foreground/80">{sessions}</p>
    <div className="mt-5">
      {originalPrice && <del className="block text-sm text-foreground/60">{originalPrice}</del>}
      <p className="text-2xl font-bold text-primary-dark">{price}</p>
    </div>
    <ul className="my-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80 marker:text-primary">
      {included.map((item) => <li key={item}>{item}</li>)}
    </ul>
    <Button asChild size="lg" className="mt-auto w-full bg-cta text-cta-foreground hover:bg-cta/90">
      <a href={ctaHref} target="_blank" rel="noopener noreferrer" aria-label={`${ctaLabel}: ${name}`}>
        {ctaLabel}
      </a>
    </Button>
  </article>
);

export default PaketCard;
