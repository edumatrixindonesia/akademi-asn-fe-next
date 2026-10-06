import Image from "next/image";
import { Button } from "@/components/ui/button";

export type PaketCardProps = {
  name: string;
  sessions: string;
  price?: string;
  originalPrice?: string;
  headerImage?: string;
  variant?: "offline" | "online";
  included: string[];
  ctaLabel: string;
  ctaHref: string;
};

const PaketCard = ({
  name,
  sessions,
  price,
  originalPrice,
  headerImage,
  variant = "offline",
  included,
  ctaLabel,
  ctaHref,
}: PaketCardProps) => (
  <article className="row-span-2 grid grid-rows-subgrid gap-y-0 overflow-hidden rounded-xl bg-background text-foreground shadow-sm md:col-span-2 lg:col-span-1">
    <div
      className={`relative isolate flex flex-col justify-center gap-1 px-6 py-8 text-white ${
        variant === "online"
          ? "items-center bg-linear-to-b from-primary to-primary-dark text-center"
          : "items-end text-right"
      }`}
    >
      {headerImage && (
        <Image
          src={headerImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="-z-10 object-cover object-center-right"
        />
      )}

      <h3 className="text-3xl font-bold">{name}</h3>

      <p
        className={`text-sm font-medium py-1 px-3 rounded-full ${
          variant === "online" ? "bg-cta mt-4" : "bg-primary my-4"
        }`}
      >
        {sessions}
      </p>

      {price && (
        <>
          {originalPrice && (
            <del className="block text-sm">{originalPrice}</del>
          )}

          <p className="text-lg font-semibold bg-cta px-2.5 py-0.5 rounded-full">
            {price}
          </p>
        </>
      )}
    </div>

    <div className="flex flex-1 flex-col p-6 pt-0">
      <ul className="my-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80 marker:text-primary">
        {included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        className="mt-auto w-full bg-cta text-white hover:bg-cta/90"
      >
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ctaLabel}: ${name}`}
        >
          {ctaLabel}
        </a>
      </Button>
    </div>
  </article>
);

export default PaketCard;
