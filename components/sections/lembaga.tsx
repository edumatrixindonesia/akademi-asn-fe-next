import Image from "next/image";

export type LembagaLogo = { src: string; alt: string };

export type LembagaProps = {
  title: string;
  logos: LembagaLogo[];
};

const Lembaga = ({ title, logos }: LembagaProps) => (
  <section aria-labelledby="lembaga-title" className="overflow-hidden bg-background">
    <div className="container-section">
      <h2 id="lembaga-title" className="text-center text-2xl font-bold text-primary-dark md:text-3xl">
        {title}
      </h2>
      <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-lembaga-marquee flex w-max items-center">
          <div className="flex shrink-0 items-center gap-12 pr-12">
            {logos.map((logo) => (
              <Image key={logo.src} src={logo.src} alt={logo.alt} width={96} height={96} className="h-16 w-auto shrink-0 object-contain" />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
            {logos.map((logo) => (
              <Image key={logo.src} src={logo.src} alt="" width={96} height={96} className="h-16 w-auto shrink-0 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Lembaga;
