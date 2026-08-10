import About from "@/components/section/all/about";
import Footer from "@/components/section/all/footer";
import Hero from "@/components/section/all/Hero";
import Skills from "@/components/section/all/skills";
import ProjectPro from "@/components/section/professional/ProjectPro";
import CompXp from "@/components/xp";
import { workData } from "@/data/work";

export default function ProPage() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-12">
      <Hero />
      <About />
      <CompXp data={workData} id="work" title="Professional Experience" />
      <ProjectPro />
      <Skills />
      <Footer />
    </main>
  );
}
