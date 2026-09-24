export type PassingGradeProps = {
  title: string;
  description: string;
  note: string;
  sourceLabel: string;
  sourceHref: string;
  scores: { title: string; score: string; description: string }[];
};

const PassingGrade = ({
  title,
  description,
  note,
  sourceLabel,
  sourceHref,
  scores,
}: PassingGradeProps) => (
  <section aria-labelledby="passing-grade-title" className="bg-muted">
    <div className="container-section">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="passing-grade-title"
          className="text-2xl font-bold text-primary-dark md:text-3xl"
        >
          {title}
        </h2>

        <p className="mt-4 leading-relaxed text-foreground/80">{description}</p>

        <p className="mt-3 leading-relaxed text-foreground/80">{note}</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {scores.map((item) => (
          <article
            key={item.title}
            className="rounded-xl bg-linear-to-b from-primary/80 to-primary-dark p-6 text-center shadow-sm text-white"
          >
            <strong className="block text-5xl font-bold text-cta">
              {item.score}
            </strong>

            <h3 className="mt-4 text-md font-bold">{item.title}</h3>

            <p className="mt-2 text-xs leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-foreground/70">
        <a
          href={sourceHref}
          className="underline underline-offset-4 hover:text-primary-dark"
        >
          {sourceLabel}
        </a>
      </p>
    </div>
  </section>
);

export default PassingGrade;
