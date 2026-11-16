# Bukti verifikasi Tabel Klaim

Each dated folder holds the copies of the Sumber Resmi that the Tabel Klaim in `docs/klaim/` were checked against on that day. If a source page changes or disappears later, these copies show what it said when the Klaim was approved.

The build reads only the `.md` files directly inside `docs/klaim/`, so nothing in this folder is validated or rendered.

## 2026-11-16

Covers `docs/klaim/cpns-2026.md` and `docs/klaim/cpns-2027.md`, both approved by the owner on 16 November 2026. News sources that the owner dropped are not kept.

- `sumber/`: each cited source. PDFs are kept byte for byte. Web pages are kept as extracted text, with navigation menus included.
- `sscasn/`: the SSCASN pages, which load their content by script. `beranda-tanpa-javascript.txt` is the homepage without its script ("Data tahapan belum tersedia"); that placeholder is why the 5 November SSCASN Klaim in `cpns-2027` was replaced. `beranda-render.txt` and `beranda-2026-11-16.jpg` are the homepage rendered in headless Chrome. `linimasa-tiga-tab.txt` holds each "TIMELINE PENGADAAN" tab after it was clicked. `daftar-formasi.txt` is the rendered Daftar Formasi page.
- `gambar/`: page images for figures that a PDF text layer gets wrong. KepmenPANRB 321/2024 is a scan, so its quotes were checked against `kepmenpanrb-321-2024-ocr.txt` and the page images. In PP 2/2024, the text layer reads "100.ooo"; the page image shows "100.000".
- `cek-kutipan.txt`: output of the quote check. Every quote in both Tabel Klaim was matched word for word against these copies. For `cpns-2027`, two results need a person to read them:
  - "pendaftaran" is the word that an absence Klaim says the KemenPANRB press release does not contain. The check confirmed the word is absent.
  - "1. Seleksi calon mahasiswa sekolah kedinasan ikatan dinas" comes from PP 2/2024. The PDF text layer drops the period after "1". The page image `gambar/pp-2-2024-lampiran-hlm-13.jpg` shows the full line.
- `SHA256SUMS`: run `sha256sum -c SHA256SUMS` inside the dated folder to confirm no file has changed since it was saved.

### Source URLs

| File in `sumber/` | URL |
| --- | --- |
| `kemenpanrb-siaran-pers-378-2026.pdf` | menpan.go.id/file-media/2026/11/08/final-press-release-penataan-dan-pengadaan-cpns.pdf |
| `permenpanrb-6-2024.pdf` | peraturan.bpk.go.id/Download/353562/2024permenpanrb006.pdf (byte-identical to data-jdih.menpan.go.id/dokumen/2024permenpanrb006.pdf) |
| `kepmenpanrb-321-2024.pdf` | data-jdih.menpan.go.id/dokumen/2024kepmenpanrb321.pdf |
| `pp-2-2024.pdf` | peraturan.bpk.go.id/Download/333081/PP Nomor 2 Tahun 2024.pdf |
| `jdih-bpk-permenpanrb-6-2024.txt` | peraturan.bpk.go.id/Details/294203/permen-panrb-no-6-tahun-2024 |
| `jdih-bpk-pp-2-2024.txt` | peraturan.bpk.go.id/Details/274668/pp-no-2-tahun-2024 |
| `jdih-kemenpanrb-permenpanrb-6-2024.txt` | jdih.menpan.go.id/dokumen-hukum/peraturan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-6-tahun-2024-tentang-p-1849 |
| `jdih-kemenpanrb-kepmenpanrb-321-2024.txt` | jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-321-tahun-2024-tentang-1851 |
| `setneg-pppk-paruh-waktu-2027.txt` | setneg.go.id/baca/index/pemerintah_dan_dpr_sepakat_tingkatkan_status_pppk_paruh_waktu_menjadi_penuh_waktu_mulai_2027 |
| `bkn-poster-hoaks-cpns-2026.txt` | www.bkn.go.id/karo-komlik-bkn-wisudo-putro-nugroho-poster-pembukaan-cpns-2026-yang-beredar-dipastikan-hoaks/ |
| `bkn-jadwal-sekolah-kedinasan-2026.txt` | www.bkn.go.id/kepala-bkn-pantau-jadwalnya-pendaftaran-seleksi-sekolah-kedinasan-tahun-2026-dimulai-18-agustus/ |
| `bkn-hoaks-seleksi-kemenkes-2026.txt` | www.bkn.go.id/beredar-informasi-seleksi-kemenkes-2026-prof-zudan-itu-hoaks-rekrutmen-asn-terintegrasi-dan-diawasi-bkn/ |
| `kemendikdasmen-735-sipers-2026.txt` | www.kemendikdasmen.go.id/siaran-pers/16055-mulai-2027-pemerintah-buka-jalan-lebih-jelas-bagi-karier-guru-pppk |
| `kemendikdasmen-858-sipers-2026.txt` | www.kemendikdasmen.go.id/siaran-pers/16271-penataan-guru-jadi-fokus-pemerintah-kepastian-status-disiapkan-mulai-2027 |
| `kemenpanrb-4770-kebutuhan-sekolah-kedinasan-render.txt` | www.menpan.go.id/site/berita-terkini/pemerintah-siapkan-4-770-kebutuhan-cpns-sekolah-kedinasan-2026 (rendered in headless Chrome) |
| `cat-bkn-faq-hlm-25.txt` | cat.bkn.go.id/faq?page=25 |

The URLs are written without `https://` so the Tabel Klaim URL check does not pick them up if this text is ever copied into a Tabel Klaim.
