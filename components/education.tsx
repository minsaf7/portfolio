"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const education = [
  
  {
    school: "Coventry University, UK",
    degree: "BSc (Hons) Computing",
    period: "First Class",
    logo: "/coventry.png",
  },
  {
    school: "NIBM, Sri Lanka",
    degree: "Higher National Diploma in Computer Based Infromation System",
    period: "Passed",
    logo: "/nibm.png",
  },
  {
    school: "NIBM, Sri Lanka",
    degree: "Diploma in Computer Based Infromation System",
    period: "Passed",
    logo: "/nibm.png",
  },
]

export default function Education() {
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
    <section className="mb-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="section-title">Education</h2>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <Image src={edu.logo || "/placeholder.svg"} alt={edu.school} className="w-6 h-6" width={24} height={24}/>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{edu.school}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
