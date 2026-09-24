import Image from "next/image";

export type MediaMassaLogo = { src: string; alt: string };

export type MediaMassaProps = {
  title: string;
  logos: MediaMassaLogo[];
};

const MediaMassa = ({ title, logos }: MediaMassaProps) => (
  <section aria-labelledby="media-massa-title" className="bg-background">
    <div className="container-section">
      <h2
        id="media-massa-title"
        className="text-center text-2xl font-bold text-primary-dark md:text-3xl"
      >
        {title}
      </h2>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={48}
            className="h-14 w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1.5rem)/3)] md:h-16 md:w-[calc((100%-2.25rem)/4)] lg:w-[calc((100%-4.5rem)/7)] object-contain border-muted border-4 p-2 rounded-xl"
          />
        ))}
      </div>
    </div>
  </section>
);

export default MediaMassa;
