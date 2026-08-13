import { BlogPostProps } from "@/types/types";

export const blogPosts: BlogPostProps[] = [
  {
    title: "Migrating FarajaCRM from Firebase to Supabase PostgreSQL",
    date: "2026",
    category: "Database Migration",
    summary:
      "A practical migration project moving FarajaCRM data from Firebase into a relational Supabase PostgreSQL setup, with attention to data modelling, import safety, authentication impact, reporting needs and production rollout checks.",
    takeaways: [
      "Mapped Firebase collections into relational PostgreSQL tables with clearer relationships and reporting paths.",
      "Handled migration planning around data cleanup, validation, backups and staged verification before production use.",
      "Improved my understanding of NoSQL-to-SQL tradeoffs, Supabase policies, operational data integrity and client-facing rollout discipline.",
    ],
    tags: ["Firebase", "Supabase", "PostgreSQL", "Data Migration", "CRM"],
    status: "Published",
  },
];
