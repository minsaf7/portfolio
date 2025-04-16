// "use client"

// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import { projects } from "@/lib/data"

// export default function ProjectsSection() {
//   return (
//     <section className="py-20">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Selected Work</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.slug}
//               className="border border-border/30 rounded-lg overflow-hidden bg-background/50 hover:border-primary/30 transition-colors"
//             >
//               <Link href={`/projects/${project.slug}`} className="block p-6 h-full">
//                 <div className="flex flex-col h-full">
//                   <div className="mb-4">
//                     <span className="text-sm font-medium uppercase tracking-wider">{project.technologies[0]}</span>
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-foreground/80 mb-6">{project.description}</p>
//                   <div className="mt-auto flex items-center text-sm font-medium">
//                     View Project <ArrowRight className="ml-1 h-4 w-4" />
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "dfn-cms",
    title: "DFN CMS",
    description: "A no-code/low-code Web Content Management System for financial institutions",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "Docker", "Microservices"],
  },
  {
    id: "dfn-fincon",
    title: "DFN Fincon",
    description: "A React Native application providing real-time stock market data and analytics",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "TypeScript", "React Hookstate", "Server-Driven UI"],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-container bg-muted/50">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div ref={ref} className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <Link href={`/projects/${project.id}`}>
              <div className="overflow-hidden rounded-lg bg-background border shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && <Badge variant="outline">+{project.tags.length - 4}</Badge>}
                  </div>
                  <Button variant="ghost" className="group/btn">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
