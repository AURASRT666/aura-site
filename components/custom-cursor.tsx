"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.12
      outlineY += (mouseY - outlineY) * 0.12
      outline.style.left = `${outlineX}px`
      outline.style.top = `${outlineY}px`
      requestAnimationFrame(animateOutline)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target
      if (target instanceof HTMLElement && target.closest("a, button, [data-hover]")) {
        dot.classList.add("hovering")
        outline.classList.add("hovering")
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target
      if (target instanceof HTMLElement && target.closest("a, button, [data-hover]")) {
        dot.classList.remove("hovering")
        outline.classList.remove("hovering")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)
    animateOutline()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={outlineRef} className="cursor-outline hidden lg:block" />
    </>
  )
}
