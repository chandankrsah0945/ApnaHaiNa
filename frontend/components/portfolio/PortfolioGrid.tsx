"use client";

import { useMemo, useState } from "react";

import PortfolioCard from "@/components/portfolio/PortfolioCard";
import type { PortfolioProject } from "@/components/portfolio/portfolioData";

type PortfolioGridProps = {
  projects: PortfolioProject[];
};

const filters = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Web", value: "web" },
  { label: "Cyber Security", value: "cyber" },
  { label: "Enterprise", value: "enterprise" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.filterGroup === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const isActive = filter.value === activeFilter;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-cyan-300/60 bg-cyan-400/15 text-cyan-100 shadow-[0_12px_24px_rgba(8,145,178,0.18)]"
                  : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:text-cyan-100"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
