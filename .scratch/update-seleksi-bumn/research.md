# Research: Update Informasi Rekrutmen BUMN 2026

Researched on 2026-10-10. Feeds the "Update Informasi Rekrutmen BUMN 2026" section and a fix of `seleksiBumn` (`data/seleksi.ts`) and `passingGradeBumn` (`data/passing-grade.ts`).

Source tiers used:

- **Tier A (organizer):** FHCI on its own channels.
  - fhcibumn.com: active, domain registered since 2015 and renewed to 2027. It links to the official social accounts `instagram.com/fhci.bumn`, `twitter.com/fhcibumn`, `tiktok.com/@fhci.bumn` and `youtube.com/@fhcibumn5207`.
  - The archived RBB 2025 portal (`rekrutmenbersama2025.fhcibumn.id`, Wayback copy). It names `@fhci.bumn` as "akun Instagram resmi RBB 2025".
- **Tier A (government):** bumn.go.id, now branded "Badan Pengaturan BUMN Republik Indonesia".
- **Tier A (regulation):** peraturan.bpk.go.id and jdih.kemenkeu.go.id.
- **Tier C (discovery only):** news, fact-check sites, regional government hoax pages and tutoring blogs.

How sources were read:

- FHCI Instagram and X posts were read from the platform itself.
  - Instagram captions came from the post page's own meta tags.
  - Carousel and tweet images came from the Instagram and Twitter CDNs and were read as images.
- Every quote below was read on the fetched page or image itself.
- The UU and Perpres PDFs are scans. Their quotes come from the PDFs' embedded OCR text layer, which matches the BPK JDIH metadata and abstract. OCR artefacts were silently corrected only where obvious (e.g. "2OO3" → "2003").

## Status per 2026-10-10

- **RBB 2026 has not been announced or held.**
  - FHCI's site fhcibumn.com has no RBB 2026 item; its newest news is dated 06 Jul 2026 (FHCI Connect Expert Series).
  - The newest RBB item on FHCI's X account is from 19 May 2025.
  - FHCI's last Instagram post on RBB that I could read is the 9 Sep 2025 closing notice for RBB 2025.
  - bumn.go.id has no RBB 2026 release. Its RBB card still points to the 2025 portal.
  - **No official statement about RBB 2026 (date, postponement or cancellation) was found.** Unverified: several Tier C fact-checks (Feb–Jun 2026) say the same: no RBB 2026 announcement exists and links that circulate are phishing.
- **Most recent completed round: RBB 2025.**
  - Opened 7 Mar 2025, with "lebih dari 2.000 lowongan" at "107 perusahaan BUMN dan Anak usahanya" (bumn.go.id).
  - Registration and job applications closed on 19 Mar 2025.
  - Tes Online Tahap 1 ran 19–28 Apr 2025.
  - Tes Online Tahap 2 ran 20–22 May 2025 (jalur reguler).
  - FHCI declared the whole selection closed on 9 Sep 2025.
- **Governance changed in Oct 2025.**
  - **UU 16/2025** (4th amendment of UU 19/2003 BUMN, in force 6 Oct 2025) created the **Badan Pengaturan BUMN (BP BUMN)**, under and answerable to the President. It dissolved the BUMN ministry once BP BUMN was formed.
  - **Perpres 105/2025** (7 Oct 2025) formed BP BUMN and moved the ministry's tasks to it. BP BUMN has a "Deputi Bidang Sumber Daya Manusia dan Keberlanjutan".
  - Operational management of BUMN sits with BPI Danantara (UU 16/2025 Pasal 1 angka 23).
  - **No regulation names who runs RBB after the change.** RBB was a Kementerian BUMN + FHCI programme. bumn.go.id (BP BUMN) still describes it that way.
- **Critical anti-fraud finding: the 2025 portal domain is no longer FHCI's.**
  - `fhcibumn.id` (and with it `rekrutmenbersama.fhcibumn.id`, `rekrutmenbersama2025.fhcibumn.id`, `rekrutmenbersama2026.fhcibumn.id` and `api-rbb.fhcibumn.id`) was **re-registered on 2026-06-09**. It now sits on `ns1/ns2.parkingcrew.net` and serves a domain-parking / "for sale" page.
  - bumn.go.id's RBB "Lihat Detail" links still point at `https://rekrutmenbersama2025.fhcibumn.id/`.
  - **The site must not link to any `*.fhcibumn.id` URL**, and must not tell readers it is the official portal.
- **Site claim mismatches** (details in §6):
  - Learning Agility passing grade: FHCI's final OLT 2 figure is **≥ 16** (35 menit, 100 soal), not 36. 36 (40 menit) was FHCI's 18 Apr 2025 figure; it was superseded on 19 May 2025.
  - "RBB diselenggarakan Kementerian BUMN" needs a past-tense / "kini BP BUMN" fix.
  - The Kompas source should be replaced by FHCI's own post.

---

## 1. RBB 2026: announced or held?

**Not announced. No official statement about RBB 2026 exists on any Tier A channel I could read.**

- [FHCI, fhcibumn.com homepage](https://fhcibumn.com/), fetched 2026-10-10, Tier A.
  - No RBB 2026 content.
  - Newest news items are "06 Jul 2026 FHCI Connect Expert Series 9 – Reigniting Employee Experience in the Age of AI".
- [FHCI, Program › Rekrutmen Bersama BUMN (RBB)](https://fhcibumn.com/program/rekrutmen-bersama-bumn-rbb-vPteSd), page dated 23 Agt 2024, Tier A.
  - Quote: "Rekrutmen Bersama BUMN (RBB) sejak tahun 2022 hingga 2024 … telah berhasil melakukan rekrutasi untuk 5.900 pegawai baru pada kategori RBB Reguler dan 231 pegawai baru pada kategori RBB Disabilitas."
  - The page has not been updated since and says nothing about 2025 or 2026.
- [FHCI, News list pages 1–3](https://fhcibumn.com/gallery/news) and [Agenda](https://fhcibumn.com/agenda), fetched 2026-10-10, Tier A: no "Rekrutmen Bersama" or "RBB" item.
- FHCI X account `@fhcibumn` (linked from fhcibumn.com). Read through Twitter's public timeline syndication on 2026-10-10, Tier A.
  - The 100 newest timeline entries include no post after 19 May 2025.
- [FHCI Instagram, 9 Sep 2025](https://www.instagram.com/fhci.bumn/p/DOaJszXkdC6/), Tier A. This is the last RBB post I could identify.
  - Quote: "seluruh rangkaian kegiatan Rekrutmen Bersama BUMN 2025 telah mencapai tahap akhir … Maka dari itu kami sampaikan bahwa seluruh proses seleksi telah resmi DITUTUP🚫"
- [bumn.go.id, Karir BUMN](https://bumn.go.id/peluang/karir/karir-bumn), fetched 2026-10-10, Tier A.
  - Quote: "Rekrutmen Bersama BUMN merupakan program yang diinisiasi oleh Kementerian BUMN yang berkolaborasi dengan Forum Human Capital Indonesia (FHCI)".
  - No 2026 date. The link still points to `rekrutmenbersama2025.fhcibumn.id` (see §4).

## 2. RBB 2025 (most recent completed round)

### 2a. Opening, size, stages

- [Badan Pengaturan BUMN (bumn.go.id), Siaran pers "Rekrutmen Bersama BUMN 2025 Resmi Dibuka, Lebih Inklusif …"](https://bumn.go.id/publikasi/berita/rilis/detail/67f5f71ed5c0d), dateline 5 Mar 2025 (page "Tanggal Terbit: 2025-04-09"), Tier A.
  - Quote: "Kementerian BUMN bersama dengan Forum Human Capital Indonesia (FHCI), secara resmi mengumumkan pembukaan Rekrutmen Bersama BUMN (RBB) 2025."
  - Quote: "menawarkan lebih dari 2.000 lowongan di berbagai bidang … di 107 perusahaan BUMN dan Anak usahanya"
  - Quote: "RBB 2025 dimulai pada Jumat, 7 Maret 2025"
  - Quote: "Tahapan seleksi mencakup registrasi, seleksi administrasi, tes daring (termasuk tes kemampuan dasar, tes AKHLAK, wawasan kebangsaan, tes bahasa Inggris, dan learning agility), wawancara dan tes kesehatan yang dilakukan dalam tes kemampuan bidang di masing-masing BUMN."
  - Quote: "Program ini terbuka bagi berbagai jenjang pendidikan, mulai dari SMA/SMK, D3, D4, S1, hingga S2."
- FHCI X `@fhcibumn`, [status 1897522359122452860](https://x.com/fhcibumn/status/1897522359122452860), 6 Mar 2025, Tier A (image read).
  - Quote: "RESMI DIBUKA! REKRUTMEN BERSAMA BUMN 2025 BAGI LULUSAN SMA SEDERAJAT, D3, D4/S1, DAN S2 … REGULER / DISABILITAS / PUTRA DAN PUTRI PAPUA … Terbuka lebih dari 2000+ lowongan kerja dan diikuti oleh lebih dari 100+ BUMN Grup."
  - Caption: "Sambil menunggu pembukaan registrasi tanggal 7 Maret 2025".
- FHCI X `@fhcibumn`, [status 1897937989466308796](https://x.com/fhcibumn/status/1897937989466308796), 7 Mar 2025, Tier A (image and caption).
  - Image: "2000+ LOWONGAN DARI 100+ BUMN DIBUKA".
  - Caption: "kamu hanya diperbolehkan memilih satu posisi".
- Archived RBB 2025 portal, `og:description` of [rekrutmenbersama2025.fhcibumn.id/about (Wayback 2025-03-11)](https://web.archive.org/web/20250311234155/https://rekrutmenbersama2025.fhcibumn.id/about), Tier A (archived).
  - Quote: "Rekrutmen Bersama BUMN 2025 membuka lowongan kerja di lebih dari 100 Perusahaan BUMN Grup".

**Formasi count:** only "lebih dari 2.000 lowongan" / "2000+" is official. No exact number was found on a Tier A source.

### 2b. Registration period

- Opened 7 Mar 2025 (bumn.go.id, above).
- [FHCI Instagram, 19 Mar 2025](https://www.instagram.com/fhci.bumn/p/DHZLQL6TGyL/), Tier A.
  - Quote: "Pendaftaran dan Job Apply Rekrutmen Bersama BUMN (RBB) 2025 resmi DITUTUP!"
  - Quote: "Pengumuman selanjutnya akan diumumkan di web dan email resmi RBB jadi pastikan untuk selalu cek di https://rekrutmenbersama2025.fhcibumn.id atau rekrutbersama@fhcibumn.id dan untuk disabilitas di https://rbb2025.setaraberdaya.com".
- The original window was 7–16 Mar (accounts) and 10–16 Mar (applications). It was extended to 19 Mar. Both facts are only in Tier C sources and a BUMN repost; see Unverified.

### 2c. Tes Online Tahap 1 (OLT 1): components, counts, durations, passing grades

- FHCI X `@fhcibumn`, [status 1913070090242953322](https://x.com/fhcibumn/status/1913070090242953322), 18 Apr 2025, Tier A (carousel image "NILAI AMBANG BATAS" read).
  - Quote: "TES KEMAMPUAN DASAR Durasi: 73 menit Jumlah soal: 100 Ambang batas lulus: >= 58"
  - Quote: "AKHLAK Durasi: 30 menit Jumlah soal: 90 Ambang batas lulus: >= 65"
  - Quote: "WAWASAN KEBANGSAAN Durasi: 10 menit Jumlah soal: 10 Ambang batas lulus: >= 50"
  - The same slide also listed "LEARNING AGILITY Durasi: 40 menit Jumlah soal: 100 Ambang batas lulus: >= 36". It was superseded for OLT 2; see §2d.
  - Caption: "Selamat mengerjakan Tes Tahap 1✨".
- [FHCI Instagram, 4 May 2025](https://www.instagram.com/fhci.bumn/p/DJQuLGtSMoH/), Tier A (carousel slides read; slides dated "02/05/2025").
  - Slide 2 quote: "Peserta RBB baik kategori SMA maupun Non SMA harus lulus di atas nilai ambang batas pada setiap subtes pada OLT 1 (TKD, AKHLAK, TWK)"
  - Weights and minimums are the same for "SMA - SEDERAJAT" and "NON SMA (D3/ S1 DAN S2)": "TKD (40%) dengan minimal nilai 58 · AKHLAK (50%) dengan minimal nilai 65 · TWK (10%) dengan minimal nilai 50".
  - Slide 3 quote: "Setiap lowongan akan diurutkan menjadi 200 peserta terbaik dengan rasio 1: 200 pada setiap posisi, terhitung dari total perolehan skor/nilai pada seluruh subtes OLT 1."
  - Slide 4 quote: "Jika ada peserta memiliki nilai yang sama dengan peserta dengan No urut 200 maka dapat melanjutkan tes OLT tahap 2 (berlaku kelipatan)."
  - Caption quote: "terdapat passing grade atau nilai ambang batas tertentu yang perlu kamu capai pada setiap subtes di tahap OLT 1 agar kamu dapat melaju ke tahap OLT 2".
- FHCI X `@fhcibumn`, [status 1923559934496813137](https://x.com/fhcibumn/status/1923559934496813137), 17 May 2025, Tier A.
  - Quote: "Kami mengucapkan selamat kepada seluruh peserta yang telah dinyatakan LULUS ke Tahapan Online Test Tahap 2."
- OLT 1 test window 19–28 Apr 2025: only in Tier C sources (Kompas TV, Tribun, Detik). Not seen on a Tier A image; see Unverified.

### 2d. Tes Online Tahap 2 (OLT 2)

- [FHCI Instagram, 19 May 2025](https://www.instagram.com/fhci.bumn/p/DJ1JEPuRFvW/), Tier A (carousel read). Also posted on [X status 1924399209673073056](https://x.com/fhcibumn/status/1924399209673073056).
  - Slide 1: "SELAMAT MENGERJAKAN TES ONLINE TAHAP 2 REKRUTMEN BERSAMA BUMN 2025 · 20 - 22 Mei · JALUR REGULER".
  - Slide 3 "NILAI AMBANG BATAS – JALUR REGULER":
    - "TES BAHASA INGGRIS Durasi: 80 menit Jumlah soal: 85 Ambang batas lulus: >= 450"
    - "LEARNING AGILITY Durasi: 35 menit Jumlah soal: 100 Ambang batas lulus: >= 16"
  - Caption: "Harap perhatikan nilai ambang batas (passing grade) yang telah ditetapkan untuk setiap subtes!"
- **Learning Agility therefore changed between FHCI's 18 Apr 2025 slide (≥ 36, 40 menit) and its 19 May 2025 slide (≥ 16, 35 menit).** The later slide is the one used for the actual OLT 2. Tier C coverage of the change: Tribun, 20 May 2025, "sebelum diubah menjadi berikut ini … ≥ 16".
- **Whether SMA applicants sit OLT 2:** no Tier A source found. The FHCI OLT 2 slide says only "Jalur Reguler". See Unverified.

### 2e. Tes Kemampuan Bidang (per BUMN) and final results

- bumn.go.id release (above): "wawancara dan tes kesehatan yang dilakukan dalam tes kemampuan bidang di masing-masing BUMN". **Psikotes is not named** in the Tier A text.
- [FHCI LinkedIn company page, 14 Jul 2025](https://www.linkedin.com/posts/fhcibumn_sobatbumn-sobatfhci-rbb2025-activity-7350345140391059457-nEsY). This is supporting only: the LinkedIn page is FHCI's by name, but fhcibumn.com does not link to it.
  - Quote: "hasil final kelulusan Rekrutmen Bersama BUMN 2025 telah resmi diumumkan!"
  - Quote: "WASPADA terhadap penipuan … dengan mengundang peserta dengan tagihan biaya pesawat & akomodasi tiket hotel, kami tidak memungut biaya sepeserpun!"
- FHCI Instagram 9 Sep 2025 (§1): the whole selection was declared closed.

### 2f. Test results that were released

No official total of hires or applicants for RBB 2025 was found.

## 3. Governance change (who oversees BUMN HR / RBB now)

- [UU No. 16 Tahun 2025, Perubahan Keempat atas UU 19/2003 tentang BUMN — JDIH BPK](https://peraturan.bpk.go.id/Details/330668/uu-no-16-tahun-2025). Metadata: "Tanggal Penetapan 06 Oktober 2025 … Tanggal Berlaku 06 Oktober 2025 · LN 2025 (162), TLN (7142)". Tier A.
  - Text read from the [PDF (JDIH Kemenkeu copy, identical file to the BPK download)](https://jdih.kemenkeu.go.id/api/download/c5c31a20-c947-4a24-80c3-802682b75483/2025UU016.pdf) (scanned; OCR layer).
  - Pasal 1 angka 21: "Badan Pengaturan BUMN yang selanjutnya disebut BP BUMN adalah lembaga pemerintah yang menyelenggarakan tugas pemerintahan di bidang pengaturan BUMN."
  - Pasal 1 angka 23: "Badan Pengelola Investasi Daya Anagata Nusantara yang selanjutnya disebut Badan adalah badan yang melaksanakan tugas pemerintah di bidang pengelolaan BUMN".
  - Pasal 3A ayat (3)–(4): "Presiden membentuk BP BUMN. (4) BP BUMN sebagaimana dimaksud pada ayat (3) berada di bawah dan bertanggung jawab kepada Presiden."
  - Pasal 87 ayat (2): "Sumber daya manusia … merupakan karyawan BUMN yang pengangkatan, pemberhentian, kedudukan, hak, dan kewajibannya ditetapkan berdasarkan peraturan perusahaan atau perjanjian kerja bersama".
  - Pasal 87 ayat (8): "Ketentuan mengenai karyawan BUMN sebagaimana dimaksud pada ayat (2) sampai dengan ayat (4) diatur dalam Peraturan BP BUMN."
  - Pasal 93 ayat (4): "Pada saat BP BUMN dibentuk, maka: a. kementerian yang menyelenggarakan urusan pemerintahan di bidang BUMN dibubarkan …; b. pegawai kementerian … dialihkan menjadi pegawai BP BUMN".
  - Pasal 94D: "semua nomenklatur menteri yang menyelenggarakan urusan pemerintahan di bidang BUMN dimaknai sebagai kepala BP BUMN."
- [Perpres No. 105 Tahun 2025 tentang Badan Pengaturan BUMN — JDIH BPK](https://peraturan.bpk.go.id/Details/334645/perpres-no-105-tahun-2025). Metadata: "Tanggal Penetapan 07 Oktober 2025 … LN 2025 (167)", "Mencabut: Perpres No. 179 Tahun 2024 tentang Kementerian Badan Usaha Milik Negara". Tier A.
  - Text read from the [PDF](https://peraturan.bpk.go.id/Download/397210/Perpres%20Nomor%20105%20Tahun%202025.pdf) (scanned; OCR layer).
  - Pasal 2: "Dengan Peraturan Presiden ini dibentuk BP BUMN … BP BUMN berada di bawah dan bertanggung jawab kepada Presiden."
  - Pasal 15: "Deputi Bidang Sumber Daya Manusia dan Keberlanjutan mempunyai tugas menyelenggarakan perumusan kebijakan teknis serta koordinasi dan pelaksanaan kebijakan teknis di bidang sumber daya manusia, keberlanjutan, serta tanggung jawab sosial dan lingkungan badan usaha milik negara."
  - Pasal 60: "pelaksanaan tugas dan fungsi di bidang badan usaha milik negara yang dilaksanakan oleh Kementerian Badan Usaha Milik Negara … diintegrasikan menjadi tugas dan fungsi BP BUMN."
- [bumn.go.id homepage](https://bumn.go.id/), fetched 2026-10-10, Tier A.
  - The site is now titled "Badan Pengaturan BUMN Republik Indonesia". Footer: "© 2022 BADAN PENGATURAN BADAN USAHA MILIK NEGARA REPUBLIK INDONESIA".
  - Its embedded Instagram is "Badan Pengaturan BUMN (@bumn_id)".
- **Conclusion.**
  - BP BUMN (UU 16/2025, Perpres 105/2025) is the government body for BUMN HR policy, through its Deputi SDM dan Keberlanjutan.
  - Danantara manages BUMN operationally.
  - No regulation or official page assigns RBB itself to BP BUMN or to Danantara. RBB 2025 was "Kementerian BUMN bersama FHCI", and FHCI is the operator.

## 4. Official channels and anti-fraud

- **Free of charge.**
  - FHCI Instagram 9 Sep 2025 (§1): "Apabila ada pihak-pihak yang mengatasnamakan Rekrutmen Bersama BUMN 2025 untuk meminta data pribadi atau sejumlah biaya, dapat dipastikan hal tersebut adalah PENIPUAN."
  - FHCI LinkedIn, 14 Jul 2025 (§2e): "kami tidak memungut biaya sepeserpun!"
  - [bumn.go.id release on RBB 2024](https://bumn.go.id/index.php/publikasi/berita/rilis/detail/65cd8686b397c), 8 Feb 2024, Tier A: "mengikuti seluruh rangkaian RBB 2024 tanpa dipungut biaya apapun".
- **Official channels (2025 round).**
  - bumn.go.id 2025 release: "Informasi resmi mengenai Rekrutmen Bersama BUMN 2025 hanya dapat diperoleh melalui website resmi FHCI di www.fhcibumn.com dan akun Instagram Kementerian BUMN di @kementerianbumn & FHCI di @fhci.bumn." It also says: "Pendaftaran … dapat dilakukan secara online melalui platform resmi: https://rekrutmenbersama2025.fhcibumn.id."
  - FHCI Instagram captions (Mar–May 2025): "Informasi resmi RBB 2025 hanya dibagikan melalui instagram @kementerianbumn dan @fhci.bumn. … konfirmasi ke Helpdesk RBB 2025 melalui WA :+62 811-8954-320."
  - The archived portal's coming-soon page ([Wayback 2025-03-04](https://web.archive.org/web/20250304151602/https://rekrutmenbersama2025.fhcibumn.id/)): "Follow akun Instagram resmi RBB 2025 untuk informasi lebih lanjut: @fhci.bumn".
- **The 2025 portal domain has been lost** (checked 2026-10-10):
  - [RDAP PANDI for fhcibumn.id](https://rdap.pandi.id/rdap/domain/fhcibumn.id): "registration 2026-06-09T00:32:40Z", "expiration 2027-06-09", nameservers "ns1.parkingcrew.net / ns2.parkingcrew.net".
  - Google DNS shows `rekrutmenbersama.fhcibumn.id`, `rekrutmenbersama2025.fhcibumn.id` and `api-rbb.fhcibumn.id` all resolving to the parking IP 104.247.81.99. No MX record exists, so the 2025 helpdesk email addresses on that domain no longer work.
  - A fetch of `fhcibumn.id` / `rekrutmenbersama.fhcibumn.id` / `rekrutmenbersama2026.fhcibumn.id` returns a parking lander titled "fhcibumn.id" with a "for sale" banner and AdsDeli ad scripts.
  - fhcibumn.com is still FHCI's: Cloudflare-hosted, Zoho mail, registered 2015-09-15, renewed to 2027-09-15, with live FHCI content.
  - **Implication:** any page, including bumn.go.id's karir page and many tutoring blogs, that tells readers to open `rekrutmenbersama(2025|2026).fhcibumn.id` now sends them to a third-party domain. The section should name only **fhcibumn.com** and the official social accounts. It should tell readers to wait for a new portal URL that FHCI or BP BUMN publishes.
- **Phishing posts claiming RBB 2026 (Tier C, for context):**
  - TikTok and Facebook posts in May–Jun 2026 linked to forms asking for name, KTP data and Telegram number.
  - Reported by [TurnBackHoax 18 May 2026](https://turnbackhoax.id/articles/34430-penipuan-tautan-rekrutmen-bersama-bumn-2026), [Liputan6 9 Jun 2026](https://www.liputan6.com/cek-fakta/read/7839160/cek-fakta-tidak-benar-link-pendaftaran-rekrutmen-bersama-bumn-2026), [Diskominfo Lamongan 18 May 2026](https://diskominfo.lamongankab.go.id/posting/50183) and [JalaHoaks Jakarta 13 Feb 2026](https://jalahoaks.jakarta.go.id/detail/Hoaks-Lowongan-Pekerjaan-BUMN-2026).

## 5. General eligibility (RBB 2025)

**Verified on Tier A:**

- Education levels: SMA/SMK sederajat, D3, D4/S1, S2 (bumn.go.id release; FHCI X, 6 Mar 2025).
- Three tracks: Reguler, Disabilitas, Putra dan Putri Papua / Orang Asli Papua (FHCI X, 6 Mar 2025).
- Only one position may be chosen (FHCI X, 7 Mar 2025): "kamu hanya diperbolehkan memilih satu posisi".
- Documents. Source: FHCI X [status 1897522359122452860](https://x.com/fhcibumn/status/1897522359122452860), slides 2–3, 6 Mar 2025:
  - "Foto Profil · KTP · Ijazah / Surat Keterangan Lulus · Transkrip Nilai / Nilai Ujian Sekolah: Wajib" for all three tracks.
  - "SKCK · Dokumen Lainnya (Sertifikat Pelatihan, Bahasa Inggris, dll) · Curriculum Vitae · Portofolio · Surat Rekomendasi: Optional".
  - "Akta Kelahiran · Kartu Keluarga: Wajib" only for Orang Asli Papua.

**Not verified on Tier A:** age limits per education level and minimum IPK / school-exam score. See Unverified.

## 6. Verification of current site claims

| # | Site claim (file) | Verdict | Primary evidence |
| - | ----------------- | ------- | ---------------- |
| 1 | "RBB diselenggarakan Kementerian BUMN bersama FHCI" (`seleksiBumn.description`) | **True for 2025, outdated now.** The ministry has been replaced by BP BUMN since Oct 2025. Suggest "RBB 2025 diselenggarakan Kementerian BUMN (kini Badan Pengaturan BUMN) bersama FHCI". | bumn.go.id release, 5 Mar 2025; UU 16/2025 Pasal 93(4), 94D; Perpres 105/2025 Pasal 60 |
| 2 | "Pada RBB 2025, peserta yang lolos seleksi administrasi mengikuti dua tahap tes online, lalu tes lanjutan di BUMN yang dilamar" | **Verified** | FHCI IG 4 May 2025 (OLT 1 → OLT 2); FHCI IG 19 May 2025 ("Tes Online Tahap 2"); bumn.go.id ("tes kemampuan bidang di masing-masing BUMN") |
| 3 | "Setiap tes punya nilai ambang batas yang harus dipenuhi untuk lanjut ke tahap 2" | **Verified**, but add the ranking rule: 200 best per position, ties at rank 200 also pass | FHCI IG 4 May 2025, slides 2–4 |
| 4 | TKD: 100 soal, 73 menit, passing grade 58 | **Verified** (weight 40%) | FHCI X 18 Apr 2025; FHCI IG 4 May 2025 |
| 5 | Tes AKHLAK: 90 soal, 30 menit, passing grade 65 | **Verified** (weight 50%) | same |
| 6 | TWK: 10 soal, 10 menit, passing grade 50 | **Verified** (weight 10%) | same |
| 7 | TKD described as "logika dasar, verbal, dan numerik" | **Unverified on Tier A.** FHCI's slide gives no topic list. Kompas quotes the FHCI director with this wording. | Tier C only |
| 8 | AKHLAK described as "Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif" | Not on the test slide. These are the AKHLAK core values; no RBB-specific Tier A text was found. | — |
| 9 | TWK topics (Pancasila, konstitusi, sejarah, Bhinneka Tunggal Ika) | **Unverified on Tier A** (Kompas / portal FAQ only) | Tier C |
| 10 | Tahap 2 = Tes Bahasa Inggris + Learning Agility | **Verified** | FHCI IG/X 19 May 2025 |
| 11 | "Pelamar lulusan SMA/sederajat tidak mengikuti tes [Bahasa Inggris]" | **Unverified.** No Tier A source. | Tier C (Malang Times: "kecuali jenjang SMA"; Tribun: "untuk jenjang pendidikan D3 hingga S2") |
| 12 | "Di tahap 2, tes Learning Agility memiliki ambang batas 36" (`passingGradeBumn.note`) | **MISMATCH.** FHCI's OLT 2 slide (19 May 2025) says Learning Agility ≥ **16**, 35 menit, 100 soal. 36 / 40 menit was the earlier 18 Apr 2025 figure. Also add Tes Bahasa Inggris ≥ **450**, 85 soal, 80 menit. | FHCI IG 19 May 2025 slide 3 vs FHCI X 18 Apr 2025 |
| 13 | "Nilai ambang batas Tes Online Tahap 1 … yang diumumkan FHCI" | **Verified** | FHCI X 18 Apr 2025 |
| 14 | `sourceLabel` / `sourceHref` = Kompas.com | **Replace** with FHCI's own post: [x.com/fhcibumn/status/1913070090242953322](https://x.com/fhcibumn/status/1913070090242953322) (OLT 1) and/or [instagram.com/fhci.bumn/p/DJQuLGtSMoH](https://www.instagram.com/fhci.bumn/p/DJQuLGtSMoH/) (OLT 1 per subtest). For OLT 2 use [instagram.com/fhci.bumn/p/DJ1JEPuRFvW](https://www.instagram.com/fhci.bumn/p/DJ1JEPuRFvW/). | — |
| 15 | TKB stage title "Psikotes, Wawancara & Tes Kesehatan" | **Partly verified.** bumn.go.id names only "wawancara dan tes kesehatan". Psikotes appears only in Tier C sources (e.g. Malang Times quoting the portal). The site's own wording "Jenis tes lanjutan ditentukan oleh BUMN yang dilamar" is safe. | bumn.go.id release |
| 16 | Stage name "Tes Kemampuan Bidang (TKB)" "diselenggarakan oleh masing-masing BUMN" | **Verified** ("tes kemampuan bidang di masing-masing BUMN") | bumn.go.id release |

## Unverified / conflicting

- **RBB 2026 timing.** Tutoring and news sites (Jan–Apr 2026) carry "prediksi Maret–Mei 2026" schedules and invented portals (`rekrutmenbersama2026.fhcibumn.id`). No official basis was found. [exademy.com](https://exademy.com/jadwal-ujian/tes-kerja-bumn-rbb/) claims "FHCI menegaskan lewat kanal resminya pada April 2026 bahwa informasi resmi belum ada"; I did not find that FHCI post.
- **Age and IPK limits.** Reported as "SMA/SMK maks. 25 th, D3 27, D4/S1 30, S2 35; experienced hire 45; IPK min. 3,00 (D3/D4/S1), 3,25 (S2); SMA nilai rata-rata 75" by [Detik 11 Mar 2025](https://www.detik.com/edu/detikpedia/d-7817757/link-pendaftaran-rekrutmen-bersama-bumn-2025-cek-recruitmen-platform-fhci-bumn-sekarang), [Kompas TV 7 Mar 2025](https://www.kompas.tv/ekonomi/578646/pendaftaran-rekrutmen-bersama-bumn-2025-ini-11-dokumen-wajib-yang-harus-disiapkan-sebelum-melamar) and [Suara 12 Apr 2025](https://www.suara.com/news/2025/04/12/112928/ini-kisi-kisi-rekrutmen-bersama-bumn-2025-tahap-1) ("per 7 Maret 2025").
  - Several outlets say these figures were carried over from 2024.
  - The source was the 2025 portal (API-driven, not archived) and is now gone.
  - **Do not publish.**
- **Original registration window and extension.**
  - The original window was 7–16 Mar (account creation) and 10–16 Mar (applications), per Tribun, CNN Indonesia and Telkom.co.id quoting @kementerianbumn / FHCI.
  - It was extended to 19 Mar 2025 per a [BRI LinkedIn repost, 17 Mar 2025](https://www.linkedin.com/posts/pt-bank-rakyat-indonesia-persero-tbk_pendaftaran-rbb-2025-diperpanjang-activity-7307330683696275456-Qmyc): "Penutupan periode registrasi dan job apply menjadi Rabu, 19 Maret 2025!"
  - The 19 Mar closing date itself is Tier A (FHCI IG 19 Mar 2025).
- **OLT 1 dates 19–28 Apr 2025.** Tier C only (Kompas TV, Tribun, Detik Sumut). FHCI X posted "Selamat mengerjakan Tes Tahap 1" on 18 Apr 2025.
- **TWK duration.**
  - FHCI's slide says 10 menit.
  - [Dealls](https://dealls.com/pengembangan-karir/soal-tkd-bumn) and some blogs say 5 menit. They are wrong per FHCI.
- **Learning Agility 36 vs 16.**
  - Kompas (18 Apr 2025), Detik Jateng, Bernas and RCTI+ report 36 / 40 menit. That matches FHCI's 18 Apr slide.
  - FHCI's 19 May 2025 slide says 16 / 35 menit. Use 16.
  - Other unofficial figures circulate, such as "197 dari 300" (Tribun Sumsel, soalrbbbumn.com) and a "TKD 110 / TIU 35 / AKHLAK 64 / Core Values 154" set (ebrita.com, serayunews.com). They match no FHCI source and should be ignored.
- **OLT 1 vs OLT 2 combined weights.** "SMA 40/60, diploma/sarjana 60/40" per Tribun Sumsel. Not seen on Tier A.
- **Danantara's role in recruitment.** [ANTARA, 24 Aug 2026](https://www.antaranews.com/berita/5709023/bp-bumn-danantara-siapkan-sistem-sdm-terintegrasi-untuk-seluruh-bumn) quotes Kepala BP BUMN / COO Danantara Dony Oskaria on an integrated SDM and grading system for all BUMN. Nothing about RBB.
- **@kementerianbumn vs @bumn_id.** The 2025 materials name `@kementerianbumn`. bumn.go.id now embeds `@bumn_id` ("Badan Pengaturan BUMN"). Whether this is a rename or a separate account was not verified.

## URLs fetched

Tier A (organizer and government):

- https://fhcibumn.com/
- https://fhcibumn.com/program
- https://fhcibumn.com/program/rekrutmen-bersama-bumn-rbb-vPteSd
- https://fhcibumn.com/gallery/news (and ?page=2, ?page=3)
- https://fhcibumn.com/agenda
- https://magentaku.id/
- https://bumn.go.id/
- https://bumn.go.id/peluang/karir/karir-bumn
- https://bumn.go.id/peluang/karir/landing-page
- https://bumn.go.id/peluang/karir/karir-kbumn
- https://bumn.go.id/publikasi/pengumuman
- https://bumn.go.id/publikasi/berita/rilis/detail/67f5f71ed5c0d
- https://bumn.go.id/search/?q=rekrutmen+bersama (client-side search; no results rendered)
- https://bumn.go.id/index.php/publikasi/berita/rilis/detail/65cd8686b397c (via search highlight; 2024 release)
- https://www.instagram.com/fhci.bumn/
- https://www.instagram.com/fhci.bumn/p/DOaJszXkdC6/
- https://www.instagram.com/fhci.bumn/p/DHZLQL6TGyL/
- https://www.instagram.com/fhci.bumn/p/DJQuLGtSMoH/ (plus embed and carousel images)
- https://www.instagram.com/fhci.bumn/p/DJ1JEPuRFvW/ (plus embed and carousel images)
- https://www.instagram.com/fhci.bumn/reel/DHBMDNqp8nq/
- https://syndication.twitter.com/srv/timeline-profile/screen-name/fhcibumn
- pbs.twimg.com media of FHCI X statuses 1897522359122452860, 1897937989466308796, 1899399359273587147, 1911788294050033965, 1913070090242953322, 1923559934496813137
- https://www.linkedin.com/posts/fhcibumn_sobatbumn-sobatfhci-rbb2025-activity-7350345140391059457-nEsY
- https://web.archive.org/web/20250304151602/https://rekrutmenbersama2025.fhcibumn.id/
- https://web.archive.org/web/20250311234155/https://rekrutmenbersama2025.fhcibumn.id/about
- https://web.archive.org/web/20250307031157/https://api-rbb.fhcibumn.id/general/career/get-config
- Wayback CDX listings for rekrutmenbersama2025.fhcibumn.id, rekrutmenbersama.fhcibumn.id, fhcibumn.id, api-rbb.fhcibumn.id, storage.googleapis.com/rbb_wr_files, instagram.com/fhci.bumn
- Portal JS bundles (archived) for rekrutmenbersama2025.fhcibumn.id

Tier A (regulation):

- https://peraturan.bpk.go.id/Details/330668/uu-no-16-tahun-2025
- https://peraturan.bpk.go.id/Download/392677/UU%20Nomor%2016%20Tahun%202025.pdf
- https://jdih.kemenkeu.go.id/api/download/c5c31a20-c947-4a24-80c3-802682b75483/2025UU016.pdf
- https://peraturan.bpk.go.id/Details/334645/perpres-no-105-tahun-2025
- https://peraturan.bpk.go.id/Download/397210/Perpres%20Nomor%20105%20Tahun%202025.pdf

Domain evidence:

- https://rekrutmenbersama.fhcibumn.id/
- https://rekrutmenbersama2026.fhcibumn.id/
- https://fhcibumn.id/ (parking pages)
- https://rekrutmenbersama2025.fhcibumn.id/ (connection refused / parking IP)
- https://rdap.pandi.id/rdap/domain/fhcibumn.id
- https://rdap.pandi.id/rdap/domain/fhci.id
- https://rdap.verisign.com/com/v1/domain/fhcibumn.com
- https://dns.google/resolve (NS/A/MX for fhcibumn.id, fhcibumn.com and subdomains; fhci.id; rbb2025.setaraberdaya.com)
- https://storage.googleapis.com/rbb_wr_files (NoSuchBucket)

Tier C (discovery only):

- https://www.kompas.com/tren/read/2025/04/18/101500665/ini-passing-grade-twk-tkd-dan-tes-akhlak-dalam-rekrutmen-bersama-bumn-2025
- https://www.tribunnews.com/nasional/2025/04/18/nilai-ambang-batas-tes-tahap-1-rekrutmen-bersama-bumn-2025-perhatikan-agar-lolos
- https://m.tribunnews.com/nasional/2025/05/20/terbaru-nilai-ambang-batas-tes-online-tahap-2-rekrutmen-bersama-bumn-2025
- https://www.tribunnews.com/nasional/2025/03/20/rekrutmen-bersama-bumn-2025-resmi-ditutup-ini-tahapan-selanjutnya
- https://www.tribunnews.com/nasional/2025/03/05/rekrutmen-bersama-bumn-2025-dibuka-7-maret-ini-link-dan-tahapan-pendaftarannya
- https://www.tribunnews.com/nasional/2025/05/17/kapan-tes-online-tahap-2-rekrutmen-bersama-bumn-2025-dilaksanakan-cek-jadwalnya-di-sini
- https://www.tribunnews.com/nasional/2025/04/19/fhci-umumkan-rincian-passing-grade-twk-tkd-dan-tes-akhlak-rbb-2025-awasi-ambang-batas-berikut
- https://kaltim.tribunnews.com/2025/04/20/aturan-tes-online-rekrutmen-bersama-bumn-2025-dan-passing-grade-twk-tkd-hingga-tes-akhlak-rbb
- https://kaltim.tribunnews.com/2025/05/21/lengkap-tips-jitu-fhci-inilah-materi-soal-ujian-tahap-2-di-rekrutmen-bersama-bumn-2025
- https://bangka.tribunnews.com/2025/04/26/rekrutmen-bersama-bumn-2025-kisi-kisi-materi-tes-tahap-2-pelajari-learning-agility
- https://tirto.id/passing-grade-learning-agility-tbi-bumn-tes-online-tahap-2-hbZu
- https://tirto.id/tips-jitu-fhci-tes-online-tahap-2-rekrutmen-bersama-bumn-2025-hb2k
- https://tirto.id/berapa-ipk-minimal-daftar-rbb-2025-cek-ketentuan-dan-usia-g86F
- https://tirto.id/link-pengumuman-hasil-tes-online-tahap-1-bumn-2025-hbB3
- https://tirto.id/apakah-tes-online-tahap-2-bumn-2025-perlu-install-seb-lagi-hbUc
- https://www.detik.com/edu/detikpedia/d-7817757/link-pendaftaran-rekrutmen-bersama-bumn-2025-cek-recruitmen-platform-fhci-bumn-sekarang
- https://www.detik.com/jogja/bisnis/d-7809890/rekrutmen-bersama-bumn-dibuka-7-maret-2025-cek-syarat-dan-cara-daftarnya
- https://www.detik.com/jateng/bisnis/d-7888185/tes-online-2-bumn-apa-saja-ini-kisi-kisinya-sesuai-panduan-rbb-2025
- https://www.kompas.tv/ekonomi/578646/pendaftaran-rekrutmen-bersama-bumn-2025-ini-11-dokumen-wajib-yang-harus-disiapkan-sebelum-melamar
- https://www.kompas.tv/ekonomi/575788/rekrutmen-bersama-bumn-dibuka-maret-2025-ini-syarat-dan-tahapannya
- https://www.kompas.tv/amp/ekonomi/598599/link-dan-cara-cek-pengumuman-hasil-tes-tahap-2-rekrutmen-bersama-bumn-2025-beserta-jadwalnya?page=all
- https://www.kompas.com/kalimantan-timur/read/2025/02/21/221837488/rekrutmen-bersama-bumn-2025-ini-link-daftar-syarat-dan-tahapan
- https://www.kompas.com/tren/read/2025/03/07/073000365/rekrutmen-bersama-bumn-dibuka-7-maret-2025-lulusan-sma-bisa-daftar-
- https://www.kompas.com/edu/read/2025/02/25/194500871/syarat-rekrutmen-bersama-bumn-2025-lulusan-sma-smk-bisa-daftar
- https://www.kompas.com/tren/read/2025/03/07/150000465/cara-daftar-persyaratan-dan-jadwal-rekrutmen-bersama-bumn-2025
- https://tekno.kompas.com/read/2025/03/07/13020087/sudah-dibuka-ini-link-dan-cara-daftar-rekrutmen-bersama-bumn-2025-
- https://www.tempo.co/ekonomi/rekrutmen-bersama-bumn-2025-ini-persyaratan-dan-cara-mendaftar-1216500
- https://www.tempo.co/ekonomi/tahapan-rekrutmen-bersama-bumn-2025-termasuk-untuk-disabilitas-dan-orang-asli-papua-1217089
- https://www.suara.com/news/2025/04/12/112928/ini-kisi-kisi-rekrutmen-bersama-bumn-2025-tahap-1
- https://www.liputan6.com/cek-fakta/read/7867471/kumpulan-hoaks-pendaftaran-rekrutmen-bersama-bumn-simak-faktanya
- https://www.liputan6.com/cek-fakta/read/7839160/cek-fakta-tidak-benar-link-pendaftaran-rekrutmen-bersama-bumn-2026
- https://www.liputan6.com/bisnis/read/6025353/ikut-rekrutmen-bersama-bumn-2025-begini-cara-ketahui-lolos-tidaknya
- https://edukasi.sindonews.com/read/1556803/211/nilai-ambang-batas-terbaru-rekrutmen-bersama-bumn-2025-cek-standar-kelulusannya-1744981452
- https://www.rctiplus.com/news/detail/gaya-hidup/4734006/nilai-ambang-batas-terbaru-rekrutmen-bersama-bumn-2025-cek-standar-kelulusannya
- https://kumparan.com/dunia-karier/bagaimana-jika-nilai-tkd-bumn-kurang-ini-penjelasan-dan-passing-grade-bumn-2025-24uJsq7PgVe
- https://www.jatimnetwork.com/trending/4314980769/nilai-ambang-batas-tes-online-bumn-tahap-1-lengkap-dengan-durasi-pengerjaan-dan-jumlah-soal
- https://www.jatimnetwork.com/trending/4314959579/apa-saja-komponen-yang-dicek-dalam-compatibility-device-check-pejuang-bumn-persiapkan-4-hal-ini
- https://www.megatrust.co.id/nilai-passing-grade-tes-online-tahap-2-rbb-2025-dan-jadwal-pengumumannya/
- https://www.suaramerdeka.com/nasional/0415017705/kupas-soal-rekrutmen-bersama-twk-bumn-2025-semboyan-tni-jadi-pertanyaan-ini-penjelasannya
- https://www.warnanusa.com/nasional/83515035084/jadwal-resmi-dan-kisi-kisi-materi-tes-online-2-bumn-2025-jangan-sampai-terlewat
- https://www.argumen.id/nasional/086045523/informasi-resmi-passing-grade-tahap-2-rbb-bumn-2025-tes-bahasa-inggris-dan-learning-agility
- https://www.kabaralam.com/berita/59315233243/ini-nilai-ambang-batas-kelulusan-tes-online-tahap-2-rekrutmen-bersama-bumn-2025
- https://www.kabaralam.com/berita/59315211485/kapan-pengumuman-hasil-tes-online-tahap-2-rekrutmen-bersama-bumn-2025
- https://blog.ayocpns.com/berita/tes-online-tahap-2-dimulai-besok-cek-jadwal-kamu-jangan-sampai-terlewat/
- https://bernasnews.com/2025/05/19/tes-online-tahap-2-bumn-apa-saja-cek-kisi-kisinya-di-sini/
- https://www.medcom.id/pendidikan/jobseeker/5b2wdYvk-awas-kelewat-tes-online-1-rbb-bumn-2025-mulai-19-april-ini-cara-cek-jadwalnya
- https://beritajateng.tv/tes-online-tahap-1-rekrutmen-bersama-bumn-2025-ini-panduannya-dan-cara-install-safe-exam-browser/
- https://suksescpns.id/segini-passing-grade-tahap-1-pada-seleksi-rbb-tahun-2025/
- https://kbbacehnews.com/rekrutmen-bersama-bumn-2025-dibuka-besok-lulusan-sma-smk-bisa-daftar/
- https://exademy.com/jadwal-ujian/tes-kerja-bumn-rbb/
- https://diskominfo.lamongankab.go.id/posting/50183
- https://jalahoaks.jakarta.go.id/detail/Hoaks-Lowongan-Pekerjaan-BUMN-2026
- https://turnbackhoax.id/articles/34430-penipuan-tautan-rekrutmen-bersama-bumn-2026
- https://www.antaranews.com/berita/5709023/bp-bumn-danantara-siapkan-sistem-sdm-terintegrasi-untuk-seluruh-bumn (search highlight only)
- https://www.youtube.com/@fhcibumn5207/videos (feed unavailable)
