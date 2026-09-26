import { MapPin } from "lucide-react";

export type KelasOfflineProps = {
  title: string;
  description: string;
  address: string;
};

const KelasOffline = ({ title, description, address }: KelasOfflineProps) => (
  <section id="kelas-offline" aria-labelledby="kelas-offline-title" className="bg-muted">
    <div className="container-section">
      <h2 id="kelas-offline-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl leading-relaxed text-foreground/80">{description}</p>

      <address className="mt-6 flex max-w-3xl items-start gap-3 not-italic">
        <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
        {address}
      </address>
    </div>
  </section>
);

export default KelasOffline;
