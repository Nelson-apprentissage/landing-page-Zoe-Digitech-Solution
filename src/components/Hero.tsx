import React from "react";
import { MessageCircle, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";
import heroImg from "../assets/images/hero_african_tech_business_1791026233324.jpg";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40">
      {/* Subtle geometric background accents matching brand palette */}
      <div
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EBA818]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-[#123952]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust tag - clean unboxed typographic indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123952] border border-slate-200 bg-white/90 px-3 py-1.5 rounded-md shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#EBA818]" />
              <span className="tracking-wide">Agence de transformation digitale & IA</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 text-slate-600">
                <MapPin className="w-3 h-3 text-[#123952]" />
                Yaoundé, Cameroun
              </span>
            </div>

            {/* Main H1 Title - exactly as requested */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123952] leading-[1.15] tracking-tight text-balance">
              Transformez votre activité grâce au{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-[#123952]">digital</span>
                <span
                  className="absolute bottom-1.5 left-0 w-full h-3 bg-[#EBA818]/30 -z-0 rounded-xs"
                  aria-hidden="true"
                />
              </span>{" "}
              et à{" "}
              <span className="text-[#EBA818]">l'IA</span>.
            </h1>

            {/* Subtitle - exactly as requested */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-semibold">ZOÉ DIGITECH</strong> aide les
              entrepreneurs et les entreprises à développer leur visibilité, attirer plus de clients
              et automatiser leurs activités grâce aux technologies numériques.
            </p>

            {/* Action buttons (CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary WhatsApp CTA */}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#123952] hover:bg-[#0A2234] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-[0.99] group text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#EBA818] group-hover:scale-110 transition-transform" />
                <span>Parler à un expert sur WhatsApp</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors text-center"
              >
                <span>Découvrir nos solutions</span>
                <ArrowRight className="w-4 h-4 text-[#123952]" />
              </a>
            </div>

            {/* Proof Points & Anti-objection bullet points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EBA818] shrink-0" />
                <span>Diagnostic 100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#123952] shrink-0" />
                <span>Solutions adaptées aux PME</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EBA818] shrink-0" />
                <span>Réponse en moins de 24h</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual representation of African tech business */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-[#123952]/10 via-white to-[#EBA818]/15 shadow-xl border border-slate-200/60">
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={heroImg}
                    alt="Entrepreneurs africains utilisant le digital et l'intelligence artificielle chez ZOÉ DIGITECH"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.target as HTMLElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.classList.add("bg-gradient-to-br", "from-[#123952]", "to-[#0A2234]");
                      }
                    }}
                  />

                  {/* Soft bottom vignette scrim for typographic badge legibility */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Real-time trust indicator overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-white/40 flex items-center justify-between text-left">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-md bg-[#123952] flex items-center justify-center text-[#EBA818] font-bold text-xs">
                        ZD
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">
                          Transformation Digitale & IA
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Accompagnement pragmatique au Cameroun
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Dispo WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent card floating behind */}
              <div
                className="hidden sm:block absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-lg p-3 shadow-md text-left text-xs"
                aria-hidden="true"
              >
                <p className="text-[11px] text-slate-500 font-medium">Objectif mesurable</p>
                <p className="font-bold text-[#123952]">Visibilité · Clients · Gain de temps</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
