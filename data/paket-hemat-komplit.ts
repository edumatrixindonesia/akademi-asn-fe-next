import type { PaketHematKomplitProps } from "@/components/sections/paket-hemat-komplit";
import { hargaEbookModulCpns, hargaTryoutCpns } from "@/data/produk-unggulan";
import { productDemo } from "@/data/product-demo";

export const hargaPaketHematKomplit = 70_000;

export const paketHematKomplit = (konsultasiUrl: (topic: string) => string) =>
  ({
    title: "Paket Hemat Komplit",
    demoDetails: productDemo("Paket Hemat Komplit", 3),
    description: "Beli Tryout CPNS + E-Book Modul CPNS sekaligus dan hemat lebih banyak",
    price: hargaPaketHematKomplit,
    // The bundle's contents bought separately, so the saving is real.
    originalPrice: hargaTryoutCpns + hargaEbookModulCpns,
    image: "/img/section/paket-hemat-komplit-tryout-cpns.webp",
    imageAlt: "Peserta Akademi ASN berseragam batik menunjuk Paket Hemat Komplit",
    ctaLabel: "Ambil Paket Hemat",
    ctaHref: konsultasiUrl("Paket Hemat Komplit"),
  }) satisfies PaketHematKomplitProps;
