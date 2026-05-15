"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 40%",
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff1a1a]/10 to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(255, 26, 26, 0.4) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-[#ff1a1a] uppercase">
            [ 07 - Discord ]
          </span>
        </motion.div>

        {/* Title */}
        <div className="mb-12">
          <h2
            className="contact-title text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            <span className="text-white">JOIN THE</span>
            <br />
            <span className="text-[#ff1a1a] neon-text">AURA</span>
            <br />
            <span className="text-white">COMMUNITY</span>
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-space)" }}
        >
          Connect with thousands of gamers. Get exclusive deals, instant support, 
          and be the first to know about new products.
        </motion.p>

        {/* Discord Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MagneticDiscordButton />
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          <div className="p-6 rounded-2xl glass border-white/5 hover:border-[#ff1a1a]/30 transition-all duration-300">
            <span className="font-mono text-xs text-[#ff1a1a] uppercase">24/7 Support</span>
            <p className="mt-2 text-white" style={{ fontFamily: "var(--font-space)" }}>
              Instant help from our team
            </p>
          </div>
          <div className="p-6 rounded-2xl glass border-white/5 hover:border-[#ff1a1a]/30 transition-all duration-300">
            <span className="font-mono text-xs text-[#ff1a1a] uppercase">Exclusive Drops</span>
            <p className="mt-2 text-white" style={{ fontFamily: "var(--font-space)" }}>
              Early access to new products
            </p>
          </div>
          <div className="p-6 rounded-2xl glass border-white/5 hover:border-[#ff1a1a]/30 transition-all duration-300">
            <span className="font-mono text-xs text-[#ff1a1a] uppercase">Giveaways</span>
            <p className="mt-2 text-white" style={{ fontFamily: "var(--font-space)" }}>
              Daily prizes for members
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MagneticDiscordButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <a
      ref={buttonRef}
      href="https://discord.gg/QrVstQbH85"
      target="_blank"
      rel="noopener noreferrer"
      data-magnetic
      className="group relative inline-flex items-center justify-center px-12 py-6 rounded-full font-mono text-lg tracking-wider uppercase bg-[#5865F2]/20 border-2 border-[#5865F2]/50 text-white hover:bg-[#5865F2]/30 transition-all duration-300"
      style={{ 
        boxShadow: "0 0 30px rgba(88, 101, 242, 0.3), 0 0 60px rgba(88, 101, 242, 0.1)"
      }}
    >
      <DiscordIcon className="w-6 h-6 mr-3 text-[#5865F2]" />
      <span className="relative z-10">Join Discord</span>
      <motion.div
        className="absolute inset-0 rounded-full bg-[#5865F2]/10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </a>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  )
}
