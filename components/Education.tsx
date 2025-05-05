"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const education = [
  {
    school: "Buildspace",
    degree: "S3, s4, s5",
    period: "2023 - 2024",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    school: "University of Waterloo",
    degree: "Bachelor's Degree of Computer Science (BCS)",
    period: "2018 - 2021",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    school: "Wilfrid Laurier University",
    degree: "Bachelor's Degree of Business Administration (BBA)",
    period: "2018 - 2021",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    school: "International Baccalaureate",
    degree: "IB Diploma",
    period: "2012 - 2016",
    logo: "/placeholder.svg?height=40&width=40",
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Education</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <Image
                  src={edu.logo || "/placeholder.svg"}
                  alt={edu.school}
                  className="w-6 h-6"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{edu.school}</h3>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
