"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const Projects = () => {
  const [selectedProject, setselectedProject] = useState("");
  console.log("selectedProject", selectedProject);

  const handleSelectProject = (project: string) => {
    setselectedProject(project);
  };
  return (
    <div className="w-screen h-screen m-50">
      <div className="  flex  h-[80vh] overflow-scroll pt-16">
        {/* <BentoGridDemo handleSelectProject={handleSelectProject} /> */}
        <AnimatedTestimonialsDemo handleSelectProject={handleSelectProject}/>
      </div>
    </div>
  );
};

export default Projects;

import { cn } from "@/lib/utils";





import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";


import { useEffect,  } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  handleSelectProject
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  handleSelectProject: (project: string) => void;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 text-txt-primary">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-60 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.05,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="size-auto rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

       
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold">
              {testimonials[active].name}
            </h3>
            <p className="text-sm ">
              {testimonials[active].designation}
            </p>
           
            <motion.p className="text-lg ">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <button onClick={()=>handleSelectProject(testimonials[active].name)}>More</button>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo({handleSelectProject}:{handleSelectProject: (project: string) => void;}) {
  const testimonials = [
    {
      quote:
        "A Web Content Management System specifically designed for the fintech domain.",
      name: "CMS",
      designation: "DirectFN Sri Lanka",
      src: "https://i.imgur.com/aBwarNk.png",
    },
    {
      quote:
        "Application for streaming realtime market information, charts and analytics",
      name: "DFNONE Mobile",
      designation: "DirectFN Sri Lanka",
      src: "https://i.imgur.com/aBwarNk.png",
    },
    {
      quote:
        "A comprehensive POS and Order Management System tailored for retail operations.",
      name: "BLPOS",
      designation: "Blue Lotus 360",
      src: "https://i.imgur.com/aBwarNk.png",
    },
    {
      quote:
        "An iOS application designed to detect and alert users about potential COVID-19 patients in their vicinity.",
      name: "CovidAlert",
      designation: "Personal",
      src: "https://i.imgur.com/aBwarNk.png",
    },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} handleSelectProject={handleSelectProject}/>;
}
