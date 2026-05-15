"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProductCardProps {
  title: string
  description: string
  image: string
  price: string
  discord: string
}

export default function ProductCard({
  title,
  description,
  image,
  price,
  discord,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="
        group overflow-hidden
        rounded-3xl
        border border-red-500/10
        bg-[#080808]
        shadow-2xl
        hover:border-red-500/30
        hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]
        transition-all duration-500
      "
    >
      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* RED GLOW */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black
            via-black/30
            to-transparent
          "
        />

        <div
          className="
            absolute inset-0
            bg-red-500/10
            opacity-0
            group-hover:opacity-100
            transition-all duration-500
          "
        />

        {/* TITLE */}
        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-white text-2xl font-bold">
            {title}
          </p>

          <p className="text-red-400/80 text-sm tracking-wide">
            Premium Edition
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-5">
        <p className="text-white/60 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">
          {/* PRICE */}
          <span className="text-2xl font-bold text-white">
            {price}
          </span>

          {/* BUY BUTTON */}
          <a
            href={discord}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-3
              rounded-2xl
              bg-red-600
              hover:bg-red-500
              border border-red-400/20
              text-white
              font-medium
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]
              hover:scale-105
              active:scale-95
            "
          >
            <DiscordIcon className="w-4 h-4" />
            Buy Now
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}