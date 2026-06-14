import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import WhyChoose from "@/components/home/WhyChooseUs";
import Solutions from "@/components/solutions/Solutions";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";
import CTA from "@/components/home/CTA";
import Stats from "@/components/home/Stats";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Industries />
      <Solutions />
      <TrustedBy />
      <Testimonials />
      <CTA />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}