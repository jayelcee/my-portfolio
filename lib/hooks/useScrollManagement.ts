"use client";

import { useState, useEffect } from "react";

export function useScrollManagement() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["home", "about", "portfolio", "experience", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStatClick = (statLabel: string) => {
    switch (statLabel) {
      case "TOTAL PROJECTS":
        scrollToSection("portfolio");
        break;
      case "CERTIFICATES":
        scrollToSection("portfolio");
        break;
      case "YEARS OF EXPERIENCE":
        scrollToSection("experience");
        break;
    }
  };

  return {
    scrollY,
    activeSection,
    scrollToSection,
    handleStatClick,
  };
}
