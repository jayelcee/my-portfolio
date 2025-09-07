"use client";

import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { useScrollManagement } from "@/lib/hooks/useScrollManagement";

export default function PortfolioApp() {
  const { scrollY, activeSection, scrollToSection, handleStatClick } = useScrollManagement();

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        scrollY={scrollY} 
        onSectionClick={scrollToSection} 
      />
      
      <Home onSectionClick={scrollToSection} />
      
      <About 
        onSectionClick={scrollToSection} 
        onStatClick={handleStatClick} 
      />
      
      <Portfolio />
      
      <Experience />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
