import React from "react";
import { MessageCircle, CheckCircle2, Sparkles, Clock, Shield } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

export const CallToActionOffer: React.FC = () => {
  const customMessage =
    "Bonjour Zoé Digitech, je souhaite discuter de mon projet digital et bénéficier d'un diagnostic.";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A659E] via-[#124C77] to-[#0E3655] text-white relative overflow-hidden">
      {/* Subtle brand glow effects */}
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#EBA818]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#EBA818]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill-free kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#EBA818] mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="tracking-wider uppercase">Offre d'appel sans engagement</span>
        </div>

        {/* Title exactly as requested */}
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-4 sm:mb-6 text-balance">
          Vous avez un projet digital mais vous ne savez pas par où commencer ?
        </h2>

        {/* Text exactly as requested */}
        <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
          Bénéficiez d'un premier échange avec{" "}
          <strong className="text-white font-semibold">ZOÉ DIGITECH</strong> pour identifier les
          solutions numériques qui peuvent réellement apporter de la valeur à votre activité.
        </p>

        {/* Big high-converting WhatsApp Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10">
          <a
            href={buildWhatsAppLink(customMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#EBA818] hover:bg-[#D6940A] text-[#124C77] font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] group min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Demander mon diagnostic gratuit</span>
          </a>
        </div>

        {/* 3 Clear Guarantees */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#EBA818] shrink-0" />
            <span>Échange rapide de 15 minutes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#EBA818] shrink-0" />
            <span>100% gratuit & sans engagement</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#EBA818] shrink-0" />
            <span>Conseils concrets applicables de suite</span>
          </div>
        </div>

      </div>
    </section>
  );
};
