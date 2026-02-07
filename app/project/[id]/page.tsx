// "use client"

// import { use } from "react"
// import Link from "next/link"
// import { Badge } from "@/components/ui/badge"
// // import { projects } from "@/lib/projects-data"
// import { ArrowLeft, ExternalLink, Github } from "lucide-react"
// import { projects } from "@/lib/data"

// export default function ProjectPage({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const { id } = use(params)
//   const project = projects.find((p) => p.id === id)

//   if (!project) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-xl font-bold text-foreground">
//             Project not found
//           </h1>
//           <Link
//             href="/"
//             className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to portfolio
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
//         <div className="mx-auto flex max-w-2xl items-center px-4 py-3">
//           <Link
//             href="/#projects"
//             className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </Link>
//         </div>
//       </header>

//       <main className="mx-auto max-w-2xl px-4 py-10">
//         {/* Title */}
//         <h1 className="text-2xl font-bold text-foreground">{project.title}</h1>
//         <p className="mt-1 text-sm text-muted-foreground">{project.period}</p>

//         {/* Media */}
//         {project.mediaType === "video" ? (
//           <div className="mt-6 overflow-hidden rounded-lg border border-border">
//             <video
//               src={project.image}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full"
//             />
//           </div>
//         ) : null}

//         {/* Tech stack */}
//         <div className="mt-6 flex flex-wrap gap-1.5">
//           {project.technologies.map((tech) => (
//             <Badge
//               key={tech}
//               variant="secondary"
//               className="text-xs font-normal"
//             >
//               {tech}
//             </Badge>
//           ))}
//         </div>

//         {/* Links */}
//         <div className="mt-6 flex gap-3">
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             <ExternalLink className="h-3.5 w-3.5" />
//             Website
//           </a>
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             <Github className="h-3.5 w-3.5" />
//             Source
//           </a>
//         </div>

//         {/* Description */}
//         <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
//           {project.fullDescription?.split("\n\n").map((para, i) => (
//             <p key={i}>{para}</p>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="mt-8">
//           <h2 className="mb-3 text-sm font-semibold text-foreground">
//             Key Features
//           </h2>
//           <ul className="space-y-1.5">
//             {project.features?.map((feature, i) => (
//               <li
//                 key={i}
//                 className="flex items-start gap-2 text-sm text-muted-foreground"
//               >
//                 <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Architecture */}
//         <div className="mt-8">
//           <h2 className="mb-3 text-sm font-semibold text-foreground">
//             Architecture
//           </h2>
//           <ul className="space-y-1.5">
//             {project.architecture?.map((item, i) => (
//               <li
//                 key={i}
//                 className="flex items-start gap-2 text-sm text-muted-foreground"
//               >
//                 <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Services */}
//         {project.services && project.services.length > 0 && (
//           <div className="mt-8">
//             <h2 className="mb-3 text-sm font-semibold text-foreground">
//               Services / Modules
//             </h2>
//             <div className="space-y-3">
//               {project.services.map((service, i) => (
//                 <div key={i}>
//                   <h3 className="text-sm font-medium text-foreground">
//                     {service.name}
//                   </h3>
//                   <p className="text-xs text-muted-foreground">
//                     {service.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="h-16" />
//       </main>
//     </div>
//   )
// }

import { use } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

// This tells Next.js which pages to pre-render
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const project = projects.find(
    (p) => p.id.toString() === id, // make sure to convert number to string
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-black dark:text-white">
            Project not found
          </h1>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-black/60 dark:text-white/60 transition-colors hover:text-blue-600 dark:hover:text-[hsl(var(--code-string))]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Helper: detect if URL is a video
  const isVideo = (src: string) => src.endsWith(".mp4");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center px-4 py-3">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 transition-colors hover:text-blue-600 dark:hover:text-[hsl(var(--code-string))]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-10">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          {project.title}
        </h1>
        <p className="mt-1 text-sm font-mono text-black/60 dark:text-white/60">
          {project.period}
        </p>

        {/* Main Media */}
        {project.image && (
          <div className="mt-6 overflow-hidden rounded-lg border border-border/50">
            {isVideo(project.image) ? (
              <video
                src={project.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            )}
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-border/40"
              >
                {isVideo(src) ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-mono text-blue-600 dark:text-[hsl(var(--code-string))]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* <div className="mt-6 flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-black/60 dark:text-white/60 transition-colors hover:text-blue-600 dark:hover:text-[hsl(var(--code-string))]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-black/60 dark:text-white/60 transition-colors hover:text-blue-600 dark:hover:text-[hsl(var(--code-string))]"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div> */}

        {/* Description */}
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-black/70 dark:text-white/70">
          {project.fullDescription?.split("\n\n").map((para, i) => (
            <p key={i} className="font-mono">
              {para}
            </p>
          ))}
        </div>

        {/* Features */}
        {project.features && project.features?.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-black dark:text-white">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-black/70 dark:text-white/70"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-[hsl(var(--code-string))]" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture */}
        {project.architecture && project.architecture?.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-black dark:text-white">
              Architecture
            </h2>
            <ul className="space-y-2">
              {project.architecture.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-black/70 dark:text-white/70"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-[hsl(var(--code-string))]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Services / Modules */}
        {project.services && project.services?.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-black dark:text-white">
              Services / Modules
            </h2>
            <div className="space-y-4">
              {project.services.map((service, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="text-sm font-medium text-black dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-xs text-black/70 dark:text-white/70 font-mono">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="h-16" />
      </main>
    </div>
  );
}
