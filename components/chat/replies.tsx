import type { ReactNode } from "react";
import { profile, projects } from "@/lib/data";
import {
  ContactCard,
  CvCard,
  EducationCard,
  ExperienceCard,
  ProjectCard,
  ProjectCarousel,
  StackCard,
} from "./cards";

export type Intent =
  | "intro"
  | "about"
  | "work"
  | "info"
  | "experience"
  | "education"
  | "stack"
  | "cv"
  | "greeting"
  | "thanks"
  | "fallback"
  | `project:${string}`;

export type BotMessage = { node: ReactNode; card?: boolean };
export type Reply = {
  messages: BotMessage[];
  chips: Intent[];
  /** side effect to run once the messages have been delivered */
  action?: "open-cv";
};

/** Labels shown on quick-reply buttons (also used as the user's message). */
export const chipLabels: Partial<Record<Intent, string>> = {
  about: "Who are you?",
  work: "Show me your work",
  info: "Just need your info",
  experience: "Where have you worked?",
  education: "Your education",
  stack: "What's your stack?",
  cv: "View my CV",
};

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-highlight underline decoration-highlight/40 underline-offset-2 hover:decoration-highlight"
  >
    {children}
  </a>
);

export function getReply(intent: Intent): Reply {
  if (intent.startsWith("project:")) {
    const project = projects.find((p) => `project:${p.id}` === intent);
    if (project) {
      return {
        messages: [
          { node: <>{project.title} — {project.description.charAt(0).toLowerCase() + project.description.slice(1)}.</> },
          { node: <>Built with {project.technologies.slice(0, 4).join(", ")}.</> },
          { node: <ProjectCard project={project} />, card: true },
        ],
        chips: ["work", "experience", "info"],
      };
    }
  }

  switch (intent) {
    case "intro":
      return {
        messages: [
          { node: <>Hey! I&apos;m {profile.shortName} 👋 Welcome to my portfolio.</> },
          { node: <>What brings you here?</> },
        ],
        chips: ["about", "work", "cv", "info"],
      };

    case "about":
      return {
        messages: [
          {
            node: (
              <>
                I&apos;m {profile.name}, a {profile.role} with 4+ years of experience building
                scalable frontend and full-stack applications across fintech and ERP.
              </>
            ),
          },
          {
            node: (
              <>
                I specialize in React, TypeScript and Node.js, with strong expertise in
                server-driven UI architectures for regulatory, trading and enterprise
                financial platforms.
              </>
            ),
          },
          {
            node: (
              <>
                I&apos;ve contributed to frontend architecture, dynamic form systems and modular
                WCMS platforms — and I enjoy mentoring junior engineers. I&apos;m also a{" "}
                <A href={profile.certification.href}>Meta certified frontend developer</A>.
              </>
            ),
          },
        ],
        chips: ["work", "experience", "education", "cv"],
      };

    case "work":
      return {
        messages: [
          { node: <>Here&apos;s some of what I&apos;ve built 👇</> },
          { node: <ProjectCarousel />, card: true },
          { node: <>Tap a card for the full case study.</> },
        ],
        chips: ["experience", "stack", "info"],
      };

    case "info":
      return {
        messages: [
          { node: <>Sure — here&apos;s everything you need:</> },
          { node: <ContactCard />, card: true },
        ],
        chips: ["cv", "about", "work"],
      };

    case "experience":
      return {
        messages: [
          { node: <>4+ years so far, across fintech and ERP. Tap a role to see what I did there:</> },
          { node: <ExperienceCard />, card: true },
        ],
        chips: ["work", "education", "cv"],
      };

    case "education":
      return {
        messages: [
          { node: <>I graduated from Coventry University with a First Class BSc (Hons) in Computing 🎓</> },
          { node: <EducationCard />, card: true },
        ],
        chips: ["experience", "work", "info"],
      };

    case "stack":
      return {
        messages: [
          { node: <>My core stack is React, TypeScript and Node.js.</> },
          { node: <StackCard />, card: true },
        ],
        chips: ["work", "experience", "info"],
      };

    case "cv":
      return {
        messages: [
          { node: <>Here&apos;s my CV 📄 Opening it for you now.</> },
          { node: <CvCard />, card: true },
        ],
        chips: ["work", "experience", "info"],
        action: "open-cv",
      };

    case "greeting":
      return {
        messages: [{ node: <>Hey there! 👋 What would you like to know?</> }],
        chips: ["about", "work", "info"],
      };

    case "thanks":
      return {
        messages: [{ node: <>Anytime! Anything else you&apos;d like to see?</> }],
        chips: ["work", "experience", "info"],
      };

    default:
      return {
        messages: [
          {
            node: (
              <>
                I&apos;m a scripted version of me, so I didn&apos;t quite catch that 😅 Try asking
                about my work, experience, education, stack or how to reach me.
              </>
            ),
          },
        ],
        chips: ["about", "work", "experience", "info"],
      };
  }
}

const projectKeywords: [RegExp, string][] = [
  [/\bcms\b|wcms|content management/, "dfn-cms"],
  [/fincon|react native|mobile app|stock/, "dfn-fincon"],
  [/\bpos\b|blpos|point of sale|uber|deliveroo/, "blpos"],
  [/disclosure|form builder|arabic|rtl/, "market-disclosure-platform"],
];

/** Map free text to an intent with simple keyword rules. */
export function matchIntent(input: string): Intent {
  const t = input.toLowerCase().trim();

  if (/\bcv\b|resume|résumé|curriculum/.test(t)) return "cv";
  for (const [re, id] of projectKeywords) if (re.test(t)) return `project:${id}`;
  if (/experience|career|job|work history|worked|employ|company|directfn|blue lotus|role|position/.test(t))
    return "experience";
  if (/educat|degree|universit|study|studied|college|school|coventry|nibm|qualif/.test(t))
    return "education";
  if (/project|portfolio|built|build|show me|your work|case stud|\bwork\b/.test(t)) return "work";
  if (/skill|stack|tech|language|framework|tool|react|typescript|node/.test(t)) return "stack";
  if (/contact|email|mail|reach|hire|linkedin|github|instagram|social|info|resume|cv|phone/.test(t))
    return "info";
  if (/who|about|yourself|introduc|bio|background|certif/.test(t)) return "about";
  if (/^(hi|hey|hello|hola|yo|sup|good (morning|afternoon|evening))\b/.test(t)) return "greeting";
  if (/thank|thx|cheers|great|awesome|cool|nice|perfect/.test(t)) return "thanks";
  return "fallback";
}
