import { ArticleXpProps } from "@/types/types";

export const workData: ArticleXpProps[] = [
  {
    company: "Granular IT",
    startDate: "February 2025",
    endDate: "Present",
    titleJob: "Software Developer Intern",
    stack: "React, React Native/Expo, TypeScript, Laravel, Supabase",
    missions: [
      {
        title: "Business systems delivery",
        bulletPoints: [
          "Develop full-stack and mobile applications for ecommerce, loyalty, logistics, warehouse, packhouse and HR automation workflows.",
          "Work directly with client stakeholders on requirements, QA feedback, delivery priorities and user support.",
          "Support code reviews, debugging, documentation, testing and CI/CD practices to improve reliability and deployment speed.",
        ],
      },
      {
        title: "Operational platforms",
        bulletPoints: [
          "Built loyalty APIs and dashboards for registration, points, redemptions, refunds, reporting and notifications.",
          "Developed logistics workflows for sales orders, invoices, dispatch, deliveries, document returns, GPS trip tracking and audit trails.",
          "Worked on packhouse modules covering receiving, dispatch, stock opname, production runs, cold room, packing, employees and visitor logs.",
        ],
      },
    ],
  },
  {
    company: "Granular IT",
    startDate: "January 2024",
    endDate: "March 2024",
    titleJob: "Software Development Intern",
    stack: "Python, Flask, SOAP, APIs, Testing",
    missions: [
      {
        title: "Engineering support and prototypes",
        bulletPoints: [
          "Contributed to code reviews, bug fixes, documentation, database management and deployment scripts.",
          "Developed automation prototypes including SOAP serial-number checks and Flask-based applications with unit tests.",
          "Provided end-user support, gathered feedback and participated in Agile meetings to improve usability.",
        ],
      },
    ],
  },
  {
    company: "Brno International Summer School",
    startDate: "2024",
    endDate: "2024",
    titleJob: "Participant",
    stack: "YOLOv8, AI, Web Development, Data Integration",
    missions: [
      {
        title: "AI warehouse inventory project",
        bulletPoints: [
          "Collaborated with a multidisciplinary team on an AI-enabled warehouse inventory website.",
          "Used YOLOv8 for real-time object detection and presented the solution to academic and industry assessors.",
        ],
      },
    ],
  },
];
