"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

export default function GlowingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create glowing blobs
    const blobs: THREE.Mesh[] = []
    const blobCount = 5

    for (let i = 0; i < blobCount; i++) {
      // Create geometry
      const geometry = new THREE.SphereGeometry(Math.random() * 10 + 5, 64, 64)

      // Create material based on theme
      const color =
        resolvedTheme === "dark"
          ? new THREE.Color(0.1, 0.4, 0.6) // Blue-ish for dark mode
          : new THREE.Color(0.0, 0.5, 0.4) // Teal-ish for light mode

      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
      })

      // Create mesh
      const blob = new THREE.Mesh(geometry, material)

      // Position randomly
      blob.position.x = (Math.random() - 0.5) * 100
      blob.position.y = (Math.random() - 0.5) * 100
      blob.position.z = (Math.random() - 0.5) * 50 - 10

      // Add to scene and array
      scene.add(blob)
      blobs.push(blob)
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Animate blobs
      blobs.forEach((blob, index) => {
        const speed = 0.2 + index * 0.05
        blob.position.x = Math.sin(elapsedTime * speed) * 30 + (index - blobCount / 2) * 15
        blob.position.y = Math.cos(elapsedTime * speed) * 20 + (index - blobCount / 2) * 10
        blob.scale.set(
          1 + Math.sin(elapsedTime * 0.5) * 0.2,
          1 + Math.sin(elapsedTime * 0.5 + 1) * 0.2,
          1 + Math.sin(elapsedTime * 0.5 + 2) * 0.2,
        )
      })

      // Render
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      containerRef.current?.removeChild(renderer.domElement)

      // Dispose geometries and materials
      blobs.forEach((blob) => {
        blob.geometry.dispose()
        ;(blob.material as THREE.Material).dispose()
      })
    }
  }, [resolvedTheme])

  return <div ref={containerRef} className="fixed inset-0 -z-20 pointer-events-none" />
}
