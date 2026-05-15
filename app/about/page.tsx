"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

const stats = [
  { value: "160+", label: "Happy Customers" },
  { value: "467+", label: "Products Sold" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "24/7", label: "Support Available" },
]

const values = [
  {
    title: "Security First",
    description: "Every transaction is protected with industry-standard encryption. Your data and purchases are always safe with us."
  },
  {
    title: "Verified Products",
    description: "All our digital products are thoroughly verified before listing. We guarantee authenticity on every item."
  },
  {
    title: "Instant Delivery",
    description: "Get your products delivered instantly after purchase. No waiting, no delays."
  },
  {
    title: "24/7 Support",
    description: "Our support team is available around the clock via Discord. We are here whenever you need help."
  },
]

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-sm text-zinc-300 tracking-widest uppercase mb-4">Who We Are</p>
            <h1 
              className="text-6xl md:text-8xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              About AURA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <p className="text-xl text-white/60 leading-relaxed mb-6">
                AURA is a premium digital marketplace built by gamers, for gamers. 
                We specialize in providing high-quality digital products and services 
                that enhance your gaming experience.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Founded with a simple mission: to create a trusted platform where 
                gamers can safely purchase digital products. Today, we serve thousands 
                of customers worldwide with our curated selection of game accounts, 
                Discord services, in-game items, and more.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
                >
                  <div 
                    className="text-3xl md:text-4xl text-white mb-2"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 
              className="text-4xl text-white tracking-tight mb-10"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
                >
                  <h3 className="text-lg text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
          >
            <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
              Ready to get started?
            </h3>
            <p className="text-zinc-300 mb-6">Join our community and explore our products.</p>
            <a
              href="https://discord.gg/QrVstQbH85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
              data-hover
            >
              Join Discord
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
