// "use client";

// import { motion } from "framer-motion";
// import { AccordionComponent } from "./AccordionComponent";

// const experiences = [
//   {
//     company: "DirectFN Sri Lanka",
//     role: "Senior Product Engineer",
//     period: "May 2021 - Oct 2022",
//     // logo: "/placeholder.svg?height=40&width=40",
//     logo: "/dfn-logo.png",
//   },
//   {
//     company: "DirectFN Sri Lanka",
//     role: "Product Engineer",
//     period: "January 2021 - April 2021",
//     logo: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     company: "Nulogy",
//     role: "Software Engineer",
//     period: "January 2020 - April 2020",
//     logo: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     company: "Splunk",
//     role: "Software Engineer",
//     period: "January 2019 - April 2019",
//     logo: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     company: "Lime",
//     role: "Software Engineer",
//     period: "January 2018 - April 2018",
//     logo: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     company: "Mira Media",
//     role: "Software Engineer",
//     period: "May 2017 - August 2017",
//     logo: "/placeholder.svg?height=40&width=40",
//   },
// ];

// export default function Experience() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="mb-12">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="section-title">Work Experience</h2>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="space-y-4"
//         >
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="flex items-center gap-4"
//             >
//               <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
//                 <img
//                   src={exp.logo || "/placeholder.svg"}
//                   alt={exp.company}
//                   className="w-6 h-6"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-medium">{exp.company}</h3>
//                   <span className="text-sm text-muted-foreground">
//                     {exp.period}
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">{exp.role}</p>
//               </div>
//             </motion.div>
//           ))}

//           <AccordionComponent
//             avatar={experiences[0].logo}
//             itemKey=""
//             label={experiences[0].role}
//             subtitle={experiences[0].period}
//           >
//             <h1>hello</h1>
//           </AccordionComponent>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    company: "Atomic Finance",
    role: "Bitcoin Protocol Engineer",
    period: "May 2021 - Oct 2022",
    logo: "/placeholder.svg?height=80&width=80",
    description: `Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source TypeScript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.`,
  },
  {
    company: "Shopify",
    role: "Software Engineer",
    period: "January 2021 - April 2021",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Developed and maintained e-commerce applications using Ruby on Rails and React. Implemented new features for the Shopify admin dashboard. Collaborated with cross-functional teams to improve the merchant experience.",
  },
  {
    company: "Nvidia",
    role: "Software Engineer",
    period: "January 2020 - April 2020",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Worked on GPU-accelerated machine learning frameworks. Optimized CUDA kernels for deep learning applications. Contributed to the development of AI tools and libraries.",
  },
  {
    company: "Splunk",
    role: "Software Engineer",
    period: "January 2019 - April 2019",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Developed features for Splunk's data analytics platform. Implemented improvements to search functionality and visualization tools. Worked on backend systems using Java and Python.",
  },
  {
    company: "Lime",
    role: "Software Engineer",
    period: "January 2018 - April 2018",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Built and maintained microservices for Lime's scooter-sharing platform. Developed APIs for mobile applications. Implemented geolocation features and payment processing systems.",
  },
  {
    company: "Mitre Media",
    role: "Software Engineer",
    period: "May 2017 - August 2017",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Developed web applications for financial content platforms. Created interactive data visualizations for investment analysis. Implemented responsive designs and improved site performance.",
  },
];

export default function Experience() {
  const [defaultValue, setDefaultValue] = useState<string>("item-0");

  return (
    <section id="experience" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8">Work Experience</h2>

        <Accordion
          type="single"
          collapsible
          // defaultValue={defaultValue}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <div className="flex items-start gap-4 justify-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="py-0 hover:no-underline">
                    <div className="text-left flex-1">
                      <h3 className=" font-medium">{exp.role}</h3>
                      <span className="text-muted-foreground">{exp.company}</span>
                    </div>

                    <div className="pr-10">
                      <div className="text-right text-muted-foreground text-sm whitespace-nowrap pt-1">
                        {exp.period}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2 text-muted-foreground">
                    <h1>{exp.description}</h1>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
