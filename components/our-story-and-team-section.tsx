"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const colors = {
  codGray: "#0d0c0c",
  scampi: "#6c6ca8",
};

const gradientTextStyle: React.CSSProperties = {
  background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export function OurStoryAndTeamSection() {
  const [prefersReducedMotion, setPRM] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPRM(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return (
    <section
      id="team"
      style={{ backgroundColor: colors.codGray }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Our Story */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2
            style={gradientTextStyle}
            className="text-4xl md:text-5xl font-bold mb-12 animate-gradient-sweep"
          >
            Our Story
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              BoostEntryAI was founded with a clear vision — to eliminate the
              time and money businesses waste on repetitive manual data entry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our founder, Senthil Pitchai, brings over 25 years of experience in
              IT services as a Solutions and Enterprise Architect, having
              implemented large-scale technology projects for enterprises.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              After years of seeing teams struggle with manual operations, he
              created BoostEntryAI — an automation platform that saves time,
              improves accuracy, and allows teams to focus on growth.
            </p>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2
            style={gradientTextStyle}
            className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-sweep"
          >
            Our Team
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            We are a passionate group of engineers, AI specialists, and automation
            experts committed to making business operations faster and smarter.
          </p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{
              borderColor: `${colors.scampi}4d`,
              backgroundColor: `${colors.scampi}0d`,
            }}
            className="rounded-xl p-8 border overflow-hidden mx-auto max-w-2xl"
          >
            <Image
              src="/team-group-photo.png"   // ✅ Correct local path
              alt="Our Team"
              width={3923}                   // ✅ set reasonable width/height
              height={2336}
              sizes="100vw"
              priority
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurStoryAndTeamSection;
