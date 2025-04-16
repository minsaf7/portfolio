"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-24 md:py-32 flex flex-col justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Hi. I'm <span className="inline-block">Developer.</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12">
          I'm passionate about building modern web applications and experiences that are engaging, accessible, and
          user-centric.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="rounded-full px-8 py-6 text-base">
            <Link href="#projects">
              View my work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
