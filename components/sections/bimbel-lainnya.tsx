import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, ClipboardCheck, Landmark } from "lucide-react";

const icons = {
  cpns: Landmark,
  pppk: BriefcaseBusiness,
  bumn: Building2,
  tryout: ClipboardCheck,
};

export type BimbelLainnyaItem = {
  icon: keyof typeof icons;
  title: string;
  description: string;
  href: string;
};

export type BimbelLainnyaProps = {
  title: string;
  description: string;
  ctaLabel: string;
  items: BimbelLainnyaItem[];
};

const BimbelLainnya = ({ title, description, ctaLabel, items }: BimbelLainnyaProps) => (
  <section id="bimbel-lainnya" aria-labelledby="bimbel-lainnya-title">
    <div className="container-section">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 id="bimbel-lainnya-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-foreground/80">{description}</p>
      </div>

      <ul className="flex flex-wrap justify-center gap-5">
        {items.map(({ icon, title, description, href }) => {
          const Icon = icons[icon];
          return (
            <li key={href} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]">
              {/* No prefetch: on location pages these are uncached ISR pages (see region-links). */}
              <Link
                href={href}
                prefetch={false}
                className="group flex h-full flex-col rounded-xl bg-background p-6 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="text-lg font-semibold text-primary-dark">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {ctaLabel}
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default BimbelLainnya;
