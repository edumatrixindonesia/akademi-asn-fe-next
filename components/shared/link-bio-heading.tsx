export type LinkBioHeadingProps = { id: string; title: string };

const LinkBioHeading = ({ id, title }: LinkBioHeadingProps) => (
  <div className="mb-4 flex items-center gap-3">
    <span aria-hidden="true" className="h-px flex-1 bg-border" />
    <h2
      id={id}
      className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
    >
      {title}
    </h2>
    <span aria-hidden="true" className="h-px flex-1 bg-border" />
  </div>
);

export default LinkBioHeading;
