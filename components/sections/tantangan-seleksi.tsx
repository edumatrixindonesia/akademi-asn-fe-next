import Image from "next/image";
import { Button } from "@/components/ui/button";

export type TantanganSeleksiProps = {
  title: string;
  illustration: string;
  illustrationAlt: string;
  backgroundImage: string;
  xIcon: string;
  forbiddenIcon: string;
  reasons: { title: string; description: string }[];
  ctaLabel: string;
  ctaHref: string;
  closingTitle: string;
  closingDescription: string;
  closingPoints: string[];
};

const TantanganSeleksi = ({
  title,
  illustration,
  illustrationAlt,
  backgroundImage,
  xIcon,
  forbiddenIcon,
  reasons,
  ctaLabel,
  ctaHref,
  closingTitle,
  closingDescription,
  closingPoints,
}: TantanganSeleksiProps) => (
  <section
    aria-labelledby="tantangan-seleksi-title"
    className="relative overflow-hidden bg-muted"
  >
    <Image
      src={backgroundImage}
      alt=""
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-top"
    />

    <div className="container-section relative">
      <div className="grid items-end gap-8 md:grid-cols-2">
        <Image
          src={illustration}
          alt={illustrationAlt}
          width={648}
          height={938}
          sizes="(max-width: 1023px) 0px, 50vw"
          className="mx-auto hidden md:block h-auto w-full max-w-sm"
        />

        <div className="rounded-xl bg-background/90 p-6 md:p-8">
          <h2
            id="tantangan-seleksi-title"
            className="text-2xl font-bold text-primary-dark md:text-3xl"
          >
            {title}
          </h2>

          <ul className="mt-8 space-y-6">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-start gap-4">
                <Image
                  src={xIcon}
                  alt=""
                  width={28}
                  height={28}
                  className="mt-1 shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-primary-dark">
                    {reason.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground/85">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="mt-8 h-auto whitespace-normal bg-cta px-6 py-3 text-white hover:bg-cta/90 w-full"
          >
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start gap-5 rounded-xl bg-linear-to-r from-primary to-primary-dark p-6 sm:flex-row md:p-8">
        <Image
          src={forbiddenIcon}
          alt=""
          width={72}
          height={72}
          className="h-16 w-16 shrink-0 object-contain"
        />

        <div>
          <h3 className="text-xl font-bold text-cta">{closingTitle}</h3>

          <p className="mt-3 leading-relaxed text-white">
            {closingDescription}
          </p>

          <ul className="mt-4 list-disc space-y-1 pl-5 text-white">
            {closingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default TantanganSeleksi;
