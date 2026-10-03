import React from "react";
import {
  Globe,
  Search,
  Smartphone,
  Clock,
  TrendingDown,
  Cpu,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

interface ProblemItem {
  icon: React.ElementType;
  title: string;
  consequence: string;
}

export const ProblemsSection: React.FC = () => {
  const problems: ProblemItem[] = [
    {
      icon: Globe,
      title: "Vous n'avez pas encore de site professionnel.",
      consequence:
        "Vos prospects doutent de votre crédibilité et comparent votre entreprise à des concurrents qui ont déjà une vitrine digitale rassurante.",
    },
    {
      icon: Search,
      title: "Vos clients ne vous trouvent pas facilement sur Google.",
      consequence:
        "Quand un client cherche vos services à Yaoundé, c'est votre concurrent qui apparaît en premier et qui récupère l'appel.",
    },
    {
      icon: Smartphone,
      title: "Vous dépendez uniquement de Facebook ou WhatsApp.",
      consequence:
        "Si l'algorithme change ou si votre compte a un blocage temporaire, vos ventes chutent instantanément car vous ne possédez pas votre audience.",
    },
    {
      icon: Clock,
      title: "Vous perdez du temps avec des tâches répétitives.",
      consequence:
        "Répondre manuellement aux mêmes messages, relancer les factures ou recopier des fiches clients vous coûte plusieurs heures par jour.",
    },
    {
      icon: TrendingDown,
      title: "Votre communication digitale manque de stratégie.",
      consequence:
        "Vous publiez sporadiquement sans calendrier ni retombées claires, dépensant du temps sans générer de rendez-vous qualifiés.",
    },
    {
      icon: Cpu,
      title: "Vous ne savez pas comment intégrer l'IA dans votre activité.",
      consequence:
        "Tout le monde parle d'intelligence artificielle, mais vous manquez d'une méthode simple et applicable à votre équipe au Cameroun.",
    },
  ];

  return (
    <section id="problemes" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Obstacles fréquents
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123952] tracking-tight text-balance">
            Votre entreprise rencontre-t-elle l'un de ces problèmes ?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            La plupart des entrepreneurs et PME font face à ces blocages au quotidien.
            Identifier le bon point de départ est la première étape de votre croissance.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-[#123952]/40 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#123952]/5 text-[#123952] flex items-center justify-center group-hover:bg-[#123952] group-hover:text-[#EBA818] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#123952] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/50 flex items-center gap-1 text-xs font-semibold text-[#123952] opacity-80 group-hover:opacity-100">
                  <span>Résolution possible</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#EBA818] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition statement & Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#123952] to-[#0A2234] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider text-[#EBA818] uppercase">
              La solution ZOÉ DIGITECH
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              ZOÉ DIGITECH vous aide à transformer ces problèmes en opportunités.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Chaque défi commercial a une réponse digitale pragmatique, adaptée à vos moyens
              et immédiatement exploitable par vos équipes.
            </p>
          </div>

          <a
            href={buildWhatsAppLink("Bonjour Zoé Digitech, j'ai identifié un problème dans mon activité et je souhaite un échange pour y remédier.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#EBA818] hover:bg-[#D6940A] text-[#123952] px-5 py-3 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Échanger sur mon besoin</span>
          </a>
        </div>

      </div>
    </section>
  );
};
