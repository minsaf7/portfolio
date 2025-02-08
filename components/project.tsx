"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
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
    //   className="group  border- mb-3 sm:mb-8 last:mb-0 border border-white rounded-xl border-opacity-40 bg-[#AAABB8] bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-colors duration-300 hover:bg-opacity-80 hover:text-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
    // >
    //   <section
    //     className="max-w-[72rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 "
    //     style={{
    //       zIndex: 999,
    //     }}
    //   >
    //     <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
    //       <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
    //         {title}
    //       </h3>
    //       <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
    //         {description}
    //       </p>
    //       <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
    //         {tags.map((tag, index) => (
    //           <li
    //             className="bg-[#45a29e] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
    //             key={index}
    //           >
    //             {tag}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <Image
    //       src={imageUrl}
    //       alt="Project I worked on"
    //       quality={95}
    //       className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
    //   transition
    //   group-hover:scale-[1.04]
    //   group-hover:-translate-x-3
    //   group-hover:translate-y-3
    //   group-hover:-rotate-2

    //   group-even:group-hover:translate-x-3
    //   group-even:group-hover:translate-y-3
    //   group-even:group-hover:rotate-2

    //   group-even:right-[initial] group-even:-left-40"
    //     />

    // <div
    //   className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
    //   style={{
    //     backgroundImage: "url(/noise.webp)",
    //     backgroundSize: "30%",
    //   }}
    // ></div>
    //   </section>
    // </motion.div>

    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        zIndex: 999,
      }}
      className="group mb-8 last:mb-0 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl relative overflow-hidden"
    >
      <section className="max-w-full lg:max-w-[72rem] rounded-3xl overflow-hidden relative sm:h-[22rem] flex flex-col sm:flex-row">
        <div className="p-8 flex-1 flex flex-col justify-between z-10">
          <span className="text-sm font-medium text-blue-200">
            AIRBNB • 2023
          </span>
          <h3 className="text-3xl font-semibold mt-2 text-white">{title}</h3>
          <p className="mt-4 leading-relaxed text-gray-300">{description}</p>
          <ul className="flex flex-wrap mt-6 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-blue-700 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <button className="mt-6 sm:mt-auto py-2 px-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition">
            View Case Study
          </button>
        </div>

        <div className="relative flex-1 sm:h-auto h-[14rem] sm:ml-4">
          <Image
            src={imageUrl}
            alt="Project Image"
            quality={95}
            className="object-cover w-full h-full rounded-t-3xl sm:rounded-r-3xl sm:rounded-bl-none shadow-2xl"
            layout="fill"
          />
        </div>

        <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
      </section>
    </motion.div>
  );
}
