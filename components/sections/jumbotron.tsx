import Image from "next/image";
import { Button } from "@/components/ui/button";

export type JumbotronProps = {
  title: string;
  description: string;
  backgroundImage: string;
  heroImage: string;
  heroImageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

const Jumbotron = ({
  title,
  description,
  backgroundImage,
  heroImage,
  heroImageAlt,
  ctaLabel,
  ctaHref,
}: JumbotronProps) => (
  <section className="relative isolate overflow-hidden bg-linear-to-r from-primary-dark to-primary text-primary-foreground">
    <Image
      src={backgroundImage}
      alt=""
      fill
      sizes="100vw"
      className="pointer-events-none -z-10 object-cover object-bottom opacity-30"
    />
    <div className="container-section grid items-center gap-8 md:grid-cols-2">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="text-lg leading-relaxed">{description}</p>
        <Button asChild size="lg" className="bg-cta px-6 text-cta-foreground hover:bg-cta/90">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
        </Button>
      </div>
      <Image
        src={heroImage}
        alt={heroImageAlt}
        width={692}
        height={609}
        sizes="(max-width: 768px) 100vw, 50vw"
        preload
        className="h-auto w-full"
      />
    </div>
  </section>
);

export default Jumbotron;
