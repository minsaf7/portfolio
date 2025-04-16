"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import Image from "next/image"

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <div className="container mx-auto px-4 py-20">Project not found</div>
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

          <p className="text-xl text-foreground/80 mb-12">{project.description}</p>

          <div className="rounded-lg overflow-hidden mb-12 border border-border/30">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={900}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-foreground/80">{project.overview}</p>
            </div>

            {project.services && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <ul className="space-y-4">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <div>
                        <span className="font-medium">{service.name}</span> – {service.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-primary/10 text-foreground rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.demoUrl && (
                <Button asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
