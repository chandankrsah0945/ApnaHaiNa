import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import BrandMark from "@/components/shared/BrandMark";
import { contactInfo } from "@/components/shared/contactInfo";
import { footerTrustBadges } from "@/components/shared/companyMetrics";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap gap-3">
          {footerTrustBadges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100"
            >
              {badge.label}
            </span>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <BrandMark
              iconClassName="h-12 w-12"
              textClassName="text-2xl font-semibold tracking-[-0.03em] text-white"
            />

            <p className="mt-6 leading-8 text-gray-400">
              {contactInfo.mission}
            </p>

            <p className="mt-6 text-gray-500">
              Premium AI Development Company, Cyber Security Company and Web
              Development Agency in Gurgaon, India.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Services</h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <Link href="/services/ai-solutions">AI Solutions</Link>
              </li>
              <li>
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/services/cyber-security">Cyber Security</Link>
              </li>
              <li>
                <Link href="/services/automation">Business Automation</Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions">Cloud Solutions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Connect</h3>

            <div className="mt-6 space-y-3 text-gray-400">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 transition hover:text-cyan-200"
              >
                <FaEnvelope aria-hidden="true" className="text-cyan-300" />
                <span>{contactInfo.email}</span>
              </a>
              <p>
                {contactInfo.city}, {contactInfo.region}, {contactInfo.country}
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 transition hover:text-cyan-200"
              >
                <FaPhoneAlt aria-hidden="true" className="text-cyan-300" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-cyan-200"
              >
                <FaWhatsapp aria-hidden="true" className="text-cyan-300" />
                <span>{contactInfo.whatsapp}</span>
              </a>
            </div>

            <div className="mt-8 flex gap-5 text-3xl text-cyan-400">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-gray-500 md:flex-row">
          <p>(c) 2026 ApnaHaiNa. All Rights Reserved.</p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
