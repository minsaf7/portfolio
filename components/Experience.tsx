"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    company: "DirectFN Sri Lanka • Hydbrid",
    role: "Senior Software Engineer",
    period: "Sep 2024 - Present",
    logo: "/directfn.png",
    description: [
      "Designed and implemented a scalable microservice architecture for the DFN CMS platform",
      "Enhancing deployment processes by implementing multi-stage Docker builds, significantly reducing build size and improving efficiency",
      "Collaborating with cross-functional teams, including UI/UX designers and department heads, to align product features with business requirements while ensuring UI/UX compliance",
      "Contributing to project planning and architectural decisions alongside technical leads, improving system design and performance",
      "Contributed to the development of a React Native mobile app for real-time market data streaming, charts, and analytics leveraging server-driven UI concept",
      "Focused on debugging and resolving QA-reported issues to enhance app stability and performance",
      "Developed the DFN Fincon mobile application for real-time stock market data",
    ],
     type:"• Hydbrid"
  },
  {
    company: "DirectFN Sri Lanka • Hydbrid",
    role: "Software Engineer ",
    period: "Dec 2022 - Oct 2024",
    logo: "/directfn.png",
    description: [
      "Developed core features for the web CMS, working closely with UI/UX teams and department heads to ensure the product met usability and business requirements",
      "Researching and applying the latest and best technologies to enhance the system's performance and user experience",
      "Implemented custom charting components for financial data visualization",
      "Reduced application bundle size by 40% through code optimization",
      "Integrated server-driven UI patterns for dynamic content updates",
      "Developing financial widgets to provide robust and efficient solutions for our clients",
    ],
    type:"• Hydbrid"
  },
  {
    company: "Blue Lotus 360 Pvt Ltd • Remote",
    role: "Associate Software Engineer",
    period: "Nov 2021 - Nov 2022",
    logo: "/bl360.webp",
    description: [
      "Utilised React JS and JavaScript to build intuitive and user-friendly interfaces for the Order Management system, ensuring seamless user experience",
      "Worked closely with cross-functional teams to deliver high-quality ERP solutions",
      "Contributed to the development and maintenance of ERP and POS solutions, focusing on enhancing functionality and performance",
    ],
    type:"• Remote"
  },
];

export default function Experience() {
  const [defaultValue, setDefaultValue] = useState<string>("item-0");

  return (
    <section id="experience" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Work Experience</h2>

        <Accordion
          type="single"
          collapsible
          // defaultValue={defaultValue}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="py-0 hover:no-underline">
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground pr-10">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">
                        {exp.company}
                        {/* <p className="bg-blue-600 w-fit">Remote</p> */}
                      </p>
                      
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2 text-muted-foreground">
                    <ul className="list-item">
                      {exp.description.map((desc, index) => {
                        return (
                          <li
                            className="text-sm text-body-color dark:text-dark-6 flex "
                            key={index}
                          >
                            <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
                            {desc}
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
