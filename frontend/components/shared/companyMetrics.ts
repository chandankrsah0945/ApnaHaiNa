export type CompanyMetric = {
  label: string;
  value: string;
};

export type TrustBadge = {
  label: string;
};

export const companyMetrics: CompanyMetric[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
  { value: "AI", label: "Powered Solutions" },
];

export const socialProofMetrics: CompanyMetric[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "24/7", label: "Support" },
  { value: "2 Hours", label: "Average Response" },
  { value: "99%", label: "Client Satisfaction" },
];

export const heroConversionChecks = [
  "Free Consultation",
  "India Based Team",
  "Secure Delivery",
  "Fast Response",
];

export const heroTrustBadges: TrustBadge[] = [
  { label: "SSL Secured" },
  { label: "AI Powered" },
  { label: "Fast Delivery" },
  { label: "Secure Development" },
];

export const footerTrustBadges: TrustBadge[] = [
  { label: "SSL Secured" },
  { label: "GDPR Ready" },
  { label: "Secure Development" },
  { label: "AI Powered" },
];
