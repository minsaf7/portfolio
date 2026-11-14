import { Section } from "@/components/site/Section";

const EMAIL = "minsafmohamed7@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/minsaf7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-minsaaf/" },
  { label: "Instagram", href: "https://www.instagram.com/minsaaaf" },
];

export function ContactSection() {
  return (
    <>
      <Section id="contact" command="./contact.sh">
        <p className="leading-relaxed">
          Get in touch at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="link-underline break-all text-highlight transition-colors hover:text-highlight-hover"
          >
            {EMAIL}
          </a>
          .
        </p>
        <ul className="mt-4 flex gap-6 font-mono text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="flex justify-between gap-4 pb-16 pt-12 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Mohamed Minsaf</span>
        <span>built with next.js</span>
      </footer>
    </>
  );
}
