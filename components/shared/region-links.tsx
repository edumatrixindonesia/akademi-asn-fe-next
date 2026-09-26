export type RegionLinksProps = {
  id: string;
  title: string;
  description: string;
  items: { name: string; href: string }[];
  className?: string;
};

// Plain <a> rather than next/link: prefetching dozens of uncached ISR pages
// in the viewport would render them all on the server at once.
// A region with no children or no siblings in the page set renders nothing.
const RegionLinks = ({ id, title, description, items, className }: RegionLinksProps) => {
  if (items.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <div className="container-section">
        <h2 id={`${id}-title`} className="text-2xl font-bold text-primary-dark md:text-3xl">
          {title}
        </h2>

        <p className="mt-3 text-foreground/80">{description}</p>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-primary hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RegionLinks;
