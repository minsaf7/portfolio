"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Redux",
      "React Hookstate",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MolecularJS", "REST API", "GraphQL", "Microservices", "Docker", "Nginx"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "Redis", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "CI/CD", "Docker", "Kubernetes", "AWS", "Vercel", "Netlify"],
  },
  {
    name: "Architecture",
    skills: ["Microservices", "Server-Driven UI", "API Design", "System Design", "Scalable Architecture"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-10"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
