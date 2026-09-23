import Image from "next/image";

export type SeleksiProps = {
  title: string;
  description: string;
  stages: {
    title: string;
    description: string;
    tests: { title: string; description: string; image: string }[];
  }[];
};

const Seleksi = ({ title, description, stages }: SeleksiProps) => (
  <section aria-labelledby="seleksi-title">
    <div className="container-section">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="seleksi-title" className="text-2xl font-bold text-primary-dark md:text-3xl">{title}</h2>
        <p className="mt-4 leading-relaxed text-foreground/80">{description}</p>
      </div>
      <div className="mt-12 space-y-12">
        {stages.map((stage) => (
          <div key={stage.title}>
            <h3 className="text-xl font-semibold text-primary-dark">{stage.title}</h3>
            <p className="mt-2 text-foreground/80">{stage.description}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stage.tests.map((test) => (
                <article key={test.title} className="rounded-xl bg-muted p-6">
                  <Image src={test.image} alt="" width={88} height={88} sizes="56px" className="h-14 w-14 object-contain" />
                  <h4 className="mt-4 text-lg font-semibold text-primary-dark">{test.title}</h4>
                  <p className="mt-2 leading-relaxed text-foreground/80">{test.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Seleksi;
