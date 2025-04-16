// 

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
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "RESTful APIs",
      "Microservices",
      "Docker",
      "Nginx",
      "MolecularJS",
    ],
  },
  {
    name: "Tools & Methods",
    skills: [
      "Git",
      "CI/CD",
      "Agile",
      "Server-Driven UI",
      "Responsive Design",
      "Performance Optimization",
      "Testing",
      "Webpack",
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <div ref={ref} className="space-y-12 max-w-4xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-center">{category.name}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                >
                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
