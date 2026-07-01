"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Check, Menu, X } from "lucide-react"

// Color palette (same as home)
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

// Demo Video Modal Component
function DemoVideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/500 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 px-4"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div
              style={{
                backgroundColor: colors.codGray,
                borderColor: `${colors.scampi}4d`,
                boxShadow: `0 0 40px ${colors.dodgerBlue}20`,
              }}
              className="border rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative bg-black aspect-video flex items-center justify-center">
                <video controls className="w-full h-full">
                  <source src="https://files.catbox.moe/gpf3pd.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 id="video-modal-title" className="text-lg font-semibold text-white mb-2">
                  BoostEntryAI Demo
                </h3>
                <p className="text-gray-400 text-sm">
                  Experience how simple, accurate, and fast your document processing can be with BoostEntryAI.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// FeatureSwapWorkflow Component
function FeatureSwapWorkflow() {
  const [active, setActive] = useState<string>("documentExtraction")
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const ITEMS = [
    {
      id: "documentExtraction",
      title: "Document Extraction",
      desc: "Extract key data from invoices, receipts, and forms.",
    },
    {
      id: "humanReview",
      title: "Human Review",
      desc: "Optional validation for top accuracy.",
    },
    {
      id: "ragIntelligence",
      title: "RAG Intelligence",
      desc: "Retrieve company knowledge to enrich fields.",
    },
    {
      id: "erpCrmAutoEntry",
      title: "ERP/CRM Auto Entry",
      desc: "Push validated data into ERP/CRM.",
    },
    {
      id: "monitoring",
      title: "Monitoring",
      desc: "Track throughput, accuracy, and exceptions.",
    },
    {
      id: "control",
      title: "Control",
      desc: "Configure rules, integrations, and escalations.",
    },
  ]

  const HOTSPOTS: Record<string, { left: string; top: string; width: string; height: string }> = {
    documentExtraction: { left: "6%", top: "62%", width: "18%", height: "22%" },
    humanReview: { left: "30%", top: "62%", width: "18%", height: "22%" },
    ragIntelligence: { left: "54%", top: "62%", width: "18%", height: "22%" },
    erpCrmAutoEntry: { left: "78%", top: "62%", width: "18%", height: "22%" },
    monitoring: { left: "58%", top: "10%", width: "22%", height: "20%" },
    control: { left: "82%", top: "10%", width: "15%", height: "20%" },
  }

  return (
    <section id="features" style={{ backgroundColor: colors.codGray }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our AI-Powered Workflow Suite</h2>
          <p className="text-gray-400 text-lg">Hover each step to see where it lives in the workflow.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ul className="space-y-3">
            {ITEMS.map((item, index) => (
              <motion.li
                key={item.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onMouseEnter={() => setActive(item.id)}
                  onFocus={() => setActive(item.id)}
                  style={{
                    borderColor: active === item.id ? `${colors.dodgerBlue}80` : "rgba(255, 255, 255, 0.1)",
                    backgroundColor: active === item.id ? "rgba(255, 255, 255, 0.06)" : "transparent",
                  }}
                  className="w-full text-left rounded-lg p-4 transition-all border hover:border-opacity-100"
                  aria-pressed={active === item.id}
                >
                  <div className="flex items-start gap-3">
                    <span
                      style={{
                        backgroundColor: active === item.id ? colors.dodgerBlue : "rgba(255, 255, 255, 0.3)",
                      }}
                      className="mt-1 inline-block size-2 rounded-full transition-all"
                    />
                    <div>
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              style={{
                backgroundColor: colors.codGray,
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
              className="relative rounded-2xl overflow-hidden border"
            >
              <div className="relative aspect-video">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workflow-ftvqjiLkfVG84No3NY9DuD5FfY9aJu.png"
                  alt="BoostEntryAI Workflow"
                  className="w-full h-full object-contain bg-black/40"
                />

                {ITEMS.map((item) => {
                  const hotspot = HOTSPOTS[item.id]
                  const isActive = active === item.id

                  return (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      aria-label={item.title}
                      onMouseEnter={() => setActive(item.id)}
                      onFocus={() => setActive(item.id)}
                      className="absolute outline-none cursor-pointer"
                      style={{
                        left: hotspot.left,
                        top: hotspot.top,
                        width: hotspot.width,
                        height: hotspot.height,
                      }}
                    >
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0.6, scale: 0.985 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0.6, scale: 0.985 }}
                            transition={{ duration: 0.25 }}
                            className="w-full h-full rounded-lg absolute inset-0"
                            style={{
                              border: `2px solid ${colors.dodgerBlue}`,
                              boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.06), 0 10px 30px rgba(82, 111, 252, 0.30), 0 16px 48px rgba(221, 53, 85, 0.25)`,
                            }}
                          >
                            {!prefersReducedMotion && (
                              <motion.div
                                className="w-full h-full rounded-lg"
                                animate={{
                                  scale: [0.985, 1.0],
                                  opacity: [0.7, 1.0],
                                }}
                                transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                              />
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {isActive && (
                        <motion.span
                          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className="absolute -top-3 left-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white whitespace-nowrap"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.15)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                          }}
                          aria-live="polite"
                        >
                          <span className="size-1.5 rounded-full" style={{ backgroundColor: colors.dodgerBlue }} />
                          {item.title}
                        </motion.span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Problem & Solution Section
function ProblemSolution() {
  return (
    <section id="problem-solution" style={{ backgroundColor: colors.codGray }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">The Problem We Solve</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Businesses struggle with manual data entry that drains resources and introduces errors.
              </p>
              <div className="space-y-3 mt-6">
                {[
                  "Delays in business processes",
                  "High operational costs",
                  "Human errors that impact reporting accuracy",
                  "Valuable manpower wasted on repetitive tasks",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      style={{ backgroundColor: colors.scampi }}
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Our Solution: BoostEntryAI</h2>
            <div className="space-y-4">
              {[
                "Automated Data Capture – Extracts key information from invoices, receipts, and forms in seconds",
                "Seamless Integration – Connects directly with your ERP, CRM, or custom business system",
                "Zero Manual Entry – Eliminates repetitive data entry tasks completely",
                "Human-in-the-Loop Review – Optional validation ensures top data accuracy",
                "Scalable & Secure – Handles thousands of documents per day with enterprise-grade security",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.dodgerBlue }} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-8 italic">
              With BoostEntryAI, your team can finally focus on analysis, operations, and growth — not data entry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Use Cases Section
function UseCases() {
  return (
    <section id="use-cases" style={{ backgroundColor: colors.codGray }} className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Use Cases</h2>
        <p className="text-gray-400 text-lg">See how businesses are transforming with BoostEntryAI</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Financial Services", desc: "Automate invoice and receipt processing" },
          { title: "E-Commerce", desc: "Streamline order and customer data entry" },
          { title: "Healthcare", desc: "Digitize patient forms and medical records" },
        ].map((useCase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              borderColor: `${colors.scampi}4d`,
              backgroundColor: `${colors.scampi}0d`,
            }}
            className="p-6 rounded-lg border hover:border-opacity-100 transition-all"
          >
            <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
            <p className="text-gray-400 text-sm">{useCase.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// Success Story Section
function SuccessStoryKSS() {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <section id="success-story" style={{ backgroundColor: colors.codGray }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Story: KSS Roadways</h2>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-xl overflow-hidden"
          style={{
            borderColor: `${colors.dodgerBlue}4d`,
            backgroundColor: `${colors.dodgerBlue}0d`,
            boxShadow: `0 0 40px ${colors.dodgerBlue}20`,
          }}
        >
          <div className="p-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">KSS Roadways</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                KSS Roadways, a logistics company, was spending 40+ hours per week on manual invoice data entry. After
                implementing BoostEntryAI, they achieved a projected reduction of 15–20 data-entry staff, allowing them
                to reallocate resources to strategic operations and customer service.
              </p>
              <div className="space-y-4">
                <div
                  style={{
                    backgroundColor: `${colors.codGray}80`,
                    borderColor: `${colors.scampi}33`,
                  }}
                  className="rounded-lg p-4 border"
                >
                  <p className="text-sm text-gray-400 mb-2">Before</p>
                  <p className="text-2xl font-bold text-white">15–20 Staff</p>
                  <p className="text-xs text-gray-500 mt-1">on data entry</p>
                </div>
                <div
                  style={{
                    backgroundColor: `${colors.codGray}80`,
                    borderColor: `${colors.scampi}33`,
                  }}
                  className="rounded-lg p-4 border"
                >
                  <p className="text-sm text-gray-400 mb-2">After</p>
                  <p className="text-2xl font-bold" style={{ color: colors.scampi }}>
                    ~15–20 Reduction
                  </p>
                  <p className="text-xs text-gray-500 mt-1">staff freed up</p>
                </div>
                <div
                  style={{
                    backgroundColor: `${colors.codGray}80`,
                    borderColor: `${colors.scampi}33`,
                  }}
                  className="rounded-lg p-4 border"
                >
                  <p className="text-sm text-gray-400 mb-2">Time Saved</p>
                  <p className="text-2xl font-bold" style={{ color: colors.dodgerBlue }}>
                    40+ Hours
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per week</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Solutions List Section
function SolutionsList() {
  const solutions = [
    { problem: "Manual Data Entry", solution: "AUTOMATES DATA CAPTURE AND ENTRY (BoostEntryAI)" },
    { problem: "Repetitive Tasks", solution: "AI WORKFLOW AUTOMATION" },
    { problem: "Poor Access to Company Knowledge", solution: "COMPANY KNOWLEDGE ASSISTANT (RAG)" },
    { problem: "Missed Upsell Opportunities", solution: "AI LEAD AUTOMATION" },
    { problem: "Low Conversions", solution: "AI WORKFLOW AUTOMATION" },
    { problem: "Unclear Marketing ROI", solution: "COMPANY KNOWLEDGE ASSISTANT (RAG)" },
  ]

  return (
    <section id="solutions-list" style={{ backgroundColor: colors.codGray }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our AI Solutions for Today's Business Challenges
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                borderColor: `${colors.scampi}4d`,
                backgroundColor: `${colors.scampi}0d`,
              }}
              className="p-6 rounded-lg border hover:border-opacity-100 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{item.problem}</h3>
              <p className="text-sm font-medium" style={{ color: colors.dodgerBlue }}>
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// QuickDemo component
function QuickDemo({ onDemoVideoClick }: { onDemoVideoClick: () => void }) {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <section id="quick-demo" style={{ backgroundColor: colors.codGray }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See BoostEntryAI in Action</h2>
          <p className="text-gray-300 text-lg mb-8">Watch our quick demo to understand the power of our AI.</p>

          <motion.button
            onClick={onDemoVideoClick}
            className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <img src="/demo-video-thumbnail.jpg" alt="Demo video thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: [1, 1.1, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: colors.dodgerBlue,
                    boxShadow: `0 0 30px ${colors.dodgerBlue}60`,
                  }}
                >
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </motion.div>
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Navigation component from home page
function Navigation({ onDemoClick }: { onDemoClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    window.location.href = "/"
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Clients", href: "/#clients" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Our Team", href: "/#team" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <nav
      style={{
        backgroundColor: scrolled ? `${colors.codGray}f2` : colors.codGray,
        borderBottomColor: `${colors.scampi}33`,
      }}
      className="fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
            aria-label="Go to home"
          >
            <div className="relative w-8 h-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BUSSINER_SQUARE_LOGO__3_-removebg-preview%20-%20Edited-EnLGkv6tGSfFA3kdr3Ua8jAGZS0L8i.png"
                alt="Work Booster AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col items-center gap-0 cursor-pointer">
              <div className="flex items-center gap-1 transition-all duration-300 group">
                <span className="text-lg font-bold text-white group-hover:text-opacity-80 transition-all duration-300">
                  Work
                </span>
                <span
                  style={{ color: colors.dodgerBlue }}
                  className="text-lg font-bold group-hover:drop-shadow-lg transition-all duration-300"
                >
                  Booster
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 group">
                <div
                  className="w-6 h-0.5 transition-all duration-300 group-hover:w-8"
                  style={{ backgroundColor: colors.tundora }}
                ></div>
                <span className="text-xs font-bold text-white tracking-widest group-hover:text-opacity-80 transition-all duration-300">
                  AI
                </span>
                <div
                  className="w-6 h-0.5 transition-all duration-300 group-hover:w-8"
                  style={{ backgroundColor: colors.tundora }}
                ></div>
              </div>
            </div>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.button
              onClick={onDemoClick}
              style={{
                backgroundColor: colors.dodgerBlue,
                boxShadow: `0 0 20px ${colors.dodgerBlue}40`,
              }}
              className="px-6 py-2 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300"
              whileHover={{ y: -1 }}
            >
              Book a Demo
            </motion.button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ borderTopColor: `${colors.scampi}33` }}
              className="md:hidden border-t py-4 space-y-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onDemoClick()
                  setMobileMenuOpen(false)
                }}
                style={{ backgroundColor: colors.dodgerBlue }}
                className="w-full px-6 py-2 rounded-full text-white text-sm font-medium hover:scale-105 transition-all"
              >
                Book a Demo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// Main Learn More Page Component
export default function LearnMore() {
  const [isDemoVideoModalOpen, setIsDemoVideoModalOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const handleDemoVideoClick = () => {
    setIsDemoVideoModalOpen(true)
  }

  const handleCloseDemoVideoModal = () => {
    setIsDemoVideoModalOpen(false)
  }

  const handleDemoClick = () => {
    setIsDemoModalOpen(true)
  }

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false)
  }

  return (
    <main className="bg-codGray font-sans antialiased">
      <Navigation onDemoClick={handleDemoClick} />

      {/* Page Header */}
      <section style={{ backgroundColor: colors.codGray }} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Learn More</h1>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Deep dive into how BoostEntryAI works and the impact it delivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <FeatureSwapWorkflow />
      <ProblemSolution />

      {/* Real-World Impact wrapper */}
      <section id="real-world-impact" style={{ backgroundColor: colors.codGray }}>
        <UseCases />
        <SuccessStoryKSS />
      </section>

      <SolutionsList />
      <QuickDemo onDemoVideoClick={handleDemoVideoClick} />

      <DemoVideoModal isOpen={isDemoVideoModalOpen} onClose={handleCloseDemoVideoModal} />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </main>
  )
}

// DemoModal component for Book a Demo button
function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    preferredTime: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({ name: "", email: "", company: "", preferredTime: "", message: "" })
    }, 2000)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              style={{
                backgroundColor: colors.codGray,
                borderColor: `${colors.scampi}4d`,
                boxShadow: `0 0 40px ${colors.dodgerBlue}20`,
              }}
              className="border rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 id="modal-title" className="text-2xl font-bold text-white">
                  Book a Demo
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <div
                    style={{ backgroundColor: `${colors.dodgerBlue}33` }}
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="w-6 h-6" style={{ color: colors.dodgerBlue }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400">We'll be in touch soon to schedule your demo.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {["Name", "Email", "Company"].map((placeholder) => (
                    <input
                      key={placeholder}
                      type={placeholder === "Email" ? "email" : "text"}
                      placeholder={placeholder}
                      required
                      value={formData[placeholder.toLowerCase() as keyof typeof formData] || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [placeholder.toLowerCase()]: e.target.value,
                        })
                      }
                      style={{
                        backgroundColor: `${colors.scampi}1a`,
                        borderColor: `${colors.scampi}4d`,
                      }}
                      className="w-full px-4 py-2 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors"
                      onFocus={(e) => (e.currentTarget.style.borderColor = colors.dodgerBlue)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = `${colors.scampi}4d`)}
                    />
                  ))}
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    style={{
                      backgroundColor: `${colors.scampi}1a`,
                      borderColor: `${colors.scampi}4d`,
                    }}
                    className="w-full px-4 py-2 rounded-lg border text-white focus:outline-none transition-colors"
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.dodgerBlue)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = `${colors.scampi}4d`)}
                  >
                    <option value="">Select Preferred Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  <textarea
                    placeholder="Message (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    style={{
                      backgroundColor: `${colors.scampi}1a`,
                      borderColor: `${colors.scampi}4d`,
                    }}
                    className="w-full px-4 py-2 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.dodgerBlue)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = `${colors.scampi}4d`)}
                  ></textarea>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: colors.dodgerBlue,
                      boxShadow: `0 0 20px ${colors.dodgerBlue}40`,
                    }}
                    className="w-full px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-all duration-300"
                  >
                    Schedule Demo
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
