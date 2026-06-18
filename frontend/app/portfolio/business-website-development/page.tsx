import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/business-website-development");

export default function BusinessWebsiteDevelopmentPage() {
  return <PortfolioDetailTemplate project={project} />;
}
