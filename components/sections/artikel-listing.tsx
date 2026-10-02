import Image from "next/image";
import Link from "next/link";
import ArtikelCard, { type ArtikelCardProps } from "@/components/shared/artikel-card";
import ArtikelPagination, { type ArtikelPaginationProps } from "@/components/shared/artikel-pagination";
import SearchArtikelForm, { type SearchArtikelFormProps } from "@/components/shared/search-artikel-form";

export type ArtikelListingProps = {
  title: string;
  description?: string;
  landing?: { label: string; href: string };
  profile?: {
    avatar: { src: string; alt: string };
    jobTitle?: string;
    bio: string;
    sameAs: { label: string; href: string }[];
  };
  search?: SearchArtikelFormProps;
  heading: string;
  headingVisible: boolean;
  items: ArtikelCardProps[];
  emptyLabel: string;
  pagination?: ArtikelPaginationProps;
};

const ArtikelListing = ({
  title,
  description,
  landing,
  profile,
  search,
  heading,
  headingVisible,
  items,
  emptyLabel,
  pagination,
}: ArtikelListingProps) => (
  <section className="container-section pt-4! md:pt-6!">
    <h1 className="text-3xl font-bold leading-tight text-primary-dark md:text-4xl">{title}</h1>
    {description && <p className="mt-4 max-w-3xl text-lg leading-relaxed">{description}</p>}
    {landing && (
      <p className="mt-3">
        <Link href={landing.href} className="font-medium text-primary hover:underline">
          {landing.label}
        </Link>
      </p>
    )}
    {profile && (
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Image
          src={profile.avatar.src}
          alt={profile.avatar.alt}
          width={96}
          height={96}
          className="size-24 shrink-0 rounded-full object-cover"
        />
        <div className="max-w-3xl">
          {profile.jobTitle && <p className="font-medium text-primary-dark">{profile.jobTitle}</p>}
          <p className="mt-2 leading-relaxed">{profile.bio}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {profile.sameAs.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    {search && (
      <div className="mt-6 max-w-md">
        <SearchArtikelForm {...search} />
      </div>
    )}

    <h2 className={headingVisible ? "mt-10 text-2xl font-bold text-primary-dark" : "sr-only"}>
      {heading}
    </h2>
    {items.length > 0 ? (
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <ArtikelCard key={item.href} {...item} priority={index < 3} />
        ))}
      </div>
    ) : (
      <p className="mt-6 text-muted-foreground">{emptyLabel}</p>
    )}
    {pagination && <ArtikelPagination {...pagination} />}
  </section>
);

export default ArtikelListing;
