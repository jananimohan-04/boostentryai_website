"use client";

import { motion } from "framer-motion";

const colors = {
  codGray: "#0d0c0c",
  dodgerBlue: "#526ffc",
};

const gradientTextStyle = {
  background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export function QuickDemo() {
  return (
    <section
      style={{ backgroundColor: colors.codGray }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            style={gradientTextStyle}
            className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-sweep"
          >
            See BoostEntryAI in Action
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Watch our quick demo to understand the power of our AI.
          </p>

          <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HLCrDN3d64c"
              title="BoostEntryAI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-3 text-xs text-gray-400">
            Click play to start the demo
          </div>
        </motion.div>
      </div>
    </section>
  );
}
