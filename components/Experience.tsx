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
import { FaReact } from "react-icons/fa";

type ExperienceProps = (typeof experiencesData)[number];

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-28 z-[900] relative"
      id="experience"
    >
      {experiencesData.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </section>
  );
}

function ExperienceItem({ title, description,date,icon,location }: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    // <motion.div
    //   ref={ref}
    //   style={{
    //     scale: scaleProgess,
    //     opacity: opacityProgess,
    //     zIndex: 999,
    //   }}
    //   className="group mb-3 sm:mb-8 last:mb-0 border border-white border-opacity-40 bg-[#AAABB8] bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-colors duration-300 hover:bg-opacity-80 hover:text-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
    // >
    //   <section
    //     className="max-w-[72rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 "
    //     style={{
    //       zIndex: 999,
    //     }}
    //   >
    //     <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
    //       <div>
            
    //       </div>
    //       <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
    //         {title}
    //       </h3>
    //       <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
    //         {description}
    //       </p>
    //     </div>
    //   </section>

    // </motion.div>
    <motion.div
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess,
      zIndex: 999,
    }}
    className="group mb-3 sm:mb-8 last:mb-0 border border-white border-opacity-40 bg-[#AAABB8] bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-colors duration-300 hover:bg-opacity-80 hover:text-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
  >
    <section
      className="max-w-[72rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8"
      style={{
        zIndex: 999,
      }}
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <div className="flex items-center">
          <div className="text-4xl text-[#45a29e] mr-4">{icon}</div>
          <div>
            <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
          {description}
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">{date}</p>
      </div>

      <div className="absolute hidden sm:block top-8 -right-40 w-[10rem] h-[10rem] text-[#61DAFB]">
        <FaReact className="w-full h-full 
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2" />
      </div>
      {/* <div className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <div className="text-teal-400 font-semibold text-sm sm:text-lg mb-2 sm:mb-0 sm:w-1/4">
        {date}
      </div>
      <div className="sm:w-3/4 sm:pl-6">
        <h3 className="text-teal-400 font-bold text-lg">{title}</h3>
        <p className="text-gray-400 mb-2">{location}</p>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
    </div> */}
    </section>
  </motion.div>
  );
}
