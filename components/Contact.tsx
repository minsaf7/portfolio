"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Want to chat? Just shoot me a dm with a direct question on twitter and I&apos;ll respond whenever I can. I will
          ignore all soliciting.
        </p>

        <Button asChild>
          <a
            href="mailto:minsafmohamed7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <MessageSquare size={16} className="mr-2" />
            <span>Contact</span>
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
