"use client";

import { BackgroundBeams } from "@/components/Beam";
// import { BackgroundBeams } from "@/components/Beam";
import Educations from "@/components/educations";
import { FloatingDockDemo } from "@/components/FloatingDock";
// import Experience from "@/components/experience";
import Footer from "@/components/footer";

import Intro from "@/components/intro";

// import { NavigationDock } from "@/components/NavigationDock/NavigationDock";
// import Projects from "@/components/projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/skills";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { changeTheme } from "@/lib/utils";

import React from "react";

export default function Home() {
  return (
    <main className="main flex flex-col w-full h-full">
      <HeroSection />
    </main>
  );
}

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen  text-center px-6 text-txt-primary">
      {/* Animated Glowing Stars */}
      {[
        { top: "10%", left: "15%" },
        { top: "20%", right: "10%" },
        { bottom: "15%", left: "5%" },
        { bottom: "25%", right: "15%" },
        // { top: "50%", left: "50%" },
      ].map((style, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: [1.3, 1.5, 1.3], // Bigger Stars!
            filter: [
              "drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))",
              "drop-shadow(0 0 25px rgba(255, 255, 255, 1))",
              "drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute text-white text-6xl" // Increased from text-4xl to text-6xl
          style={style}
        >
          ✦
        </motion.div>
      ))}

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold leading-tight md:text-8xl"
      >
        Hi. I'm <span className="italic">Minsaf.</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold mt-4 md:text-5xl"
      >
      
        Software Engineer.
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-6 text-[#3f5b51] max-w-lg"
      >
        I build scalable, performant, and accessible web applications that
        enhance user experiences.
      </motion.p>
    </div>
  );
}
