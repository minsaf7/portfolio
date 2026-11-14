import Link from "next/link";
import { ArrowUpRight, FileText, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { education, experiences, profile, projects, type Project } from "@/lib/data";

const card =
  "rounded-[20px] border border-border bg-card shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]";

function ProjectMedia({ project }: { project: Project }) {
  const cls = "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]";
  return project.mediaType === "video" ? (
    <video src={project.image} autoPlay loop muted playsInline className={cls} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={project.image} alt={project.title} className={cls} loading="lazy" />
  );
}

export function ProjectCarousel() {
  return (
    <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {projects.map((p) => (
        <Link
          key={p.id}
          href={`/project/${p.id}`}
          className={`group w-64 shrink-0 snap-start overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${card}`}
        >
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            <ProjectMedia project={p} />
          </div>
          <div className="p-4">
            <p className="font-medium tracking-tight">{p.title}</p>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
            <p className="mt-3 flex items-center gap-1 text-xs font-medium text-highlight">
              View case study
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/project/${project.id}`}
      className={`group flex max-w-sm overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 ${card}`}
    >
      <div className="w-28 shrink-0 overflow-hidden bg-muted">
        <ProjectMedia project={project} />
      </div>
      <div className="p-4">
        <p className="font-medium tracking-tight">{project.title}</p>
        <p className="mt-1 font-mono text-[11px] text-muted-foreground">
          {project.technologies.slice(0, 3).join(" · ")}
        </p>
        <p className="mt-2 flex items-center gap-1 text-xs font-medium text-highlight">
          Open case study <ArrowUpRight className="h-3.5 w-3.5" />
        </p>
      </div>
    </Link>
  );
}

export function ExperienceCard() {
  return (
    <div className={`max-w-md divide-y divide-border/70 ${card}`}>
      {experiences.map((e) => (
        <details key={e.role} className="group px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
            <span>
              <span className="block font-medium tracking-tight">{e.role}</span>
              <span className="block text-sm text-muted-foreground">
                {e.company} · {e.mode}
              </span>
              <span className="mt-1 block font-mono text-[11px] text-muted-foreground">
                {e.period}
              </span>
            </span>
            <span className="mt-0.5 text-lg leading-none text-muted-foreground transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {e.description.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-highlight">–</span>
                {d}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

export function EducationCard() {
  return (
    <div className={`max-w-md divide-y divide-border/70 ${card}`}>
      {education.map((e) => (
        <div key={e.degree} className="px-4 py-3.5">
          <p className="font-medium tracking-tight">{e.degree}</p>
          <p className="text-sm text-muted-foreground">{e.school}</p>
          <p className="mt-1 font-mono text-[11px] text-muted-foreground">{e.period}</p>
        </div>
      ))}
    </div>
  );
}

export function StackCard() {
  const others = Array.from(new Set(projects.flatMap((p) => p.technologies))).filter(
    (t) => !profile.coreStack.includes(t),
  );
  return (
    <div className={`max-w-md p-4 ${card}`}>
      <p className="text-xs text-muted-foreground">Core</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {profile.coreStack.map((t) => (
          <span key={t} className="rounded-full bg-gradient-to-b from-[#d42230] to-brand-red px-3 py-1 text-sm font-medium text-white">
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Also used across my projects</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {others.map((t) => (
          <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[13px]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const socialIcons: Record<string, typeof Github> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
};

export function ContactCard() {
  const rows = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    ...profile.socials.map((s) => ({ label: s.label, href: s.href, icon: socialIcons[s.label] ?? ArrowUpRight })),
  ];
  return (
    <div className={`max-w-sm overflow-hidden ${card}`}>
      <div className="flex items-center gap-3 border-b border-border/70 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar.svg"
          alt={profile.name}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-highlight ring-offset-2 ring-offset-card"
        />
        <div>
          <p className="font-medium tracking-tight">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
        </div>
      </div>
      <ul>
        {rows.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-accent/60"
            >
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 break-all">{label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Event name the chat listens for to open the CV modal. */
export const OPEN_CV_EVENT = "portfolio:open-cv";

export function CvCard() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CV_EVENT))}
      className={`group flex w-full max-w-sm items-center gap-4 p-4 text-left transition-transform duration-300 hover:-translate-y-0.5 ${card}`}
    >
      <span className="flex h-14 w-11 shrink-0 flex-col gap-1 rounded-md bg-white p-2 shadow-sm ring-1 ring-black/5">
        <span className="h-1.5 w-5 rounded-full bg-neutral-800" />
        <span className="h-1 w-6 rounded-full bg-neutral-300" />
        <span className="h-1 w-5 rounded-full bg-neutral-300" />
        <span className="mt-1 h-1 w-6 rounded-full bg-neutral-300" />
        <span className="h-1 w-4 rounded-full bg-neutral-300" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium tracking-tight">{profile.name} — CV</span>
        <span className="block text-sm text-muted-foreground">
          Experience · Projects · Skills · Education
        </span>
      </span>
      <span className="flex items-center gap-1 text-xs font-medium text-highlight">
        <FileText className="h-4 w-4" />
        Open
      </span>
    </button>
  );
}
