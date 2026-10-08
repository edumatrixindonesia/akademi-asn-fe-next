import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";
import { siteUrl } from "@/app/shared-metadata";

export type DaftarProdukProps = {
  title: string;
  products: {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    price: number;
    sold: number;
    aggregateRating: {
      ratingValue: number;
      ratingCount: number;
      reviewCount: number;
    };
    ctaLabel: string;
    ctaHref: string;
  }[];
};

const DaftarProduk = ({ title, products }: DaftarProdukProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: new URL(product.image, siteUrl).href,
      brand: { "@type": "Brand", name: "Akademi ASN" },
      aggregateRating: {
        "@type": "AggregateRating",
        ...product.aggregateRating,
        bestRating: 5,
        worstRating: 1,
      },
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <section id="daftar-produk" aria-labelledby="daftar-produk-title">
      <div className="container-section">
        <div className="rounded-2xl bg-primary p-4 md:p-8">
          <h2
            id="daftar-produk-title"
            className="mb-8 text-center text-2xl font-bold uppercase text-primary-foreground md:text-3xl"
          >
            {title}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {products.map(({ name, description, image, imageAlt, price, sold, aggregateRating, ctaLabel, ctaHref }) => (
              <article
                key={name}
                className="flex flex-col overflow-hidden rounded-xl bg-background shadow-sm"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  width={828}
                  height={828}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="aspect-square w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-foreground">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {`${aggregateRating.ratingValue.toLocaleString("id-ID")} / 5 (${aggregateRating.ratingCount.toLocaleString("id-ID")} rating, ${aggregateRating.reviewCount.toLocaleString("id-ID")} ulasan tertulis)`}
                  </p>

                  <p className="mt-auto pt-4 text-lg font-bold text-cta">
                    {formatRupiah(price)}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {`${sold.toLocaleString("id-ID")} Terjual`}
                  </p>

                  <Button
                    asChild
                    className="mt-4 w-full bg-cta text-white hover:bg-cta/90"
                  >
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ctaLabel}: ${name}`}
                    >
                      {ctaLabel}
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
};

export default DaftarProduk;
