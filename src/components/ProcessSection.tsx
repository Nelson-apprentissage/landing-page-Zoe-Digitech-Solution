import React from "react";
import { SearchCheck, FileText, Code2, Users2, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Diagnostic",
      summary: "Nous comprenons votre activité et vos besoins.",
      details:
        "Échange rapide de 15 minutes sur WhatsApp ou par téléphone pour faire le point sur vos blocages actuels, votre cible et vos objectifs prioritaires.",
      icon: SearchCheck,
      badge: "Gratuit & sans engagement",
    },
    {
      step: "02",
      title: "Proposition",
      summary: "Nous vous proposons la solution adaptée à votre budget et à vos objectifs.",
      details:
        "Un devis clair, transparent et sans frais cachés, détaillant les livrables précis, les délais de livraison et le retour sur investissement attendu.",
      icon: FileText,
      badge: "Transparence totale",
    },
    {
      step: "03",
      title: "Réalisation",
      summary: "Notre équipe conçoit et déploie votre solution.",
      details:
        "Création de votre site web, configuration de vos automatisations ou mise en place de vos campagnes avec des points d'étape réguliers.",
      icon: Code2,
      badge: "Déploiement agile",
    },
    {
      step: "04",
      title: "Accompagnement",
      summary: "Nous vous aidons à utiliser et à faire évoluer votre solution.",
      details:
        "Prise en main simplifiée, formation de votre équipe et support technique continu pour que votre solution reste toujours efficace et rentable.",
      icon: Users2,
      badge: "Suivi continu",
    },
  ];

  return (
    <section id="processus" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Une Méthode Éprouvée
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A659E] tracking-tight text-balance">
            Comment ça marche ?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Un processus simple, rapide et sans jargon en 4 étapes pour digitaliser votre entreprise
            en toute sérénité.
          </p>
        </div>

        {/* 4 Steps timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#1A659E]/40 transition-all group"
              >
                <div>
                  {/* Step number and badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-[#1A659E] group-hover:text-[#EBA818] transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-[#1A659E]/10 text-[#1A659E] flex items-center justify-center mb-4 group-hover:bg-[#1A659E] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#1A659E] mb-3 leading-snug">
                    {item.summary}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#EBA818]">
                  <span>Étape {idx + 1} sur 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Step 1 Trigger */}
        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppLink("Bonjour Zoé Digitech, je souhaite démarrer par l'Étape 01 : le diagnostic de mon entreprise.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#1A659E] hover:bg-[#124C77] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <span>Commencer par l'Étape 01 (Diagnostic)</span>
            <ArrowRight className="w-4 h-4 text-[#EBA818]" />
          </a>
        </div>

      </div>
    </section>
  );
};
