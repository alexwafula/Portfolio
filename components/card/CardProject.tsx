import Link from "next/link";
import { Github } from "../icons/github";
import { FileText, Globe } from "lucide-react";
import Image from "next/image";

export interface ProjectCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  role: string;
  stacks: string[];
  list: {
    githubLink: string;
    documentationLink: string;
    websiteLink: string;
  };
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  role,
  stacks,
  list: { githubLink, documentationLink, websiteLink },
}: ProjectCardProps) {
  return (
    <div className="rounded-xl text-card-foreground shadow flex flex-col overflow-hidden border border-border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
      <div className="relative h-40 w-full overflow-hidden flex items-center justify-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`Project ${title}`}
            fill
            className="object-cover object-center absolute"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />
        )}
        <p className="text-sm text-muted-foreground">No image available</p>
      </div>
      <div className="flex flex-col justify-between flex-1 gap-4 p-2">
        <div className="flex flex-col gap-4 ">
          {/* Description Project */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center justify-between">
              <h4 className="font-semibold tracking-tight text-base">
                {title}
              </h4>
            </div>
            <div className="flex items-center gap-1 text-xs font-sans text-gray-500">
              <span className="inline-block font-medium text-gray-400">
                Role:
              </span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {role}
              </span>
            </div>
            <p className="prose max-w-full line-clamp-4 text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </p>
          </div>

          {/* Stack Project */}
          <div className="flex flex-wrap gap-1">
            {stacks.map((stack) => (
              <BadgeStack key={stack} name={stack} />
            ))}
          </div>
        </div>

        {/* Link Project */}
        <div className="flex flex-row flex-wrap gap-1">
          {githubLink && (
            <Link
              href={githubLink}
              className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[11px]"
            >
              <Github size={14} />
              Github
            </Link>
          )}
          {documentationLink && (
            <Link
              href={documentationLink}
              className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[11px]"
            >
              <FileText size={14} />
              Documentation
            </Link>
          )}
          {websiteLink && (
            <Link
              href={websiteLink}
              className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[11px]"
            >
              <Globe size={14} />
              Website
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function BadgeStack({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
      {name}
    </div>
  );
}
