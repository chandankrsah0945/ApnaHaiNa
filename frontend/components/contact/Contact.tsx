"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { contactInfo } from "@/components/shared/contactInfo";
import { footerTrustBadges } from "@/components/shared/companyMetrics";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            CONTACT US
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let&apos;s Build Something Great
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-400">
            Ready to transform your business with AI, Web Development and Cyber
            Security solutions? Let&apos;s discuss your project.
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl transition hover:border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <FaEnvelope aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">Email</h3>
                </div>

                <div className="mt-5 text-lg text-gray-300">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-2 transition hover:text-cyan-200"
                  >
                    <FaEnvelope aria-hidden="true" className="text-base text-cyan-300" />
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl transition hover:border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <FaPhoneAlt aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Phone & WhatsApp
                  </h3>
                </div>

                <div className="mt-5 space-y-3 text-lg text-gray-300">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                      className="mt-2 inline-flex transition hover:text-cyan-200"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      WhatsApp
                    </p>
                    <a
                      href={contactInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex transition hover:text-cyan-200"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/90 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                    {contactInfo.responsePromise}
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl transition hover:border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">Location</h3>
                </div>

                <p className="mt-5 text-lg text-gray-300">
                  {contactInfo.city}, {contactInfo.region}, {contactInfo.country}
                </p>
                <p className="mt-3 text-slate-400">
                  AI Development Company, Cyber Security Company and Web
                  Development Agency serving Gurgaon and clients across India.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl transition hover:border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <FaShieldAlt aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Why Work With Us
                  </h3>
                </div>

                <ul className="mt-5 space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle aria-hidden="true" className="text-cyan-300" />
                    <span>Free consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle aria-hidden="true" className="text-cyan-300" />
                    <span>Secure development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle aria-hidden="true" className="text-cyan-300" />
                    <span>AI powered solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle aria-hidden="true" className="text-cyan-300" />
                    <span>{contactInfo.responsePromise}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/90 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl">
              <div className="mb-6 flex flex-wrap gap-3">
                {footerTrustBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100"
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              {submitted ? (
                <div className="rounded-[1.5rem] border border-cyan-400/30 bg-cyan-400/10 p-6 text-cyan-50">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle aria-hidden="true" className="text-cyan-300" />
                    <h3 className="text-xl font-semibold">Request received</h3>
                  </div>
                  <p className="mt-4 leading-8 text-slate-200">
                    Thanks for reaching out. We&apos;ve captured your request and
                    will get back to you within 2 hours.
                  </p>
                </div>
              ) : null}

              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  event.currentTarget.reset();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-cyan-400"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-cyan-400"
                  required
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-cyan-400"
                  required
                />

                <select
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-cyan-400"
                  defaultValue="Choose Service"
                >
                  <option disabled>Choose Service</option>
                  <option>AI Solutions</option>
                  <option>Web Development</option>
                  <option>Cyber Security</option>
                  <option>Business Automation</option>
                  <option>Custom Software</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-cyan-400"
                  required
                />

                <button className="hero-button-primary hero-button-strong w-full" type="submit">
                  <span>Get Free Consultation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(34,197,94,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-400"
      >
        <FaWhatsapp aria-hidden="true" className="text-lg" />
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
