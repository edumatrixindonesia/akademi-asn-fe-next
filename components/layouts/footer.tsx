import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import SocialIcon, {
  type SocialPlatform,
} from "@/components/shared/social-icon";

type FooterLink = { label: string; href: string };

export type FooterProps = {
  logo: { src: string; alt: string };
  name: string;
  address: string;
  socials: (FooterLink & { platform: SocialPlatform })[];
  consultation: {
    title: string;
    label: string;
    phone: FooterLink & { ariaLabel: string };
  };
  otherWebsite: { title: string; link: FooterLink };
  examTracks: { title: string; links: FooterLink[] };
  blog: FooterLink;
  image: { src: string; alt: string };
  copyright: string;
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const Footer = ({
  logo,
  name,
  address,
  socials,
  consultation,
  otherWebsite,
  examTracks,
  blog,
  image,
  copyright,
}: FooterProps) => (
  <footer className="mt-auto bg-linear-to-r from-primary to-primary-dark text-background">
    <div className="container-section grid gap-10 lg:grid-cols-4">
      <div className="flex flex-col gap-3">
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

        <address className="text-sm">{address}</address>

        <ul className="flex gap-4">
          {socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                {...external}
                className="transition-colors hover:text-white/80"
              >
                <SocialIcon platform={social.platform} className="size-6" />

                <span className="sr-only">{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-md font-bold uppercase tracking-wide text-background">
          {consultation.title}
        </h2>
        <div className="px-4 py-2 bg-linear-to-r from-[#ff7c44] to-[#ED743F] rounded-xl flex flex-col justify-center">
          <p className="text-center my-2 text-md font-bold">
            {consultation.label}
          </p>

          <a
            href={consultation.phone.href}
            aria-label={consultation.phone.ariaLabel}
            {...external}
            className={`w-fit text-xl font-semibold transition-colors bg-radial from-cta/80 to-cta text-center mx-auto px-4 py-1 rounded-lg mb-3 inline-flex items-center gap-2 hover:text-white/80`}
          >
            <MessageCircle className="size-5" />
            {consultation.phone.label}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-md font-bold uppercase tracking-wide text-background">
          {otherWebsite.title}
        </h2>

        <a
          href={otherWebsite.link.href}
          {...external}
          className={`w-fit text-sm transition-colors hover:text-white/80`}
        >
          {otherWebsite.link.label}
        </a>

        <Link
          href={blog.href}
          className="w-fit text-sm font-bold transition-colors hover:text-white/80"
        >
          {blog.label}
        </Link>

        <h2 className="text-md font-bold uppercase tracking-wide text-background mt-4">
          {examTracks.title}
        </h2>

        <ul className="flex flex-col gap-5 text-sm">
          {examTracks.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`bg-white py-1.5 pe-1.5 ps-3 rounded-full text-primary-dark hover:text-primary text-md font-bold text-center transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/">
        <Image
          src={image.src}
          alt={image.alt}
          width={691}
          height={608}
          className="h-auto w-full"
        />
      </Link>
    </div>

    <div className="border-t border-background/10">
      <p className="mx-auto w-full max-w-7xl px-4 py-4 text-center text-xs md:px-8 lg:px-12">
        {copyright}
      </p>
    </div>
  </footer>
);

export default Footer;
