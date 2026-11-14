"use client";

import { useEffect, useRef, useState } from "react";
import { education, experiences, profile, projects } from "@/lib/data";

type Line = { kind: "cmd" | "out"; text: string };
type Step = { cmd: string; out: string[] };

const PROMPT = "minsaf@portfolio ~ %";

// The session is built from the portfolio data, so it never drifts out of date.
const SCRIPT: Step[] = [
  { cmd: "whoami", out: [profile.name.toLowerCase().replace(" ", "-")] },
  { cmd: "cat role.txt", out: [`${profile.role} · 4+ years · fintech & ERP`] },
  {
    cmd: "git log --oneline --career",
    out: experiences.map((e) => `* ${e.role} — ${e.company} (${e.period})`),
  },
  { cmd: "ls ~/projects", out: [projects.map((p) => `${p.id}/`).join("  ")] },
  { cmd: "cat stack.json", out: [JSON.stringify(profile.coreStack)] },
  { cmd: "npm run build", out: ["▲ Next.js", "  Creating an optimized production build ...", "✓ Compiled successfully", `✓ Generating static pages (${projects.length + 3}/${projects.length + 3})`] },
  { cmd: "docker build -t dfn-cms .", out: ["[+] Building multi-stage image", "✓ naming to docker.io/library/dfn-cms"] },
  { cmd: "cat education.txt", out: [`${education[0].degree} — ${education[0].school}`] },
  { cmd: "git push origin main", out: ["Enumerating objects: done.", "✓ main -> main"] },
];

const ALL_LINES: Line[] = SCRIPT.flatMap((s) => [
  { kind: "cmd" as const, text: s.cmd },
  ...s.out.map((text) => ({ kind: "out" as const, text })),
]);

const LINE_HEIGHT = 24; // px — keep in sync with leading-6

/**
 * A faint terminal session running behind the page: commands type out
 * character by character, print their output, and the screen clears
 * and starts over when the script ends.
 */
export function TerminalSession() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [maxLines, setMaxLines] = useState(30);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const fit = () => setMaxLines(Math.max(6, Math.floor((window.innerHeight - 120) / LINE_HEIGHT)));
    fit();
    window.addEventListener("resize", fit);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLines(ALL_LINES);
      return () => window.removeEventListener("resize", fit);
    }

    let step = 0;
    let char = 0;
    let out = 0;
    const later = (fn: () => void, ms: number) => {
      timer.current = setTimeout(fn, ms);
    };

    const tick = () => {
      if (document.hidden) return later(tick, 500);

      if (step >= SCRIPT.length) {
        // "clear" and loop
        setLines([]);
        step = char = out = 0;
        return later(tick, 900);
      }

      const s = SCRIPT[step];
      if (char < s.cmd.length) {
        char++;
        setTyping(s.cmd.slice(0, char));
        return later(tick, 45 + Math.random() * 70);
      }
      if (char === s.cmd.length && out === 0) {
        setTyping("");
        setLines((prev) => [...prev, { kind: "cmd", text: s.cmd }]);
        char++; // mark the command as submitted
        return later(tick, 350);
      }
      if (out < s.out.length) {
        const text = s.out[out++];
        setLines((prev) => [...prev, { kind: "out", text }]);
        return later(tick, 110);
      }
      step++;
      char = out = 0;
      return later(tick, 1100);
    };

    later(tick, 800);
    return () => {
      clearTimeout(timer.current);
      window.removeEventListener("resize", fit);
    };
  }, []);

  // keep one row free for the line being typed
  const visible = lines.slice(-(maxLines - 1));

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden px-5 pt-16 font-mono text-[13px] leading-6 opacity-[0.28] sm:px-8 sm:pt-[4.5rem] dark:opacity-[0.3]"
    >
      {visible.map((l, i) => (
        <div key={i} className="whitespace-pre">
          {l.kind === "cmd" ? (
            <>
              <span className="text-highlight">{PROMPT}</span> {l.text}
            </>
          ) : (
            <span className="text-muted-foreground">{l.text}</span>
          )}
        </div>
      ))}
      <div className="whitespace-pre">
        <span className="text-highlight">{PROMPT}</span> {typing}
        <span className="caret" />
      </div>
    </div>
  );
}
