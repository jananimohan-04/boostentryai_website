"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

const colors = {
  codGray: "#0d0c0c",
  scampi: "#6c6ca8",
  dodgerBlue: "#526ffc",
}

const gradientTextStyle = {
  background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.codGray,
        borderTopColor: `${colors.scampi}33`,
      }}
      className="border-t py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid md:grid-cols-2 gap-12 mb-12 pb-12 border-b"
          style={{ borderBottomColor: `${colors.scampi}33` }}
        >
          {/* Left: Address & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={gradientTextStyle} className="text-lg font-semibold mb-6 animate-gradient-sweep">
              Office
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: colors.dodgerBlue }} />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Workvilla - Coworking Space
                    <br />
                    Prakash Presidium, 110, Uthamar Gandhi Rd
                    <br />
                    Subba Road Avenue, Nungambakkam
                    <br />
                    Chennai, Tamil Nadu 600034
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" style={{ color: colors.dodgerBlue }} />
                <a href="tel:+918122784236" className="text-gray-300 hover:text-white transition-colors">
                  +91 8122784236
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" style={{ color: colors.dodgerBlue }} />
                <a href="mailto:sales@workboosterai.com" className="text-gray-300 hover:text-white transition-colors">
                  sales@workboosterai.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg overflow-hidden transition-all duration-300"
            style={{
              borderColor: `${colors.scampi}4d`,
              backgroundColor: `${colors.scampi}0d`,
            }}
            whileHover={{ y: -4, boxShadow: `0 0 20px ${colors.scampi}40` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267!2d80.2398!3d13.0569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a4e8e8e8e9%3A0x1234567890abcdef!2sThe%20Workvilla%20-%20Coworking%20Space%2C%20Prakash%20Presidium%2C%20110%2C%20Uthamar%20Gandhi%20Rd%2C%20Subba%20Road%20Avenue%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="256"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Work Booster AI Office Location"
            />
          </motion.div>
        </div>

        {/* Footer Links & Legal */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">
            Work Booster AI™ | BoostEntryAI is a product of Work Booster AI | © 2025 |{" "}
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { label: "Home", href: "#home" },
              { label: "Use Cases", href: "#use-cases" },
              { label: "Our Story", href: "#team" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
