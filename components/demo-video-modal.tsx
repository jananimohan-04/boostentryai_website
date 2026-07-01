"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const colors = {
  codGray: "#0d0c0c",
  scampi: "#6c6ca8",
  dodgerBlue: "#526ffc",
}

export function DemoVideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HLCrDN3d64c"
                  title="BoostEntryAI Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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
