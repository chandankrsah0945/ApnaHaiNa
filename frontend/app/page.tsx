import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import WhyChoose from "@/components/home/WhyChooseUs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  );
}