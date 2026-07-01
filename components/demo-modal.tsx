"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

const colors = {
  codGray: "#0d0c0c",
  scampi: "#6c6ca8",
  dodgerBlue: "#526ffc",
}

export function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
