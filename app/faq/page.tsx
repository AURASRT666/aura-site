"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

const faqs = [
  {
    question: "How does the delivery process work?",
    answer: "After your purchase is confirmed, you will receive your product instantly via our secure delivery system. For accounts, login details are sent directly to your email. For digital codes, they appear immediately in your order confirmation."
  },
  {
    question: "Are all products guaranteed to work?",
    answer: "Yes, all our products are thoroughly verified before listing. We offer a full warranty on all purchases. If you encounter any issues, our support team will resolve them immediately or provide a full refund."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cryptocurrency, PayPal, and major credit/debit cards. All transactions are secured with industry-standard encryption."
  },
  {
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 on Discord. Join our server and create a ticket for immediate assistance. We typically respond within minutes."
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We take privacy seriously and never share your personal information with third parties. All data is encrypted and stored securely."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer refunds for products that do not work as described. Contact our support team within 24 hours of purchase if you experience any issues. Each case is reviewed individually to ensure fair resolution."
  },
  {
    question: "Can I request custom products?",
    answer: "Yes, we offer custom orders for specific requirements. Join our Discord and describe what you need - our team will help you find or source the perfect product."
  },
  {
    question: "How do I know if a product is available?",
    answer: "All listed products are in stock and available for immediate delivery. Our inventory is updated in real-time. For specific availability questions, ask in our Discord."
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-sm text-zinc-300 tracking-widest uppercase mb-4">Got Questions?</p>
            <h1 
              className="text-6xl md:text-8xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              FAQ
            </h1>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  data-hover
                >
                  <span className="text-white pr-4">{faq.question}</span>
                  <span className={`text-zinc-300 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                    <PlusIcon className="w-5 h-5" />
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
          >
            <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
              Still have questions?
            </h3>
            <p className="text-zinc-300 mb-6">Our support team is available 24/7 on Discord.</p>
            <a
              href="https://discord.gg/QrVstQbH85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
              data-hover
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}
