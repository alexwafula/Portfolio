import GridProject from "@/components/section/projets/GridProject";
import HeroCategoryProject from "@/components/section/projets/HeroProject";
import { projects_perso } from "@/data/projects/perso";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroCategoryProject
        title="Selected Projects"
        description="A concise selection of full-stack, mobile, API and operational systems work."
      />
      <GridProject projects={projects_perso} />
    </main>
  );
}
