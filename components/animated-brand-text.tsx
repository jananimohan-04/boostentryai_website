// app/components/ui/animated-brand-text.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";

const colors = {
  dodgerBlue: "#526ffc",
  tundora: "#4e4e4e",
};

function AnimatedBrandText() {
  // Start safe (reduce motion) and update on client
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // modern API
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }

    // fallback
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  // typed transition — avoids TS complaining about numeric easing arrays
  const transition: Transition = {
    duration: 0.8,
    ease: "easeOut",
  };

  const initial = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 };
  const animate = { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="flex items-center gap-2 sm:flex-col sm:items-center cursor-pointer"
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      role="img"
      aria-label="BoostEntry AI brand"
    >
      <div className="flex items-center gap-2 transition-all duration-300 group">
        <span
          className="font-bold text-white transition-all duration-300 group-hover:text-opacity-80"
          style={{ fontSize: "clamp(14px, 3.2vw, 18px)", lineHeight: 1 }}
        >
          BoostEntry
        </span>

        <span
          style={{ color: colors.dodgerBlue, fontWeight: 700 }}
          className="transition-all duration-300 group-hover:drop-shadow-lg"
        >
          AI
        </span>
      </div>
    </motion.div>
  );
}

export default React.memo(AnimatedBrandText);
