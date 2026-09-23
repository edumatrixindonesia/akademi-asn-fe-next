import type { MateriProps } from "@/components/sections/materi";

export const materiHome = (konsultasiUrl: string) => ({
  title: "Program Persiapan Siap Lulus CPNS",
  description:
    "Akademi ASN mendampingi persiapan seleksi CPNS melalui bimbingan pengajar berpengalaman, pembelajaran terarah, dan simulasi ujian untuk setiap tahap seleksi.",
  listTitle: "Materi yang Dipelajari",
  items: [
    "Pengetahuan Umum",
    "Bahasa Indonesia",
    "Tes Kemampuan Dasar (TKD)",
    "Tes Bidang Studi",
    "Teknik Menjawab Soal",
    "Simulasi Ujian",
    "Psikotes & Wawancara",
    "Bimbingan & Konsultasi",
  ],
  illustration: "/assets/img/section/program-materi-bimbel-cpns-pppk-bumn.png",
  illustrationAlt: "Perempuan berbaju batik biru memegang dan menunjuk laptop",
  ctaLabel: "Daftarkan Sekarang",
  ctaHref: konsultasiUrl,
}) satisfies MateriProps;
