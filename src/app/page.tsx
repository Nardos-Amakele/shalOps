import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Promo from "./components/Promo";
import ScrollWrapper from "./components/ScrollWrapper";

export default function Home() {
  return (
    <>
      <main>
        <ScrollWrapper once={false}> {/* Hero should animate every time */}
          <Hero />
        </ScrollWrapper>
        
        <ScrollWrapper delay={0.1}>
          <About />
        </ScrollWrapper>
        
        <ScrollWrapper delay={0.2}>
          <Services />
        </ScrollWrapper>
        
        <ScrollWrapper delay={0.3}>
          <Portfolio />
        </ScrollWrapper>
        
        <ScrollWrapper delay={0.4}>
          <Testimonials />
        </ScrollWrapper>
        
        <ScrollWrapper delay={0.5}>
          <Contact />
        </ScrollWrapper>
      </main>
      
      <ScrollWrapper>
        <Footer />
      </ScrollWrapper>
    </>
  );
}