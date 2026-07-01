"use client";

import { motion } from "framer-motion";

const colors = {
    codGray: "#0d0c0c",
    dodgerBlue: "#526ffc",
    havelockBlue: "#4485d3",
    scampi: "#6c6ca8",
    strikemaster: "#985884",
};

const gradientTextStyle = {
    background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

export function SuccessStoryKSSHome() {
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const successStories = [
        {
            title: "KSS Roadways",
            subtitle: "Logistics & Transportation",
            challenge: "Managing 1,000 invoices daily with a 20-member team doing manual data entry into ERP.",
            solution: "Automated 80% of data entry work, reducing team size and eliminating errors.",
            metrics: [
                { icon: "⏱️", value: "2,770+", label: "Hours Saved/Month", color: colors.dodgerBlue },
                { icon: "👥", value: "20 → 4", label: "Team Reduced", color: colors.havelockBlue },
                { icon: "🎯", value: "90%", label: "Error Reduction", color: colors.scampi },
            ],
        },
        {
            title: "Early Jobs (Chennai)",
            subtitle: "Recruitment & Hiring",
            challenge: "Recruiters spent 1 hour daily entering candidate data into CRM, Google Forms, and WhatsApp — causing delays and errors.",
            solution: "One Google Sheet entry now auto-updates CRM, forms, and WhatsApp instantly.",
            metrics: [
                { icon: "⏱️", value: "75+", label: "Hours Saved/Month", color: colors.dodgerBlue },
                { icon: "🎯", value: "100%", label: "Accuracy", color: colors.havelockBlue },
                { icon: "🚀", value: "Instant", label: "Updates", color: colors.scampi },
            ],
        },
        {
            title: "Leading Bank",
            subtitle: "Two-Wheeler Insurance",
            challenge: "Processing 8–9 lakh monthly RTO vehicle records manually — massive backlog, 6–8 staff on repetitive entry, lost sales opportunities.",
            solution: "Fully automated RTO file processing → Bank lead system → Insurance team notification.",
            metrics: [
                { icon: "⏱️", value: "600-700+", label: "Hours Saved/Month", color: colors.dodgerBlue },
                { icon: "🎯", value: "100%", label: "Error-Free", color: colors.havelockBlue },
                { icon: "💰", value: "Higher", label: "Conversions", color: colors.scampi },
            ],
        },
    ];

    return (
        <section
            id="success-stories"
            style={{ backgroundColor: colors.codGray }}
            className="py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={
                        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                    }
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2
                        style={gradientTextStyle}
                        className="text-4xl md:text-5xl font-bold mb-4 animate-gradient-sweep"
                    >
                        Success Stories
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Real results from real businesses
                    </p>
                </motion.div>

                {/* Success Stories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={story.title}
                            initial={
                                prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                            }
                            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                backgroundColor: `${colors.scampi}0d`,
                                borderColor: `${colors.scampi}4d`,
                            }}
                            className="rounded-xl p-6 border transition-all duration-300"
                            whileHover={{
                                y: -4,
                                boxShadow: `0 0 30px ${colors.dodgerBlue}30`,
                            }}
                        >
                            {/* Header */}
                            <div className="mb-4">
                                <h3
                                    style={gradientTextStyle}
                                    className="text-2xl font-bold mb-1 animate-gradient-sweep"
                                >
                                    {story.title}
                                </h3>
                                <p
                                    className="text-sm font-medium"
                                    style={{ color: colors.dodgerBlue }}
                                >
                                    {story.subtitle}
                                </p>
                            </div>

                            {/* Challenge */}
                            <div className="mb-4">
                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                    Challenge
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {story.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="mb-4">
                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                    Solution
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {story.solution}
                                </p>
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-700">
                                {story.metrics.map((metric, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center"
                                    >
                                        <div className="text-2xl mb-1">{metric.icon}</div>
                                        <div
                                            className="text-lg font-bold"
                                            style={{ color: metric.color }}
                                        >
                                            {metric.value}
                                        </div>
                                        <div className="text-xs text-gray-500">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
