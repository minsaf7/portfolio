// 


// import Hero from "@/components/hero"
import About from "@/components/AboutPage"
// import Experience from "@/components/experience"
// import Education from "@/components/education"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Contact from "@/components/contact"
import Education from "@/components/EducationPage"
import Experience from "@/components/ExperiencePage"
import Hero from "@/components/HeroSection"
import Projects from "@/components/projects-section"
import Skills from "@/components/skills-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </main>
  )
}
