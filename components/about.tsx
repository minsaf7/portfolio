"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";


export  function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 z-[900] relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When Im not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. Im also
        learning how to play the guitar.
      </p> */}
     <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        I possess <strong>over 2.5 years</strong> of experience in software engineering, with a refined expertise in{' '}
        <strong>JavaScript, React.js, Node.js,</strong> and <strong>Docker</strong>. My professional journey has been deeply rooted in the{' '}
        <strong>ERP and fintech sectors</strong>, where I have played a pivotal role in developing innovative solutions that optimize operations and enhance user experiences.
      </p>
      <div className="mt-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">🔧 Technical Expertise:</h3>
        <ul className="flex justify-center gap-6 flex-wrap">
          <li className="bg-gray-800 text-white py-2 px-6 rounded-lg">💻 JavaScript</li>
          <li className="bg-gray-800 text-white py-2 px-6 rounded-lg">⚛️ React.js</li>
          <li className="bg-gray-800 text-white py-2 px-6 rounded-lg">🌐 Node.js</li>
          <li className="bg-gray-800 text-white py-2 px-6 rounded-lg">🐳 Docker</li>
        </ul>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
        My journey has equipped me with a comprehensive understanding of both frontend and backend technologies, enabling me to build resilient and scalable applications.
        I am passionate about staying current with industry trends and continually honing my skills to deliver top-quality software solutions.
      </p>

    </motion.section>
  );
}
