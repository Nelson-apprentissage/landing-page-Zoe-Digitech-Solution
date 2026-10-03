import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemsSection } from "./components/ProblemsSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ProcessSection } from "./components/ProcessSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { CallToActionOffer } from "./components/CallToActionOffer";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#EBA818]/25 selection:text-[#1A659E] pb-16 sm:pb-0">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problems Section */}
        <ProblemsSection />

        {/* 3. Services / Solutions Section (5 Domaines) */}
        <ServicesSection />

        {/* 4. Why ZOÉ DIGITECH Section (4 Arguments) */}
        <WhyChooseUs />

        {/* 5. Process Section (4 Étapes) */}
        <ProcessSection />

        {/* 6. Demonstrations & Portfolio (Catégories & Projets Démo) */}
        <PortfolioSection />

        {/* 7. Lead Magnet Offer (Offre d'appel diagnostic gratuit) */}
        <CallToActionOffer />

        {/* 8. FAQ Section (7 Questions clés) */}
        <FaqSection />

        {/* 9. Contact & Devis Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Discreet Mobile/Desktop Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
