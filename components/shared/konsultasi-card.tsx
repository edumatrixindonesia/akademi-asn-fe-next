import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type KonsultasiCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

const KonsultasiCard = ({
  title,
  description,
  ctaLabel,
  ctaHref,
  className,
}: KonsultasiCardProps) => (
  <aside
    className={cn(
      "rounded-xl p-6 bg-linear-to-r from-primary to-primary-dark text-background",
      className,
    )}
  >
    <p className="text-xl font-bold">{title}</p>
    <p className="mt-2 leading-relaxed">{description}</p>
    <Button
      asChild
      size="lg"
      className="mt-4 bg-cta px-6 text-white hover:bg-cta/90"
    >
      <a href={ctaHref} target="_blank" rel="noopener noreferrer">
        {ctaLabel}
      </a>
    </Button>
  </aside>
);

export default KonsultasiCard;
