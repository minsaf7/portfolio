"use client";
import About from "@/components/about";
import { BackgroundBeams } from "@/components/Beam";
// import { BackgroundBeams } from "@/components/Beam";
import Educations from "@/components/educations";
// import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
// import Projects from "@/components/projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/skills";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const gradientVariants = {
  animate: {
    x: [
      "0%",
      "10%",
      "15%",
      "25%",
      "35%",
      "45%",
      "55%",
      "65%",
      "75%",
      "85%",
      "95%",
      "100%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "20%",
      "10%",
      "0%",
    ],
    y: [
      "0%",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "20%",
      "10%",
      "0%",
    ],
    rotate: [0, 90, 180, 270, 360],
    scale: [1, 1.1, 1.2, 1.1, 1],
    transition: {
      x: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
      y: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      },
      scale: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

const gradients = [
  "radial-gradient(circle, rgba(255,0,150,0.5) 10%, transparent 70%)",
  "radial-gradient(circle, rgba(0,150,255,0.5) 0%, transparent 70%)",
  "radial-gradient(circle, rgba(255,255,0,0.5) 0%, transparent 70%)",
  "radial-gradient(circle, rgba(0,255,150,0.5) 0%, transparent 70%)",
  "radial-gradient(circle, rgba(255,0,255,0.5) 0%, transparent 70%)",
  "radial-gradient(circle, rgba(150,255,0,0.5) 0%, transparent 70%)",
];

export default function Home() {
  return (
    <main className="main flex flex-col items-center px-4 ">
      <div className="mainDiv">
        <Intro />
        <SectionDivider />
        <About />
        {/* <Projects />
        <Experience /> */}
        <Educations />
        <Skills />
      </div>
    </main>
  );
}

// <main className="main">
//       <div className="mainDiv">
//         <Intro />
//         <SectionDivider />
//         <About />
//         <Projects />
//         <Experience />
//         <Educations />
//         <Skills />
//         <Footer />
//       </div>
//     </main>

// <div className="relative h-screen w-full bg-white">
//   <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//     {gradients.map((gradient, index) => (
//       <motion.div
//         key={index}
//         className="absolute"
//         style={{
//           width: "250px",
//           height: "250px",
//           backgroundImage: gradient,
//           borderRadius: "50%",
//           top: `${Math.random() * 80}%`,
//           left: `${Math.random() * 80}%`,
//         }}
//         variants={gradientVariants}
//         animate="animate"
//       />
//     ))}
//   </div>
//   <main className="relative flex flex-col items-center px-4 z-10">
// <Intro />
// <SectionDivider />
// <About />
// <Projects />
// <Experience />
// <Educations />
// <Skills />
// <Footer />
//   </main>
// </div>
