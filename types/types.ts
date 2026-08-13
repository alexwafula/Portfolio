import type { ComponentType } from "react";

export type UserSocial = {
  name: string;
  url: string;
  icon: ComponentType<{ size?: number; color?: string }>;
};

export type TitleCategoryProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export type TextLinkProps = {
  text: string;
  url: string;
};

export type XpMission = {
  title: string;
  bulletPoints: string[];
};

export type ArticleXpProps = {
  company: string;
  startDate: string;
  endDate: string;
  titleJob: string;
  stack: string;
  missions: XpMission[];
};

export type ShowMoreButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  labelMore?: string;
  labelLess?: string;
};

export type CompXpProps = {
  data: ArticleXpProps[];
  id: string;
  title: string;
};

export type urlProject = {
  github?: string;
  docs?: string;
  site?: string;
};

export type ProjectCardProProps = {
  title: string;
  techStack: string[];
  description?: string;
  url: urlProject;
};

export interface ProjectProps {
  title: string;
  desc: string;
  role: string;
  stack: string[];
  list: {
    githubLink: string;
    documentationLink: string;
    websiteLink: string;
  };
  image?: string[];
  status: "En cours" | "Terminé" | "À venir";
  favorite?: boolean;
}

export interface StackProps {
  id: number;
  name: string;
  image: string;
  categorie: string;
  link: string;
}

export interface BlogPostProps {
  title: string;
  date: string;
  category: string;
  summary: string;
  takeaways: string[];
  tags: string[];
  status: "Draft" | "Published";
}
