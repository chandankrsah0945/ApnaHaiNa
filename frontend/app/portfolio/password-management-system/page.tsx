import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/password-management-system");

export default function PasswordManagementPage() {
  return <PortfolioDetailTemplate project={project} />;
}
