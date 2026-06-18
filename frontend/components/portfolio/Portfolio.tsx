import Link from "next/link";

import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { portfolioProjects } from "@/components/portfolio/portfolioData";

const featuredPortfolioProjects = portfolioProjects.filter(
  (project) => project.featured !== false,
);

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-bg bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/40 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 sm:text-sm">
              Portfolio
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Featured Projects
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            Selected work across AI, EduTech, cyber security and enterprise
            platforms built with the same premium product mindset.
          </p>
        </div>

        <PortfolioGrid projects={featuredPortfolioProjects} />

        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:text-white"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
