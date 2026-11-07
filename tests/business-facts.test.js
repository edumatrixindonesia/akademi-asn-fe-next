import { expect, test } from "bun:test";
import { officeAddress, officeHoursText } from "../data/contact";
import { faqCpns, faqPppk } from "../data/faq";
import { paketPrivat } from "../data/paket-program";
import { tahunSeleksi } from "../data/tahun-seleksi";

const answers = (faq) => faq.items.map((item) => item.answer).join("\n");

test("FAQ prices and session counts come from the Paket Program", () => {
  const text = answers(faqCpns);
  for (const { name, sessions, onlinePrice, offlinePrice } of paketPrivat) {
    expect(text).toContain(`${name} (${sessions} sesi) online ${onlinePrice}, offline ${offlinePrice}`);
    expect(text).toContain(`${name} ${sessions} sesi`);
  }
  expect(text).toContain("Optima (10 sesi) online Rp2.200.000, offline Rp2.500.000");
  expect(text).toContain("Maxima (14 sesi) online Rp3.080.000, offline Rp3.430.000");
  expect(text).toContain("Ultima (20 sesi) online Rp4.180.000, offline Rp4.650.000");
  expect(text).toContain("setiap sesi berdurasi 90 menit");
});

test("PPPK FAQ uses the full office address, shared hours, and tahunSeleksi", () => {
  expect(answers(faqPppk)).toContain(`${officeAddress} (${officeHoursText})`);
  expect(officeHoursText).toBe("Senin–Jumat 08.00–17.00 WIB, Sabtu 08.00–14.00 WIB");
  expect(faqPppk.items.some((i) => i.question.includes(`PPPK Teknis ${tahunSeleksi}`))).toBe(true);
});
