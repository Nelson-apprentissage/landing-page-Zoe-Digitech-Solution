import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { buildWhatsAppLink } from "../config/agency";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Problèmes résolus", href: "#problemes" },
    { label: "Pourquoi nous", href: "#pourquoi" },
    { label: "Comment ça marche", href: "#processus" },
    { label: "Réalisations", href: "#realisations" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white/80 backdrop-blur-xs border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="group focus-visible:ring-2 focus-visible:ring-[#EBA818] rounded-md outline-none"
          aria-label="ZOÉ DIGITECH Accueil"
        >
          <Logo size="md" />
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#123952] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EBA818] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#123952] hover:bg-[#0A2436] text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-xs active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#EBA818]" />
            <span className="hidden sm:inline">Parler à un expert sur WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100"
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#123952] hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#123952] text-white rounded-lg text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#EBA818]" />
              <span>Parler à un expert sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
