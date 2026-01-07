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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

      const headerBar = document.querySelector("[data-nav-bar]");
      const headerHeight = headerBar ? headerBar.getBoundingClientRect().height : 64;
      const headerOffset = headerHeight + 24;

      const anchor = element.querySelector("[data-scroll-anchor]") || element.querySelector("h1, h2, h3") || element;
      const elementPosition = anchor.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

    requestAnimationFrame(() => {
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(sectionId);
    });
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
