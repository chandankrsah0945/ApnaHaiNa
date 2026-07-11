import type { Metadata } from "next";

import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";
import WhyChoose from "@/components/home/WhyChooseUs";
import Navbar from "@/components/navbar/Navbar";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Solutions from "@/components/solutions/Solutions";

export const metadata: Metadata = {
  title: "ApnaHaiNa | AI, Web Development & Cybersecurity Solutions",

  description:
    "ApnaHaiNa is a premium digital agency providing AI solutions, custom website development, cybersecurity, cloud solutions, business automation, API integration, mobile app development, and digital growth services for startups and businesses.",

  keywords: [
    "ApnaHaiNa",
    "AI Development",
    "Artificial Intelligence",
    "Website Development",
    "Web Development Company",
    "Cyber Security",
    "Cloud Solutions",
    "Business Automation",
    "API Integration",
    "Mobile App Development",
    "Digital Agency",
    "Next.js Development",
    "React Development",
    "SEO",
    "Business Growth",
  ],

  authors: [
    {
      name: "ApnaHaiNa",
      url: "https://apnahaina.com",
    },
  ],

  creator: "ApnaHaiNa",
  publisher: "ApnaHaiNa",

  alternates: {
    canonical: "https://apnahaina.com",
  },

  openGraph: {
    title: "ApnaHaiNa | AI, Web Development & Cybersecurity Solutions",
    description:
      "Build smarter, secure faster, and grow digitally with AI solutions, custom websites, cybersecurity, automation, and cloud services.",
    url: "https://apnahaina.com",
    siteName: "ApnaHaiNa",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ApnaHaiNa | AI, Web Development & Cybersecurity Solutions",
    description:
      "Helping startups and businesses grow with AI, Web Development, Cybersecurity, Automation, and Cloud Solutions.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Process />
      <Industries />
      <Solutions />
      <Testimonials />
      <CTA />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
