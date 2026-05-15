"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    quote: "Nexus transformed our digital presence into something truly extraordinary. The attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    company: "TechVentures Inc.",
  },
  {
    id: 2,
    quote: "Working with Nexus was like glimpsing the future. They don't just build websites — they craft digital experiences that leave lasting impressions.",
    author: "Marcus Williams",
    role: "Creative Director",
    company: "Axis Creative",
  },
  {
    id: 3,
    quote: "The team's ability to blend cutting-edge technology with stunning design is unmatched. Our conversion rates increased by 340% after launch.",
    author: "Elena Rodriguez",
    role: "VP of Marketing",
    company: "Stellar Brands",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
      <div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2 opacity-15 blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 uppercase">
            [ 05 — Testimonials ]
          </span>
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote */}
              <div className="mb-12">
                <span className="text-8xl text-red-500/20 font-serif">&ldquo;</span>
                <p
                  className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight -mt-12"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {testimonials[activeIndex].quote}
                </p>
              </div>

              {/* Author */}
              <div>
                <p
                  className="text-xl md:text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-sm text-zinc-300 font-mono mt-2">
                  {testimonials[activeIndex].role} — {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full glass border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-white/60 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-red-500" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full glass border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-white/60 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
