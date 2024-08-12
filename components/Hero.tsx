
import React from "react";
import { Vortex } from "./ui/Vortex";
import {motion} from 'framer-motion'

import { TypewriterEffect } from "./ui/TypeWriterEffect";

const Hero = () => {
  const words = [
    {
      text: "Software",
    },
    {
      text: "Engineer",
    },
    {
      text: "at",
    },
    {
      text: "DirectFN",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b  text-white">
      <motion.h1
        className="text-2xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Mohamed Minsaf
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-4xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        Software Engineer
      </motion.h2>
      {/* <motion.a
        href=""
        className="text-lg md:text-xl text-teal-400 hover:text-teal-300 transition-colors duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        DirectFN
      </motion.a> */}
      <nav 
      className="flex justify-center space-x-4 mt-4 z-50"
      >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
        //   className="text-neutral hover:text-soft transition-colors duration-300"
        >
          {section.label}
        </a>
      ))}
    </nav>
    </div>
  );
};

const sections = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

export default Hero;
