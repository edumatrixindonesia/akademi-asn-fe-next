export type LinkBioFooterProps = { copyright: string };

const LinkBioFooter = ({ copyright }: LinkBioFooterProps) => (
  <footer className="mt-10 pb-8 text-center">
    <div aria-hidden="true" className="mx-auto mb-4 h-px w-24 bg-border" />
    <p className="text-xs text-muted-foreground">{copyright}</p>
  </footer>
);

export default LinkBioFooter;
