"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navItemVariants, mobileMenuVariants, mobileMenuItemVariants } from "@/lib/animations/variants";

interface NavigationProps {
  activeSection: string;
  scrollY: number;
  onSectionClick: (sectionId: string) => void;
}

const navigationItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navigation({ activeSection, scrollY, onSectionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="font-bold text-xl instagram-gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            J-DEV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => onSectionClick(item.id)}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className={`transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "instagram-gradient-text"
                    : "text-muted-foreground hover:text-foreground hover:instagram-gradient-text"
                }`}
              >
                {item.name}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 instagram-gradient ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  layoutId="nav-underline"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
        >
          {navigationItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => {
                onSectionClick(item.id);
                setIsMenuOpen(false);
              }}
              variants={mobileMenuItemVariants}
              className="block w-full text-left py-2 px-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}
