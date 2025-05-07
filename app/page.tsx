import Header from "@/components/header"
import About from "@/components/About"
import PhotoGrid from "@/components/PhotoGrid"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="container max-w-3xl mx-auto px-4 py-16 relative z-10">
        <section id="home">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <PhotoGrid />
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  )
}
