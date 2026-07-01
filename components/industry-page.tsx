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

export function IndustryPage() {
    const industries = [
        {
            title: "1. Logistics & Transport",
            icon: "🚚",
            description: "BoostEntryAI automates your core logistics workflows end-to-end.",
            automations: [
                "Invoice & POD data entry",
                "Vendor bill entry",
                "Vehicle hire workflow",
                "Driver settlement & trip statements",
                "LR/GC creation automation",
                "Balance advice automation",
                "Daily MIS & branch reports",
                "Approvals & notifications",
                "Integrations with Lozics, Axon, Trans ERP",
            ],
            outcomes: [
                "80%+ manual work eliminated",
                "Faster dispatch, billing & settlements",
                "Lower manpower cost",
                "90% fewer errors",
                "Faster payment cycles",
            ],
        },
        {
            title: "2. Manufacturing",
            icon: "🏭",
            description: "Automate repetitive workflows inside factory operations.",
            automations: [
                "Purchase order entry",
                "GRN automation",
                "Stock update workflows",
                "Quality inspection approvals",
                "Production reports",
                "Machine downtime reports",
                "Vendor invoice processing",
                "Daily MIS",
            ],
            outcomes: [
                "Reduced manual effort in SAP/ERP",
                "Real-time stock visibility",
                "Faster reporting & approvals",
                "Increased operational efficiency",
            ],
        },
        {
            title: "3. Finance & Accounts",
            icon: "💰",
            description: "Eliminate financial routine tasks with automation.",
            automations: [
                "Vendor invoice approvals",
                "Payment request workflows",
                "Reconciliation",
                "AR follow-ups",
                "GST summary automation",
                "Petty cash workflows",
                "Daily/weekly/monthly reports",
            ],
            outcomes: [
                "Faster approvals",
                "Zero missed follow-ups",
                "Clean, audit-ready data",
                "60–80% fewer errors",
            ],
        },
        {
            title: "4. Warehousing & Distribution",
            icon: "📦",
            description: "Automate daily warehouse operations.",
            automations: [
                "Inbound & outbound data entry",
                "Stock adjustments workflow",
                "Picking/packing automation",
                "Order status updates",
                "Dispatch notifications",
                "Barcode → ERP updates",
            ],
            outcomes: [
                "Faster warehouse turnaround",
                "Lower manpower usage",
                "Better accuracy",
                "Real-time stock movement",
            ],
        },
        {
            title: "5. Retail & E-Commerce",
            icon: "🛒",
            automations: [
                "Order import & ERP sync",
                "Inventory updates",
                "Channel-wise reporting",
                "Return workflows",
                "Customer communication",
                "Sales reconciliation",
            ],
            outcomes: [
                "Faster order processing",
                "Cleaner ERP updates",
                "Better inventory accuracy",
            ],
        },
        {
            title: "6. Service Companies (IT, BPO, Agencies)",
            icon: "💻",
            automations: [
                "Ticket workflow automation",
                "Client reporting",
                "Timesheet automation",
                "Notification workflows",
                "Approval workflows",
                "CRM updates (Zoho, Salesforce, HubSpot)",
            ],
            outcomes: [
                "Faster client response",
                "Reduced repetitive tasks",
                "Smooth internal operations",
            ],
        },
        {
            title: "7. Hospitals & Healthcare",
            icon: "🏥",
            description: "Healthcare operations involve large volumes of paperwork and approvals — BoostEntryAI automates all of it.",
            automations: [
                "Patient registration → EMR/HIS update",
                "Insurance pre-authorization workflows",
                "Treatment & procedure coding",
                "Discharge summary automation",
                "Billing & claims workflows",
                "TPA documentation",
                "Lab report → EMR update",
                "Pharmacy stock & billing automation",
                "Doctor scheduling & approvals",
                "Daily census & hospital reporting",
            ],
            outcomes: [
                "50–80% less manual data entry",
                "Faster patient registration → discharge",
                "Reduced billing errors",
                "Faster TPA claim submission",
                "Real-time reporting",
                "Better patient experience",
            ],
            usedIn: [
                "Front Office",
                "Insurance/TPA Desk",
                "Labs & Diagnostics",
                "Pharmacy",
                "MRD",
                "Finance & Administration",
            ],
        },
    ];

    return (
        <section
            id="industry"
            style={{ backgroundColor: colors.codGray }}
            className="py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        style={gradientTextStyle}
                        className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-sweep"
                    >
                        Industries We Serve
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        BoostEntryAI automates workflows across logistics, manufacturing, finance, healthcare, warehouses, retail, IT services, and more — helping businesses run faster, reduce manual effort, and improve accuracy across operations.
                    </p>
                </motion.div>

                {/* Industries List */}
                <div className="space-y-12">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: `${colors.scampi}0d`,
                                borderColor: `${colors.scampi}4d`,
                            }}
                            className="rounded-xl p-8 border"
                        >
                            {/* Industry Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-5xl">{industry.icon}</span>
                                <div>
                                    <h3
                                        style={gradientTextStyle}
                                        className="text-2xl md:text-3xl font-bold animate-gradient-sweep"
                                    >
                                        ⭐ {industry.title}
                                    </h3>
                                    {industry.description && (
                                        <p className="text-gray-400 mt-2">{industry.description}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mt-6">
                                {/* What We Automate */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-4">
                                        What We Automate
                                    </h4>
                                    <ul className="space-y-2">
                                        {industry.automations.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-blue-400 mt-1 text-lg">✓</span>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Outcome */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-4">
                                        Outcome
                                    </h4>
                                    <ul className="space-y-2">
                                        {industry.outcomes.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-green-400 mt-1 text-lg">✔</span>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {industry.usedIn && (
                                        <div className="mt-6">
                                            <h5 className="text-lg font-semibold text-white mb-3">
                                                Used In
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {industry.usedIn.map((dept, idx) => (
                                                    <span
                                                        key={idx}
                                                        style={{
                                                            backgroundColor: `${colors.dodgerBlue}1a`,
                                                            borderColor: `${colors.dodgerBlue}4d`,
                                                        }}
                                                        className="px-3 py-1 rounded-full border text-sm text-white"
                                                    >
                                                        {dept}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h3
                        style={gradientTextStyle}
                        className="text-3xl md:text-4xl font-bold mb-10 animate-gradient-sweep"
                    >
                        🎯 Why Businesses Choose BoostEntryAI
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {[
                            "End-to-end workflow automation",
                            "Document → Data → Approval → System update",
                            "Integrates with ERP/CRM/HIS",
                            "80%–90% manual effort reduction",
                            "Works across all industries",
                            "Implemented within 21 days",
                        ].map((benefit, index) => (
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
                                <span className="text-white font-medium text-left">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default IndustryPage;
