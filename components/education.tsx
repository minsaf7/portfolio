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

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { WobbleCard } from "./WobbleCard";

type EducationProps = {
  id: number;
  title: string;
  date: string;
  desc: string;
  premises: string;
};

// export default function Education({
//   title,
//   date,
//   desc,
//   premises,
// }: EducationProps) {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });

//   const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]); // Bouncing in from below
//   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         y: yProgress,
//         opacity: opacityProgress,
//         zIndex: 999,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//       }}
//       className="group mb-6 sm:mb-8 last:mb-0 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-colors duration-300 hover:bg-opacity-80 hover:text-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
//     >
//       <section
//         style={{
//           zIndex: 999,
//         }}
//       >
//         <div>
//           <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
//             {title}
//           </h3>
//           <p className="mt-1 text-gray-400 dark:text-white/70">{date}</p>
//           <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
//             {desc}
//           </p>
//           <p>{premises}</p>
//         </div>
//       </section>
//     </motion.div>
//   );
// }

import React from "react";

const cardStyle: React.CSSProperties = {
  margin: "100px auto",
  background: "transparent",
  boxShadow: "0px 8px 28px -9px rgba(0,0,0,0.45)",
  position: "relative",
  width: "50%",
  height: "330px",
  borderRadius: "16px",
  overflow: "hidden",
//   backgroundColor:'red'
};

const waveStyle: React.CSSProperties = {
  position: "absolute",
  width: "540px",
  height: "700px",
  opacity: 0.6,
  left: "0",
  top: "0",
  marginLeft: "-50%",
  marginTop: "-70%",
  background: "linear-gradient(744deg,#af40ff,#5b42f3 60%,#00ddeb)",
  borderRadius: "40%",
  animation: "wave 55s infinite linear",
  backgroundColor:'green'
};

const wave2Style: React.CSSProperties = {
  ...waveStyle,
  top: "210px",
  animationDuration: "50s",
};

const wave3Style: React.CSSProperties = {
  ...waveStyle,
  top: "210px",
  animationDuration: "45s",
};

const iconStyle: React.CSSProperties = {
  width: "3em",
  marginTop: "-1em",
  paddingBottom: "1em",
};

const infoTopStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "20px",
  position: "absolute",
//   top: "5.6em",
  left: "0",
  right: "0",
  color: "rgb(255, 255, 255)",
  fontWeight: 600,
};

const nameStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 100,
  position: "relative",
  top: "1em",
  textTransform: "lowercase",
};

const keyframesStyle = `
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export default function Education ({
    title,
    date,
    desc,
    premises,
  }: EducationProps)  {
  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={cardStyle} >
        <div style={waveStyle}></div>
        <div style={wave2Style}></div>
        <div style={wave3Style}></div>

        <div style={infoTopStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <path
              fill="currentColor"
              d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
  4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
  21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
  22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
  17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
  14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
  3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
  19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
  12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
  16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
  15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
  19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
   16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
   20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
            ></path>
          </svg>
          <section
        style={{
          zIndex: 999,
        }}
      >
        <div>
          <h3 className="text-2xl font-semibold group-hover:text-[#66fcf1] transition-colors text-white">
            {title}
          </h3>
          <p className="mt-1 text-gray-400 dark:text-white/70">{date}</p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:text-white transition-colors">
            {desc}
          </p>
          <p>{premises}</p>
        </div>
      </section>
        </div>
      </div>
    </>
  );
};
