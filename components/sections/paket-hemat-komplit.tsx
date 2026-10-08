import Image from "next/image";
import { siteUrl } from "@/app/shared-metadata";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";
import ProductDetails from "@/components/shared/product-details";
import type { ProductDetailsData } from "@/data/product-details";

export type PaketHematKomplitProps = {
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  details?: ProductDetailsData;
};

const PaketHematKomplit = ({
  title,
  description,
  price,
  originalPrice,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  details,
}: PaketHematKomplitProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    image: new URL(image, siteUrl).href,
    description,
    ...(details && {
      aggregateRating: details.aggregateRating,
      review: details.review,
    }),
    brand: { "@type": "Brand", name: "Akademi ASN" },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <section aria-labelledby="paket-hemat-komplit-title" className="px-4 pb-12 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-5xl items-center overflow-hidden rounded-2xl bg-linear-to-r from-primary to-primary-dark text-primary-foreground md:grid-cols-[2fr_3fr]">
        <Image
          src={image}
          alt={imageAlt}
          width={284}
          height={598}
          sizes="(max-width: 768px) 152px, 182px"
          className="order-2 mx-auto h-80 w-auto self-end mask-x-from-80% mask-t-from-85% md:order-1 md:h-96"
        />

        <div className="order-1 space-y-4 p-8 text-center md:order-2 md:py-12 md:pe-12 md:ps-0">
          <h2
            id="paket-hemat-komplit-title"
            className="text-3xl font-bold uppercase md:text-4xl"
          >
            {title}
          </h2>

          <p className="text-lg">{description}</p>

          <p className="flex flex-col items-center">
            <del className="text-2xl font-semibold decoration-destructive decoration-4">
              {formatRupiah(originalPrice)}
            </del>
            <strong className="text-5xl font-extrabold text-cta md:text-6xl">
              {formatRupiah(price)}
            </strong>
          </p>

          <Button
            asChild
            size="lg"
            className="bg-background px-8 text-lg text-primary-dark hover:bg-background/90"
          >
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
            </a>
          </Button>
          <ProductDetails details={details} />
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

export default PaketHematKomplit;
