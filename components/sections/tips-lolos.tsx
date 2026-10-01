import { CircleCheck } from "lucide-react";

export type TipsLolosProps = {
  title: string;
  description: string;
  tips: { title: string; description: string }[];
};

const TipsLolos = ({ title, description, tips }: TipsLolosProps) => (
  <section aria-labelledby="tips-lolos-title">
    <div className="container-section">
      <div className="rounded-2xl bg-primary p-6 text-primary-foreground md:p-10">
        <h2 id="tips-lolos-title" className="text-2xl font-bold text-cta md:text-3xl">
          {title}
        </h2>

        <p className="mt-3 leading-relaxed">{description}</p>

        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {tips.map((tip) => (
            <li key={tip.title} className="flex items-start gap-3">
              <CircleCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-cta" />
              <div>
                <h3 className="font-semibold">{tip.title}</h3>
                <p className="mt-1 leading-relaxed text-primary-foreground/85">
                  {tip.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default TipsLolos;
