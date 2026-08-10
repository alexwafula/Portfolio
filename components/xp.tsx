"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import TitleCategory from "@/components/layout/TitleCategory";
import {
  ArticleXpProps,
  CompXpProps,
  ShowMoreButtonProps,
} from "@/types/types";

export default function CompXp({ data, id, title }: CompXpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const visibleData = isOpen ? data : data.slice(0, 2);

  return (
    <TitleCategory id={id} title={title}>
      <XpComp>
        {visibleData.map((item) => (
          <ArticleXp key={`${item.company}-${item.startDate}`} {...item} />
        ))}
      </XpComp>

      {data.length > 2 && (
        <ShowMoreButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}
    </TitleCategory>
  );
}

function XpComp({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-10">
      {/* Barre latéral */}
      <div className="absolute bottom-0 left-0.75 top-2 w-0.5 bg-border/60" />
      {children}
    </div>
  );
}

function ArticleXp({
  company,
  startDate,
  endDate,
  titleJob,
  stack,
  missions,
}: ArticleXpProps) {
  return (
    <article className="relative pl-7">
      <span className="absolute -left-px top-1.5 size-2.5 rounded-full border-2 border-foreground bg-background"></span>
      <div className="flex flex-row items-start justify-between gap-4 mb-4">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-base font-semibold text-foreground">{company}</h3>
          <p className="text-sm text-muted-foreground">
            {titleJob} - {stack}
          </p>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {startDate} - {endDate}
        </span>
      </div>

      {/* Liste des missions */}
      <div className="flex flex-col gap-4">
        {missions.map((mission) => (
          <div key={mission.title} className="flex flex-col gap-2">
            {/* Titre de la mission */}
            <h4 className="text-sm font-medium text-foreground/90">
              {mission.title}
            </h4>
            {/* Points de la mission */}
            <ul className="ml-1 flex list-inside flex-col gap-1.5">
              {mission.bulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  {/* Point */}
                  <span className="flex h-5 w-2 items-center justify-center shrink-0">
                    <div className="size-1 rounded-full bg-muted-foreground/65" />
                  </span>
                  <span className="flex-1 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function ShowMoreButton({
  isOpen,
  onClick,
  labelMore = "Show more",
  labelLess = "Show less",
}: ShowMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {isOpen ? labelLess : labelMore}
      <ChevronDown
        className={cn(
          "size-4 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}
