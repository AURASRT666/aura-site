"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
  { id: 1, size: "large", title: "Digital Frontier" },
  { id: 2, size: "small", title: "Neural Networks" },
  { id: 3, size: "small", title: "Cyber Pulse" },
  { id: 4, size: "medium", title: "Data Streams" },
  { id: 5, size: "medium", title: "Quantum Leap" },
  { id: 6, size: "large", title: "Future Vision" },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on gallery items
      gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 100 * (i % 2 === 0 ? 1 : -1) },
          {
            y: -100 * (i % 2 === 0 ? 1 : -1),
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        )
      })

      // Title scale animation
      gsap.fromTo(
        ".gallery-title",
        { scale: 1.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 opacity-15 blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 uppercase">
            [ 04 — Gallery ]
          </span>
        </motion.div>

        {/* Title */}
        <div className="mb-16 md:mb-24">
          <h2
            className="gallery-title text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            <span className="text-white">VISUAL </span>
            <span className="text-red-500 neon-text">EXPERIENCE</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    small: "col-span-1 row-span-1 aspect-square",
    medium: "col-span-1 md:col-span-2 row-span-1 aspect-video md:aspect-[2/1]",
    large: "col-span-2 row-span-2 aspect-square",
  }

  return (
    <motion.div
      ref={itemRef}
      className={`gallery-item group relative ${sizeClasses[item.size as keyof typeof sizeClasses]} rounded-2xl overflow-hidden cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background */}
      <div className="absolute inset-0 glass border-white/5 group-hover:border-red-500/30 transition-all duration-500" />

      {/* Gradient Background */}
      <div
        className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(${135 + index * 30}deg, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 group-hover:opacity-40 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <span className="font-mono text-xs text-zinc-300">0{index + 1}</span>
        <div>
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white/80 group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  )
}
