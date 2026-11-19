import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";
import AutoplayCarousel from "@/components/shared/autoplay-carousel";
import { siteUrl } from "@/app/shared-metadata";

export type MasterTeacherProfile = { name: string; photo: string; alt: string };

export type MasterTeacherProps = {
  title: string;
  description: string;
  role: string;
  teachers: MasterTeacherProfile[];
};

const MasterTeacher = ({ title, description, role, teachers }: MasterTeacherProps) => {
  // Ties each Master Teacher to the site-wide Organization entity (app/layout.tsx).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": teachers.map((teacher) => ({
      "@type": "Person",
      name: teacher.name,
      jobTitle: role,
      image: `${siteUrl}${teacher.photo}`,
      worksFor: { "@id": `${siteUrl}/#organization` },
    })),
  };

  return (
    <section id="master-teacher" aria-labelledby="master-teacher-title">
      <div className="container-section">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 id="master-teacher-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-foreground/80">{description}</p>
        </div>

        <AutoplayCarousel label={title}>
          {teachers.map((teacher, index) => (
            <CarouselItem
              key={teacher.name}
              aria-label={`${index + 1} dari ${teachers.length}`}
              className="basis-[72%] sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <article className="group relative overflow-hidden rounded-2xl bg-primary-dark shadow-md">
                <Image
                  src={teacher.photo}
                  alt={teacher.alt}
                  width={400}
                  height={400}
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 72vw"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary-dark/95 via-primary-dark/70 to-transparent px-4 pt-14 pb-4 text-primary-foreground">
                  <h3 className="font-semibold leading-tight">{teacher.name}</h3>
                  <p className="mt-1 inline-flex items-center gap-1 text-sm text-primary-foreground/85">
                    <BadgeCheck aria-hidden className="size-4" />
                    {role}
                  </p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </AutoplayCarousel>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </section>
  );
};

export default MasterTeacher;
