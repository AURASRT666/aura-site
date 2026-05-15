"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

const products = [
  {
    category: "Discord",
    items: [
      {
        name: "Discord Nitro",
        description: "Monthly & yearly subscriptions",
        price: "$5.49",
        image: "nitro.png",
      },
      {
        name: "Server Boosts",
        description: "Level up your server instantly",
        price: "$5.99",
        image: "boosts.png",
      },
      {
        name: "adobe Creative Cloud",
        description: "Access to all Adobe apps with premium features",
        price: "$2.49",
        image: "adobe.png",
      },
    ],
  },

  {
    category: "Game Accounts",
    items: [
      {
        name: "chatGPT Plus",
        description: "1 month subscription with exclusive features",
        price: "$5.99",
        image: "chatgpt.png",
      },
      {
        name: "Netflix Premium ",
        description: "4K UHD streaming on multiple devices",
        price: "$9.99",
        image: "netflix.png",
      },
      {
        name: "Steam Accounts",
        description: "Games & collectibles",
        price: "$<5.99",
        image: "steam.png",
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <CustomCursor />
      {/* <div className="noise-overlay" /> */}
      <Navbar />

      <main className="min-h-screen pt-32 pb-20 px-6 bg-black overflow-hidden">
        {/* RED BACKGROUND GLOW */}
        <div className="fixed inset-0 -z-10">
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/8 blur-[100px]" />
  
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/8 blur-[100px]" />
</div>

        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >

            <h1
              className="text-6xl md:text-8xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
               𝙿𝚁𝙾𝙳𝚄𝙲𝚃𝚂  
            </h1>

            <p className="mt-6 text-zinc-300 max-w-2xl text-lg">
              Premium gaming products, accounts, subscriptions and exclusive digital services.
            </p>
          </motion.div>

          {/* PRODUCTS */}
          <div className="space-y-24">
            {products.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                }}
              >
                {/* CATEGORY */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-20 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.7)]" />

                  <h2
                    className="text-3xl text-white"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {category.category}
                  </h2>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay:
                          categoryIndex * 0.1 +
                          itemIndex * 0.05,
                      }}
                      whileHover={{ y: -8 }}
                      className="
                        group
                        overflow-hidden
                        rounded-3xl
                        border border-red-500/10
                        bg-[#090909]
                        hover:border-red-500/30
                        transition-all duration-500
                        hover:shadow-[0_0_18px_rgba(239,68,68,0.35)]
                      "
                    >
                      {/* IMAGE */}
                      <div className="relative h-[240px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        {/* TITLE */}
                        <div className="absolute bottom-5 left-5 z-10">
                          <p className="text-white text-3xl font-bold">
                            {item.name}
                          </p>

                          <p className="text-red-400/80 text-sm tracking-wide">
                            Premium Edition
                          </p>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <p className="text-zinc-400 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* PRICE */}
                          <span className="text-3xl font-bold text-white">
                            {item.price}
                          </span>

                          {/* BUY BUTTON */}
                          <a
                            href="https://discord.gg/QrVstQbH85"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex items-center gap-2
                              px-5 py-3
                              rounded-2xl
                              text-sm font-medium text-white
                              border border-red-500/30
                              bg-red-600
                              hover:bg-red-500
                              transition-all duration-300
                              hover:scale-105
                              active:scale-95
                              hover:shadow-[0_0_35px_rgba(239,68,68,0.5)]
                            "
                          >
                            <DiscordIcon className="w-4 h-4" />
                            Buy
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

         {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="
    mt-28
    p-12
    rounded-[32px]
    border border-red-500/10
    bg-[#090909]
    text-center
    overflow-hidden
    relative
  "
>
  {/* RED GLOW */}
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10">
    {/* TITLE */}
    <h3
      className="text-5xl text-white mb-4"
      style={{ fontFamily: "var(--font-bebas)" }}
    >
      NEED SOMETHING CUSTOM?
    </h3>

    {/* TEXT */}
    <p className="text-zinc-300 mb-8 max-w-2xl mx-auto text-lg">
      Join our Discord server for instant delivery,
      premium support and exclusive products.
    </p>

    {/* IMAGE */}
    <div className="relative w-full max-w-4xl h-[240px] mx-auto mb-10 rounded-3xl overflow-hidden border border-red-500/10">
      <Image
        src="/banner.png"
        alt="AURA Banner"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </div>

    {/* BUTTON */}
    <a
      href="https://discord.gg/QrVstQbH85"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-3
        px-8 py-4
        rounded-full
        text-white
        bg-red-600
        hover:bg-red-500
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(239,68,68,0.55)]
      "
    >
      <DiscordIcon className="w-5 h-5" />
      Join Discord
    </a>
  </div>
</motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}