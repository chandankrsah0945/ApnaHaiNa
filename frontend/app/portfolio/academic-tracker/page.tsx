import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Analytics Dashboard",
  "Results Management",
];

const features = [
  "Student Progress Tracking",
  "Result and Backlog Monitoring",
  "Faculty Dashboard",
  "Semester Performance Insights",
  "Responsive Admin Interface",
];

const challenges = [
  "Disconnected academic records",
  "Slow progress monitoring",
  "Backlog visibility gaps",
  "Manual report preparation",
];

const solutions = [
  "Centralized student records",
  "Live progress summaries",
  "Backlog tracking workflows",
  "Role-based academic dashboards",
];

export default function AcademicTrackerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="hero-panel rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              EduTech Project
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Academic
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Tracker
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              A modern academic management platform for tracking student
              progress, results and backlogs across semesters with a clean,
              decision-friendly dashboard experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://academic-tracker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                <span>Live Project</span>
                <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/85 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:text-cyan-100"
              >
                <FaArrowLeft aria-hidden="true" className="text-xs" />
                <span>Back To Portfolio</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/70 shadow-[0_24px_60px_rgba(2,6,23,0.3)]">
            <Image
              src="/images/portfolio/academic-tracker.svg"
              alt="Academic Tracker dashboard preview"
              width={1400}
              height={840}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:p-8">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-cyan-300">
                Technologies
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                {technologies.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="mt-1 text-cyan-300"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:p-8">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-cyan-300">
                Features
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="mt-1 text-cyan-300"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-14 rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:p-8">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white">
              Project Overview
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Academic Tracker was designed to simplify academic operations for
              institutions that need faster visibility into performance,
              pending backlogs and semester outcomes. The platform gives admins,
              teachers and students a modern interface for reviewing records and
              making better academic decisions with less manual effort.
            </p>
          </section>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:p-8">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-rose-300">
                Challenges
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-rose-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:p-8">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-cyan-300">
                Our Solution
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
