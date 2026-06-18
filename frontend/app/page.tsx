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
