import Link from "next/link";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { portfolioProjects } from "@/components/portfolio/portfolioData";

const featuredPortfolioProjects = portfolioProjects.filter(
  (project) => project.featured !== false,
);

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-28 text-white">
        <section className="section-bg border-b border-slate-800/80 px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="hero-panel mx-auto max-w-4xl rounded-[2rem] px-6 py-12 text-center sm:px-10 sm:py-14">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/40 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 sm:text-sm">
                  Our Portfolio
                </p>
              </div>

              <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Build.
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Secure.
                </span>
                <br />
                Innovate.
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                We design AI applications, digital products and secure business
                platforms with the same premium product thinking used across the
                rest of ApnaHaiNa.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Back To Home
                </Link>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/25 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-slate-900 hover:text-white"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Featured Projects
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                A curated portfolio across cyber security, EduTech, AI and
                enterprise software, presented in one cohesive premium system.
              </p>
            </div>

            <PortfolioGrid projects={featuredPortfolioProjects} />
          </div>
        </section>

        <section className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="hero-panel rounded-[2rem] px-6 py-12 text-center sm:px-10">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Have a Project in Mind?
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                Let&apos;s build secure, scalable and AI-powered digital
                products together.
              </p>

              <Link
                href="/#contact"
                className="mt-10 inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/90 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
