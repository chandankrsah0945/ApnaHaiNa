import PortfolioDetailTemplate from "@/components/portfolio/PortfolioDetailTemplate";
import { getPortfolioProject } from "@/components/portfolio/portfolioData";

const project = getPortfolioProject("/portfolio/erp-crm-solutions");

export default function ERPCRMSolutionsPage() {
  return <PortfolioDetailTemplate project={project} />;
}
