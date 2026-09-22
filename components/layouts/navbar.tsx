import Image from "next/image";
import Link from "next/link";
import { MenuIcon, MessageCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavLink = { label: string; href: string };

export type NavbarProps = {
  logo: { src: string; alt: string };
  links: NavLink[];
  cta: NavLink;
};

// Sheet is a client component, so the navbar itself stays a Server Component.
const Navbar = ({ logo, links, cta }: NavbarProps) => {
  const ctaLink = (
    <a href={cta.href} target="_blank" rel="noopener noreferrer">
      <MessageCircleIcon />
      {cta.label}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={256}
            height={75}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-muted-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild>{ctaLink}</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon />
              <span className="sr-only">Buka menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col px-4">
              {links.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className="block border-b py-3 text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <SheetFooter>
              <SheetClose asChild>
                <Button asChild size="lg">
                  {ctaLink}
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
