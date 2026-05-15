"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What makes Nexus different from other digital agencies?",
    answer: "We don't just build websites — we architect digital experiences. Our approach combines cutting-edge technology, bold creative vision, and meticulous attention to detail. Every project is treated as a unique opportunity to push boundaries and create something extraordinary.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical website experience takes 8-12 weeks from concept to launch. For larger digital products or platforms, we typically work in 3-6 month engagements. We believe in doing things right, not just fast.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer: "We partner with visionary companies of all sizes. What matters most to us is the ambition and vision behind the project. Whether you're a funded startup looking to make a bold statement or an enterprise seeking digital transformation, we're interested in creating impactful work together.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We're technology-agnostic but opinionated. Our team excels in modern web technologies including React, Next.js, Three.js, GSAP, and WebGL. We choose the right tools for each project's unique needs, always prioritizing performance, scalability, and exceptional user experience.",
  },
  {
    question: "How do you approach project pricing?",
    answer: "We provide custom proposals based on project scope, complexity, and timeline. Our engagements typically start at $50,000 for web experiences and scale based on requirements. We believe in transparent pricing and work closely with clients to find solutions that deliver maximum impact within budget.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 uppercase">
            [ 06 — FAQ ]
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            <span className="text-white">QUESTIONS</span>{" "}
            <span className="text-red-500 neon-text">&</span>{" "}
            <span className="text-white">ANSWERS</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <button
        onClick={onToggle}
        className={`w-full p-6 md:p-8 rounded-2xl text-left transition-all duration-300 ${
          isOpen
            ? "glass border-red-500/30 neon-glow"
            : "glass border-white/5 hover:border-white/20"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="font-mono text-xs text-red-500 mt-1">0{index + 1}</span>
            <h3
              className={`text-lg md:text-xl font-semibold transition-colors ${
                isOpen ? "text-red-500" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-space)" }}
            >
              {faq.question}
            </h3>
          </div>
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? "bg-red-500/20 text-red-500" : "bg-white/5 text-white/60"
            }`}
          >
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p
                className="mt-6 ml-8 text-white/60 leading-relaxed"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}
