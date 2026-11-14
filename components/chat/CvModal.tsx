"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Download, X } from "lucide-react";
import { education, experiences, profile, projects } from "@/lib/data";

/* ---------- derived content (everything comes from lib/data.ts) ---------- */

const allTech = new Set(projects.flatMap((p) => p.technologies));
const pick = (items: string[]) => items.filter((t) => allTech.has(t));

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Core", items: profile.coreStack },
  {
    label: "Frontend",
    items: pick(["React Native", "JavaScript", "Material UI", "React Hook Form", "Redux", "React Hookstate", "Webpack", "i18n", "RTL Support"]),
  },
  {
    label: "Backend & Data",
    items: [
      ...pick(["MolecularJS", ".NET", "GraphQL"]),
      ...(allTech.has("REST APIs") || allTech.has("REST API") ? ["REST APIs"] : []),
      ...pick(["MongoDB", "Redis", "SQL Server"]),
    ],
  },
  {
    label: "Architecture & DevOps",
    items: pick(["Microservices", "Server-Driven UI", "Docker", "Nginx"]),
  },
].filter((g) => g.items.length > 0);

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

type ContactLink = { label: string; href: string };

// Two deliberate lines, like a printed CV: direct contact, then profiles.
const contactLines: ContactLink[][] = [
  [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: stripProtocol(profile.website), href: profile.website },
  ],
  profile.socials
    .filter((s) => s.label !== "Instagram")
    .map((s) => ({ label: stripProtocol(s.href), href: s.href })),
];

/* ---------- presentational pieces ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-14 font-serif text-[2rem] leading-none tracking-tight text-neutral-950 print:mt-8 print:text-[1.6rem]">
      {children}
    </h2>
  );
}

function Sep() {
  return <span className="mx-2 text-neutral-300">|</span>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-neutral-400">
      {items.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </ul>
  );
}

/* ---------- modal ---------- */

export function CvModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {/* No portal: lets print styles hide the rest of the page and print only the CV */}
      <Dialog.Overlay className="cv-overlay fixed inset-0 z-[80] overflow-y-auto bg-black/60 px-3 py-6 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:px-6 sm:py-10">
        <Dialog.Content
          aria-describedby={undefined}
          className="cv-sheet relative mx-auto w-full max-w-3xl rounded-2xl bg-white text-neutral-600 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-4 data-[state=open]:duration-300"
        >
          {/* toolbar */}
          <div className="sticky top-0 z-10 flex items-center justify-end gap-2 rounded-t-2xl bg-white/90 px-4 py-3 backdrop-blur print:hidden">
            <Dialog.Close
              aria-label="Close CV"
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <article className="cv-sheet-inner mx-auto max-w-[37rem] px-6 pb-16 text-[14.5px] leading-[1.75] sm:px-0">
            {/* header */}
            <header>
              <Dialog.Title className="font-serif text-[3.25rem] leading-[1.05] tracking-tight text-neutral-950 sm:text-[3.75rem] print:text-[2.6rem]">
                {profile.name}
              </Dialog.Title>
              <p className="mt-2 text-neutral-500">{profile.role}</p>

              <div className="mt-5 space-y-0.5 text-neutral-900">
                {contactLines.map((line, li) => (
                  <p key={li} className="flex flex-wrap items-center">
                    {line.map((l, i) => (
                      <span key={l.href} className="inline-flex items-center">
                        {i > 0 && <Sep />}
                        <a
                          href={l.href}
                          target={l.href.startsWith("mailto") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="break-all underline-offset-4 hover:underline"
                        >
                          {l.label}
                        </a>
                      </span>
                    ))}
                  </p>
                ))}
              </div>

              {/* <button
                type="button"
                onClick={() => window.print()}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95 print:hidden"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button> */}
            </header>

            <SectionTitle>Summary</SectionTitle>
            <p>
              Senior Software Engineer with 4+ years of experience designing and building scalable
              frontend and full-stack applications across fintech and ERP domains. Specialized in
              React, TypeScript, and Node.js, with strong expertise in server-driven UI
              architectures for regulatory, trading, and enterprise financial platforms. Proven
              contributor to frontend architecture, dynamic form systems, and modular WCMS
              platforms. Experienced in mentoring junior engineers and delivering high-performance
              systems.
            </p>

            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-9">
              {experiences.map((e) => (
                <section key={e.role}>
                  <h3 className="break-after-avoid text-[16px] font-medium text-neutral-950">{e.role}</h3>
                  <p className="mt-1">
                    <span className="text-neutral-900">{e.company}</span>
                    <Sep />
                    {e.mode}
                  </p>
                  <p className="text-neutral-400">{e.period}</p>
                  <Bullets items={e.description} />
                </section>
              ))}
            </div>

            <SectionTitle>Selected Projects</SectionTitle>
            <div className="space-y-6">
              {projects.map((p) => (
                <section key={p.id} className="break-inside-avoid">
                  <h3 className="text-[16px] font-medium text-neutral-950">{p.title}</h3>
                  <p className="mt-1">{p.description}.</p>
                  <p className="text-neutral-400">{p.technologies.join(", ")}</p>
                </section>
              ))}
            </div>

            <SectionTitle>Skills</SectionTitle>
            <div className="space-y-2">
              {skillGroups.map((g) => (
                <p key={g.label}>
                  <span className="font-medium text-neutral-950">{g.label}:</span>{" "}
                  {g.items.join(", ")}
                </p>
              ))}
            </div>

            <SectionTitle>Education</SectionTitle>
            <div className="space-y-5">
              {education.map((e) => (
                <section key={e.degree} className="break-inside-avoid">
                  <h3 className="text-[16px] font-medium text-neutral-950">
                    {e.degree}, {e.school}
                  </h3>
                  <p className="text-neutral-400">{e.period}</p>
                </section>
              ))}
            </div>

            <SectionTitle>Certification</SectionTitle>
            <p>
              <a
                href={profile.certification.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline-offset-4 hover:underline"
              >
                {profile.certification.label}
              </a>
            </p>

            <footer className="mt-16 text-neutral-400 print:hidden">
              © {new Date().getFullYear()} {profile.name}
            </footer>
          </article>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
