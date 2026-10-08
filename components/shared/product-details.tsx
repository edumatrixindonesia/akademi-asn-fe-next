import type { ProductDetailsData } from "@/data/product-details";

const reviewDate = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "Asia/Jakarta",
});

const ProductDetails = ({ details }: { details?: ProductDetailsData }) =>
  details ? (
    <details
      className="mt-6 rounded-lg border border-current/30 p-4 text-left text-sm"
      data-product-details
    >
      <summary className="cursor-pointer font-semibold">
        <span aria-hidden className="text-yellow-400">★</span>
        {` ${details.aggregateRating.ratingValue.toLocaleString("id-ID")} / ${details.aggregateRating.bestRating} · Lihat ${details.aggregateRating.reviewCount} ulasan`}
      </summary>
      <ul className="mt-3 space-y-3">
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
    </details>
  ) : null;

export default ProductDetails;
