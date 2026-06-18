import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/cyber-security-dashboard");

export default function CyberSecurityDashboardPage() {
  return <PortfolioDetailTemplate project={project} />;
}
