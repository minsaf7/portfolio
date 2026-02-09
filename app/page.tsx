import { ExperienceSection } from "@/components/ui/Experience";
import { AboutSection } from "@/components/ui/AboutSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { DockNavigation } from "@/components/ui/DockNavigation";
import { EducationSection } from "@/components/ui/EducationSection";
import { HeroSection } from "@/components/ui/HeroSection";
import { ProjectsSection } from "@/components/ui/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Minsaf | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years of experience designing and building scalable frontend and full-stack applications in fintech and ERP domains.",
  alternates: {
    canonical: "https://minsaaf.tech",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Minsaf",
    url: "https://minsaaf.tech",
    jobTitle: "Senior Software Engineer",
    sameAs: [
      "https://www.linkedin.com/in/mohamed-minsaaf/",
      "https://github.com/minsaf7",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohamed Minsaf Portfolio",
    url: "https://minsaaf.tech",
  };
  return (
    <div className="gradient-bg relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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
  );
}
