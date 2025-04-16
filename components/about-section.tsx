"use client"

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>

        <div className="space-y-6 text-lg">
          <p>
            I'm a <span className="font-medium">Full Stack Developer</span> with expertise in building complex web
            applications and mobile solutions. My focus is on creating scalable, maintainable software architectures
            that deliver exceptional user experiences.
          </p>
          <p>
            With a strong background in <span className="font-medium">microservices architecture</span>, I specialize in
            developing enterprise-grade applications for the financial sector. I'm passionate about implementing
            server-driven UI approaches that enable dynamic content delivery and reduce deployment overhead.
          </p>
          <p>
            My experience spans both web and mobile development, with a particular focus on{" "}
            <span className="font-medium">React, React Native, Node.js, and TypeScript</span>. I enjoy working with
            modern technologies and architectural patterns to solve complex business problems.
          </p>
        </div>
      </div>
    </section>
  )
}
