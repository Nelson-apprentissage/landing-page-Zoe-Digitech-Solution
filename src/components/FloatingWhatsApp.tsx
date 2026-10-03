import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Contact rapide WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Discreet bubble tooltip */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-xl shadow-lg border border-slate-200/90 flex items-center gap-2 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="leading-tight">
            <span className="font-bold text-[#123952] block">Besoin d'un devis ?</span>
            Discutez en direct sur WhatsApp.
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
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
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#123952] text-[#EBA818] hover:bg-[#0A2234] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EBA818]"
        aria-label="Contacter ZOÉ DIGITECH sur WhatsApp"
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
  );
};
