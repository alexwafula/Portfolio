import { ProjectCardProProps } from "@/types/types";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { Github } from "../icons/github";

export default function ProjectCardPro({
  title,
  techStack,
  description,
  url,
}: ProjectCardProProps) {
  return (
    <div className="group flex items-start justify-between gap-4 p-4 rounded-xl border border-border/80 hover:border-foreground/10 bg-background transition-colors">
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-foreground group-hover:opacity-80">
          {title}
        </h3>

        {techStack.length > 0 && (
          <p className="text-xs text-muted-foreground">
            {techStack.join(", ")}
          </p>
        )}

        {description && (
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 items-center justify-center text-muted-foreground transition-colors ">
        {url.github && (
          <LinkCard
            url={url.github}
            title="View project on GitHub"
            icon={<Github size={12} />}
          />
        )}

        {url.docs && (
          <LinkCard
            url={url.docs}
            title="View documentation"
            icon={<FileText size={14} />}
          />
        )}

        {url.site && (
          <LinkCard
            url={url.site}
            title="Visit website"
            icon={<ArrowUpRight size={14} />}
          />
        )}
      </div>
    </div>
  );
}

function LinkCard({
  url,
  title,
  icon,
}: {
  url: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-foreground p-1 rounded-sm bg-accent/10 hover:bg-accent/50 transition-colors"
      title={title}
    >
      {icon}
    </Link>
  );
}
