import Image from "next/image";

export type TestimoniScreenshot = { src: string; alt: string; width: number; height: number };

export type TestimoniProps = {
  title: string;
  screenshots: TestimoniScreenshot[];
};

const Testimoni = ({ title, screenshots }: TestimoniProps) => (
  <section id="testimoni" aria-labelledby="testimoni-title" className="bg-muted">
    <div className="container-section">
      <h2 id="testimoni-title" className="text-center text-2xl font-bold text-primary-dark md:text-3xl">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {screenshots.map((screenshot) => (
          <Image
            key={screenshot.src}
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-sm rounded-lg object-contain"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Testimoni;
