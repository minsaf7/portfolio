"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const educationData = [
  {
    degree: "BSc Hons Computing",
    institution: "Coventry University, UK",
    // period: "2018 - 2022",
    grade: "First Class Honors",
    description:
      "Specialized in software development and web technologies with focus on modern frameworks and programming paradigms.",
    icon: GraduationCap,
  },
  {
    degree: "Diploma National Diploma in Computing Based Information System",
    institution: "NIBM, Sri Lanka",
    period: "2016 - 2018",
    // grade: "Distinction",
    description:
      "Advanced computing studies covering fundamental programming concepts, database design, and system architecture.",
    icon: Award,
  },
  {
    degree: "Diploma in Computer System Design",
    institution: "NIBM, Sri Lanka",
    period: "2016 - 2018",
    // grade: "Distinction",
    description:
      "Advanced computing studies covering fundamental programming concepts, database design, and system architecture.",
    icon: Award,
  },
  {
    degree: "Frontend Developer Professional Certificate",
    institution: "Meta",
    period: "2022",
    grade: "Completed",
    description:
      "Industry-recognized certification covering React, responsive design, and modern frontend development practices.",
    icon: BadgeCheck,
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-container bg-muted/30">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.degree}</CardTitle>
                        <CardDescription className="text-base">
                          {item.institution}
                        </CardDescription>
                      </div>
                    </div>
                    {/* <div className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">{item.period}</div> */}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    {item.grade && (
                      <span className="inline-block bg-primary/10 text-primary font-medium text-sm px-2 py-1 rounded">
                        {item.grade}
                      </span>
                    )}
                  </div>
                  {/* <p className="text-muted-foreground">{item.description}</p> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
