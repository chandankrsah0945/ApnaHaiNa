export type PortfolioTechGroup = {
  items: string[];
  title: string;
};

export type PortfolioStat = {
  label: string;
  value: string;
};

export type PortfolioGalleryImage = {
  alt: string;
  src: string;
  title: string;
};

export type PortfolioDetail = {
  challenges: string[];
  ctaDescription: string;
  ctaTitle: string;
  eyebrow: string;
  gallery: PortfolioGalleryImage[];
  keyFeatures: string[];
  mainImageAlt: string;
  mainImageSrc: string;
  overview: string;
  solutions: string[];
  statistics: PortfolioStat[];
  technologyStack: PortfolioTechGroup[];
};

export type PortfolioProject = {
  category: string;
  description: string;
  detail: PortfolioDetail;
  detailsHref: string;
  filterGroup: "ai" | "web" | "cyber" | "enterprise";
  featured?: boolean;
  image: string;
  imageAlt: string;
  liveExternal?: boolean;
  liveHref: string;
  status: "Live" | "Production" | "Demo";
  title: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Password Management System",
    category: "Cyber Security",
    description:
      "Encrypted credential storage with secure authentication, password generation and protected vault workflows.",
    image: "/images/password-manager1.png",
    imageAlt: "Password Management System project thumbnail",
    detailsHref: "/portfolio/password-management-system",
    liveHref: "/portfolio/password-management-system",
    filterGroup: "cyber",
    status: "Demo",
    detail: {
      eyebrow: "Cyber Security Project",
      overview:
        "The Password Management System is a secure web application built to protect sensitive user credentials through authentication and encryption. Users can safely store, organize and generate strong passwords while maintaining complete control over their digital security. The product balances simplicity, performance and secure data management for personal and business use.",
      keyFeatures: [
        "Secure Authentication",
        "Password Generator",
        "Encrypted Storage",
        "Category Management",
        "User Dashboard",
        "Credential Vault Organization",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Backend",
          items: ["PHP", "Authentication System"],
        },
        {
          title: "Database",
          items: ["MySQL"],
        },
        {
          title: "Security",
          items: ["Password Encryption", "Protected Sessions"],
        },
      ],
      statistics: [
        { value: "10+", label: "Modules" },
        { value: "100%", label: "Secure" },
        { value: "24/7", label: "Access" },
        { value: "AI", label: "Ready" },
      ],
      gallery: [
        {
          src: "/images/password-manager1.png",
          alt: "Password Management dashboard overview",
          title: "Vault Dashboard",
        },
        {
          src: "/images/password-login.png",
          alt: "Password Management login screen",
          title: "Secure Login",
        },
        {
          src: "/images/password-generator.png",
          alt: "Password generator interface",
          title: "Password Generator",
        },
        {
          src: "/images/password-dashboard.png",
          alt: "Credential dashboard interface",
          title: "Credential Management",
        },
      ],
      challenges: [
        "Weak passwords across multiple accounts",
        "Password reuse and manual storage habits",
        "Risk of data leakage from insecure tools",
        "Poor visibility into saved credential categories",
      ],
      solutions: [
        "Secure user authentication flows",
        "Built-in strong password generation",
        "Encrypted storage for sensitive credentials",
        "Dashboard-led organization for quick access",
      ],
      ctaTitle: "Need a Secure Product Like This?",
      ctaDescription:
        "We build secure, reliable software systems for startups, teams and digital-first businesses.",
      mainImageSrc: "/images/password-manager1.png",
      mainImageAlt: "Password Management System preview",
    },
  },
  {
    title: "Academic Tracker",
    category: "EduTech",
    description:
      "A modern academic management platform for tracking student progress, results and backlogs.",
    image: "/images/portfolio/academic-tracker-live.png",
    imageAlt: "Academic Tracker project thumbnail",
    detailsHref: "/portfolio/academic-tracker",
    liveHref: "https://cutm-result-portal-v2.vercel.app/login",
    liveExternal: true,
    filterGroup: "web",
    status: "Production",
    detail: {
      eyebrow: "EduTech Project",
      overview:
        "Academic Tracker was designed to simplify academic operations for institutions that need faster visibility into student performance, pending backlogs and semester outcomes. The platform gives admins, teachers and students a modern interface for reviewing records, exporting reports and making better academic decisions with less manual effort.",
      keyFeatures: [
        "Student Result Management",
        "Backlog Tracking",
        "Admin Dashboard",
        "Secure Authentication",
        "PDF Export",
        "Mobile Responsive",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["Next.js", "Tailwind CSS"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js"],
        },
        {
          title: "Database",
          items: ["MongoDB"],
        },
        {
          title: "Authentication",
          items: ["JWT"],
        },
      ],
      statistics: [
        { value: "5000+", label: "Students" },
        { value: "50+", label: "Departments" },
        { value: "Secure", label: "Login" },
        { value: "Fast", label: "Processing" },
      ],
      gallery: [
        {
          src: "/images/portfolio/academic-tracker-live.png",
          alt: "Academic Tracker live login and dashboard preview",
          title: "Live Product Preview",
        },
        {
          src: "/images/portfolio/academic-tracker-results.svg",
          alt: "Academic Tracker results management screen",
          title: "Student Result Management",
        },
        {
          src: "/images/portfolio/academic-tracker-mobile.svg",
          alt: "Academic Tracker mobile dashboard view",
          title: "Mobile Dashboard",
        },
      ],
      challenges: [
        "Disconnected academic records across semesters",
        "Slow progress monitoring for faculty and admins",
        "Limited visibility into backlogs and pending results",
        "Manual report preparation for academic decisions",
      ],
      solutions: [
        "Centralized student records in one system",
        "Live progress summaries for faster reviews",
        "Backlog tracking workflows with clear status",
        "Dashboard-first reporting and export support",
      ],
      ctaTitle: "Ready to build an EduTech platform?",
      ctaDescription:
        "Let's design a modern education product with secure workflows, analytics and student-first UX.",
      mainImageSrc: "/images/portfolio/academic-tracker-live.png",
      mainImageAlt: "Academic Tracker dashboard preview",
    },
  },
  {
    title: "AI Business Assistant",
    category: "Artificial Intelligence",
    description:
      "AI-powered workflows, smart reporting and conversational support for faster business decisions.",
    image: "/images/ai-assistant.png",
    imageAlt: "AI Business Assistant project thumbnail",
    detailsHref: "/portfolio/ai-business-assistant",
    liveHref: "/portfolio/ai-business-assistant",
    filterGroup: "ai",
    status: "Demo",
    detail: {
      eyebrow: "Artificial Intelligence Project",
      overview:
        "The AI Business Assistant helps companies automate repetitive tasks, generate business insights and provide intelligent support through conversational AI. It increases productivity while reducing manual effort across operations, reporting and knowledge workflows.",
      keyFeatures: [
        "AI Chat Assistant",
        "Workflow Automation",
        "Smart Reports",
        "Business Analytics",
        "Document Processing",
        "Task Prioritization",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "Tailwind CSS"],
        },
        {
          title: "AI Layer",
          items: ["OpenAI API", "Prompt Workflows"],
        },
        {
          title: "Backend",
          items: ["Node.js"],
        },
        {
          title: "Experience",
          items: ["Responsive Dashboard", "Conversational UI"],
        },
      ],
      statistics: [
        { value: "10+", label: "Modules" },
        { value: "AI", label: "Powered" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Scalable" },
      ],
      gallery: [
        {
          src: "/images/ai-assistant.png",
          alt: "AI Business Assistant primary interface",
          title: "Assistant Workspace",
        },
        {
          src: "/images/portfolio/ai-business-assistant.svg",
          alt: "AI Business Assistant analytics screen",
          title: "Insight Dashboard",
        },
      ],
      challenges: [
        "Repetitive manual workflows across teams",
        "Slow decision-making from scattered data",
        "Delayed support responses for business teams",
        "Low visibility into operational bottlenecks",
      ],
      solutions: [
        "AI-powered workflow automation",
        "Conversational business assistant interface",
        "Smart analytics and reporting summaries",
        "Faster operations with centralized insights",
      ],
      ctaTitle: "Need an AI Solution Like This?",
      ctaDescription:
        "We build practical AI products that automate work, improve decisions and scale with your business.",
      mainImageSrc: "/images/ai-assistant.png",
      mainImageAlt: "AI Business Assistant preview",
    },
  },
  {
    title: "Business Website Development",
    category: "Web Development",
    description:
      "Premium marketing websites built for modern brands, lead generation and high-conversion user journeys.",
    image: "/images/business-website.png",
    imageAlt: "Business Website Development project thumbnail",
    detailsHref: "/portfolio/business-website-development",
    liveHref: "/portfolio/business-website-development",
    filterGroup: "web",
    status: "Demo",
    detail: {
      eyebrow: "Web Development Project",
      overview:
        "This project is a modern business website built for startups and enterprises to establish a strong online presence. It includes responsive frontend architecture, SEO optimization, lead capture, admin workflows and analytics to track growth and improve conversions.",
      keyFeatures: [
        "Responsive Design",
        "SEO Optimized",
        "Contact Form",
        "Admin Panel",
        "Portfolio Management",
        "Analytics Dashboard",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Backend",
          items: ["Node.js", "REST API"],
        },
        {
          title: "Database",
          items: ["MongoDB"],
        },
        {
          title: "Growth Focus",
          items: ["SEO", "Lead Generation", "Performance"],
        },
      ],
      statistics: [
        { value: "500+", label: "Leads Generated" },
        { value: "100%", label: "Responsive" },
        { value: "99%", label: "Performance" },
        { value: "24/7", label: "Support" },
      ],
      gallery: [
        {
          src: "/images/business-website.png",
          alt: "Business Website homepage preview",
          title: "Homepage Experience",
        },
        {
          src: "/images/portfolio/business-website-development.svg",
          alt: "Business Website marketing layout preview",
          title: "Conversion Layout",
        },
      ],
      challenges: [
        "Low online visibility for growing brands",
        "Poor user experience on existing sites",
        "Slow page performance and weak SEO",
        "Limited conversion-focused content structure",
      ],
      solutions: [
        "Modern UI and UX architecture",
        "Fast loading and mobile-first implementation",
        "SEO-aware page structure and content flow",
        "Lead-generation components with clear CTAs",
      ],
      ctaTitle: "Need a High-Performing Business Website?",
      ctaDescription:
        "We design premium websites that turn your digital presence into a real growth channel.",
      mainImageSrc: "/images/business-website.png",
      mainImageAlt: "Business Website Development preview",
    },
  },
  {
    title: "ERP / CRM Solutions",
    category: "Enterprise Solutions",
    description:
      "Operational dashboards for customer management, business automation and scalable enterprise workflows.",
    image: "/images/erp-crm.png",
    imageAlt: "ERP CRM Solutions project thumbnail",
    detailsHref: "/portfolio/erp-crm-solutions",
    liveHref: "/portfolio/erp-crm-solutions",
    filterGroup: "enterprise",
    status: "Demo",
    detail: {
      eyebrow: "Enterprise Solutions Project",
      overview:
        "The ERP and CRM Solutions platform helps businesses centralize operations by managing customers, employees, inventory and sales from a single dashboard. It simplifies workflows, improves decision-making and increases business efficiency across teams.",
      keyFeatures: [
        "Customer Management",
        "Sales Tracking",
        "Inventory Management",
        "Employee Management",
        "Reports and Analytics",
        "Billing System",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js", "REST API"],
        },
        {
          title: "Database",
          items: ["MongoDB"],
        },
        {
          title: "Operations",
          items: ["Business Automation", "Dashboard Panel"],
        },
      ],
      statistics: [
        { value: "500+", label: "Clients Managed" },
        { value: "100%", label: "Automation" },
        { value: "99%", label: "Data Accuracy" },
        { value: "24/7", label: "Support" },
      ],
      gallery: [
        {
          src: "/images/erp-crm.png",
          alt: "ERP CRM primary dashboard preview",
          title: "Unified Operations Dashboard",
        },
        {
          src: "/images/portfolio/erp-crm-solutions.svg",
          alt: "ERP CRM modules preview",
          title: "Business Workflow Modules",
        },
      ],
      challenges: [
        "Manual business operations across departments",
        "Scattered customer and inventory data",
        "Slow reporting for leadership teams",
        "Poor coordination between sales and operations",
      ],
      solutions: [
        "Centralized dashboard for all workflows",
        "CRM automation with structured records",
        "Inventory visibility with business analytics",
        "Faster operational decisions across teams",
      ],
      ctaTitle: "Need a Smart ERP or CRM Platform?",
      ctaDescription:
        "We build scalable business systems that reduce manual work and improve visibility across operations.",
      mainImageSrc: "/images/erp-crm.png",
      mainImageAlt: "ERP CRM Solutions preview",
    },
  },
  {
    title: "Cyber Security Dashboard",
    category: "Security Analytics",
    description:
      "Real-time monitoring, threat visibility and incident analytics for security-first organizations.",
    image: "/images/cyber-dashboard1.png",
    imageAlt: "Cyber Security Dashboard project thumbnail",
    detailsHref: "/portfolio/cyber-security-dashboard",
    liveHref: "/portfolio/cyber-security-dashboard",
    filterGroup: "cyber",
    status: "Demo",
    detail: {
      eyebrow: "Cyber Security Project",
      overview:
        "The Cyber Security Dashboard is a real-time monitoring platform designed to collect, analyze and visualize security events. It enables organizations to detect threats faster, monitor incidents and improve cyber resilience through centralized security analytics.",
      keyFeatures: [
        "Threat Monitoring",
        "Security Analytics",
        "Incident Management",
        "User Authentication",
        "Live Dashboard",
        "Reports and Alerts",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["Next.js", "React"],
        },
        {
          title: "Backend",
          items: ["Node.js", "REST API"],
        },
        {
          title: "Database",
          items: ["MongoDB"],
        },
        {
          title: "Security Layer",
          items: ["Chart.js", "JWT Authentication"],
        },
      ],
      statistics: [
        { value: "100K+", label: "Logs Processed" },
        { value: "24/7", label: "Monitoring" },
        { value: "99%", label: "Detection Rate" },
        { value: "AI", label: "Analytics" },
      ],
      gallery: [
        {
          src: "/images/cyber-dashboard1.png",
          alt: "Cyber Security Dashboard main analytics screen",
          title: "Threat Analytics Dashboard",
        },
        {
          src: "/images/portfolio/cyber-security-dashboard.svg",
          alt: "Cyber Security Dashboard monitoring modules preview",
          title: "Monitoring Modules",
        },
      ],
      challenges: [
        "Huge security log volume across systems",
        "Slow threat detection and response time",
        "Manual monitoring with limited visibility",
        "Lack of centralized reporting for incidents",
      ],
      solutions: [
        "Real-time analytics and event visibility",
        "Smart alerts for faster response",
        "Centralized dashboard for security teams",
        "Stronger resilience through security insights",
      ],
      ctaTitle: "Need a Security Monitoring Platform?",
      ctaDescription:
        "We build cyber-security products that improve visibility, response time and operational confidence.",
      mainImageSrc: "/images/cyber-dashboard1.png",
      mainImageAlt: "Cyber Security Dashboard preview",
    },
  },
  {
    title: "Custom Software Development",
    category: "Software Engineering",
    description:
      "Tailored software systems that automate workflows, centralize business logic and scale with operational growth.",
    image: "/images/custom-software.png",
    imageAlt: "Custom Software Development project thumbnail",
    detailsHref: "/portfolio/custom-software-development",
    liveHref: "/portfolio/custom-software-development",
    filterGroup: "enterprise",
    status: "Demo",
    featured: false,
    detail: {
      eyebrow: "Custom Software Project",
      overview:
        "Custom software solutions help businesses replace manual processes with intelligent digital systems. The platform is designed to improve productivity, reduce operational costs and support future growth with scalable architecture that fits real business workflows.",
      keyFeatures: [
        "Custom Dashboard",
        "User Management",
        "API Integration",
        "Business Automation",
        "Reports and Analytics",
        "Multi-role Authentication",
      ],
      technologyStack: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js", "REST API"],
        },
        {
          title: "Database",
          items: ["MongoDB"],
        },
        {
          title: "Infrastructure",
          items: ["Cloud Deployment", "Scalable Architecture"],
        },
      ],
      statistics: [
        { value: "500+", label: "Workflow Modules" },
        { value: "100%", label: "Customizable" },
        { value: "99.9%", label: "System Reliability" },
        { value: "24/7", label: "Technical Support" },
      ],
      gallery: [
        {
          src: "/images/custom-software.png",
          alt: "Custom software dashboard preview",
          title: "Operations Dashboard",
        },
      ],
      challenges: [
        "Manual workflows slowing down teams",
        "Data fragmentation across business tools",
        "Poor scalability in legacy systems",
        "High maintenance cost from disconnected software",
      ],
      solutions: [
        "Custom architecture built around workflows",
        "Automated processes with centralized data",
        "Scalable modules for future growth",
        "Reliable systems with maintainable foundations",
      ],
      ctaTitle: "Need a Custom Software Platform?",
      ctaDescription:
        "We design tailored digital systems that fit your process, scale with growth and reduce operational friction.",
      mainImageSrc: "/images/custom-software.png",
      mainImageAlt: "Custom Software Development preview",
    },
  },
];

export function getPortfolioProject(detailsHref: string): PortfolioProject {
  const project = portfolioProjects.find(
    (portfolioProject) => portfolioProject.detailsHref === detailsHref,
  );

  if (!project) {
    throw new Error(`Portfolio project not found for route: ${detailsHref}`);
  }

  return project;
}
