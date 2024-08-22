
'use client'
import { educationData } from "@/lib/data";
import Education from "./education";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function Educations() {
    const { ref } = useSectionInView("Education", 0.5);
    return (
      <section ref={ref} id="education" className="scroll-mt-28 mb-28 z-[900] relative">
         <SectionHeading>My Education</SectionHeading>
        {educationData.map((education) => (
          <Education key={education.id} {...education} />
        ))}
      </section>
    );
  }