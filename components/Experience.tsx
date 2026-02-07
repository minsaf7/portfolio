// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Building2 } from "lucide-react";

// const experiences = [
//   {
//     company: "DirectFN Sri Lanka • Hybrid",
//     role: "Senior Software Engineer",
//     period: "Sep 2024 - Present",
//     logo: "/directfn.png",
//     description: [
//       "Designed and implemented a scalable microservice architecture for the DFN CMS platform",
//       "Enhancing deployment processes by implementing multi-stage Docker builds, significantly reducing build size and improving efficiency",
//       "Collaborating with cross-functional teams, including UI/UX designers and department heads, to align product features with business requirements while ensuring UI/UX compliance",
//       "Contributing to project planning and architectural decisions alongside technical leads, improving system design and performance",
//       "Contributed to the development of a React Native mobile app for real-time market data streaming, charts, and analytics leveraging server-driven UI concept",
//       "Focused on debugging and resolving QA-reported issues to enhance app stability and performance",
//       "Developed the DFN Fincon mobile application for real-time stock market data",
//     ],
//      type:"• Hydbrid"
//   },
//   {
//     company: "DirectFN Sri Lanka • Hybrid",
//     role: "Software Engineer ",
//     period: "Dec 2022 - Oct 2024",
//     logo: "/directfn.png",
//     description: [
//       "Developed core features for the web CMS, working closely with UI/UX teams and department heads to ensure the product met usability and business requirements",
//       "Researching and applying the latest and best technologies to enhance the system's performance and user experience",
//       "Implemented custom charting components for financial data visualization",
//       "Reduced application bundle size by 40% through code optimization",
//       "Integrated server-driven UI patterns for dynamic content updates",
//       "Developing financial widgets to provide robust and efficient solutions for our clients",
//     ],
//     type:"• Hydbrid"
//   },
//   {
//     company: "Blue Lotus 360 Pvt Ltd • Remote",
//     role: "Associate Software Engineer",
//     period: "Nov 2021 - Nov 2022",
//     logo: "/bl360.webp",
//     description: [
//       "Utilised React JS and JavaScript to build intuitive and user-friendly interfaces for the Order Management system, ensuring seamless user experience",
//       "Worked closely with cross-functional teams to deliver high-quality ERP solutions",
//       "Contributed to the development and maintenance of ERP and POS solutions, focusing on enhancing functionality and performance",
//     ],
//     type:"• Remote"
//   },
// ];

// export function ExperienceSection() {
//   return (
//     <section id="experience" className="py-8 md:py-12">
//       <h2 className="mb-4 text-lg font-bold text-foreground">
//         Work Experience
//       </h2>
//       <Accordion type="single" collapsible className="w-full">
//         {experiences.map((exp, i) => (
//           <AccordionItem key={i} value={`exp-${i}`} className="border-border">
//             <AccordionTrigger className="hover:no-underline py-3 gap-3">
//               <div className="flex items-center gap-3 text-left">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
//                   <Building2 className="h-4 w-4" />
//                 </div>
//                 <div className="min-w-0">
//                   <h3 className="text-sm font-medium text-foreground">
//                     {exp.company}
//                   </h3>
//                   <p className="text-xs text-muted-foreground">{exp.role}</p>
//                 </div>
//               </div>
//               <span className="ml-auto mr-2 shrink-0 text-xs text-muted-foreground hidden sm:inline">
//                 {exp.period}
//               </span>
//             </AccordionTrigger>
//             <AccordionContent>
//               <div className="ml-12 space-y-1.5">
//                 <p className="text-xs text-muted-foreground sm:hidden mb-2">
//                   {exp.period}
//                 </p>
//                 {exp.description.map((item, j) => (
//                   <div key={j} className="flex gap-2 text-sm text-muted-foreground">
//                     <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </section>
//   )
// }


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
      "Architected scalable microservice-based CMS platforms for enterprise fintech clients",
      "Optimized CI/CD pipelines using multi-stage Docker builds, improving build efficiency",
      "Partnered with UI/UX and business stakeholders to deliver compliance-ready systems",
      "Contributed to frontend architecture and performance optimization initiatives",
      "Developed React Native applications for real-time market data using server-driven UI",
      "Resolved QA-reported issues to improve runtime stability and performance",
    ],
  },
  {
    company: "DirectFN Sri Lanka",
    mode: "Hybrid",
    role: "Software Engineer",
    period: "Dec 2022 – Oct 2024",
    description: [
      "Delivered core CMS features in collaboration with product and design teams",
      "Reduced frontend bundle size by 40% through targeted optimization strategies",
      "Built reusable financial charting and visualization components",
      "Integrated server-driven UI patterns for dynamic content delivery",
      "Developed modular financial widgets reused across multiple platforms",
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
