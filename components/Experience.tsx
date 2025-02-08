// "use client";

// import React from "react";
// // import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/useTheme";
// import SectionHeading from "./SectionHeading";
// // import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   // const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement
//               contentStyle={{
//                 background:'#f3f4f6',
//                   // theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight:'0.4rem solid #9ca3a',
//                   // theme === "light"
//                   //   ? "0.4rem solid #9ca3af"
//                   //   : "0.4rem solid rgba(255, 255, 255, 0.5)",
//               }}
//               visible
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background:'white',
//                   // theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <h3 className="font-semibold capitalize">{item.title}</h3>
//               <p className="font-normal !mt-0">{item.location}</p>
//               <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                 {item.description}
//               </p>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
// import { experienceData } from "./ExperienceRoles";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type ExperienceProps = (typeof experiencesData)[number];

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-28 z-[900] relative w-full"
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <TimelineDemo />
    </section>
  );
}

function ExperienceItem({ title, description }: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
  const opacityProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        // scale: scaleProgress,
        // opacity: opacityProgress,
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0 w-full max-w-[62rem] pb-10"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
        </div>

        {/* <Image
          src={imageUrl}
          alt={`${title} image`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:right-[initial] group-even:-left-40"
        /> */}
      </section>
    </motion.div>
  );
}

import React from "react";
import { Timeline } from "./TimeLine";
import SectionHeading from "./SectionHeading";
import { WobbleCard } from "./WobbleCard";
// import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Software Engineer",
      content: <ExperienceCard {...experiencesData[2]} />,
    },
    {
      title: "Associate Software Engineer",
      content: <ExperienceCard {...experiencesData[1]} />,
    },
    {
      title: "Intern Software Engineer",
      content: <ExperienceCard {...experiencesData[2]} />,
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

const ExperienceCard = ({
  date,
  description,
  icon,
  location,
  title,
  responsibilities,
}: ExperienceProps) => {
  return (
    <motion.div
      className="p-1 rounded-xl w-full max-w-4xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover border gradient */}
      <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-blue-400 hover:to-blue-600 transition-all duration-300 pointer-events-none"></div>

      {/* Card content */}
      <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col gap-6 border border-transparent">
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <div className="text-teal-300 text-3xl">{icon}</div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-teal-300">
              {location}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              {location} • {experiencesData[0].date}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mt-2 text-sm md:text-base">{description}</p>

        {/* Responsibilities */}
        <div className="text-gray-300 mt-4">
          <h4 className="font-semibold text-teal-300">Responsibilities:</h4>
          <ul className="list-disc list-inside mt-2 space-y-2">
            {responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-sm md:text-base">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
