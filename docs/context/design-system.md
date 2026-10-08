# Design System — bimbelcpnsindonesia.com (Beranda)

Sumber: `https://bimbelcpnsindonesia.com/` dan `/css/globals.css`, dianalisis 2026-09-23.
Situs memakai CSS murni (BEM-ish) dengan CSS custom properties di `:root`, tanpa framework CSS.

## Warna

### Token `:root` asli

| Token              | Nilai     | Peran                                                          | Jumlah pemakaian |
| ------------------ | --------- | -------------------------------------------------------------- | ---------------- |
| `--color-primary`  | `#237DC1` | **Warna utama.** Tombol navbar, gradien footer/section, link   | 20               |
| `--color-darker`   | `#00559F` | Primary gelap: hover, ujung gradien                            | 13               |
| `--primary-yellow` | `#FFB04F` | **Warna sekunder (aksen CTA).** Tombol hero, badge, CTA footer | 10               |
| `--primary-orange` | `#ED743F` | Aksen kedua: tombol tryout, call-box footer                    | 3                |
| `--primary-green`  | `#22C55E` | Ikon centang/list benefit                                      | 4                |
| `--white-custom`   | `#F6F7FC` | Latar section alternatif (off-white kebiruan)                  | 6                |
| `--secondary-blue` | `#F6F7FC` | Duplikat `--white-custom`                                      | 1                |
| `--dark-black`     | `black`   | Tidak terpakai                                                 | 0                |

### Ringkasan

- **Primary:** `#237DC1` (biru), varian gelap `#00559F`.
- **Secondary / aksen:** `#FFB04F` (kuning-oranye), varian `#ED743F` (oranye).
- **Success:** `#22C55E` / `#16A34A`.
- **Danger:** `#EF4444`.
- **Latar:** `#FFFFFF` (dominan) dan `#F6F7FC` (section selang-seling). Varian terang lain: `#F4F8FF`, `#F3F8FD`, `#F1F5F9`.
- **Teks:** body `#333`; heading/nav `#1F2933`, `#0F172A`; teks sekunder `#475569`, `#6B7280`.
- **Aksen lain (sekali-dua kali):** `#38BDF8`, `#1C6BB2`, `#3C5A7A`, `#FF6B00`, `#FF9800`, `#FFB347`, `#FBBF24`, `#F59E0B`.

### Gradien

```css
/* Footer, section biru (dipakai 3x) */
linear-gradient(180deg, var(--color-primary) 0%, var(--color-darker) 100%);
/* Varian diagonal */
linear-gradient(135deg, var(--color-darker), var(--color-primary));
/* Efek shine pada tombol */
linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
```

## Tipografi

- **Font family:** `'Poppins', sans-serif` (Google Fonts, weight 300/400/500/600/700).
  ```html
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  ```
- **Line height body:** `1.6`.
- **Weight terpakai:** 700 (23x), 800 (18x), 600 (15x), 900 (3x), 500 (1x). Catatan: 800/900 tidak dimuat dari Google Fonts, jadi browser menampilkan bold sintetis.

| Token                                            | Desktop | Mobile (≤768px) |
| ------------------------------------------------ | ------- | --------------- |
| Judul section (`--font-size-title` / `-mobile`)  | 28px    | 22px            |
| Subjudul (`--font-size-subtitle` / `-mobile`)    | 16px    | 14px            |
| Teks umum (`--general-font-desktop` / `-mobile`) | 16px    | 14px            |
| Teks besar (`--font-size-desktop`)               | 18px    | —               |
| Badge (`--badge-font-size` / `-mobile`)          | 12px    | 10px            |
| Navbar link                                      | 15px    | 16px            |

Ukuran hardcoded lain: 50px dan 40px (hero/angka besar), 32px, 30px, 26px, 25px, 20px, 13px.

## Spacing

### Padding section

| Token               | Nilai       | Kapan                       |
| ------------------- | ----------- | --------------------------- |
| `--desktop-padding` | `30px 80px` | Semua section desktop       |
| `--mobile-padding`  | `30px 30px` | Semua section ≤768px        |
| `--navbar-height`   | `80px`      | `scroll-margin-top` section |

- Navbar: `padding: 10px 80px`, `min-height: 70px` (mobile `10px 30px`).
- Section khusus: `80px 80px 260px 80px` (testimoni, ruang untuk overlap), `0 80px` (CTA footer).
- Container gutter horizontal: **80px desktop, 30px mobile**.

### Padding komponen

- Tombol: `10px 18px` (navbar CTA), `10px 20px`, `10px 25px`, `14px 28px` (CTA besar), `5px 15px` (badge/pill kecil).
- Card: `20px`, `24px`, `25px`, `2rem`.

### Margin & gap

- Margin bawah umum: `8px`, `10px`, `16px`, `20px`, `30px`, `40px` (skala sekitar 8/16/24/32/40).
- Gap: `8px`, `12px`, `0.75rem`, `1rem`, `24px`, `2rem`, `40px`, `3rem`.

### Radius & shadow

- Radius: `10px` (dominan), `12px`, `16px`, `1rem`, `20px`, `999px` (pill tombol navbar), `50%` (avatar/ikon bulat).
- Shadow navbar: `0 2px 10px rgba(0, 0, 0, 0.06)`.
- Shadow card: `0 8px 24px rgba(15, 23, 42, 0.15)`, `0 20px 40px rgba(0, 0, 0, 0.15)`, `0 25px 60px rgba(0, 0, 0, 0.18)`.

### Breakpoint

Utama `768px` (17x) dan `991px`/`992px` (10x). Lainnya: 1024, 900, 640, 576px.

## Struktur Section Beranda

1. `hero-jumbotron`
2. `benefit-section`
3. `programs-materi-wrapper` + `programs-materi-bottom`
4. `program-section` (Program Offline, Online & Tryout)
5. `seleksi-wrapper` (TWK, TIU, TKP, wawancara, teknis)
6. `passing-grade-section`
7. `lembaga-section` (logo instansi)
8. `testimoni-section`
9. `section-cta-footer`
10. `section-faq`
11. `section-media-massa`
12. `section-jangkauan`

## Asset Gambar & Ikon

Semua gambar berformat **WebP**, kecuali ikon benefit (**GIF** animasi) dan satu PNG. Tidak ada icon font atau library ikon. Hanya ada satu inline `<svg>` (stroke 24×24, gaya Lucide/Feather).

### Logo & ikon (`/img/logo/`)

- `logo-akademi-asn-footer.webp`
- `logo-akademi-asn.webp`
- `whatsapp.webp`
- `faq-question-icon-bimbel-cpns-ppk-bumn.webp` (3x)
- `x-icon-bimbel-cpns-ppk-bumn.webp`
- `forbidden-icon-bimbel-cpns-ppk-bumn.webp`
- `/favicon.ico`

### Gambar section (`/img/section/`)

- `program-materi-bimbel-cpns-pppk-bumn.png`
- `paket-online-bimbel-les-privat-cpns-pppk-bumn-terbaik-di-indonesia.webp`
- `paket-tryout-bimbel-cpns-pppk-bumn-terbaik-di-indonesia.webp`
- `berhasil-lolos-bimbel-cpns-pppk-bumn.webp`
- `testimoni-1-bimbel-cpns-ppk-bumn.webp`, `testimoni-2-bimbel-cpns-ppk-bumn.webp`
- `cta-footer-bimbel-cpns-pppk-bumn.webp`

### Konten dinamis (`/storage/`)

- **Jumbotron:** `jumbotron/bimbel-les-privat-cpns-pppk-bumn-terbaik-di-indonesia.webp` (hero), `jumbotron/bg/…tutor-profesional.webp` (background).
- **Benefit (GIF):** metode belajar privat 1-on-1, master teacher, jadwal fleksibel, bahan ajar ter-update, tips & trick.
- **Program online:** paket Optima, Maxima, Ultima.
- **Seleksi:** TWK, TIU, TKP, wawancara, teknis.
- **Lembaga (12 logo):** Kemenkeu, Kemendagri, Kemenag, Kemendikbud, Kemenkes, Kemnaker, Kemendag, Kemenpar, Kemenbud, PUPR, BUMN, Kejaksaan Agung.
- **Media massa (7 logo):** Kompas, Jawa Pos, Liputan 6, Kumparan, IDN Times, Tribun Jogja, KR Jogja.
- **Sosial media:** Instagram, TikTok, YouTube.

Pola nama file: `<topik>-bimbel-les-privat-cpns-pppk-bumn-terbaik-di-indonesia.webp` (nama berisi keyword SEO).

## Catatan

- `--secondary-blue` dan `--white-custom` bernilai sama. Cukup satu token.
- Situs memuat 5 weight Poppins, tetapi CSS memakai 800/900 yang tidak dimuat.
- Banyak hex hardcoded di luar token. Saat porting, petakan hex tersebut ke token terdekat.
