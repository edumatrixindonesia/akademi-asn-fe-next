import Image from "next/image";

export type FeatureCardProps = {
  illustration: string;
  title: string;
  description: string;
};

const FeatureCard = ({ illustration, title, description }: FeatureCardProps) => (
  <article className="rounded-xl bg-background p-6 text-center shadow-sm">
    <Image
      src={illustration}
      alt=""
      width={224}
      height={224}
      loading="lazy"
      unoptimized
      className="mx-auto mb-4 h-28 w-28"
    />
    <h3 className="text-lg font-semibold text-primary-dark">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{description}</p>
  </article>
);

export default FeatureCard;
