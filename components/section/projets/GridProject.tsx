import ProjectCard from "@/components/card/CardProject";
import { ProjectProps } from "@/types/types";

interface GridProjectProps {
  projects: ProjectProps[];
}

export default function GridProject({ projects }: GridProjectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.image?.[0] || ""}
          title={project.title}
          description={project.desc}
          role={project.role}
          stacks={project.stack}
          list={project.list}
        />
      ))}
    </div>
  );
}
