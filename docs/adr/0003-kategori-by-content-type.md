# 3. Kategori group Artikel by content type, not exam track

Date: 2026-10-13

## Status

Accepted; the Artikel Terbaru part is superseded by [0005](0005-artikel-terbaru-ignores-exam-track.md).

## Context

The Blog launched with one Kategori per exam track (CPNS, PPPK, BUMN) plus Tips & Info for cross-track topics, and each Artikel had exactly one Kategori. That forced cross-track Artikel such as "Perbedaan CPNS dan PPPK" into a catch-all Kategori. It also duplicated the exam-track landing pages, which are already the hubs we want to rank for "bimbel cpns" and similar queries. The owner disliked both the exam-track Kategori and the combined "Tips & Info" name, and chose the standard word "Informasi" over the colloquial "Info" for a professional tone toward civil-service candidates.

The Ruangguru group's blogs (Ruangguru, Brain Academy) group posts by content type (Latihan Soal, Konsep Pelajaran, Pojok Kampus, product news), not by product.

## Decision

- Kategori are content types: Informasi, Tips, Latihan Soal, Materi. An Artikel lists one or more; the first is its primary Kategori for the breadcrumb.
- Exam track is a separate, required, multi-valued Artikel attribute (`examTrack`) with no public page. It picks Artikel Terbaru on landing pages, ranks Artikel Terkait, and picks the default cover.
- The old Kategori URLs 308-redirect: `/blog/kategori/{cpns,pppk,bumn}` to `/blog`, `/blog/kategori/tips-info` to `/blog/kategori/informasi`.

## Considered options

- **Public exam-track tags** (`/blog/tag/cpns`): rejected. They bring back the exam-track listing pages under another name and compete with the landing pages.
- **No exam track at all**, landing pages showing the newest Artikel of any track: rejected. A BUMN Artikel on `/bimbel-cpns` is a weak internal link.

## Consequences

- Reintroducing exam-track Kategori would need new redirects from the retired URLs, so treat this as settled.
- The same Artikel can appear in several Kategori sections on `/blog`; that is a listing, not duplicate content.
