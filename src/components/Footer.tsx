import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { AGENCY_CONFIG, buildWhatsAppLink } from "../config/agency";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E3655] text-slate-300 border-t border-[#124C77]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <Logo size="responsive" theme="dark" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {AGENCY_CONFIG.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-[#EBA818] font-bold">Localisation :</span> Yaoundé, Cameroun.
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions & Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#solutions" className="hover:text-[#EBA818] transition-colors">
                  Création de sites web professionnels
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#EBA818] transition-colors">
                  Solutions IA & Automatisation
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#EBA818] transition-colors">
                  Communication digitale & Réseaux
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#EBA818] transition-colors">
                  Référencement local SEO & GEO
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#EBA818] transition-colors">
                  Digitalisation des processus PME
                </a>
              </li>
            </ul>
          </div>

          {/* Quick contact */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Direct
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#EBA818] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#EBA818] shrink-0" />
                <span>WhatsApp : {AGENCY_CONFIG.whatsapp}</span>
              </a>
              <a
                href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#EBA818] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#EBA818] shrink-0" />
                <span>Téléphone : {AGENCY_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#EBA818] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#EBA818] shrink-0" />
                <span>Email : {AGENCY_CONFIG.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#EBA818] shrink-0" />
                <span>{AGENCY_CONFIG.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#124C77]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} {AGENCY_CONFIG.fullName}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#solutions" className="hover:text-slate-400 transition-colors">
              Services
            </a>
            <a href="#realisations" className="hover:text-slate-400 transition-colors">
              Réalisations
            </a>
            <a href="#faq" className="hover:text-slate-400 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
