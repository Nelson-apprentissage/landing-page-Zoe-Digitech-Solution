import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* 1. Mobile "Version APP" Sticky Bottom Bar (Fixed at bottom on smartphones) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 px-3 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.1)]"
        aria-label="Action mobile WhatsApp"
      >
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-[#1A659E] hover:bg-[#124C77] active:bg-[#0E3655] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-md active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-5 h-5 text-[#EBA818] shrink-0 fill-current" />
          <span className="leading-tight text-white tracking-tight">
            Parler à un expert sur WhatsApp
          </span>
        </a>
      </div>

      {/* 2. Tablet & Desktop Floating WhatsApp Button */}
      <aside
        aria-label="Contact rapide WhatsApp"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2 pointer-events-auto"
      >
        {/* Discreet bubble tooltip */}
        {showTooltip && (
          <div className="relative bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-xl shadow-lg border border-slate-200/90 flex items-center gap-2 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="leading-tight">
              <span className="font-bold text-[#1A659E] block">Besoin d'un devis ?</span>
              Discutez en direct sur WhatsApp.
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full shrink-0 min-h-[32px] min-w-[32px] flex items-center justify-center"
              aria-label="Fermer l'infobulle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Tooltip caret */}
            <div
              className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200/90 rotate-45"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Floating Action Button */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1A659E] text-[#EBA818] hover:bg-[#124C77] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EBA818]"
          aria-label="Parler à un expert sur WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />

          {/* Pulse indicator ring */}
          <span
            className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5"
            aria-hidden="true"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
          </span>
        </a>
      </aside>
    </>
  );
};
