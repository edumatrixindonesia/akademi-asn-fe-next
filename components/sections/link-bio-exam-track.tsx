import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import LinkBioHeading from "@/components/shared/link-bio-heading";

export type LinkBioExamTrackProps = {
  title: string;
  linkLabel: string;
  items: { label: string; href: string; icon: LucideIcon }[];
};

const LinkBioExamTrack = ({ title, linkLabel, items }: LinkBioExamTrackProps) => (
  <section aria-labelledby="link-bio-exam-track-title" className="mt-6">
    <LinkBioHeading id="link-bio-exam-track-title" title={title} />
    <ul className="flex flex-col gap-3.5">
      {items.map(({ label, href, icon: Icon }) => (
        <li key={href}>
          <Link
            href={href}
            className="group flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <span className="flex-1 font-semibold tracking-tight">{label}</span>
            <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-primary">
              {linkLabel}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default LinkBioExamTrack;
