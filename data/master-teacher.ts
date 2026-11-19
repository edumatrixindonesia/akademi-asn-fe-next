import type { MasterTeacherProps } from "@/components/sections/master-teacher";

const names = [
  "Arya Saputra",
  "Bangun Tri Susilo",
  "Dana Resfiana",
  "Firda Febriana",
  "Mella Narolita",
  "Muh Arinal Haq",
  "Rizal Taufiq",
  "Siwi Damayanti",
  "Yogma Hasani",
  "Yulfiza Evan",
];

export const masterTeacher = {
  title: "Master Teacher Akademi ASN",
  description:
    "Persiapan CPNS, PPPK, dan BUMN dibimbing tutor berpengalaman lulusan S1 dan S2 PTN ternama.",
  role: "Master Teacher",
  teachers: names.map((name) => ({
    name,
    photo: `/img/section/master-teacher-${name.toLowerCase().replaceAll(" ", "-")}-bimbel-cpns-pppk-bumn.webp`,
    alt: `Foto ${name}, Master Teacher bimbel CPNS, PPPK, dan BUMN Akademi ASN`,
  })),
} satisfies MasterTeacherProps;
