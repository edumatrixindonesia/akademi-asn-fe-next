import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Globe } from "lucide-react";
import SocialIcon, { type SocialPlatform } from "@/components/shared/social-icon";

type LinkBioLink = { label: string; href: string };

export type LinkBioHeaderProps = {
  logo: { src: string; alt: string };
  name: string;
  description: string;
  socials: (LinkBioLink & { platform: SocialPlatform })[];
  website: LinkBioLink;
};

const tileClassName =
  "flex size-14 items-center justify-center rounded-2xl bg-card text-primary shadow-md transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-primary-dark group-hover:text-primary-foreground group-hover:shadow-lg group-active:scale-95";
const tileLabelClassName = "max-w-full truncate text-xs font-medium text-primary-foreground";

const LinkBioHeader = ({ logo, name, description, socials, website }: LinkBioHeaderProps) => (
  <header className="relative overflow-hidden rounded-b-[2.5rem] bg-linear-to-b from-primary-dark via-primary to-primary shadow-lg">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 -left-20 size-72 rounded-full bg-white/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 -right-24 size-72 rounded-full bg-primary-dark/40 blur-3xl"
    />
    <div className="relative mx-auto w-full max-w-140 px-4">
      <div className="flex flex-col items-center pt-12 pb-6 text-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={112}
          height={112}
          priority
          className="size-24 rounded-full bg-white object-cover shadow-xl ring-[3px] ring-white"
        />
        <h1 className="mt-5 flex items-center gap-1.5 text-xl font-bold tracking-tight text-primary-foreground">
          {name}
          <BadgeCheck aria-hidden="true" className="size-5 text-cta" />
        </h1>
        <p className="mt-1.5 max-w-xs text-sm text-primary-foreground/90">{description}</p>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-5 py-4 sm:gap-x-6">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-16 flex-col items-center gap-2"
            >
              <span className={tileClassName}>
                <SocialIcon platform={social.platform} className="size-6" />
              </span>
              <span className={tileLabelClassName}>{social.label}</span>
            </a>
          </li>
        ))}
        <li>
          <Link href={website.href} className="group flex w-16 flex-col items-center gap-2">
            <span className={tileClassName}>
              <Globe aria-hidden="true" className="size-6" />
            </span>
            <span className={tileLabelClassName}>{website.label}</span>
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default LinkBioHeader;
