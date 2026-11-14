import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between pt-10 font-mono text-sm md:pt-16">
      <a href="#home" aria-label="Back to top" className="font-medium">
        <span className="text-highlight">~/</span>minsaf
      </a>
      <nav className="flex items-center gap-4">
        <ul className="hidden gap-4 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
