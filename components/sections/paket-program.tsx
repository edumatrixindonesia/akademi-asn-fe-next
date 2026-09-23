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
  <section id="paket-program" aria-labelledby="paket-program-title" className="relative isolate overflow-hidden bg-primary-dark text-primary-foreground">
    <Image src={backgroundImage} alt="" fill sizes="100vw" className="pointer-events-none -z-10 object-cover opacity-25" />
    <div className="container-section">
      <h2 id="paket-program-title" className="text-center text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-8 text-center text-xl font-semibold md:text-2xl">{offlineTitle}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {offlinePackages.map((paket) => <PaketCard key={paket.name} {...paket} />)}
      </div>
      <p className="mt-14 text-center text-xl font-semibold md:text-2xl">{onlineTitle}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {onlinePackages.map((paket) => <PaketCard key={paket.name} {...paket} />)}
      </div>
    </div>
  </section>
);

export default PaketProgram;
