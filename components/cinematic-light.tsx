"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function CinematicLight() {
  const glowRef = useRef<HTMLDivElement>(null)
  const glow2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    const glow2 = glow2Ref.current

    if (!glow || !glow2) return

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const delayed = {
      x: mouse.x,
      y: mouse.y,
    }

    const delayed2 = {
      x: mouse.x,
      y: mouse.y,
    }

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("mousemove", move)

    gsap.ticker.add(() => {
      delayed.x += (mouse.x - delayed.x) * 0.08
      delayed.y += (mouse.y - delayed.y) * 0.08

      delayed2.x += (mouse.x - delayed2.x) * 0.04
      delayed2.y += (mouse.y - delayed2.y) * 0.04

      glow.style.transform =
        `translate3d(${delayed.x - 260}px, ${delayed.y - 260}px, 0)`

      glow2.style.transform =
        `translate3d(${delayed2.x - 380}px, ${delayed2.y - 380}px, 0)`
    })

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <>
      <div className="cinematic-glow-primary" ref={glowRef} />
      <div className="cinematic-glow-secondary" ref={glow2Ref} />
    </>
  )
}