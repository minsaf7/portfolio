"use client";
import { educationData } from "@/lib/data";
import Education from "./education";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export default function Educations() {
  const { ref } = useSectionInView("Education", 0.5);
  return (
    <section
      ref={ref}
      id="education"
      className="scroll-mt-28 mb-28 z-[900] relative w-full"
    >
      <SectionHeading>My Education</SectionHeading>
      <div className="flex flex-col items-center justify-center min-h-screenp-6">
        {educationData.map((education) => (
        //   <div
        //     className="flex justify-center items-center min-h-screen bg-gray-900 p-4"
        //     key={education.id}
        //   >
            <motion.div
              className="relative p-1 rounded-xl w-full max-w-4xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              key={education.id}
            >
              {/* Hover border gradient */}
              <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-blue-400 hover:to-blue-600 transition-all duration-300 pointer-events-none"></div>

              {/* Card content */}
              <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col gap-6 border border-transparent">
                {/* Header Section */}
                <div className="flex items-center gap-4">
                  <div className="text-teal-300 text-3xl">
                    <LuGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-teal-300">
                      {education.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {education.premises} • {education.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  {education.desc}
                </p>
              </div>
            </motion.div>
        //   </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { LuGraduationCap } from "react-icons/lu";

const ResponsiveCard: React.FC = () => {
  const content = {
    id: 1,
    title: "BSc Hons in Computing",
    date: "2019 - 2021",
    desc: "Successfully completed BSc Hons in Computing with first class honors",
    premises: "Coventry University, UK",
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full h-auto rounded-xl bg-gradient-to-b from-[#1B2B52] to-[#0D1A33] p-6 shadow-lg text-[#14919b]">
        <h2 className="text-2xl font-bold mb-2">{content.title}</h2>
        <p className="text-sm font-light mb-4">{content.date}</p>
        <p className="text-base mb-2">{content.desc}</p>
        <p className="text-sm">{content.premises}</p>
      </div>
    </div>
  );
};

// export default ResponsiveCar÷d;
