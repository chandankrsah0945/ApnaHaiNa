export type PortfolioProject = {
  category: string;
  description: string;
  detailsHref: string;
  image: string;
  imageAlt: string;
  liveExternal?: boolean;
  liveHref: string;
  title: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Password Management System",
    category: "Cyber Security",
    description:
      "Encrypted credential storage with secure authentication, password generation and protected vault workflows.",
    image: "/images/portfolio/password-management-system.svg",
    imageAlt: "Password Management System project thumbnail",
    detailsHref: "/portfolio/password-management-system",
    liveHref: "#",
  },
  {
    title: "Academic Tracker",
    category: "EduTech",
    description:
      "A modern academic management platform for tracking student progress, results and backlogs.",
    image: "/images/portfolio/academic-tracker.svg",
    imageAlt: "Academic Tracker project thumbnail",
    detailsHref: "/portfolio/academic-tracker",
    liveHref: "https://cutm-result-portal-v2.vercel.app/login",
    liveExternal: true,
  },
  {
    title: "AI Business Assistant",
    category: "Artificial Intelligence",
    description:
      "AI-powered workflows, smart reporting and conversational support for faster business decisions.",
    image: "/images/portfolio/ai-business-assistant.svg",
    imageAlt: "AI Business Assistant project thumbnail",
    detailsHref: "/portfolio/ai-business-assistant",
    liveHref: "#",
  },
  {
    title: "Business Website Development",
    category: "Web Development",
    description:
      "Premium marketing websites built for modern brands, lead generation and high-conversion user journeys.",
    image: "/images/portfolio/business-website-development.svg",
    imageAlt: "Business Website Development project thumbnail",
    detailsHref: "/portfolio/business-website-development",
    liveHref: "#",
  },
  {
    title: "ERP / CRM Solutions",
    category: "Enterprise Solutions",
    description:
      "Operational dashboards for customer management, business automation and scalable enterprise workflows.",
    image: "/images/portfolio/erp-crm-solutions.svg",
    imageAlt: "ERP CRM Solutions project thumbnail",
    detailsHref: "/portfolio/erp-crm-solutions",
    liveHref: "#",
  },
  {
    title: "Cyber Security Dashboard",
    category: "Security Analytics",
    description:
      "Real-time monitoring, threat visibility and incident analytics for security-first organizations.",
    image: "/images/portfolio/cyber-security-dashboard.svg",
    imageAlt: "Cyber Security Dashboard project thumbnail",
    detailsHref: "/portfolio/cyber-security-dashboard",
    liveHref: "#",
  },
];
