
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Book", href: "#book" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${
      scrolled ? "bg-background/95 backdrop-blur border-b" : "bg-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/JoniWoods_logo.png" 
            alt="Joni Woods" 
            width={40} 
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl hidden sm:inline-block">
            Joni Woods
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-jw-burgundy hover:bg-jw-rust">
            <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
              Book Call
            </Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
              Book Call
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
