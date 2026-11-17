import LinkBioArtikel from "@/components/sections/link-bio-artikel";
import LinkBioFooter from "@/components/sections/link-bio-footer";
import LinkBioHeader from "@/components/sections/link-bio-header";
import LinkBioKonsultasi from "@/components/sections/link-bio-konsultasi";
import LinkBioExamTrack from "@/components/sections/link-bio-exam-track";
import { linkBioArtikel } from "@/data/link-bio-artikel";
import { linkBioFooter } from "@/data/link-bio-footer";
import { linkBioHeader } from "@/data/link-bio-header";
import { linkBioKonsultasi } from "@/data/link-bio-konsultasi";
import { linkBioExamTrack } from "@/data/link-bio-exam-track";

// Link Bio: the standalone page for the Instagram bio, without the site
// Navbar and Footer (docs/adr/0008-link-bio-outside-site-layout.md).
const LinkBio = () => (
  <div className="flex-1 bg-muted">
    <LinkBioHeader {...linkBioHeader} />
    <main className="mx-auto w-full max-w-140 px-4">
      <LinkBioKonsultasi {...linkBioKonsultasi} />
      <LinkBioExamTrack {...linkBioExamTrack} />
      <LinkBioArtikel {...linkBioArtikel()} />
    </main>
    <LinkBioFooter {...linkBioFooter} />
  </div>
);

export default LinkBio;
