export type IntroProps = {
  title: string;
  description: string;
};

const Intro = ({ title, description }: IntroProps) => (
  <section id="intro" aria-labelledby="intro-title" className="bg-background">
    <div className="container-section">
      <h2 id="intro-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl leading-relaxed text-foreground/80">{description}</p>
    </div>
  </section>
);

export default Intro;
