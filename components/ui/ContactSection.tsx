import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/minsaf7" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-minsaaf/" },

  { icon: Mail, label: "Email", href: "mailto:minsafmohamed7@gmail.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="text-center">
        <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Contact
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Get in Touch
        </h2>
        {/* <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          {"Want to chat? Just shoot me a dm "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-foreground hover:text-muted-foreground transition-colors"
          >
            with a direct question on twitter
          </a>
          {" and I'll respond whenever I can. I will ignore all soliciting."}
        </p> */}
      </div>

      {/* Footer with social icons */}
      <footer className="mt-16 flex items-center justify-center gap-4 border-t border-border pt-8 pb-8">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.label}
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </footer>
    </section>
  )
}
