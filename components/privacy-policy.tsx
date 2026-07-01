"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react"

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

function PolicySection({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="ml-10">{content}</div>
    </motion.div>
  )
}

export function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: colors.codGray, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield size={48} style={{ color: colors.dodgerBlue }} />
              <h1 style={gradientTextStyle} className="text-4xl md:text-5xl font-bold animate-gradient-sweep">
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-400 text-lg mb-4">Work Booster AI™ | BoostEntryAI</p>
            <p className="text-gray-500 text-sm">
              <strong>Effective Date:</strong> August 20, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                Work Booster AI ("we", "our", "us") is committed to protecting your privacy and ensuring that your
                personal information is handled securely and responsibly. This Privacy Policy explains how we collect,
                use, store, and protect your information when you visit our website, submit forms, or use our services.
              </p>
            </div>

            {/* Section 1 */}
            <PolicySection
              icon={<FileText size={24} style={{ color: colors.dodgerBlue }} />}
              title="1. Information We Collect"
              content={
                <>
                  <p className="text-gray-300 mb-4">We may collect the following types of information:</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">1.1 Personal Information</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Collected when you fill out forms, book a demo, contact us, or engage with our ads.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Name</li>
                        <li>Company Name</li>
                        <li>Phone Number</li>
                        <li>Email Address</li>
                        <li>Country / City</li>
                        <li>Job Title</li>
                        <li>Any information shared in the contact/message form</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">1.2 Technical Information</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Collected automatically when you visit our website.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Time spent on website</li>
                        <li>Referring website/source</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">1.3 Marketing & Analytics Data</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Collected through Meta, LinkedIn, Google, or other ad platforms.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Ad interactions</li>
                        <li>Lead form submissions</li>
                        <li>Conversion statistics</li>
                      </ul>
                    </div>
                  </div>
                </>
              }
            />

            {/* Section 2 */}
            <PolicySection
              icon={<Eye size={24} style={{ color: colors.dodgerBlue }} />}
              title="2. How We Use Your Information"
              content={
                <>
                  <p className="text-gray-300 mb-3">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide demos, respond to inquiries, and deliver requested services</li>
                    <li>Improve our AI automation products</li>
                    <li>Personalize website experience</li>
                    <li>Send updates, marketing communication, and product insights</li>
                    <li>Improve our website, performance, and customer service</li>
                    <li>Run analytics to optimize ad campaigns (Meta, LinkedIn, Google)</li>
                  </ul>
                  <p className="text-gray-400 mt-4 text-sm italic">
                    You can opt out of marketing communication at any time.
                  </p>
                </>
              }
            />

            {/* Section 3 */}
            <PolicySection
              icon={<UserCheck size={24} style={{ color: colors.dodgerBlue }} />}
              title="3. How We Share Your Information"
              content={
                <>
                  <p className="text-white font-semibold mb-3">We do not sell your data.</p>
                  <p className="text-gray-300 mb-3">We may share information only with:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Trusted service providers (hosting, email services, CRM systems)</li>
                    <li>Advertising platforms (Meta, LinkedIn, Google) for lead management</li>
                    <li>Legal authorities, if required by law</li>
                  </ul>
                  <p className="text-gray-400 mt-4 text-sm italic">
                    All partners follow strict data protection standards.
                  </p>
                </>
              }
            />

            {/* Section 4 */}
            <PolicySection
              icon={<Eye size={24} style={{ color: colors.dodgerBlue }} />}
              title="4. Cookies & Tracking Technologies"
              content={
                <>
                  <p className="text-gray-300 mb-3">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Improve website performance</li>
                    <li>Track user interactions</li>
                    <li>Measure campaign effectiveness</li>
                    <li>Personalize browsing experience</li>
                  </ul>
                  <p className="text-gray-400 mt-4 text-sm italic">
                    You can control cookie settings through your browser.
                  </p>
                </>
              }
            />

            {/* Section 5 */}
            <PolicySection
              icon={<Lock size={24} style={{ color: colors.dodgerBlue }} />}
              title="5. Data Security"
              content={
                <>
                  <p className="text-gray-300 mb-3">We implement multiple layers of security:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Encrypted data storage</li>
                    <li>Secure servers and firewalls</li>
                    <li>Limited employee access</li>
                    <li>Regular audits and monitoring</li>
                  </ul>
                  <p className="text-gray-400 mt-4 text-sm italic">
                    While we follow best practices, no system is 100% secure.
                  </p>
                </>
              }
            />

            {/* Section 6 */}
            <PolicySection
              icon={<FileText size={24} style={{ color: colors.dodgerBlue }} />}
              title="6. Data Retention"
              content={
                <>
                  <p className="text-gray-300 mb-3">We retain personal data only for:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>As long as necessary to provide services</li>
                    <li>Legal, accounting, or reporting requirements</li>
                    <li>Active business relationship</li>
                  </ul>
                  <p className="text-gray-400 mt-4 text-sm italic">
                    You may request deletion of your data anytime.
                  </p>
                </>
              }
            />

            {/* Section 7 */}
            <PolicySection
              icon={<UserCheck size={24} style={{ color: colors.dodgerBlue }} />}
              title="7. Your Rights"
              content={
                <>
                  <p className="text-gray-300 mb-3">Depending on your location, you may have rights to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access the personal data we hold</li>
                    <li>Update or correct your information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communication</li>
                    <li>Withdraw consent</li>
                    <li>Raise concerns regarding data usage</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    To request any of the above, email:{" "}
                    <a
                      href="mailto:sales@workboosterai.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      sales@workboosterai.com
                    </a>
                  </p>
                </>
              }
            />

            {/* Section 8 */}
            <PolicySection
              icon={<FileText size={24} style={{ color: colors.dodgerBlue }} />}
              title="8. Third-Party Links"
              content={
                <p className="text-gray-300">
                  Our website may contain links to external websites. We are not responsible for their privacy practices
                  or content.
                </p>
              }
            />

            {/* Section 9 */}
            <PolicySection
              icon={<Shield size={24} style={{ color: colors.dodgerBlue }} />}
              title="9. Children's Privacy"
              content={
                <p className="text-gray-300">
                  Our services are not intended for individuals under 18. We do not knowingly collect information from
                  minors.
                </p>
              }
            />

            {/* Section 10 */}
            <PolicySection
              icon={<FileText size={24} style={{ color: colors.dodgerBlue }} />}
              title="10. Updates to This Policy"
              content={
                <p className="text-gray-300">
                  We may update this Privacy Policy periodically. The latest version will always be available on our
                  website.
                </p>
              }
            />

            {/* Section 11 - Contact */}
            <PolicySection
              icon={<Mail size={24} style={{ color: colors.dodgerBlue }} />}
              title="11. Contact Information"
              content={
                <div className="text-gray-300">
                  <p className="mb-3">For any questions or privacy-related requests, contact us at:</p>
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <p className="font-semibold text-white mb-3">Work Booster AI™</p>
                    <p className="text-sm leading-relaxed">
                      The Workvilla - Coworking Space
                      <br />
                      Prakash Presidium, 110, Uthamar Gandhi Rd
                      <br />
                      Subba Road Avenue, Nungambakkam
                      <br />
                      Chennai, Tamil Nadu 600034
                    </p>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm">
                        📧{" "}
                        <a
                          href="mailto:sales@workboosterai.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          sales@workboosterai.com
                        </a>
                      </p>
                      <p className="text-sm">
                        📞{" "}
                        <a
                          href="tel:+918122784236"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          +91 8122784236
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Section 12 - Consent */}
            <PolicySection
              icon={<UserCheck size={24} style={{ color: colors.dodgerBlue }} />}
              title="12. Consent"
              content={
                <p className="text-gray-300">
                  By using our website, submitting forms, or interacting with our ads, you consent to this Privacy
                  Policy.
                </p>
              }
            />
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${colors.dodgerBlue}, ${colors.scampi})`,
              }}
            >
              Return to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
