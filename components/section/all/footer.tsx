import { Gmail } from "@/components/icons/gmail";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative flex w-full flex-col gap-3 items-center justify-center overflow-hidden border-t border-border/80 pt-10">
      <div className="z-10 flex items-center bg-muted/70 rounded-full py-3 px-4 gap-4 text-foreground">
        <LinkSocial
          url="mailto:kwobaalex9@gmail.com"
          title="Email"
          icon={<Gmail size={16} />}
        />
      </div>

      <p className="z-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Wafula Kwoba. All rights reserved.
      </p>
    </div>
  );
}

function LinkSocial({
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
      className="hover:text-foreground transition-colors"
      title={title}
    >
      {icon}
    </Link>
  );
}
