"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaAws, FaCheckCircle } from "react-icons/fa";
import {
  SiDocker,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { heroConversionChecks } from "@/components/shared/companyMetrics";

const serviceLines = [
  "Website Development",
  "Custom Software Development",
  "API Development & Integration",
  "AI Solutions",
  "Cyber Security Services",
  "Business Automation",
] as const;

const dashboardMetrics = [
  { label: "Projects Delivered", value: "100+" },
  { label: "Response Time", value: "< 2h" },
  { label: "Client Satisfaction", value: "99%" },
];

const techRows = [
  [
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiTypescript, label: "TypeScript" },
  ],
  [
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiOpenai, label: "OpenAI" },
    { icon: SiPython, label: "Python" },
  ],
  [
    { icon: FaAws, label: "AWS" },
    { icon: SiDocker, label: "Docker" },
    { icon: SiGithub, label: "GitHub" },
    { icon: SiReact, label: "React" },
  ],
] as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentLine = serviceLines[activeIndex];
    let charIndex = 0;
    let typingTimer = 0;

    const resetTimer = window.setTimeout(() => {
      setTypedText("");
      setIsVisible(false);
    }, 0);

    const fadeTimer = window.setTimeout(() => {
      setIsVisible(true);

      typingTimer = window.setInterval(() => {
        charIndex += 1;
        setTypedText(currentLine.slice(0, charIndex));

        if (charIndex >= currentLine.length) {
          window.clearInterval(typingTimer);
        }
      }, 42);
    }, 120);

    const rotateTimer = window.setTimeout(() => {
      setActiveIndex(
        (previousIndex) => (previousIndex + 1) % serviceLines.length,
      );
    }, 3000);

    return () => {
      window.clearTimeout(resetTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(rotateTimer);
      window.clearInterval(typingTimer);
    };
  }, [activeIndex]);

  return (
    <section className="hero-shell relative flex min-h-screen items-center overflow-hidden bg-[#020617] text-white">
      <div
        className="hero-image-layer absolute inset-0"
        style={{ backgroundImage: "url('/images/hero/agency-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="hero-gradient-flow absolute inset-0" aria-hidden="true" />
      <div className="hero-tech-background absolute inset-0" aria-hidden="true">
        <div className="hero-tech-background-inner">
          {techRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`hero-tech-row ${
                rowIndex % 2 === 1 ? "hero-tech-row-reverse" : ""
              }`}
            >
              <div className="hero-tech-track">
                {[...row, ...row, ...row].map((item, itemIndex) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`${item.label}-${rowIndex}-${itemIndex}`}
                      className="hero-tech-card"
                    >
                      <Icon aria-hidden="true" className="hero-tech-icon" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-particles absolute inset-0" aria-hidden="true" />
      <div className="hero-mesh absolute inset-0" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-left" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-right" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-bottom" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 py-24 sm:px-8 md:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:px-10">
        <div className="flex max-w-3xl flex-col justify-center">
          <div className="hero-panel inline-flex w-fit items-center gap-3 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/90 sm:text-sm">
              Welcome To ApnaHaiNa
            </p>
          </div>
          <div className="mt-8">
            <div className="hero-panel inline-flex min-h-[3.5rem] w-full max-w-[32rem] items-center rounded-[1.35rem] px-4 py-3 sm:px-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                We Provide
              </p>
              <span
                className={`ml-4 inline-flex min-h-[1.5rem] items-center text-sm font-semibold text-slate-100 transition-opacity duration-500 sm:text-base ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <span>{typedText}</span>
                <span className="hero-type-caret" aria-hidden="true" />
              </span>
            </div>
          </div>

          <h1 className="mt-7 max-w-4xl text-[3.45rem] font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-[4.25rem] md:text-[4.7rem] lg:text-[4.9rem] xl:text-[5.2rem]">
            Build
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Smarter
            </span>
            <br />
            Secure
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Faster
            </span>
            <br />
            Grow Digitally
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            We help startups and businesses build AI applications, secure
            platforms, modern websites and business automation systems with the
            clarity and execution of a premium AI Development Company in
            Gurgaon, India.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="hero-button-primary hero-button-strong"
            >
              <span>Start Your Project</span>
              <FaArrowRight
                aria-hidden="true"
                className="relative z-10 text-sm"
              />
            </Link>

            <Link href="/#contact" className="hero-button-secondary" scroll>
              <span>Book Free Consultation</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroConversionChecks.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-3 rounded-full border border-slate-800/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 backdrop-blur-md"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">
                  <FaCheckCircle aria-hidden="true" className="text-xs" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex min-h-[500px] items-center justify-center sm:min-h-[580px] lg:min-h-[640px]">
          <div
            className="hero-circular-motion hero-circular-motion-large"
            aria-hidden="true"
          />
          <div
            className="hero-circular-motion hero-circular-motion-medium"
            aria-hidden="true"
          />
          <div
            className="hero-circular-motion hero-circular-motion-small"
            aria-hidden="true"
          />
          <div className="hero-circular-glow" aria-hidden="true" />

          <div className="hero-panel hero-float-slow relative w-full max-w-[540px] rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.65)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-7">
            <div className="absolute inset-6 rounded-[1.75rem] border border-white/6" />
            <div className="absolute inset-x-10 top-6 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                ApnaHaiNa Agency Stack
              </p>

              <div className="mt-6 overflow-hidden rounded-[1.85rem] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.94)_0%,rgba(2,6,23,0.92)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Premium delivery dashboard
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                      Strategy, build and secure launch
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                    Live Pipeline
                  </span>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-slate-800/80 bg-slate-950/80 p-5">
                  <div className="flex items-end gap-3">
                    <div className="h-16 w-1/5 rounded-t-2xl bg-slate-800" />
                    <div className="h-24 w-1/5 rounded-t-2xl bg-slate-800/90" />
                    <div className="h-32 w-1/5 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500" />
                    <div className="h-20 w-1/5 rounded-t-2xl bg-slate-800/90" />
                    <div className="h-28 w-1/5 rounded-t-2xl bg-slate-800" />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {dashboardMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          {metric.label}
                        </p>
                        <p className="mt-3 text-2xl font-black tracking-[-0.04em] text-cyan-200">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">
                        Secure Delivery
                      </p>
                      <span className="text-sm font-semibold text-cyan-200">
                        92%
                      </span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
