import React from "react";
import { Target, Compass, Sparkles, HeartHandshake, CheckCircle } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      number: "01",
      title: "Approche orientée résultats",
      description:
        "Nous ne créons pas simplement des outils numériques : nous cherchons à résoudre des problèmes commerciaux. Chaque site, chaque campagne et chaque automatisme a pour seul but de générer des contacts qualifiés et d'augmenter votre chiffre d'affaires.",
      highlight: "Un investissement mesurable, pas une simple dépense esthétique.",
    },
    {
      icon: Compass,
      number: "02",
      title: "Solutions adaptées au contexte africain",
      description:
        "Des solutions accessibles, pratiques et adaptées aux réalités des PME camerounaises. Nous prenons en compte les débits de connexion, l'usage prédominant du mobile, WhatsApp comme canal de vente roi et les habitudes locales de paiement.",
      highlight: "Pensé pour les réalités des entreprises à Yaoundé et au Cameroun.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Technologies modernes",
      description:
        "Utilisation du web, du no-code, de l'automatisation et de l'intelligence artificielle. Nous combinons les technologies les plus robustes pour vous offrir des solutions rapides à déployer, fiables et faciles à faire évoluer au fil du temps.",
      highlight: "Le meilleur de l'IA et du web sans complexité inutile.",
    },
    {
      icon: HeartHandshake,
      number: "04",
      title: "Accompagnement humain",
      description:
        "Le client doit pouvoir comprendre la solution et être accompagné après sa mise en place. Nous ne vous laissons jamais seul avec du jargon : nous formons votre personnel et restons joignables en permanence pour veiller au bon fonctionnement.",
      highlight: "Assistance réactive en direct par WhatsApp et téléphone.",
    },
  ];

  return (
    <section id="pourquoi" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Nos Engagements
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A659E] tracking-tight text-balance">
            Pourquoi choisir ZOÉ DIGITECH ?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Parce que votre entreprise mérite un partenaire technologique fiable qui comprend vos
            défis de terrain et parle votre langage.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative p-7 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-[#1A659E]/40 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1A659E] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-[#EBA818]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-balance">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#1A659E]">
                  <CheckCircle className="w-4 h-4 text-[#EBA818] shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 mb-3">
            Vous avez un doute sur la faisabilité de votre projet ?
          </p>
          <a
            href={buildWhatsAppLink("Bonjour Zoé Digitech, je souhaite échanger de vive voix sur la faisabilité de mon projet numérique.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1A659E] hover:text-[#EBA818] underline underline-offset-4 transition-colors"
          >
            <span>Posez directement votre question à notre équipe sur WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
