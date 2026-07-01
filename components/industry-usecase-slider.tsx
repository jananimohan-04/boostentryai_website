"use client";

import { motion } from "framer-motion";

const colors = {
    codGray: "#0d0c0c",
    dodgerBlue: "#526ffc",
    scampi: "#6c6ca8",
};

const gradientTextStyle = {
    background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

export function IndustryUseCaseSlider() {
    const industries = [
        { name: "Logistics", icon: "🚚" },
        { name: "Manufacturing", icon: "🏭" },
        { name: "Finance", icon: "💰" },
        { name: "Warehousing", icon: "📦" },
        { name: "Retail", icon: "🛒" },
        { name: "IT", icon: "💻" },
        { name: "Recruitment", icon: "👥" },
        { name: "Healthcare", icon: "🏥" },
    ];

    const useCases = [
        "Invoice Automation",
        "Approvals",
        "ERP Updates",
        "MIS Reports",
        "Finance Ops",
        "HR Workflows",
        "Document Processing",
    ];

    const benefits = [
        "80%–90% workflow automation",
        "ERP/CRM integrations",
        "AI + Rules-based hybrid engine",
        "Handles multi-step approvals",
        "WhatsApp, Email & SMS automation",
        "Works for any industry",
        "Implemented in under 21 days",
    ];

    return (
        <section
            style={{ backgroundColor: colors.codGray }}
            className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                {/* Industries Grid */}
                <div className="mb-16">
                    <h3
                        style={gradientTextStyle}
                        className="text-2xl md:text-3xl font-bold mb-8 text-center animate-gradient-sweep"
                    >
                        Industries We Serve
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: `${colors.scampi}1a`,
                                    borderColor: `${colors.scampi}4d`,
                                }}
                                className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-opacity-30 transition-all duration-300"
                                whileHover={{
                                    y: -4,
                                    boxShadow: `0 0 20px ${colors.scampi}40`,
                                }}
                            >
                                <div className="text-3xl mb-2">{industry.icon}</div>
                                <div className="text-white text-sm font-medium text-center">
                                    {industry.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Use Case Slider */}
                <div className="mb-16">
                    <h3
                        style={gradientTextStyle}
                        className="text-2xl md:text-3xl font-bold mb-6 text-center animate-gradient-sweep"
                    >
                        Use Cases
                    </h3>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-4"
                                animate={{
                                    x: [-1920, 0],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 25,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {/* Duplicate the array twice for seamless loop */}
                                {[...useCases, ...useCases, ...useCases].map((useCase, index) => (
                                    <div
                                        key={`usecase-${index}`}
                                        style={{
                                            backgroundColor: `${colors.dodgerBlue}1a`,
                                            borderColor: `${colors.dodgerBlue}4d`,
                                        }}
                                        className="flex-shrink-0 px-8 py-4 rounded-full border text-white font-medium whitespace-nowrap hover:bg-opacity-20 transition-all"
                                    >
                                        {useCase}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Why Businesses Choose BoostEntryAI */}
                <div>
                    <h3
                        style={gradientTextStyle}
                        className="text-2xl md:text-3xl font-bold mb-8 text-center animate-gradient-sweep"
                    >
                        Why Businesses Choose BoostEntryAI
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-4 rounded-lg"
                                style={{
                                    backgroundColor: `${colors.dodgerBlue}0d`,
                                    borderColor: `${colors.dodgerBlue}4d`,
                                }}
                            >
                                <span className="text-green-400 text-xl flex-shrink-0">✔</span>
                                <span className="text-white font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndustryUseCaseSlider;
