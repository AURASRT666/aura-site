"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "QUANTUM",
    category: "Web Experience",
    year: "2024",
    color: "#ef4444",
  },
  {
    id: 2,
    title: "NEBULA",
    category: "Brand Identity",
    year: "2024",
    color: "#ffffff",
  },
  {
    id: 3,
    title: "AURORA",
    category: "Digital Product",
    year: "2024",
    color: "#ef4444",
  },
  {
    id: 4,
    title: "VERTEX",
    category: "Interactive",
    year: "2023",
    color: "#ffffff",
  },
  {
    id: 5,
    title: "CIPHER",
    category: "Platform",
    year: "2023",
    color: "#ef4444",
  },
]

export function HorizontalSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = scrollRef.current
      if (!scrollContainer) return

      const scrollWidth = scrollContainer.scrollWidth
      const viewportWidth = window.innerWidth

      gsap.to(scrollContainer, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Animate each project card on scroll
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("horizontalScroll") as gsap.core.Tween,
              start: "left 80%",
              end: "left 30%",
              scrub: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Section Header - Fixed during scroll */}
      <div className="absolute top-8 left-4 md:left-8 z-20">
        <span className="font-mono text-xs tracking-[0.3em] text-red-500 uppercase">
          [ 03 — Showcase ]
        </span>
      </div>

      {/* Vertical Text */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <span
          className="text-white/10 text-[20vw] font-bold tracking-tighter whitespace-nowrap"
          style={{
            fontFamily: "var(--font-bebas)",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          WORK
        </span>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-screen flex items-center">
        <div
          ref={scrollRef}
          className="horizontal-scroll flex gap-8 px-8 md:px-16 py-20"
          style={{ paddingLeft: "10vw", paddingRight: "20vw" }}
        >
          {/* Section Title Card */}
          <div className="flex-shrink-0 w-[40vw] md:w-[30vw] flex flex-col justify-center">
            <h2
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              <span className="text-white">SELECTED</span>
              <br />
              <span className="text-red-500 neon-text">WORKS</span>
            </h2>
            <p className="mt-6 text-zinc-400 max-w-xs" style={{ fontFamily: "var(--font-space)" }}>
              A curated collection of our most impactful digital experiences.
            </p>
          </div>

          {/* Project Cards */}
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/30">SCROLL</span>
          <div className="w-32 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-red-500"
              style={{ width: "30%", originX: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      className="project-card flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] h-[60vh] md:h-[70vh] relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      {/* Card Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden glass border-white/5 group-hover:border-red-500/30 transition-all duration-500">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${project.color}40 0%, transparent 70%)`,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
          {/* Top */}
          <div className="flex justify-between items-start">
            <span className="font-mono text-xs text-zinc-300">{project.category}</span>
            <span className="font-mono text-xs text-zinc-300">{project.year}</span>
          </div>

          {/* Center - Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span
              className="text-[30vw] md:text-[20vw] font-bold text-white/5 group-hover:text-red-500/10 transition-colors duration-500"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              0{index + 1}
            </span>
          </div>

          {/* Bottom */}
          <div>
            <h3
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight group-hover:text-red-500 transition-colors duration-300"
              style={{ fontFamily: "var(--font-bebas)", color: project.color }}
            >
              {project.title}
            </h3>
            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-space)" }}>
                View Project
              </span>
              <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}
