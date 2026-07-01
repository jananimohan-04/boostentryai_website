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

export function UseCasesPage() {
    const useCases = [
        {
            title: "1. Invoice & POD Automation",
            icon: "📄",
            automations: [
                "Extract data from invoices & PODs",
                "Rule-based validation",
                "ERP mapping (Lozics, SAP, Tally, Zoho, etc.)",
                "Auto-update ERP",
                "Automated approval notifications",
                "Daily invoice reports",
            ],
            results: [
                "80–90% manual effort removed",
                "Faster billing cycles",
                "Fewer errors",
                "Automatic audit trail",
            ],
        },
        {
            title: "2. ERP & CRM Update Automation",
            icon: "💼",
            automations: [
                "Customer/vendor creation",
                "Order entry",
                "Trip/consignment entry",
                "Payment updates",
                "Contact updates",
                "Lead movement",
                "Follow-up reminders",
            ],
            results: [
                "All systems stay up-to-date",
                "Reps focus on real work",
                "Higher data accuracy",
            ],
        },
        {
            title: "3. Multi-Step Approval Workflows",
            icon: "✅",
            automations: [
                "Purchase approvals",
                "Vendor invoice approvals",
                "Payment requests",
                "Branch → HO → Finance workflows",
                "WhatsApp/Email notifications",
                "Auto-update approval status in systems",
            ],
            results: [
                "Faster approvals",
                "Full workflow visibility",
                "Zero delays",
            ],
        },
        {
            title: "4. Daily MIS & Report Automation",
            icon: "📊",
            automations: [
                "Daily business summary",
                "Branch reports",
                "Invoice ageing",
                "Collections",
                "Reconciliation",
                "Transport reports",
                "CRM & sales reports",
            ],
            results: [
                "Zero manual Excel work",
                "Leaders get automated daily reports",
                "Instant visibility across operations",
            ],
        },
        {
            title: "5. Document Processing Workflows",
            icon: "📑",
            automations: [
                "Insurance forms",
                "Consignment notes",
                "POD documents",
                "Driver trip sheets",
                "Vendor bills",
                "Medical records",
                "Lab reports → EMR update",
            ],
            results: [
                "Documents → Structured data → System update",
                "Zero manual typing",
                "Full audit history",
            ],
        },
        {
            title: "6. Finance & Accounts Automation",
            icon: "💰",
            automations: [
                "Vendor bills entry",
                "GST summaries",
                "Petty cash workflows",
                "Reconciliation",
                "Payment approvals",
                "AR follow-ups",
                "Bank statement → ERP matching",
            ],
            results: [
                "Minimum manual effort",
                "Faster month-end closing",
                "High financial accuracy",
            ],
        },
        {
            title: "7. Operations Workflow Automation",
            icon: "⚙️",
            automations: [
                "Task assignment",
                "Ticketing & escalation",
                "Branch → HO communication",
                "Vehicle hire & settlement workflow",
                "Customer communication automation",
            ],
            results: [
                "Smooth operations",
                "Fewer follow-ups",
                "Automatic routing",
            ],
        },
        {
            title: "8. Healthcare & Hospital Workflows",
            icon: "🏥",
            automations: [
                "Patient registration",
                "Pre-auth submission",
                "Discharge summary automation",
                "Billing & TPA submission",
                "Lab → EMR updates",
                "Pharmacy billing",
                "Daily census",
            ],
            results: [
                "Fewer errors",
                "Faster processing",
                "Smooth patient flow",
            ],
        },
        {
            title: "9. HR & Employee Workflows",
            icon: "👥",
            automations: [
                "Attendance processing",
                "Leave approvals",
                "Payroll data entry",
                "Offer letter automation",
                "Joining workflows",
                "Exit workflows",
            ],
            results: [
                "HR saves time",
                "Automated employee lifecycle",
                "Cleaner records",
            ],
        },
        {
            title: "10. WhatsApp & Email Automation",
            icon: "📱",
            automations: [
                "Notifications",
                "Invoice reminders",
                "Updates",
                "Branch communications",
                "Approval alerts",
                "Daily reports",
            ],
            results: [
                "Instant communication",
                "Automated reminders",
                "Better team coordination",
            ],
        },
    ];

    return (
        <section
            id="use-cases"
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
                        Use Cases: What BoostEntryAI Automates
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        BoostEntryAI automates everything from document processing to approvals to updates across ERP/CRM/HIS/Finance systems — removing repetitive tasks and accelerating business operations.
                    </p>
                </motion.div>

                {/* Use Cases Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: `${colors.scampi}0d`,
                                borderColor: `${colors.scampi}4d`,
                            }}
                            className="rounded-xl p-6 border"
                        >
                            {/* Use Case Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{useCase.icon}</span>
                                <h3
                                    style={gradientTextStyle}
                                    className="text-xl md:text-2xl font-bold animate-gradient-sweep"
                                >
                                    ⭐ {useCase.title}
                                </h3>
                            </div>

                            {/* What Gets Automated */}
                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-white mb-3">
                                    What Gets Automated
                                </h4>
                                <ul className="space-y-2">
                                    {useCase.automations.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">✓</span>
                                            <span className="text-gray-300 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Results */}
                            <div>
                                <h4 className="text-lg font-bold text-white mb-3">
                                    Results
                                </h4>
                                <ul className="space-y-2">
                                    {useCase.results.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-green-400 mt-1">✔</span>
                                            <span className="text-gray-300 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default UseCasesPage;
