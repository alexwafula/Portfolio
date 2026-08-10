import { ArticleXpProps, UserSocial } from "@/types/types";
import { Gmail } from "@/components/icons/gmail";

export const socials: UserSocial[] = [
  {
    name: "Mail",
    url: "mailto:kwobaalex9@gmail.com",
    icon: Gmail,
  },
];

export const certificationData: ArticleXpProps[] = [
  {
    company: "The Linux Foundation",
    startDate: "2026",
    endDate: "2026",
    titleJob: "LFS258: Kubernetes Fundamentals",
    stack: "Kubernetes, Helm, Services, Ingress, ConfigMaps, Secrets",
    missions: [
      {
        title: "Credential focus",
        bulletPoints: [
          "Kubernetes API objects, workloads, services and ingress.",
          "Troubleshooting, Helm, configuration management and security policies.",
        ],
      },
    ],
  },
];
