"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

const reviews = [
  {
    name: "7ancha.",
    rating: 5,
    date: "2 days ago",
    product: "Discord Nitro",
    review: "Livraison t7ifna w sari3a barcha, w el-customer support ya3tihom essa7a, yjaobou fisa3 w wsa3 balhom kbir. En recommande dima!"
  },
  {
    name: "foufoa.",
    rating: 5,
    date: "1 week ago",
    product: "Valorant Account",
    review: "Livraison jet f wa9tha w el-service client 3alamya! Yjaobou f d9i9a w ytab3ou m3ak kol chay. Akid mch a5er marra nechri mn 3andhom."
  },
  {
    name: "Sam R.",
    rating: 5,
    date: "1 week ago",
    product: "Server Boosts",
    review: "Livraison jet f wa9tha w el-service client 3alamya! Yjaobou f d9i9a w ytab3ou m3ak kol chay. Akid mch a5er marra nechri mn 3andhom."
  },
  {
    name: "cr7.",
    rating: 5,
    date: "2 weeks ago",
    product: "Fortnite Account",
    review: "Khidma ndhifa mta3 professionales. Livraison fast w support y7ellou el-machakel fi rmet 3in. Ya3tikom essa7a!"
  },
  {
    name: "7mouda.",
    rating: 5,
    date: "2 weeks ago",
    product: "Steam Wallet",
    review: "Mel a5er, a7sen customer support t3amelt m3ahom. Zid 3liha el-livraison jet fisa3 fisa3 kima tmanit. Kol chay 5amsa 3la 5amsa!"
  },
  {
    name: "lilu.",
    rating: 5,
    date: "3 weeks ago",
    product: "Discord Nitro",
    review: "A7sen 7aja l-garentie mta3 el-khidma. Livraison jet fisa3 w ki s2elt support f nsol-lil jaobouni w rka7li el-jaw. Thi9a 3la l5er!"
  },
  {
    name: "gaza.",
    rating: 5,
    date: "3 weeks ago",
    product: "Valorant Points",
    review: "Got my VP instantly. Prices are way better than official store. Love it!"
  },
  {
    name: "fiber.",
    rating: 5,
    date: "1 month ago",
    product: "Game Account",
    review: "Livraison f wa9tha bel d9i9a, w support 3andhom sbor mch normal m3a el-klyan. El-produit jeni kima fi tsawer bel thabt. Ya3tikom essa7a!"
  },
]

export default function ReviewsPage() {
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
            className="mb-16"
          >
            <p className="text-sm text-zinc-300 tracking-widest uppercase mb-4">What Customers Say</p>
            <h1 
              className="text-6xl md:text-8xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              𝚁𝚎𝚟𝚒𝚎𝚠𝚜
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-8 mb-12 p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
          >
            <div className="text-center">
              <div className="text-5xl text-white mb-1" style={{ fontFamily: "var(--font-bebas)" }}>4.9</div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-300">Overall Rating</p>
            </div>
            <div className="h-16 w-px bg-white/10" />
            <div>
              <p className="text-white/60">Based on <span className="text-white">124+</span> verified reviews</p>
              <p className="text-sm text-zinc-300 mt-1">All reviews are from real customers</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm">{review.name}</p>
                      <p className="text-xs text-zinc-300">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <StarIcon key={j} filled className="w-3 h-3 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-300 mb-2">Purchased: {review.product}</p>
                <p className="text-sm text-zinc-300 leading-relaxed">{review.review}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-zinc-300 mb-4">Want to see more reviews?</p>
            <a
              href="https://discord.gg/QrVstQbH85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
              data-hover
            >
              Join Discord for more
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function StarIcon({ filled = false, className }: { filled?: boolean; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
