import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutPro() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        I build full-stack, mobile and API-driven business applications for
        ecommerce, loyalty, logistics, warehouse, packhouse and automation
        workflows. I work with{" "}
        <TextLink text="React" url="#stack" />,{" "}
        <TextLink text="React Native/Expo" url="#stack" />,{" "}
        <TextLink text="TypeScript" url="#stack" />,{" "}
        <TextLink text="Laravel" url="#stack" />,{" "}
        <TextLink text="Supabase" url="#stack" /> and{" "}
        <TextLink text="WooCommerce APIs" url="#stack" />.
      </p>
      <p>
        I focus on reliable systems that match real operational needs:
        authentication, role-based access, dashboards, audit trails,
        third-party integrations, testing, documentation and deployable
        workflows.
      </p>
    </div>
  );
}
