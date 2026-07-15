"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo-text.png"
              alt="Teman Sekolah"
              width={160}
              height={40}
              className="h-8 md:h-10 w-36 object-cover"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  isScrolled ? "text-primary" : "text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.teman-sekolah.com"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-600 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Masuk Admin Panel
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block text-primary font-medium py-2 px-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.teman-sekolah.com"
            className="block text-center px-5 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-600 transition-colors"
          >
            Masuk Admin Panel
          </a>
        </div>
      </div>
    </nav>
  );
}
