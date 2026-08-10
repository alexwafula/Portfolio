"use client";

import TitleCategory from "@/components/layout/TitleCategory";
import TextAboutPro from "@/components/section/professional/TextAbout";
import TextAboutStud from "@/components/section/student/TextAbout";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  const isProfessional = pathname.startsWith("/professional");

  return (
    <TitleCategory id="about" title="About">
      {/* fonction qui change de text en de la catégorie selectionner au debut */}
      {/* si le lien est /professional mettre le TextAboutPro */}
      {/* si le lien est /student mettre le TextAboutStud */}
      {isProfessional ? <TextAboutPro /> : <TextAboutStud />}
    </TitleCategory>
  );
}
