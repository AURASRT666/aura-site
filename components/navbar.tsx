"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-black/70 backdrop-blur-xl border border-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.08)]"
                : ""
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <Image
                  src="logo.jpg"
                  alt="Logo"
                  width={44}
                  height={44}
                  className="
                    rounded-xl
                    border border-red-500/20
                    object-cover
                  "
                />

                <div
                  className="
                    absolute inset-0
                    rounded-xl
                    bg-red-500/20
                    blur-xl
                    opacity-60
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                />
              </div>

              <div className="flex flex-col leading-none">
                <span
                  className="text-2xl text-white tracking-tight"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  𝐀𝐔𝐑𝐀
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    text-sm text-zinc-400
                    hover:text-red-400
                    transition-colors duration-300
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* DISCORD BUTTON */}
            <a
              href="https://discord.gg/QrVstQbH85"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex items-center gap-2
                px-5 py-2.5
                text-sm font-medium text-white
                rounded-full
                border border-red-500/40
                bg-red-500/10
                backdrop-blur-md
                hover:bg-red-500/20
                hover:border-red-400/60
                hover:shadow-[0_0_35px_rgba(239,68,68,0.45)]
                transition-all duration-300
                hover:scale-105
                active:scale-95
              "
            >
              <DiscordIcon className="w-4 h-4" />
              Buy On Discord
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 w-full h-[2px] bg-red-400 transition-all duration-300 ${
                    menuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-0"
                  }`}
                />

                <span
                  className={`absolute left-0 w-full h-[2px] bg-red-400 transition-all duration-300 ${
                    menuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-[90] md:hidden"
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
                text-4xl text-white
                hover:text-red-400
                transition-colors duration-300
              "
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://discord.gg/QrVstQbH85"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 px-6 py-3
              rounded-full
              bg-red-600
              hover:bg-red-500
              text-white
              flex items-center gap-2
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(239,68,68,0.5)]
            "
          >
            <DiscordIcon className="w-5 h-5" />
            Join Discord
          </a>
        </div>
      </motion.div>
    </>
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