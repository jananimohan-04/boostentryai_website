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
};

export function CallToAction() {
    return (
        <section
            style={{ backgroundColor: colors.codGray }}
            className="py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={gradientTextStyle}
                        className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-sweep"
                    >
                        Automate Your Industry Workflows
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                        No matter your industry, BoostEntryAI can automate the repetitive work slowing down your growth.
                    </p>
                    <p className="text-white text-xl font-semibold mb-8">
                        Let's discuss your workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="https://calendly.com/workboosterai/wb-ai-automation-discovery-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: colors.dodgerBlue,
                                boxShadow: `0 0 20px ${colors.dodgerBlue}40`,
                            }}
                            className="px-8 py-3 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 inline-block"
                            whileHover={{ y: -2 }}
                        >
                            Schedule a Discovery Call
                        </motion.a>
                        <motion.a
                            href="#contact"
                            style={{
                                borderColor: colors.dodgerBlue,
                                color: "white",
                            }}
                            className="px-8 py-3 rounded-full border-2 font-medium hover:bg-opacity-10 transition-all duration-300"
                            whileHover={{ y: -2 }}
                        >
                            Contact Us
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CallToAction;
