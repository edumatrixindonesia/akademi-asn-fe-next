import Image from "next/image";
import { Check } from "lucide-react";
import { siteUrl } from "@/app/shared-metadata";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";
import ProductDemo from "@/components/shared/product-demo";
import type { ProductDemoData } from "@/data/product-demo";

export type ProdukUnggulanProps = {
  title: string;
  description: string;
  products: {
    name: string;
    image: string;
    imageAlt: string;
    features: string[];
    price: number;
    ctaLabel: string;
    ctaHref: string;
    demoDetails?: ProductDemoData;
  }[];
};

const ProdukUnggulan = ({ title, description, products }: ProdukUnggulanProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Product",
      name: product.name,
      image: new URL(product.image, siteUrl).href,
      description: [product.demoDetails?.notice, ...product.features].filter(Boolean).join(", "),
      ...(product.demoDetails && {
        aggregateRating: product.demoDetails.aggregateRating,
        review: product.demoDetails.review,
      }),
      brand: { "@type": "Brand", name: "Akademi ASN" },
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        ...(product.demoDetails && {
          shippingDetails: product.demoDetails.shippingDetails,
          hasMerchantReturnPolicy: product.demoDetails.hasMerchantReturnPolicy,
        }),
      },
    })),
  };

  return (
    <section aria-labelledby="produk-unggulan-title">
      <div className="container-section">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2
            id="produk-unggulan-title"
            className="text-2xl font-bold text-primary-dark md:text-3xl"
          >
            {title}
          </h2>

          <p className="mt-3 text-foreground/80">{description}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {products.map(({ name, image, imageAlt, features, price, ctaLabel, ctaHref, demoDetails }) => (
            <article
              key={name}
              className="flex flex-col rounded-xl bg-linear-to-b from-primary to-primary-dark p-6 text-primary-foreground shadow-sm md:p-8"
            >
              <Image
                src={image}
                alt={imageAlt}
                width={160}
                height={160}
                sizes="112px"
                className="mx-auto size-28 rounded-xl object-contain"
              />

              <h3 className="mt-4 text-center text-xl font-bold">{name}</h3>

              <ul className="my-6 space-y-2 text-sm">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check aria-hidden className="size-4 shrink-0 text-cta" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-auto text-center text-3xl font-bold">
                {formatRupiah(price)}
              </p>

              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-cta text-white hover:bg-cta/90"
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
              <ProductDemo details={demoDetails} />
            </article>
          ))}
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

export default ProdukUnggulan;
