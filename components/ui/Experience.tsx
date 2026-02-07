"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 md:py-20">
      {/* Section header (code comment style) */}
      <div className="mb-8 text-lg font-mono text-black/60 dark:text-[hsl(var(--code-string))] font-bold">
        {"// career.timeline"}
      </div>

      {/* <h2 className="mb-10 text-lg font-semibold tracking-tight text-black dark:text-white">
        Experience
      </h2> */}

      <Accordion type="single" collapsible className="relative space-y-1">
        {/* Timeline spine */}
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border/60" />

        {experiences.map((exp, i) => (
          <AccordionItem
            key={i}
            value={`exp-${i}`}
            className="relative border-none"
          >
            <AccordionTrigger className="group flex items-start gap-6 py-6 hover:no-underline">
              {/* Timeline dot */}
              <div className="relative z-10 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-background">
                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[hsl(var(--code-string))]" />
              </div>

              {/* Header */}
              <div className="flex flex-1 items-start justify-between gap-6">
                <div>
                  <h3 className="text-sm font-medium text-black dark:text-white">
                    {exp.company}
                    <span className="ml-2 text-xs text-blue-600 dark:text-[hsl(var(--code-string))]">
                      • {exp.mode}
                    </span>
                  </h3>

                  <p className="mt-1 font-mono text-xs text-black/70 dark:text-white/70  items-start flex">
                    {exp.role}
                  </p>
                </div>

                <span className="hidden font-mono text-xs text-black/60 dark:text-white/60 sm:block">
                  {exp.period}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="ml-9 rounded-lg border border-border/50 bg-muted/30 dark:bg-muted/20 p-5 backdrop-blur-sm">
                <p className="mb-3 font-mono text-xs text-black/60 dark:text-white/60 sm:hidden">
                  {exp.period}
                </p>

                <div className="space-y-3">
                  {exp.description.map((item, j) => (
                    <div
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-black/80 dark:text-white/80"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600/70 dark:bg-[hsl(var(--code-string))]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
