// "use client"

// import { useParams } from "next/navigation"
// import { motion } from "framer-motion"
// import { ArrowLeft, ExternalLink, Github } from "lucide-react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { projects } from "@/lib/data"
// import Image from "next/image"
// import StarDecoration from "@/components/star-decoration"

// export default function ProjectPage() {
//   const { slug } = useParams()
//   const project = projects.find((p) => p.slug === slug)

//   if (!project) {
//     return <div className="container mx-auto px-4 py-20">Project not found</div>
//   }

//   return (
//     <div className="min-h-screen">
//       <StarDecoration />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 py-20"
//       >
//         <Link href="/#projects">
//           <Button variant="ghost" className="mb-8 group">
//             <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects
//           </Button>
//         </Link>

//         <div className="max-w-4xl mx-auto">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {project.title}
//           </motion.h1>

//           <motion.p
//             className="text-xl text-foreground/80 mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             {project.description}
//           </motion.p>

//           <motion.div
//             className="rounded-2xl overflow-hidden mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Image
//               src={project.image || "/placeholder.svg"}
//               alt={project.title}
//               width={900}
//               height={500}
//               className="w-full h-auto"
//             />
//           </motion.div>

//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Overview</h2>
//               <p className="text-foreground/80">{project.overview}</p>
//             </div>

//             {project.services && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Services</h2>
//                 <ul className="space-y-4">
//                   {project.services.map((service, index) => (
//                     <li key={index} className="flex">
//                       <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
//                       <div>
//                         <span className="font-medium">{service.name}</span> – {service.description}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <div>
//               <h2 className="text-2xl font-bold mb-4">Technologies</h2>
//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="px-4 py-2 bg-primary/10 text-foreground rounded-full text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               {project.demoUrl && (
//                 <Button asChild className="rounded-full">
//                   <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
//                   </Link>
//                 </Button>
//               )}
//               {project.githubUrl && (
//                 <Button variant="outline" asChild className="rounded-full">
//                   <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className="mr-2 h-4 w-4" /> View Source Code
//                   </Link>
//                 </Button>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }




import { useEffect, useState } from "react"
import {  notFound } from "next/navigation"
// import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Project data
const projectsData = {
  "dfn-cms": {
    title: "DFN CMS",
    description:
      "A no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets.",
    fullDescription: `DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets. The platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs.

The system is built on a microservice architecture with 8 distinct services:

Admin Side Services:
- Auth Service – Handles authentication and user roles for CMS users
- Web Router Service – Manages API routing for CMS operations
- Site Publisher Service – Converts CMS configurations into static websites
- Headless CMS Service – Manages and delivers structured content for websites

Published Website Services:
- Auth Service – Manages user authentication for website visitors
- Web Router Service – Routes API requests for the live website
- Dynamic Content Service – Serves real-time financial data
- Site Manager Service – Manages website settings and metadata

The application uses Redis for inter-service communication and Docker for deployment, with Nginx serving the React frontend.`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "Docker", "Microservices", "Nginx"],
    features: [
      "No-code/low-code website builder",
      "Pre-built financial widgets",
      "Server-driven UI architecture",
      "Microservice architecture",
      "Content management system",
      "User authentication and roles",
      "Real-time financial data integration",
      "Containerized deployment",
    ],
    technologies: {
      Frontend: ["React", "TypeScript", "CSS3", "HTML5"],
      Backend: ["Node.js", "MolecularJS", "MongoDB", "Redis"],
      DevOps: ["Docker", "Nginx", "CI/CD"],
      Architecture: ["Microservices", "Server-driven UI"],
    },
  },
  "dfn-fincon": {
    title: "DFN Fincon",
    description:
      "A React Native application that provides real-time stock market data and analytics using a server-driven UI architecture.",
    fullDescription: `DFN Fincon is a React Native application that provides real-time stock market data and analytics using a server-driven UI architecture. The app delivers a seamless experience for users to track stocks, analyze market trends, and make informed investment decisions.

The application is built with React Native and TypeScript, utilizing React Hookstate for efficient state management. The server-driven UI approach allows for dynamic content updates without requiring app store resubmissions, making it highly adaptable to changing market conditions and user needs.

Key features include real-time stock price tracking, interactive charts and graphs, personalized watchlists, market news integration, and customizable alerts for price movements.`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React Native", "TypeScript", "React Hookstate", "Server-Driven UI", "Mobile Development"],
    features: [
      "Real-time stock market data",
      "Interactive financial charts",
      "Personalized watchlists",
      "Market news integration",
      "Price alerts and notifications",
      "Offline mode support",
      "Cross-platform compatibility",
    ],
    technologies: {
      Frontend: ["React Native", "TypeScript", "React Hookstate"],
      Architecture: ["Server-driven UI", "REST APIs"],
      Features: ["Real-time data", "Interactive charts", "Push notifications"],
    },
  },
}


// 👇 Generate static paths for each project
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // const { slug } = useParams()
  // const [project, setProject] = useState<any>(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   if (typeof slug !== "string" || !projectsData[slug as keyof typeof projectsData]) {
  //     notFound()
  //   }

  //   setProject(projectsData[slug as keyof typeof projectsData])
  //   setLoading(false)
  // }, [slug])

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  //     </div>
  //   )
  // }

  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 -ml-3">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}> */}
          <div className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-xl font-medium mb-6">{project.description}</p>
              {project.fullDescription.split("\n\n").map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                  {project.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(project.technologies).map(([category, techs]: [string, any]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold mb-3">{category}</h3>
                      <ul className="space-y-2">
                        {techs.map((tech: string, i: number) => (
                          <li key={i} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></div>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        {/* </motion.div> */}
      </div>
    </main>
  )
}

