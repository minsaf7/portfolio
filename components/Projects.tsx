"use client";

import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Project from "./project";
import Image from "next/image";
import { motion } from "framer-motion";
// import ProjectCard from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleHoverStart = (index: number) => {
    setHoveredCard(index);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null);
  };

  const stackVariants = {
    initial: (i: number) => ({
      y: i * -10, // Slight offset to stack cards
      zIndex: i * -1,
      scale: 0.95,
    }),
    hover: (i: number) => ({
      y: 0, // Move the card to the normal position on hover
      zIndex: 10, // Bring to front
      scale: 1.05,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 z-[900] relative w-full flex flex-col items-center"
    >
      <SectionHeading>My projects</SectionHeading>
      {/* <div className=" flex justify-center flex-col items-center">
        {projectsData.map(({ description, imageUrl, tags, title }, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-8 mb-8 max-w-xl mx-auto border-b-4 border-teal-400">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6">{description}</p>
            <div className="flex flex-wrap space-x-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-teal-400 bg-opacity-50 text-white px-4 py-2 rounded-full text-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8">
        {projectsData.map((project, index) => (
          // <motion.div
          //   key={index}
          //   className="relative bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
          //   custom={index}
          //   variants={stackVariants}
          //   initial="initial"
          //   whileHover="hover"
          //   style={{ zIndex: index }}
          // >
          //   <div className="p-4">
          //     <Image
          //       src={project.imageUrl}
          //       alt={project.title}
          //       className="w-full h-48 object-cover rounded-t-lg"
          //       width={500}
          //       height={300}
          //     />
          //     <h3 className="text-lg font-semibold text-white mt-4">
          //       {project.title}
          //     </h3>
          //     <p className="text-gray-300 mt-2">{project.description}</p>
          //     <div className="flex flex-wrap gap-2 mt-4">
          //       {project.tags.map((tag, idx) => (
          //         <span
          //           key={idx}
          //           className="text-xs bg-green-500 text-white py-1 px-2 rounded-full"
          //         >
          //           {tag}
          //         </span>
          //       ))}
          //     </div>
          //   </div>
          // </motion.div>
          // <div className="flex justify-center items-center min-h-screen" key={index}>
          <motion.div
            className="relative p-1 rounded-xl w-full max-w-4xl"
            whileHover={{ scale: 1.02,borderColor:'red' }}
            transition={{ duration: 0.3 }}
            key={index}
          >
            {/* Hover border gradient */}
            <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-blue-400 hover:to-blue-600 transition-all duration-300 pointer-events-none"></div>
    
            {/* Card content */}
            <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-6 border border-transparent">
              {/* Image Section */}
              <div className="w-full md:w-1/4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-lg"
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </div>
    
              {/* Content Section */}
              <div className="w-full md:w-3/4">
                <h3 className="text-xl md:text-2xl font-semibold text-[#35155D]">
                  {project.title}
                  <span className="inline-block align-middle text-[#35155D]">
                    ↗
                  </span>
                </h3>
                <p className="text-[#35155D] mt-2 text-sm md:text-base ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-500 text-white py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        // </div>
        ))}
      </div>
    </section>
  );
}

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
};

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg p-6 rounded-xl bg-gradient-to-b from-gray-800 to-black text-white shadow-lg transform transition-all hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center shadow-md">
          <Image src={imageUrl} alt={title} className="w-6 h-6" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {/* <h3 className="text-lg text-gray-400 mb-4">{subtitle}</h3> */}
      {/* <p className="text-xl font-semibold">{description}</p> */}
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};
