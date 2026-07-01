"use client"

import { motion } from "framer-motion"

const colors = {
  codGray: "#0d0c0c",
  dodgerBlue: "#526ffc",
  havelockBlue: "#4485d3",
}

const gradientTextStyle = {
  background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

export function Hero() {
  return (
    <section id="home" style={{ backgroundColor: colors.codGray }} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto"
        >
          <div className="w-full">
            <div className="relative inline-block">
              <h1
                style={gradientTextStyle}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-gradient-sweep"
              >
                Automate Your Business Workflows. Double Your Productivity.
              </h1>
              <div
                style={{
                  background: `linear-gradient(to right, ${colors.dodgerBlue}, ${colors.havelockBlue})`,
                }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 blur-md opacity-50"
              ></div>
            </div>
          </div>

          <div className="pt-4 w-full">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              BoostEntryAI automates repetitive tasks across all your business systems — CRM, finance, operations, logistics, HR, and more. From data extraction to approvals and workflow execution, everything runs faster and smoother, saving time, reducing costs, and accelerating your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
            <motion.a
              href="https://calendly.com/workboosterai/wb-ai-automation-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: colors.dodgerBlue,
                boxShadow: `0 0 20px ${colors.dodgerBlue}40`,
              }}
              className="px-8 py-3 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 inline-block text-center"
              whileHover={{ y: -1 }}
            >
              Schedule a Discovery Call
            </motion.a>
            <motion.a
              href="#contact"
              style={{
                borderColor: colors.dodgerBlue,
                color: "white",
              }}
              className="px-8 py-3 rounded-full border-2 font-medium hover:bg-opacity-10 transition-all duration-300 text-center"
              whileHover={{ y: -1 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
