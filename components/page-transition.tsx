"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          scale: 1.03,
          filter: "blur(14px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          filter: "blur(14px)",
        }}
        transition={{
          duration: 1.1,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black pointer-events-none z-[9999]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 pointer-events-none z-[9998]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,0,0,0.18), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {children}
      </motion.div>
    </AnimatePresence>
  )
}