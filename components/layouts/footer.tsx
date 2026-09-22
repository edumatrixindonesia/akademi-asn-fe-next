import Image from "next/image";
import Link from "next/link";

import SocialIcon, { type SocialPlatform } from "@/components/shared/social-icon";

type FooterLink = { label: string; href: string };

export type FooterProps = {
  logo: { src: string; alt: string };
  name: string;
  address: string;
  socials: (FooterLink & { platform: SocialPlatform })[];
  consultation: { title: string; label: string; phone: FooterLink };
  otherWebsite: { title: string; link: FooterLink };
  examTracks: { title: string; links: FooterLink[] };
  copyright: string;
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const linkClassName = "transition-colors hover:text-background";

const Footer = ({
  logo,
  name,
  address,
  socials,
  consultation,
  otherWebsite,
  examTracks,
  copyright,
}: FooterProps) => (
  <footer className="mt-auto bg-foreground text-background/70">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-4">
      <div className="flex flex-col gap-4">
        <Link href="/" className="w-fit rounded-lg bg-white p-3">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={256}
            height={75}
            className="h-10 w-auto"
          />
        </Link>
        <p className="font-bold text-background">{name}</p>
        <address className="text-sm not-italic">{address}</address>
        <ul className="flex gap-4">
          {socials.map((social) => (
            <li key={social.platform}>
              <a href={social.href} {...external} className={linkClassName}>
                <SocialIcon platform={social.platform} className="size-6" />
                <span className="sr-only">{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-background">
          {consultation.title}
        </h2>
        <p className="text-sm">{consultation.label}</p>
        <a
          href={consultation.phone.href}
          {...external}
          className={`w-fit text-lg font-semibold ${linkClassName}`}
        >
          {consultation.phone.label}
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-background">
          {otherWebsite.title}
        </h2>
        <a
          href={otherWebsite.link.href}
          {...external}
          className={`w-fit text-sm ${linkClassName}`}
        >
          {otherWebsite.link.label}
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-background">
          {examTracks.title}
        </h2>
        <ul className="flex flex-col gap-2 text-sm">
          {examTracks.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-background/10">
      <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs">
        {copyright}
      </p>
    </div>
  </footer>
);

export default Footer;
