// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// type EducationProps = {
//   id: number;
//   title: string;
//   date: string;
//   desc: string;
//   premises: string;
// };

// export default function Education({ title, date, desc, premises }: EducationProps) {
//     const ref = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["0 1", "1.33 1"],
//     });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgess,
//         opacity: opacityProgess,
//         zIndex: 999,
//       }}
//       className="group mb-6 sm:mb-8 last:mb-0 border border-white border-opacity-40 bg-[#1f2833] bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-colors duration-300 hover:bg-opacity-80 hover:text-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
//     >
//       <section
//         className="max-w-[72rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[15rem] transition sm:group-even:pl-8"
//         style={{
//           zIndex: 999,
//         }}
//       >
//         <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem]">
//           <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
//             {title}
//           </h3>
//           <p className="mt-1 text-gray-400 dark:text-white/70">{date}</p>
//           <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
//             {desc}
//           </p>
//           <p className="mt-4 font-semibold text-gray-500 dark:text-white/70 group-hover:text-[#66fcf1] transition-colors">
//             {premises}
//           </p>
//         </div>
//       </section>
//     </motion.div>
//   );
// }


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type EducationProps = {
  id: number;
  title: string;
  date: string;
  desc: string;
  premises: string;
};

export default function Education({ title, date, desc, premises }: EducationProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]); // Bouncing in from below
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: yProgress,
        opacity: opacityProgress,
        zIndex: 999,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="group mb-6 sm:mb-8 last:mb-0 border border-white border-opacity-40 bg-[#1f2833] bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-colors duration-300 hover:bg-opacity-80 hover:text-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
    >
      <section
        className="max-w-[72rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[15rem] transition sm:group-even:pl-8"
        style={{
          zIndex: 999,
        }}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
            {title}
          </h3>
          <p className="mt-1 text-gray-400 dark:text-white/70">{date}</p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
            {desc}
          </p>
          <p className="mt-4 font-semibold text-gray-500 dark:text-white/70 group-hover:text-[#66fcf1] transition-colors">
            {premises}
          </p>
        </div>
      </section>
    </motion.div>
  );
}
