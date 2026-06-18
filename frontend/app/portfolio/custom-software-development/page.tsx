import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/custom-software-development");

export default function CustomSoftwareDevelopmentPage() {
  return <PortfolioDetailTemplate project={project} />;
}
