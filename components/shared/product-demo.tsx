import type { ProductDemoData } from "@/data/product-demo";

const ProductDemo = ({ details }: { details?: ProductDemoData }) => details ? (
  <aside className="mt-6 space-y-3 rounded-lg border border-current/30 p-4 text-left text-sm" data-product-demo>
    <p className="font-semibold">{details.notice}</p>
    <p>
      {details.aggregateRating.ratingValue.toLocaleString("id-ID")} / {details.aggregateRating.bestRating}
      {` (${details.aggregateRating.reviewCount} ulasan simulasi)`}
    </p>
    <ul className="space-y-3">
      {details.review.map((review) => (
        <li key={review.author.name}>
          <p className="font-semibold">{review.author.name}: {review.reviewRating.ratingValue} / {review.reviewRating.bestRating}</p>
          <p>{review.reviewBody}</p>
          <time dateTime={review.datePublished}>{review.datePublished}</time>
        </li>
      ))}
    </ul>
    <p>{details.deliveryDescription}</p>
    <p>{details.returnDescription}</p>
  </aside>
) : null;

export default ProductDemo;
