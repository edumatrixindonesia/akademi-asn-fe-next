import { ChevronRight, MessageCircle } from "lucide-react";
import LinkBioHeading from "@/components/shared/link-bio-heading";

export type LinkBioKonsultasiProps = {
  title: string;
  label: string;
  description: string;
  ctaLabel: string;
  href: string;
};

const LinkBioKonsultasi = ({
  title,
  label,
  description,
  ctaLabel,
  href,
}: LinkBioKonsultasiProps) => (
  <section aria-labelledby="link-bio-konsultasi-title" className="mt-6">
    <LinkBioHeading id="link-bio-konsultasi-title" title={title} />
    {/* A plain <a>: /konsultasi redirects to WhatsApp, so it must not be prefetched. */}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-3 rounded-2xl border bg-card px-4 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg active:scale-[0.98]"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors duration-200 group-hover:bg-green-500 group-hover:text-white">
        <MessageCircle aria-hidden="true" className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold">{label}</span>
        <span className="block truncate text-xs text-muted-foreground">{description}</span>
      </span>
      <span className="flex shrink-0 items-center gap-1 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-colors duration-200 group-hover:bg-primary-dark">
        {ctaLabel}
        <ChevronRight
          aria-hidden="true"
          className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  </section>
);

export default LinkBioKonsultasi;
