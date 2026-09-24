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
  <section className="relative isolate overflow-hidden text-primary-foreground text-shadow-sm">
    <Image
      src={backgroundImage}
      alt=""
      fill
      sizes="100vw"
      // The background is the LCP element on mobile, so skip lazy loading.
      loading="eager"
      fetchPriority="high"
      className="pointer-events-none -z-10 object-cover object-bottom bg-linear-to-r from-primary-dark to-primary"
    />

    <div className="container-section grid items-center gap-8 md:gap-12 xl:gap-18 md:grid-cols-2">
      <div className="order-1 md:order-2 space-y-6 text-left">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>

        <p className="text-md md:text-lg leading-relaxed">{description}</p>

        <Button
          asChild
          size="lg"
          className="bg-cta text-md md:text-lg text-shadow-none px-6 hover:bg-cta/90 text-white"
        >
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
        className="order-2 md:order-1 h-auto w-full max-w-md mx-auto"
      />
    </div>
  </section>
);

export default Jumbotron;
