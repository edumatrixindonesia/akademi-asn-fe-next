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

      <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={48}
            className="mx-auto h-10 w-auto object-contain grayscale"
          />
        ))}
      </div>
    </div>
  </section>
);

export default MediaMassa;
