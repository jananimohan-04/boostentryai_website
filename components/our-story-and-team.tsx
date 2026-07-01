"use client"

import { motion } from "framer-motion"

// Color palette (matching main app)
const colors = {
  dodgerBlue: "#526ffc",
  ceriseRed: "#dd3555",
  tundora: "#4e4e4e",
  havelockBlue: "#4485d3",
  strikemaster: "#985884",
  scampi: "#6c6ca8",
  blush: "#bc466c",
  codGray: "#0d0c0c",
}

export function OurStoryAndTeam() {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <section
      id="our-story"
      style={{ backgroundColor: colors.codGray }}
      className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Story & Team</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Our Story Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Story</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  BoostEntryAl was founded with a clear vision — to eliminate the time and money businesses waste on
                  repetitive manual data entry
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our founder, Senthil Pitchai, brings over 25 years of experience in IT services as a Solutions and
                  Enterprise Architect, having successfully implemented large-scale technology projects for leading
                  enterprises.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  After years of seeing teams struggle with manual data operations, he created BoostEntryAl — an
                  intelligent automation platform that saves time, improves accuracy, and allows teams to focus on
                  business growth.
                </p>
              </div>
            </div>

            {/* Our Team Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Team</h3>
              <p className="text-gray-300 leading-relaxed">
                We are a passionate group of engineers, il specialists, and automation experts committed to making
                business operations faster and smarter through intelligent technology.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Media Placeholder */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full rounded-xl border border-white/10 bg-white/[0.02]">
              {/* TODO: Replace with team group photo (e.g., /assets/team-group.jpg) */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">Team group photo placeholder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
