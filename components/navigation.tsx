"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AnimatedBrandText from "./animated-brand-text";
import { AnimatedRocket } from "./animated-rocket";

/**
 * Navigation
 * - Uses AnimatedBrandText (visible on all screens)
 * - Slightly reduced horizontal gap on mobile so header doesn't overflow
 * - Memoized brand component to improve render stability
 */

const colors = {
  codGray: "#0d0c0c",
  scampi: "#6c6ca8",
  dodgerBlue: "#526ffc",
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Industry", href: "/industry" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Success Stories", href: "/#success-stories" },
  ];

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
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
            aria-label="Go to home"
            type="button"
          >
            <AnimatedRocket />
            <AnimatedBrandText />
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.a
              href="#contact"
              style={{
                backgroundColor: colors.dodgerBlue,
                boxShadow: `0 0 20px ${colors.dodgerBlue}40`,
              }}
              className="px-6 py-2 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 inline-block"
              whileHover={{ y: -1 }}
            >
              Contact Us
            </motion.a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((s) => !s)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
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
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{ backgroundColor: colors.dodgerBlue }}
                className="block w-full px-6 py-2 rounded-full text-white text-sm font-medium hover:scale-105 transition-all text-center"
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default React.memo(Navigation);
