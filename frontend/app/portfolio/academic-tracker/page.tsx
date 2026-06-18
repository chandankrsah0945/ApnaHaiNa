import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/academic-tracker");

export default function AcademicTrackerPage() {
  return <PortfolioDetailTemplate project={project} />;
}
