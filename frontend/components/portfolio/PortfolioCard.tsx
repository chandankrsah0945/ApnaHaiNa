import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

import type { PortfolioProject } from "@/components/portfolio/portfolioData";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const liveButtonClassName =
    "inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:text-white";

  const liveButton =
    project.liveExternal ? (
      <a
        href={project.liveHref}
        target="_blank"
        rel="noopener noreferrer"
        className={liveButtonClassName}
      >
        <span>Live Project</span>
        <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
      </a>
    ) : (
      <Link href={project.liveHref} className={liveButtonClassName}>
        <span>Live Project</span>
        <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
      </Link>
    );

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/70 shadow-[0_24px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_rgba(8,145,178,0.22)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/6">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={720}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute left-6 right-6 top-6 flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-md">
            {project.category}
          </span>

          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-md">
            {project.status}
          </span>
        </div>

        <div className="absolute inset-x-6 bottom-6 flex translate-y-4 flex-col gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex-row">
          {project.liveExternal ? (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/90 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              View Project
            </a>
          ) : (
            <Link
              href={project.liveHref}
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/90 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              View Project
            </Link>
          )}

          <Link
            href={project.detailsHref}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md"
          >
            View Case Study
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-bold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-cyan-100">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-8 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
          {project.liveExternal ? project.liveHref : "Interactive project preview"}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {liveButton}

          <Link
            href={project.detailsHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/85 px-4 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-slate-900 hover:text-cyan-100"
          >
            <span>View Details</span>
            <FaArrowRight aria-hidden="true" className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  );
}
