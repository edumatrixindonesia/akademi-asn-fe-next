# Akademi ASN

Marketing site for Akademi ASN, a tutoring service (bimbel) that prepares candidates for Indonesian civil-service and state-enterprise selection exams.

## Language

**Edumatrix**:
The parent company. Akademi ASN is an Edumatrix brand, so copy may say "Akademi ASN by Edumatrix".

**Exam track**:
One of the three selection exams the tutoring covers: CPNS, PPPK, or BUMN. Always written `pppk` (never `ppk`) in URLs and identifiers.
_Avoid_: program (reserved for Paket Program)

**Landing page**:
A page that sells tutoring: the home page, an exam-track page (`/bimbel-cpns`, `/bimbel-pppk`, `/bimbel-bumn`), or any location variant of those. Every landing page contains the Paket Program and Testimoni sections.

**Location page**:
A landing page scoped to a region (province, regency, district, or village), with region names from region-service.

**Jangkauan**:
The section that links to the location pages one level below the current page, within the same page family: provinces on the home and exam-track pages, then that region's regencies, districts, or villages on a location page. Pages at the deepest level show no Jangkauan.

**Lokasi Lain**:
The section on a location page that links to the other regions under the same parent, within the same page family (e.g. the other districts of Kota Bandung). Its heading names the parent ("Lokasi lain di Kota Bandung"), or reads "Provinsi lain" on a province page.
_Avoid_: lokasi terdekat (siblings are not necessarily near)

**Kabupaten Besar**:
The regencies and cities whose districts get location pages. Every province and every regency gets a location page; districts only in Kabupaten Besar.

**Jabodetabekjur**:
The Jakarta metro regencies and cities (Jakarta, Bogor, Depok, Tangerang, Bekasi, Cianjur) whose villages also get location pages. Every Jabodetabekjur regency is also a Kabupaten Besar.

**Materi**:
The subjects covered by the tutoring (e.g. TKD, Bahasa Indonesia, psikotes & wawancara), shown as a section on landing pages.
_Avoid_: program materi (program is reserved for Paket Program)

**Tantangan Seleksi**:
The common reasons candidates fail the selection exam (e.g. poor time management, focusing on one sub-test), shown as a section on landing pages.
_Avoid_: failure

**Paket Program**:
The tutoring packages offered for sale, shown as a section on every landing page. Offline packages (Optima, Maxima, Ultima) can each be taken as Kelas Offline or Privat Home Visit. Online and tryout packages are available everywhere.
_Avoid_: pricing, plans

**Kelas Offline**:
An offline package taken at the Akademi ASN office. Available only in DI Yogyakarta.
_Avoid_: offline (on its own, "offline" covers both Kelas Offline and Privat Home Visit)

**Privat Home Visit**:
An offline package where the tutor travels to the student's home or office. Available anywhere.
_Avoid_: offline (on its own)

**Seleksi**:
The selection stages of an exam track, shown on every landing page: SKD (TWK, TIU, TKP) and SKB for CPNS; the competency test (technical, managerial, socio-cultural, and interview) for PPPK; and the Rekrutmen Bersama BUMN online tests and each company's follow-up tests for BUMN.

**Passing Grade**:
The minimum score for each test in a selection stage: the SKD sub-tests for CPNS and the Rekrutmen Bersama BUMN online tests for BUMN. Passing the threshold alone does not guarantee a place in the next stage. PPPK selection has no passing grade (candidates pass by ranking), so the PPPK page shows its scoring system in this section instead.

**Lembaga**:
The institutions (government ministries and agencies) that alumni joined after passing the selection exam, shown as a logo marquee on every landing page.

**Media Massa**:
The news outlets that covered Akademi ASN, shown as a logo grid on every landing page.

**Keunggulan**:
The reasons to choose Akademi ASN tutoring (e.g. private 1-on-1 sessions, master teachers, flexible schedules), shown as a section on every landing page.
_Avoid_: features, benefits

**Testimoni**:
Reviews from past students, shown as a section on every landing page.

**Tryout**:
Practice exams that simulate the real selection test. Has its own page, not a landing-page section.

**Produk**:
The catalog of all sellable products. Has its own page.

**Konsultasi**:
A free chat with an Admin Konsultasi over WhatsApp. It is the primary call to action across the site.

**Admin Konsultasi**:
One of the Akademi ASN admins who answer Konsultasi chats. Konsultasi links rotate between them, one admin per day.
_Avoid_: CS, call center (the UI label "Call Center" stays)

**Nomor Call Center**:
The one published Akademi ASN phone number, identical on every page and in structured data so local search sees a consistent NAP. It may differ from the Admin Konsultasi who receives that day's Konsultasi chats.
