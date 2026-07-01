"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

const colors = {
  codGray: "#0d0c0c",
  scampi: "#6c6ca8",
  dodgerBlue: "#526ffc",
  ceriseRed: "#dd3555",
};

const gradientTextStyle = {
  background: `linear-gradient(135deg, #526ffc, #3689d7, #d23b5b, #925b8a, #5e74c5)`,
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const API_URL = "https://akngroups.in/wb/wb_lead_api.php";

type FormData = {
  companyName: string;
  contactPerson: string;
  mobileNumber: string;
  email: string;
  countryCity: string;
  message: string;
};

type ErrorState = {
  mobileNumber: boolean;
  email: boolean;
  countryCity: boolean;
};

const mysqlNow = () => new Date().toISOString().slice(0, 19).replace("T", " ");

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    mobileNumber: "",
    email: "",
    countryCity: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    mobileNumber: false,
    email: false,
    countryCity: false,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorState = {
      mobileNumber: !formData.mobileNumber,
      email: !formData.email,
      countryCity: !formData.countryCity,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    const payload = {
      name: formData.companyName || "",
      Contact_person: formData.contactPerson || "",
      phone: formData.mobileNumber || "",
      email: formData.email || "",
      Country: formData.countryCity || "",
      Message: formData.message || "",
      source: "organic",
      created_at: mysqlNow(),
      updated_at: mysqlNow(),
    };

    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || (data && data.ok === false)) {
        throw new Error(
          (data && data.error) || "Failed to submit. Please try again."
        );
      }

      alert("Thank you! We received your message and will reach out soon.");

      setFormData({
        companyName: "",
        contactPerson: "",
        mobileNumber: "",
        email: "",
        countryCity: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: colors.codGray }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            style={gradientTextStyle}
            className="text-4xl md:text-5xl font-bold mb-4 animate-gradient-sweep"
          >
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to transform your business? Contact us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Company Name */}
            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              style={{
                backgroundColor: `${colors.scampi}1a`,
                borderColor: `${colors.scampi}4d`,
              }}
              className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.dodgerBlue;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = `${colors.scampi}4d`;
              }}
            />

            {/* Contact Person */}
            <input
              type="text"
              placeholder="Contact Person"
              value={formData.contactPerson}
              onChange={(e) =>
                setFormData({ ...formData, contactPerson: e.target.value })
              }
              style={{
                backgroundColor: `${colors.scampi}1a`,
                borderColor: `${colors.scampi}4d`,
              }}
              className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.dodgerBlue;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = `${colors.scampi}4d`;
              }}
            />

            {/* Mobile Number */}
            <div>
              <input
                type="tel"
                placeholder="Mobile Number *"
                required
                value={formData.mobileNumber}
                onChange={(e) => {
                  setFormData({ ...formData, mobileNumber: e.target.value });
                  setErrors({ ...errors, mobileNumber: false });
                }}
                style={{
                  backgroundColor: `${colors.scampi}1a`,
                  borderColor: errors.mobileNumber
                    ? colors.ceriseRed
                    : `${colors.scampi}4d`,
                }}
                className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.dodgerBlue;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors.mobileNumber
                    ? colors.ceriseRed
                    : `${colors.scampi}4d`;
                }}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-red-500 mt-1">
                  Mobile Number is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email (Business email ID preferred) *"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: false });
                }}
                style={{
                  backgroundColor: `${colors.scampi}1a`,
                  borderColor: errors.email
                    ? colors.ceriseRed
                    : `${colors.scampi}4d`,
                }}
                className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.dodgerBlue;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors.email
                    ? colors.ceriseRed
                    : `${colors.scampi}4d`;
                }}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">Email is required</p>
              )}
            </div>

            {/* Country/City */}
            <div>
              <input
                type="text"
                placeholder="Country/City *"
                required
                value={formData.countryCity}
                onChange={(e) => {
                  setFormData({ ...formData, countryCity: e.target.value });
                  setErrors({ ...errors, countryCity: false });
                }}
                style={{
                  backgroundColor: `${colors.scampi}1a`,
                  borderColor: errors.countryCity
                    ? colors.ceriseRed
                    : `${colors.scampi}4d`,
                }}
                className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.dodgerBlue;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors.countryCity
                    ? colors.ceriseRed
                    : `${colors.scampi}4d`;
                }}
              />
              {errors.countryCity && (
                <p className="text-xs text-red-500 mt-1">
                  Country/City is required
                </p>
              )}
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              style={{
                backgroundColor: `${colors.scampi}1a`,
                borderColor: `${colors.scampi}4d`,
              }}
              className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.dodgerBlue;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = `${colors.scampi}4d`;
              }}
            />

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: colors.dodgerBlue,
                boxShadow: `0 0 20px ${colors.dodgerBlue}40`,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
              className="w-full px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-all duration-300"
              whileHover={{ y: loading ? 0 : -1 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:sales@workboosterai.com"
                    style={{ color: colors.dodgerBlue }}
                    className="text-white hover:transition-colors"
                  >
                    sales@workboosterai.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:+918122784236"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 8122784236
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    The Workvilla - Coworking Space, Prakash Presidium, 110,
                    Uthamar Gandhi Rd, Subba Road Avenue, Nungambakkam, Chennai,
                    Tamil Nadu 600034
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/work_boosterai",
                    icon: Instagram,
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/people/Work-Booster-AI/61579119714988/",
                    icon: Facebook,
                  },
                  {
                    name: "X",
                    url: "https://x.com/sksenthil2k",
                    icon: Twitter,
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/workbooster-ai-solutions/",
                    icon: Linkedin,
                  },
                  {
                    name: "YouTube",
                    url: "https://www.youtube.com/@workboosterai",
                    icon: Youtube,
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ borderColor: `${colors.scampi}4d` }}
                      className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label={social.name}
                      whileHover={{
                        borderColor: colors.dodgerBlue,
                        boxShadow: `0 0 15px ${colors.dodgerBlue}40`,
                        scale: 1.1,
                        y: -2,
                      }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
