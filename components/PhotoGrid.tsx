"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  { src: "/placeholder.svg?height=300&width=300", alt: "Scuba diving" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Friends gathering" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Conference presentation" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Group photo" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Camel riding" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Workspace" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Volunteer work" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Grand Canyon" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Mayan pyramid" },
]

export default function PhotoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="mb-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="photo-grid">
        {photos.map((photo, index) => (
          <motion.div key={index} variants={itemVariants} className="aspect-square">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={300}
              height={300}
              className="rounded-md object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
