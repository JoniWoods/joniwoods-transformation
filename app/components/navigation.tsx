
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "book", "testimonials", "blog", "transform", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "book", label: "Book" },
    { id: "testimonials", label: "Testimonials" },
    { id: "blog", label: "Blog" },
    { id: "transform", label: "Transform" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold text-jw-accent">Joni Woods</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-jw-accent ${
                    activeSection === item.id ? "text-jw-accent" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                className="bg-jw-accent hover:bg-jw-accent/90"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors hover:text-jw-accent ${
                    activeSection === item.id ? "text-jw-accent" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                  className="w-full bg-jw-accent hover:bg-jw-accent/90"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
