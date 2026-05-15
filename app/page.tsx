"use client"

import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <div className="noise-overlay" />

      <SmoothScroll>
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
