import Image from "next/image";
import PaketCard, { type PaketCardProps } from "@/components/shared/paket-card";

export type PaketProgramProps = {
  title: string;
  offlineTitle: string;
  onlineTitle: string;
  backgroundImage: string;
  offlinePackages: PaketCardProps[];
  onlinePackages: PaketCardProps[];
};

const PaketProgram = ({
  title,
  offlineTitle,
  onlineTitle,
  backgroundImage,
  offlinePackages,
  onlinePackages,
}: PaketProgramProps) => (
  <section
    id="paket-program"
    aria-labelledby="paket-program-title"
    className="relative isolate overflow-hidden bg-primary-dark text-primary-foreground"
  >
    <Image
      src={backgroundImage}
      alt=""
      fill
      sizes="100vw"
      className="pointer-events-none -z-10 object-cover bg-linear-to-r from-primary-dark to-primary opacity-40"
    />

    <div className="container-section">
      <h2
        id="paket-program-title"
        className="text-center text-3xl font-bold md:text-4xl"
      >
        {title}
      </h2>

      <p className="mt-8 text-center text-xl font-semibold md:text-2xl">
        {offlineTitle}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-4 md:[&>:last-child:nth-child(odd)]:col-start-2 lg:grid-cols-3 lg:[&>:last-child:nth-child(odd)]:col-start-auto">
        {offlinePackages.map((paket) => (
          <PaketCard key={paket.name} {...paket} variant="offline" />
        ))}
      </div>

      <p className="mt-14 text-center text-xl font-semibold md:text-2xl">
        {onlineTitle}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-4 md:[&>:last-child:nth-child(odd)]:col-start-2 lg:grid-cols-3 lg:[&>:last-child:nth-child(odd)]:col-start-auto">
        {onlinePackages.map((paket) => (
          <PaketCard key={paket.name} {...paket} variant="online" />
        ))}
      </div>
    </div>
  </section>
);

export default PaketProgram;
