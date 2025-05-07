"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  { src: "/image1.png", alt: "Scuba diving" },
  { src: "/image2.png", alt: "Friends gathering" },
  { src: "/image3.png", alt: "Conference presentation" },
  { src: "/image4.png", alt: "Group photo" },
  { src: "/image5.png", alt: "Camel riding" },
  { src: "/image6.png", alt: "Workspace" },
  { src: "/image7.png", alt: "Volunteer work" },
  { src: "/image1.png", alt: "Grand Canyon" },
  { src: "/image1.png", alt: "Mayan pyramid" },
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
