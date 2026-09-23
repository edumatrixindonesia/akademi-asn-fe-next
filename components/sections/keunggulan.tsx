import FeatureCard, { type FeatureCardProps } from "@/components/shared/feature-card";

export type KeunggulanProps = {
  title: string;
  description: string;
  features: FeatureCardProps[];
};

const Keunggulan = ({ title, description, features }: KeunggulanProps) => (
  <section className="bg-muted" aria-labelledby="keunggulan-title">
    <div className="container-section">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 id="keunggulan-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-foreground/80">{description}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Keunggulan;
