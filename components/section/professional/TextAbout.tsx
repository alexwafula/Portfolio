import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutPro() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        Innovative and results-oriented software developer with a strong
        foundation in Informatics and Computer Science, and practical experience
        building full-stack, mobile and API-driven business applications.
        Experienced in translating operational requirements into reliable
        systems across ecommerce, loyalty, logistics, warehouse, packhouse and
        HR automation workflows.
      </p>
      <p>
        Skilled in backend development, frontend implementation, third-party API
        integration, database design, testing, CI/CD and technical
        documentation. Comfortable working directly with users and client
        stakeholders to gather requirements, resolve issues and improve software
        usability.
      </p>
      <p>
        Core stack includes{" "}
        <TextLink text="React" url="#stack" />,{" "}
        <TextLink text="React Native/Expo" url="#stack" />,{" "}
        <TextLink text="TypeScript" url="#stack" />,{" "}
        <TextLink text="Laravel" url="#stack" />,{" "}
        <TextLink text="Supabase" url="#stack" /> and{" "}
        <TextLink text="WooCommerce APIs" url="#stack" />.
      </p>
    </div>
  );
}
