import Image from "next/image";

export type FaqProps = {
  title: string;
  icon: string;
  items: { question: string; answer: string }[];
};

const Faq = ({ title, icon, items }: FaqProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section aria-labelledby="faq-title" className="bg-muted">
      <div className="container-section">
        <h2
          id="faq-title"
          className="text-2xl font-bold text-primary-dark md:text-3xl"
        >
          {title}
        </h2>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="rounded-xl bg-background p-6"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 font-semibold text-primary-dark">
                <Image
                  src={icon}
                  alt=""
                  width={28}
                  height={28}
                  className="shrink-0"
                />
                {item.question}
              </summary>

              <p className="mt-3 pl-10 leading-relaxed text-foreground/85">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
};

export default Faq;
