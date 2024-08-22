import About from "@/components/about";
import Educations from "@/components/educations";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/skills";

export default function home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* <Header /> */}
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
      <Educations />
      <Skills />
    </main>
  );
}
