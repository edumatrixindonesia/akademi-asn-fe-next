export type LatihanSoalProps = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

const LatihanSoal = ({ question, options, answer, explanation }: LatihanSoalProps) => (
  <section className="rounded-xl border p-4">
    <p className="text-sm font-semibold uppercase text-primary-dark">Latihan Soal</p>
    <p className="mt-2 font-medium">{question}</p>
    <ol className="mt-2 list-[upper-alpha]! space-y-1">
      {options.map((option) => (
        <li key={option}>{option}</li>
      ))}
    </ol>
    <details className="mt-3">
      <summary className="cursor-pointer font-medium text-primary">Lihat jawaban</summary>
      <p className="mt-2">
        <strong>Jawaban: {answer}.</strong> {explanation}
      </p>
    </details>
  </section>
);

export default LatihanSoal;
