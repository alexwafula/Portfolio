import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-250 mx-auto py-12 sm:py-24 px-6 h-screen flex flex-col items-center justify-center">
      <section
        className="flex flex-col items-center gap-4 text-center"
        id="menustart"
      >
        <h1 className="text-5xl font-bold tracking-tight">
          Alex Wafula Kwoba
        </h1>
        <p className="max-w-xl text-balance text-muted-foreground sm:text-md">
          Software Developer focused on full-stack, mobile, API-driven and
          operational business systems.
        </p>

        <div className="flex flex-row gap-3">
          <Link href="/professional">
            <Button size="lg" className="gap-2 rounded-md">
              <Briefcase className="size-4" />
              View Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
