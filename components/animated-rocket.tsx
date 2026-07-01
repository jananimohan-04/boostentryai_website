"use client"

import { motion } from "framer-motion"

const colors = {
  dodgerBlue: "#526ffc",
}

export function AnimatedRocket() {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 12, rotate: -8, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-8 h-8"
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [-2, 2],
                rotate: [-1, 1],
              }
        }
        transition={{
          duration: 2.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
        className="w-full h-full relative"
        whileHover={
          prefersReducedMotion
            ? {}
            : {
                y: -4,
              }
        }
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BUSSINER_SQUARE_LOGO__3_-removebg-preview%20-%20Edited-EnLGkv6tGSfFA3kdr3Ua8jAGZS0L8i.png"
          alt="Work Booster AI Logo"
          className="w-full h-full object-contain"
        />
        {/* Hover thrust effect */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-3 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0, 1, 0],
                  height: [0, 8, 0],
                }
          }
          transition={{ duration: 0.2 }}
          style={{
            background: `linear-gradient(to bottom, ${colors.dodgerBlue}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}
