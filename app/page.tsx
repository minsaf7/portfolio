import { Metadata } from "next";
import Link from "next/link";
import { TerminalSession } from "@/components/site/TerminalSession";
import { TerminalFrame } from "@/components/site/TerminalFrame";
import { ChatPortfolio } from "@/components/chat/ChatPortfolio";
import { education, experiences, profile, projects } from "@/lib/data";

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <TerminalSession />
      <TerminalFrame />

      {/* Plain-text version of the portfolio for search engines and screen readers */}
      <div className="sr-only">
        <h1>
          {profile.name} — {profile.role}
        </h1>
        <p>
          Senior Software Engineer with 4+ years of experience designing and building
          scalable frontend and full-stack applications across fintech and ERP domains.
          Specialized in React, TypeScript, and Node.js.
        </p>
        <h2>Experience</h2>
        <ul>
          {experiences.map((e) => (
            <li key={e.role}>
              {e.role}, {e.company} ({e.period})
            </li>
          ))}
        </ul>
        <h2>Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.id}>
              <Link href={`/project/${p.id}`}>{p.title}</Link>: {p.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {education.map((e) => (
            <li key={e.degree}>
              {e.degree}, {e.school} ({e.period})
            </li>
          ))}
        </ul>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>

      <ChatPortfolio />
    </>
  );
}
