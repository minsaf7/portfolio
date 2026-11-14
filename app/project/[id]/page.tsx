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

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { DotGridBackground } from "@/components/site/DotGridBackground";

// This tells Next.js which pages to pre-render
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="py-8">
      <h2 className="mb-4 font-mono text-sm text-muted-foreground">
        <span className="text-highlight">## </span>
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <span className="select-none text-highlight">–</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-2xl font-medium tracking-tight">Project not found</h1>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const isVideo = (src: string) => src.endsWith(".mp4");
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-5">
      <DotGridBackground />
      <header className="pt-10 font-mono md:pt-16">
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <Reveal className="pb-10 pt-20 md:pt-28">
          <h1 className="text-2xl font-medium tracking-tight">{project.title}</h1>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            {project.period} · <span className="text-highlight">{project.id}</span>
          </p>
          <p className="mt-8 leading-relaxed">
            {project.description}
          </p>
        </Reveal>

        {project.image && (
          <Reveal delay={0.1} className="overflow-hidden rounded-lg border border-border">
            {project.mediaType === "video" ? (
              <video
                src={project.image}
                autoPlay
                loop
                muted
                playsInline
                className="max-h-[75vh] w-full object-contain"
              />
            ) : (
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            )}
          </Reveal>
        )}

        <div className="mt-6">
          <DetailBlock title="Overview">
            <div className="space-y-4 leading-relaxed">
              {project.fullDescription?.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </DetailBlock>

          <DetailBlock title="Stack">
            <p className="font-mono text-sm leading-relaxed">{project.technologies.join(" · ")}</p>
          </DetailBlock>

          {project.features && project.features.length > 0 && (
            <DetailBlock title="Key features">
              <BulletList items={project.features} />
            </DetailBlock>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <DetailBlock title="Architecture">
              <BulletList items={project.architecture} />
            </DetailBlock>
          )}

          {project.services && project.services.length > 0 && (
            <DetailBlock title="Services / Modules">
              <dl className="space-y-4">
                {project.services.map((service, i) => (
                  <div key={i}>
                    <dt className="font-medium">{service.name}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </DetailBlock>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <DetailBlock title="Gallery">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-border">
                    {isVideo(src) ? (
                      <video src={src} autoPlay loop muted playsInline className="w-full object-cover" />
                    ) : (
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </DetailBlock>
          )}
        </div>

        {next && next.id !== project.id && (
          <Link
            href={`/project/${next.id}`}
            className="group mb-16 mt-8 flex items-baseline justify-between gap-4 border-t border-border pt-8"
          >
            <span>
              <span className="block text-sm text-muted-foreground">Next</span>
              <span className="font-medium transition-colors group-hover:text-highlight">
                {next.title}
              </span>
            </span>
            <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-highlight">
              →
            </span>
          </Link>
        )}
      </main>
    </div>
  );
}
