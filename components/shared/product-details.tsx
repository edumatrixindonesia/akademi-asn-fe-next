import Link from "next/link";
import type { ProductDetailsData } from "@/data/product-details";

const reviewDate = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "Asia/Jakarta",
});

const ProductDetails = ({ details }: { details?: ProductDetailsData }) =>
  details ? (
    <aside
      className="mt-6 space-y-3 rounded-lg border border-current/30 p-4 text-left text-sm"
      data-product-details
    >
      <p>
        {details.aggregateRating.ratingValue.toLocaleString("id-ID")} /{" "}
        {details.aggregateRating.bestRating}
        {` (${details.aggregateRating.reviewCount} ulasan)`}
      </p>
      <ul className="space-y-3">
        {details.review.map((review) => (
          <li key={review.author.name}>
            <p className="font-semibold">
              {review.author.name}: {review.reviewRating.ratingValue} /{" "}
              {review.reviewRating.bestRating}
            </p>
            <p>{review.reviewBody}</p>
            <time dateTime={review.datePublished}>
              {reviewDate.format(new Date(review.datePublished))}
            </time>
          </li>
        ))}
      </ul>
      <p>{details.deliveryDescription}</p>
      <p>{details.returnDescription}</p>
      <p>
        <Link href={details.policyLink.href} className="underline">
          {details.policyLink.label}
        </Link>
      </p>
    </aside>
  ) : null;

export default ProductDetails;
