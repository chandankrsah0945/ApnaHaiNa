import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/ai-business-assistant");

export default function AIBusinessAssistantPage() {
  return <PortfolioDetailTemplate project={project} />;
}
