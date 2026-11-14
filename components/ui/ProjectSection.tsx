import Link from "next/link";
import { projects } from "@/lib/data";
import { Section } from "@/components/site/Section";

export function ProjectsSection() {
  return (
    <Section id="projects" command="ls ~/projects">
      <ul className="space-y-1">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/project/${project.id}`}
              className="group -mx-3 block rounded-lg px-3 py-3 transition-colors hover:bg-accent/60"
            >
              <span className="flex items-baseline justify-between gap-4">
                <span className="font-medium">{project.title}</span>
                <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-highlight">
                  →
                </span>
              </span>
              <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </span>
              <span className="mt-1.5 block font-mono text-xs text-highlight">
                {project.technologies.slice(0, 3).join(" · ")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
