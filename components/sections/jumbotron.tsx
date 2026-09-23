export type JumbotronProps = { title: string };

const Jumbotron = ({ title }: JumbotronProps) => (
  <h1 className="text-3xl font-bold text-primary md:text-5xl">{title}</h1>
);

export default Jumbotron;
