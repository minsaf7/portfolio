"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="mb-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4">Check out my latest work</h2>
        <p className="text-muted-foreground mb-8">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my
          favorites.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="border rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>

                <Link href={`/projects/${project.id}`}>
                  <Button variant="ghost" className="w-full justify-between group">
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
