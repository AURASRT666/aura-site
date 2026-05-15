"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "160+", label: "Happy Customers" },
  { value: "467+", label: "Products Sold" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "24/7", label: "Support Available" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-zinc-300 tracking-widest uppercase mb-4">About Us</p>
            <h2 
              className="text-4xl md:text-6xl text-white tracking-tight mb-6"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Trusted by thousands
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              AURA is a premium digital marketplace specializing in gaming products and services. 
              We provide verified accounts, digital goods, and exceptional customer service 
              to gamers worldwide.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Our commitment to quality and security has made us a trusted name in the 
              gaming community. Every transaction is protected, and our support team is 
              available around the clock.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
              >
                <div 
                  className="text-4xl md:text-5xl text-white mb-2"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
