import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type NotFoundProps = {
  code: string;
  title: string;
  description: string;
  homeLabel: string;
  homeHref: string;
  konsultasiLabel: string;
  konsultasiHref: string;
  examTracks: {
    title: string;
    description: string;
    linkLabel: string;
    items: { title: string; description: string; href: string }[];
  };
};

const NotFound = ({
  code,
  title,
  description,
  homeLabel,
  homeHref,
  konsultasiLabel,
  konsultasiHref,
  examTracks,
}: NotFoundProps) => (
  <>
    <section className="bg-linear-to-r from-primary-dark to-primary text-primary-foreground">
      <div className="container-section max-w-3xl space-y-6 text-center">
        <p className="text-5xl font-bold text-cta md:text-6xl">{code}</p>

        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          {title}
        </h1>

        <p className="text-md leading-relaxed md:text-lg">{description}</p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white px-6 text-md text-primary-dark hover:bg-white/90"
          >
            <Link href={homeHref}>{homeLabel}</Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-cta px-6 text-md text-white hover:bg-cta/90"
          >
            <a href={konsultasiHref} target="_blank" rel="noopener noreferrer">
              {konsultasiLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>

    <section className="bg-muted" aria-labelledby="exam-tracks-title">
      <div className="container-section">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2
            id="exam-tracks-title"
            className="text-2xl font-bold text-primary-dark md:text-3xl"
          >
            {examTracks.title}
          </h2>

          <p className="mt-3 text-foreground/80">{examTracks.description}</p>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {examTracks.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary-dark">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {examTracks.linkLabel}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default NotFound;
