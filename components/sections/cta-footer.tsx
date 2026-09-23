import Image from "next/image";
import { Button } from "@/components/ui/button";

export type CtaFooterProps = {
  title: string;
  description: string;
  backgroundImage: string;
  ctaImage: string;
  ctaImageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

const CtaFooter = ({
  title,
  description,
  backgroundImage,
  ctaImage,
  ctaImageAlt,
  ctaLabel,
  ctaHref,
}: CtaFooterProps) => (
  <section aria-labelledby="cta-footer-title" className="relative isolate overflow-hidden bg-primary-dark text-primary-foreground">
    <Image src={backgroundImage} alt="" fill sizes="100vw" className="pointer-events-none -z-10 object-cover opacity-25" />
    <div className="container-section grid items-center gap-8 md:grid-cols-2">
      <Image
        src={ctaImage}
        alt={ctaImageAlt}
        width={1264}
        height={848}
        loading="lazy"
        className="mx-auto h-auto w-full max-w-md"
      />
      <div className="space-y-6 text-center md:text-left">
        <h2 id="cta-footer-title" className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-lg leading-relaxed">{description}</p>
        <Button asChild size="lg" className="bg-cta px-6 text-cta-foreground hover:bg-cta/90">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CtaFooter;
