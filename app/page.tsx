
import { ExperienceSection } from "@/components/Experience"
import { AboutSection } from "@/components/ui/AboutSection"
import { ContactSection } from "@/components/ui/ContactSection"
import { DockNavigation } from "@/components/ui/DockNavigation"
import { EducationSection } from "@/components/ui/EducationSection"
import { HeroSection } from "@/components/ui/HeroSection"
import { ProjectsSection } from "@/components/ui/ProjectSection"

export default function Page() {
  return (
    <div className="gradient-bg relative min-h-screen">
      <main className="relative z-10 mx-auto max-w-2xl px-6 pb-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <DockNavigation />
    </div>
  )
}
