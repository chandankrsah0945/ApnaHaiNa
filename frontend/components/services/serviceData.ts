import type { IconType } from "react-icons";
import {
  FaBolt,
  FaChartLine,
  FaCloud,
  FaLaptopCode,
  FaLink,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

export type ServiceItem = {
  deliveryTimeline: string;
  description: string;
  href: string;
  icon: IconType;
  priceFrom: string;
  shortLabel: string;
  slug: string;
  title: string;
};

export const serviceItems: ServiceItem[] = [
  {
    icon: FaRobot,
    slug: "ai-solutions",
    shortLabel: "AI",
    title: "AI Solutions",
    description:
      "Custom AI applications, chatbots and business automation systems.",
    href: "/services/ai-solutions",
    priceFrom: "Starting from INR 25,000",
    deliveryTimeline: "Delivery in 2-4 Weeks",
  },
  {
    icon: FaLaptopCode,
    slug: "web-development",
    shortLabel: "Web",
    title: "Web Development",
    description: "Modern Next.js, MERN Stack and enterprise web applications.",
    href: "/services/web-development",
    priceFrom: "Starting from INR 15,000",
    deliveryTimeline: "Delivery in 2-5 Weeks",
  },
  {
    icon: FaShieldAlt,
    slug: "cyber-security",
    shortLabel: "Security",
    title: "Cyber Security",
    description: "VAPT, SOC operations, security assessment and consulting.",
    href: "/services/cyber-security",
    priceFrom: "Starting from INR 20,000",
    deliveryTimeline: "Delivery in 1-3 Weeks",
  },
  {
    icon: FaBolt,
    slug: "automation",
    shortLabel: "Automation",
    title: "Automation",
    description: "Workflow automation and AI-powered productivity systems.",
    href: "/services/automation",
    priceFrom: "Starting from INR 18,000",
    deliveryTimeline: "Delivery in 2-4 Weeks",
  },
  {
    icon: FaCloud,
    slug: "cloud-solutions",
    shortLabel: "Cloud",
    title: "Cloud Solutions",
    description: "Cloud deployment, DevOps and scalable infrastructure.",
    href: "/services/cloud-solutions",
    priceFrom: "Starting from INR 22,000",
    deliveryTimeline: "Delivery in 2-4 Weeks",
  },
  {
    icon: FaLink,
    slug: "api-integration",
    shortLabel: "API",
    title: "API Integration",
    description: "Payment gateways and third-party API integrations.",
    href: "/services/api-integration",
    priceFrom: "Starting from INR 12,000",
    deliveryTimeline: "Delivery in 1-2 Weeks",
  },
  {
    icon: FaMobileAlt,
    slug: "mobile-apps",
    shortLabel: "Mobile",
    title: "Mobile Apps",
    description: "Android and cross-platform mobile application development.",
    href: "/services/mobile-apps",
    priceFrom: "Starting from INR 35,000",
    deliveryTimeline: "Delivery in 4-8 Weeks",
  },
  {
    icon: FaChartLine,
    slug: "digital-growth",
    shortLabel: "Growth",
    title: "Digital Growth",
    description: "SEO, branding and digital business transformation.",
    href: "/services/digital-growth",
    priceFrom: "Starting from INR 10,000",
    deliveryTimeline: "Delivery in 2-6 Weeks",
  },
];

export function getServiceItem(slug: string): ServiceItem {
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Service item not found for slug: ${slug}`);
  }

  return service;
}
