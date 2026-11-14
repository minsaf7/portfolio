"use client";

import { useState } from "react";
import { Section } from "@/components/site/Section";

const experiences = [
  {
    company: "DirectFN Sri Lanka",
    mode: "Hybrid",
    role: "Senior Software Engineer",
    period: "Sep 2024 – Present",
    description: [
      "Oversaw frontend development of Market Disclosure Platform utilized by brokerage firms for compliance reporting.",
      "Implemented a dynamic, schema-driven form builder as a core module for financial disclosures.",
      "Maintained frontend architecture and reusable component libraries, ensuring system scalability and performance.",
      "Guided and mentored junior developers through effective code reviews and onboarding practices.",
      "Addressed critical QA and production issues to improve overall application stability.",
      "Participated in architectural strategies for transitioning legacy CMS to modern microservices, increasing maintainability",
    ],
  },
  {
    company: "DirectFN Sri Lanka",
    mode: "Hybrid",
    role: "Software Engineer",
    period: "Dec 2022 – Oct 2024",
    description: [
      "Redesigned and migrated a legacy web CMS into a modern monolith-based microservice architecture supporting multiple financial clients.",
      "Developed reusable financial widgets compatible with various client platforms and layouts.",
      "Created configurable financial widgets utilized across trading and content platforms.",
      "Researched and adopted cutting-edge frontend and backend technologies to enhance system performance.",
      "Implemented multi-stage Docker builds, minimizing container image sizes and optimizing performance.",
    ],
  },
  {
    company: "Blue Lotus 360 Pvt Ltd",
    mode: "Remote",
    role: "Associate Software Engineer",
    period: "Nov 2021 – Nov 2022",
    description: [
      "Built intuitive React interfaces for Order Management systems",
      "Contributed to ERP and POS platforms with a focus on performance and usability",
      "Collaborated across teams to ship stable, production-ready features",
    ],
  },
];

export function ExperienceSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="experience" command="git log --career">
      <ul className="space-y-1">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <li key={exp.role}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group -mx-3 flex w-[calc(100%+1.5rem)] items-baseline justify-between gap-4 rounded-lg px-3 py-3 text-left transition-colors hover:bg-accent/60"
              >
                <span>
                  <span className="font-medium">{exp.role}</span>
                  <span className="block text-sm text-muted-foreground">
                    {exp.company} · {exp.mode}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </button>

              <div className="collapse" data-open={isOpen} aria-hidden={!isOpen}>
                <div>
                  <ul className="space-y-2 pb-4 pt-1 text-sm leading-relaxed text-muted-foreground">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="select-none text-highlight">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
