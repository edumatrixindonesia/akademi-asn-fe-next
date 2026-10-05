import { expect, test } from "bun:test";
import { officeAddress, officeHoursText } from "../data/contact";
import { faqCpns, faqPppk } from "../data/faq";
import { paketPrivat } from "../data/paket-program";
import { tahunSeleksi } from "../data/tahun-seleksi";

const answers = (faq) => faq.items.map((item) => item.answer).join("\n");

test("FAQ prices and session counts come from the Paket Program", () => {
  const text = answers(faqCpns);
  for (const { name, sessions, price } of paketPrivat) {
    expect(text).toContain(`${name} (${sessions} sesi) ${price}`);
    expect(text).toContain(`${name} ${sessions} sesi`);
  }
  expect(text).toContain("Optima (8 sesi) Rp1.960.000");
  expect(text).toContain("Maxima (12 sesi) Rp2.793.000");
  expect(text).toContain("Ultima (24 sesi) Rp5.292.000");
});

test("PPPK FAQ uses the full office address, shared hours, and tahunSeleksi", () => {
  expect(answers(faqPppk)).toContain(`${officeAddress} (${officeHoursText})`);
  expect(officeHoursText).toBe("Senin–Jumat 08.00–17.00 WIB, Sabtu 08.00–14.00 WIB");
  expect(faqPppk.items.some((i) => i.question.includes(`PPPK Teknis ${tahunSeleksi}`))).toBe(true);
});
