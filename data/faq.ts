import type { FaqProps } from "@/components/sections/faq";

const hargaPaketPrivat =
  "Optima (8 sesi) Rp1.960.000, Maxima (12 sesi) Rp2.793.000, dan Ultima (24 sesi) Rp5.292.000";

export const faqHome = {
  title: "Pertanyaan yang Sering Diajukan",
  icon: "/img/logo/faq-question-icon-bimbel-cpns-ppk-bumn.webp",
  items: [
    {
      question: "Apa Kelebihan Bimbel Akademi ASN by Edumatrix?",
      answer:
        "Dibimbing tutor berpengalaman dan mendapat drilling soal serta Try Out yang akurat, untuk pembelajaran online akan mendapatkan E-book soal dan pembahasan serta recording selama proses pembelajaran.",
    },
    {
      question: "Bagaimana cara mendaftar Bimbel CPNS, PPPK & BUMN?",
      answer:
        "Bisa langsung menghubungi kontak Admin kami yang tertera di Website, maupun datang langsung ke kantor Edumatrix Indonesia untuk konfirmasi pendaftaran.",
    },
    {
      question: "Apa Saja Urutan nilai dari materi SKD?",
      answer:
        "Tes Karakteristik Pribadi (TKP) passing grade 166 dari nilai maksimal 225 (45 soal, setiap jawaban bernilai 1 sampai 5), Tes Intelegensia Umum (TIU) passing grade 80 (minimal 16 dari 35 soal benar), dan Tes Wawasan Kebangsaan (TWK) passing grade 65 (minimal 13 dari 30 soal benar).",
    },
  ],
} satisfies FaqProps;

export const faqCpns = {
  ...faqHome,
  title: "Pertanyaan Seputar Bimbel CPNS",
  items: [
    {
      question: "Apakah tersedia bimbel CPNS online?",
      answer:
        "Ya. Akademi ASN menyediakan Bootcamp Online berisi 24 sesi intensif lewat Zoom, lengkap dengan tryout mingguan, grup diskusi, e-book soal dan pembahasan, serta rekaman pembelajaran yang bisa diputar ulang. Jika ingin didampingi satu tutor secara personal, tersedia juga les privat online.",
    },
    {
      question: "Apa saja materi SKD CPNS yang dipelajari?",
      answer:
        "SKD CPNS terdiri dari 110 soal berbasis CAT yang dikerjakan dalam 100 menit. Tes Wawasan Kebangsaan (TWK, 30 soal) menguji nasionalisme, integritas, bela negara, pilar negara, dan bahasa negara. Tes Intelegensia Umum (TIU, 35 soal) menguji kemampuan verbal, numerik, dan figural. Tes Karakteristik Pribadi (TKP, 45 soal) menguji pelayanan publik, jejaring kerja, sosial budaya, teknologi informasi dan komunikasi, profesionalisme, dan antiradikalisme. Ketentuan ini mengacu pada Keputusan Menteri PANRB Nomor 321 Tahun 2024, dan semua materinya dipelajari di Akademi ASN lengkap dengan latihan soal dan pembahasan.",
    },
    {
      question: "Apakah tersedia bimbel SKB CPNS?",
      answer:
        "Ya. Selain SKD, Akademi ASN juga mendampingi persiapan SKB. SKB menguji kompetensi bidang sesuai jabatan yang dilamar, sehingga materinya berbeda di setiap formasi. Materi SKB tersedia untuk semua formasi dan disesuaikan dengan formasi yang kamu lamar, jadi sampaikan formasimu saat konsultasi.",
    },
    {
      question: "Apakah tersedia tryout CAT CPNS?",
      answer:
        "Ya. Tryout Akademi ASN berbasis CAT, sehingga kamu terbiasa dengan format dan batas waktu tes yang sebenarnya. Tersedia Paket Tryout 1 dan Paket Tryout 5. Paket Optima, Maxima, dan Ultima juga sudah termasuk tryout gratis 1x, 2x, dan 3x, sedangkan Bootcamp Online dilengkapi tryout setiap minggu.",
    },
    {
      question: "Berapa biaya bimbel CPNS?",
      answer: `Biaya les privat CPNS di Akademi ASN adalah ${hargaPaketPrivat}. Setiap paket sudah termasuk e-book soal dan pembahasan, free assessment, progress report, dan tryout gratis. Untuk biaya Bootcamp Online dan Paket Tryout, hubungi admin Akademi ASN lewat WhatsApp.`,
    },
    {
      question: "Apakah kelas bisa diikuti sambil bekerja?",
      answer:
        "Bisa. Jadwal belajar di Akademi ASN fleksibel, jadi persiapan seleksi bisa berjalan tanpa mengganggu pekerjaanmu. Pada les privat, tutor datang ke rumah atau kantormu. Pada kelas online, rekaman pembelajaran bisa diputar ulang kapan saja.",
    },
    {
      question: "Berapa lama program bimbel CPNS?",
      answer:
        "Lama program bergantung pada paket yang dipilih: Optima 8 sesi, Maxima 12 sesi, Ultima 24 sesi, dan Bootcamp Online 24 sesi intensif. Pada les privat, jadwal setiap sesi bisa diatur sesuai waktu luangmu.",
    },
    {
      question: "Apa perbedaan kelas SKD dan SKB?",
      answer:
        "SKD menguji kemampuan dasar yang sama untuk semua pelamar, yaitu TWK, TIU, dan TKP, dengan nilai ambang batas 65, 80, dan 166. SKB diikuti peserta yang lolos SKD dan menguji kompetensi sesuai jabatan yang dilamar, menggunakan CAT BKN dan dapat ditambah tes lain dari instansi, misalnya psikotes, tes praktik kerja, atau wawancara. Nilai akhir CPNS menggabungkan SKD (40%) dan SKB (60%). Karena itu, kelas SKD berfokus pada TWK, TIU, dan TKP, sedangkan kelas SKB berfokus pada materi bidang sesuai formasimu.",
    },
  ],
} satisfies FaqProps;

export const faqPppk = {
  ...faqHome,
  title: "Pertanyaan Seputar Bimbel PPPK",
  items: [
    {
      question: "Apa itu bimbel PPPK dan siapa yang cocok mengikutinya?",
      answer:
        "PPPK (Pegawai Pemerintah dengan Perjanjian Kerja) adalah ASN yang diangkat berdasarkan perjanjian kerja. Seleksinya tidak memakai SKD dan SKB seperti CPNS, melainkan seleksi kompetensi teknis, manajerial, sosial kultural, dan wawancara berbasis komputer. Bimbel PPPK menyiapkan kamu untuk seleksi tersebut, dan cocok bagi pelamar formasi guru, tenaga kesehatan, maupun tenaga teknis. Syarat pelamar ditetapkan setiap periode seleksi; pada PPPK 2024, misalnya, seleksi ditujukan bagi eks tenaga honorer kategori II dan tenaga non-ASN.",
    },
    {
      question:
        "Apa perbedaan bimbel PPPK Teknis, PPPK Guru, dan PPPK Tenaga Kesehatan?",
      answer:
        "Komponen seleksinya sama, yaitu kompetensi teknis, manajerial, sosial kultural, dan wawancara, tetapi materi kompetensi teknis mengikuti jabatan yang dilamar. Pada 2024, aturannya dipisah dalam Keputusan Menteri PANRB Nomor 347 (PPPK secara umum, termasuk tenaga teknis), Nomor 348 (guru), dan Nomor 349 (tenaga kesehatan). PPPK Teknis menguji pengetahuan bidang jabatan fungsional atau pelaksana yang dilamar. PPPK Guru mensyaratkan kualifikasi akademik paling rendah S-1 atau D-IV dan/atau sertifikat pendidik. PPPK Tenaga Kesehatan mensyaratkan Surat Tanda Registrasi (STR) yang masih berlaku untuk jabatan yang memerlukannya. Karena itu, materi kompetensi teknis di bimbel disiapkan sesuai formasimu.",
    },
    {
      question: "Apakah tersedia bimbel PPPK Teknis 2026 secara online?",
      answer:
        "Ya. Bimbel PPPK Teknis bisa diikuti secara online, baik lewat Bootcamp Online berisi 24 sesi intensif via Zoom maupun les privat online bersama tutor. Materi kompetensi teknis disesuaikan dengan jabatan yang kamu lamar, dan kurikulumnya mengacu pada kisi-kisi resmi terbaru dari KemenPANRB dan BKN. Jadwal resmi seleksi PPPK diumumkan melalui portal sscasn.bkn.go.id.",
    },
    {
      question: "Apa saja materi yang dipelajari dalam bimbel PPPK?",
      answer:
        "Materinya mengikuti seleksi kompetensi PPPK: kompetensi teknis sesuai jabatan, kompetensi manajerial (antara lain integritas, kerja sama, dan orientasi pada hasil), kompetensi sosial kultural (interaksi dalam masyarakat yang beragam dan wawasan kebangsaan), serta wawancara yang menilai kejujuran, komitmen, keadilan, etika, dan kepatuhan. Pada seleksi 2024, jumlah soalnya 145 butir: 90 soal teknis, 25 manajerial, 20 sosial kultural, dan 10 wawancara. Seleksi kompetensi teknis, manajerial, dan sosial kultural dikerjakan dalam 120 menit.",
    },
    {
      question: "Apakah tersedia bimbel PPPK Guru secara online?",
      answer:
        "Ya. Bimbel PPPK Guru bisa diikuti secara online, baik lewat Bootcamp Online berisi 24 sesi intensif via Zoom maupun les privat online bersama tutor. Materi kompetensi teknis disesuaikan dengan jabatan guru yang kamu lamar, ditambah persiapan kompetensi manajerial, sosial kultural, dan wawancara.",
    },
    {
      question: "Apakah tersedia bimbel PPPK Kesehatan untuk perawat dan bidan?",
      answer:
        "Ya. Akademi ASN menyediakan bimbel PPPK Tenaga Kesehatan dengan modul dan latihan soal kompetensi teknis sesuai jabatan yang dilamar, termasuk perawat dan bidan. Pastikan juga STR kamu masih berlaku saat mendaftar, karena STR menjadi syarat untuk jabatan kesehatan yang memerlukannya.",
    },
    {
      question:
        "Apakah ada kelas atau tryout PPPK gratis sebelum mengikuti bimbel?",
      answer:
        "Ada. Kamu bisa mengikuti kelas trial gratis untuk merasakan langsung metode belajar privat 1-on-1 bersama master teacher Akademi ASN sebelum memutuskan bergabung. Setelah bergabung, paket Optima, Maxima, dan Ultima sudah termasuk tryout gratis 1x, 2x, atau 3x.",
    },
    {
      question: "Apa itu try out PPPK dan bagaimana simulasi CAT-nya?",
      answer:
        "Try out PPPK adalah simulasi seleksi kompetensi PPPK dengan sistem CAT (Computer Assisted Test), seperti tes resmi BKN. Kamu mengerjakan soal kompetensi teknis, manajerial, sosial kultural, dan wawancara di komputer dengan batas waktu, lalu melihat analisis nilaimu. Pada tes resmi, jawaban benar soal teknis bernilai 5, sedangkan soal manajerial, sosial kultural, dan wawancara bernilai 1 sampai 4. Latihan ini membantumu mengatur waktu dan mengenali pola soal.",
    },
    {
      question: "Apakah materi bimbel PPPK disesuaikan dengan formasi yang dilamar?",
      answer:
        "Ya. Modul dan latihan soal kompetensi teknis disesuaikan dengan formasi yang kamu lamar, baik guru, tenaga kesehatan, maupun tenaga teknis. Sampaikan formasimu saat konsultasi. Sebagai acuan, Panselnas menerbitkan materi pokok soal kompetensi teknis untuk setiap jabatan.",
    },
    {
      question: "Berapa biaya bimbel PPPK dan bagaimana cara mendaftarnya?",
      answer: `Biaya les privat di Akademi ASN adalah ${hargaPaketPrivat}. Untuk mendaftar, hubungi admin Akademi ASN lewat tombol WhatsApp di halaman ini, atau datang langsung ke kantor kami di Ruko Permai Monjali, Jalan Monjali No. 3, Sinduadi, Mlati, Sleman, Yogyakarta (Senin–Jumat 09.00–16.00 WIB, Sabtu 09.00–13.00 WIB).`,
    },
  ],
} satisfies FaqProps;

export const faqBumn = {
  ...faqHome,
  title: "Pertanyaan Seputar Bimbel BUMN",
  items: [
    {
      question: "Apa saja tes BUMN?",
      answer:
        "Pada Rekrutmen Bersama BUMN (RBB) 2025, tesnya terdiri dari Tes Online Tahap 1 (Tes Kemampuan Dasar, tes core values AKHLAK, dan Wawasan Kebangsaan), Tes Online Tahap 2 (Bahasa Inggris dan Learning Agility), lalu Tes Kemampuan Bidang oleh masing-masing BUMN, seperti psikotes, wawancara, dan tes kesehatan. Pelamar lulusan SMA/sederajat tidak mengikuti Tes Bahasa Inggris.",
    },
    {
      question: "Apa saja materi TKD BUMN?",
      answer:
        "Tes Kemampuan Dasar (TKD) mengukur kemampuan verbal, numerik, dan logika. Soalnya menilai pengetahuan, cara berpikir kritis dan analitis, serta kemampuan memecahkan masalah. Di Akademi ASN, kamu berlatih soal TKD beserta pembahasan dan tips mengatur waktu.",
    },
    {
      question: "Apa itu tes AKHLAK BUMN?",
      answer:
        "AKHLAK adalah nilai-nilai utama (core values) BUMN: Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif. Tes AKHLAK mengukur pemahaman dan penerapan nilai-nilai tersebut dalam situasi kerja di lingkungan BUMN.",
    },
    {
      question: "Apa saja tahapan Rekrutmen Bersama BUMN?",
      answer:
        "Tahapan RBB 2025 adalah registrasi dan pengajuan lamaran, seleksi administrasi, Tes Online Tahap 1 (TKD, AKHLAK, Wawasan Kebangsaan), Tes Online Tahap 2 (Bahasa Inggris dan Learning Agility), Tes Kemampuan Bidang oleh masing-masing BUMN, lalu pengumuman akhir. Informasi resmi hanya diumumkan lewat portal FHCI BUMN serta akun Instagram @fhci.bumn dan @kementerianbumn.",
    },
    {
      question: "Bagaimana cara mempersiapkan tes BUMN?",
      answer:
        "Latih setiap materi tes RBB: soal verbal, numerik, dan logika untuk TKD; nilai AKHLAK dan penerapannya di situasi kerja; Pancasila, UUD 1945, sejarah bangsa, dan Bhinneka Tunggal Ika untuk Wawasan Kebangsaan; serta bahasa Inggris, kecuali kamu melamar dengan ijazah SMA/sederajat. Kerjakan tryout dengan batas waktu untuk melatih kecepatan. Siapkan dokumen pendaftaran lebih awal, dan pantau pengumuman hanya dari kanal resmi FHCI BUMN.",
    },
    {
      question: "Apakah tersedia bimbel BUMN online?",
      answer:
        "Ya. Bimbel BUMN di Akademi ASN bisa diikuti secara online bersama tutor, dengan materi TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility.",
    },
    {
      question: "Apakah tersedia les privat persiapan BUMN?",
      answer:
        "Ya. Kamu bisa mengikuti les privat BUMN 1-on-1, baik secara online maupun dengan tutor yang datang ke rumah atau kantormu. Materi dan jadwalnya disesuaikan dengan kebutuhan belajarmu.",
    },
    {
      question: "Apakah tersedia tryout dan latihan soal BUMN?",
      answer:
        "Ya. Akademi ASN menyediakan tryout BUMN untuk mengukur kesiapanmu, serta latihan soal lewat e-book soal dan pembahasan. Paket Optima, Maxima, dan Ultima juga sudah termasuk tryout gratis 1x, 2x, dan 3x.",
    },
    {
      question: "Apakah materi bimbel disesuaikan dengan RBB terbaru?",
      answer:
        "Ya. Materi disusun mengikuti rangkaian tes RBB terbaru, yaitu TKD, AKHLAK, Wawasan Kebangsaan, Bahasa Inggris, dan Learning Agility. Bahan ajar Akademi ASN juga diperbarui mengikuti perubahan ketentuan seleksi.",
    },
  ],
} satisfies FaqProps;
