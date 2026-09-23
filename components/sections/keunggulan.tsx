import FeatureCard, {
  type FeatureCardProps,
} from "@/components/shared/feature-card";

export type KeunggulanProps = {
  title: string;
  description: string;
  features: FeatureCardProps[];
};

const Keunggulan = ({ title, description, features }: KeunggulanProps) => (
  <section className="bg-muted" aria-labelledby="keunggulan-title">
    <div className="container-section">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2
          id="keunggulan-title"
          className="text-2xl font-bold text-primary-dark md:text-3xl"
        >
          {title}
        </h2>

        <p className="mt-3 text-foreground/80">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        {features.map((feature, index) => {
          const isFourth = index === 3;
          const isLast = index === features.length - 1;

          return (
            <div
              key={feature.title}
              className={
                isLast
                  ? "sm:col-span-2 sm:col-start-2 lg:col-start-auto"
                  : isFourth
                    ? "sm:col-span-2 lg:col-span-2 lg:col-start-2"
                    : "sm:col-span-2 lg:col-span-2"
              }
            >
              <FeatureCard {...feature} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Keunggulan;
