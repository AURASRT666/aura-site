"use client"

import { motion } from "framer-motion"

export function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(255, 26, 26, 0.4) 0%, transparent 70%)" }}
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(255, 26, 26, 0.3) 0%, transparent 70%)" }}
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 40, 0, -40, 0],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape 
        className="top-[15%] left-[10%]" 
        size={80} 
        delay={0}
        shape="diamond"
      />
      <FloatingShape 
        className="top-[25%] right-[15%]" 
        size={60} 
        delay={2}
        shape="square"
      />
      <FloatingShape 
        className="bottom-[30%] left-[20%]" 
        size={100} 
        delay={4}
        shape="hexagon"
      />
      <FloatingShape 
        className="bottom-[20%] right-[10%]" 
        size={70} 
        delay={1}
        shape="triangle"
      />
      <FloatingShape 
        className="top-[50%] left-[5%]" 
        size={50} 
        delay={3}
        shape="circle"
      />
      <FloatingShape 
        className="top-[60%] right-[25%]" 
        size={90} 
        delay={5}
        shape="diamond"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Subtle scanlines */}
      <div className="absolute inset-0 scanlines opacity-50" />
    </div>
  )
}

function FloatingShape({ 
  className, 
  size, 
  delay,
  shape 
}: { 
  className: string
  size: number
  delay: number
  shape: "diamond" | "square" | "hexagon" | "triangle" | "circle"
}) {
  const getShapePath = () => {
    switch (shape) {
      case "diamond":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path 
              d="M50 5 L95 50 L50 95 L5 50 Z" 
              stroke="rgba(255, 26, 26, 0.3)" 
              strokeWidth="1"
              fill="none"
            />
            <path 
              d="M50 20 L80 50 L50 80 L20 50 Z" 
              stroke="rgba(255, 26, 26, 0.15)" 
              strokeWidth="1"
              fill="none"
            />
          </svg>
        )
      case "square":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <rect 
              x="10" y="10" 
              width="80" height="80" 
              stroke="rgba(255, 26, 26, 0.3)" 
              strokeWidth="1"
              fill="none"
              transform="rotate(45 50 50)"
            />
            <rect 
              x="25" y="25" 
              width="50" height="50" 
              stroke="rgba(255, 26, 26, 0.15)" 
              strokeWidth="1"
              fill="none"
              transform="rotate(45 50 50)"
            />
          </svg>
        )
      case "hexagon":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <polygon 
              points="50,5 93,25 93,75 50,95 7,75 7,25" 
              stroke="rgba(255, 26, 26, 0.3)" 
              strokeWidth="1"
              fill="none"
            />
            <polygon 
              points="50,20 78,35 78,65 50,80 22,65 22,35" 
              stroke="rgba(255, 26, 26, 0.15)" 
              strokeWidth="1"
              fill="none"
            />
          </svg>
        )
      case "triangle":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <polygon 
              points="50,10 90,90 10,90" 
              stroke="rgba(255, 26, 26, 0.3)" 
              strokeWidth="1"
              fill="none"
            />
            <polygon 
              points="50,30 75,75 25,75" 
              stroke="rgba(255, 26, 26, 0.15)" 
              strokeWidth="1"
              fill="none"
            />
          </svg>
        )
      case "circle":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle 
              cx="50" cy="50" r="45" 
              stroke="rgba(255, 26, 26, 0.3)" 
              strokeWidth="1"
              fill="none"
            />
            <circle 
              cx="50" cy="50" r="30" 
              stroke="rgba(255, 26, 26, 0.15)" 
              strokeWidth="1"
              fill="none"
            />
          </svg>
        )
    }
  }

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0, 20, 0],
        rotate: [0, 180, 360],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {getShapePath()}
    </motion.div>
  )
}
