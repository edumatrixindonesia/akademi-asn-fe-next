import Image from "next/image";

export type MasterTeacherProfile = { name: string; photo: string; alt: string };

export type MasterTeacherProps = {
  title: string;
  description: string;
  role: string;
  teachers: MasterTeacherProfile[];
};

const MasterTeacher = ({ title, description, role, teachers }: MasterTeacherProps) => (
  <section id="master-teacher" aria-labelledby="master-teacher-title">
    <div className="container-section">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 id="master-teacher-title" className="text-2xl font-bold text-primary-dark md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-foreground/80">{description}</p>
      </div>

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
        {teachers.map((teacher) => (
          <li key={teacher.name}>
            <article className="h-full overflow-hidden rounded-xl bg-background shadow-sm ring-1 ring-border">
              <Image
                src={teacher.photo}
                alt={teacher.alt}
                width={400}
                height={400}
                sizes="(min-width: 768px) 20vw, 50vw"
                className="aspect-square w-full object-cover"
              />
              <div className="p-3 text-center md:p-4">
                <h3 className="font-semibold text-primary-dark">{teacher.name}</h3>
                <p className="mt-0.5 text-sm text-foreground/70">{role}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MasterTeacher;
