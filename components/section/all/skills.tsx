import TitleCategory from "@/components/layout/TitleCategory";
import { Languages, Frameworks, Logiciels } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <TitleCategory id="skills" title="Skills">
      <div className="flex flex-wrap gap-2.5">
        {Languages.map((language) => (
          <SkillsCard
            key={language.id}
            imageSrc={language.image}
            skills={language.name}
          />
        ))}

        {Frameworks.map((framework) => (
          <SkillsCard
            key={framework.id}
            imageSrc={framework.image}
            skills={framework.name}
          />
        ))}

        {Logiciels.map((logiciel) => (
          <SkillsCard
            key={logiciel.id}
            imageSrc={logiciel.image}
            skills={logiciel.name}
          />
        ))}
      </div>
    </TitleCategory>
  );
}

function SkillsCard({
  imageSrc,
  skills,
}: {
  imageSrc: string;
  skills: string;
}) {
  return (
    <div className="inline-flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 gap-1.5 rounded-lg border border-border/70 hover:border-foreground/20 bg-background px-3 py-1.5 text-xs font-medium cursor-pointer">
      <Image src={imageSrc} alt={skills} width={24} height={24} />
      <span>{skills}</span>
    </div>
  );
}
