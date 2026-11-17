import { Building2, BriefcaseBusiness, Landmark } from "lucide-react";
import type { LinkBioExamTrackProps } from "@/components/sections/link-bio-exam-track";

export const linkBioExamTrack = {
  title: "Informasi Program",
  linkLabel: "Info Lengkap",
  items: [
    { label: "Bimbel CPNS", href: "/bimbel-cpns", icon: Landmark },
    { label: "Bimbel PPPK", href: "/bimbel-pppk", icon: BriefcaseBusiness },
    { label: "Bimbel BUMN", href: "/bimbel-bumn", icon: Building2 },
  ],
} satisfies LinkBioExamTrackProps;
