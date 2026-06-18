import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import {
  PortfolioBulletListCard,
  PortfolioGalleryGrid,
  PortfolioMiniPanel,
  PortfolioSectionCard,
  PortfolioStatCard,
} from "@/components/portfolio/PortfolioDetailBlocks";
import type { PortfolioProject } from "@/components/portfolio/portfolioData";

type PortfolioDetailTemplateProps = {
  project: PortfolioProject;
};

export default function PortfolioDetailTemplate({
  project,
}: PortfolioDetailTemplateProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="hero-panel rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              {project.detail.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {project.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {project.liveExternal ? (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  <span>Live Project</span>
                  <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                </a>
              ) : (
                <a
                  href={project.liveHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  <span>Live Project</span>
                  <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                </a>
              )}

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
              src={project.detail.mainImageSrc}
              alt={project.detail.mainImageAlt}
              width={1400}
              height={840}
              className="h-auto w-full"
            />
          </div>

          <section className="mt-14">
            <PortfolioSectionCard title="Project Overview">
              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                {project.detail.overview}
              </p>
            </PortfolioSectionCard>
          </section>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <PortfolioBulletListCard
              title="Key Features"
              items={project.detail.keyFeatures}
            />

            <PortfolioSectionCard title="Technology Stack">
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.detail.technologyStack.map((group) => (
                  <PortfolioMiniPanel key={group.title} title={group.title}>
                    <ul className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </PortfolioMiniPanel>
                ))}
              </div>
            </PortfolioSectionCard>
          </div>

          <section className="mt-14">
            <PortfolioSectionCard title="Project Statistics">
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {project.detail.statistics.map((stat) => (
                  <PortfolioStatCard
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </div>
            </PortfolioSectionCard>
          </section>

          <section className="mt-14">
            <PortfolioSectionCard title="Screenshot Gallery">
              <PortfolioGalleryGrid images={project.detail.gallery} />
            </PortfolioSectionCard>
          </section>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <PortfolioBulletListCard
              title="Challenges"
              items={project.detail.challenges}
              tone="rose"
            />
            <PortfolioBulletListCard
              title="Our Solution"
              items={project.detail.solutions}
            />
          </div>

          <section className="mt-14">
            <div className="hero-panel rounded-[2rem] px-6 py-12 text-center sm:px-10">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                {project.detail.ctaTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {project.detail.ctaDescription}
              </p>

              <Link
                href="/#contact"
                className="mt-10 inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/90 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Start Your Project
              </Link>
            </div>
          </section>

          <div className="mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:translate-x-1 hover:text-cyan-100"
            >
              <FaArrowLeft aria-hidden="true" className="text-xs" />
              <span>Back To Portfolio</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
