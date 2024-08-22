"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 z-[900] relative">
      <SectionHeading>My projects</SectionHeading>
      <div
        // style={{
        //   width: "80%",
        // }}
      >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
