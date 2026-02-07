import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8 md:py-12">
      <div className="mb-8 text-lg font-mono text-black/60 dark:text-[hsl(var(--code-string))] font-bold">
        {"// selected.projects"}
      </div>

      {/* <div className="mb-8 text-center">
        <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          My Projects
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Check out my latest work
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          {
            "I've worked on a variety of projects, from financial platforms to enterprise applications. Here are a few of my favorites."
          }
        </p>
      </div> */}

      {/* Project cards grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent/50"
          >
            {/* Card image / placeholder */}
            <div className="relative flex h-36 items-center justify-center bg-muted/50">
              {project.mediaType === "video" ? (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                // <div className="text-3xl font-bold text-muted-foreground/20">
                //   {project.title.charAt(0)}
                // </div>
                <Image
                    src={project.image}
                    className="h-full w-full object-cover"
                    // width={'fit-content'}
                    width={100}
                    height={100} alt={""}                />
              )}
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {project.period}
              </p>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-1.5 py-0 text-[10px] font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge
                    variant="secondary"
                    className="px-1.5 py-0 text-[10px] font-normal"
                  >
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                <ExternalLink className="h-3 w-3" />
                <span>View project</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
