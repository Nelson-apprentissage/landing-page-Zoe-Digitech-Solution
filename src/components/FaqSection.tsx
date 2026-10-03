import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs: FaqItem[] = [
    {
      question: "Combien coûte un site web ?",
      answer:
        "Le coût dépend de la nature de votre projet : une landing page de vente simple ne demande pas le même travail qu'un site vitrine complet d'entreprise ou une plateforme avec espace membre. Chez ZOÉ DIGITECH, nos formules sont spécialement calibrées pour être accessibles aux PME camerounaises. Lors du diagnostic gratuit, nous vous remettons une estimation budgétaire transparente et détaillée, sans mauvaise surprise.",
    },
    {
      question: "Combien de temps faut-il pour réaliser un projet ?",
      answer:
        "Pour une landing page ou un site vitrine standard, la livraison intervient généralement entre 7 et 15 jours ouvrés une fois vos contenus validés. Pour des projets d'automatisation IA ou de digitalisation plus complexes, comptez entre 2 et 4 semaines avec des déploiements progressifs pour ne pas perturber vos ventes.",
    },
    {
      question: "Travaillez-vous avec les petites entreprises ?",
      answer:
        "Absolument ! Les Très Petites Entreprises (TPE), commerçants, indépendants, restaurants et écoles constituent le cœur de notre clientèle au Cameroun. Nous adaptons notre langage, nos outils et nos tarifs pour que chaque franc investi produise un impact visible sur votre activité.",
    },
    {
      question: "Est-il possible de commencer avec un petit budget ?",
      answer:
        "Oui. Nous privilégions une démarche par étapes : nous commençons par l'action prioritaire qui vous rapporte des clients le plus vite (par exemple une landing page ou l'optimisation de votre fiche Google Maps), puis nous développons les fonctionnalités avancées au fur et à mesure que vos revenus augmentent.",
    },
    {
      question: "Proposez-vous la maintenance ?",
      answer:
        "Oui. Un site ou une automatisation doit rester fonctionnel, rapide et sécurisé. Nous proposons des forfaits d'assistance et de maintenance technique mensuels ou annuels (sauvegardes régulières, mises à jour, ajustements de textes, surveillance anti-piratage).",
    },
    {
      question: "Pouvez-vous automatiser une activité existante ?",
      answer:
        "Tout à fait. C'est l'un de nos points forts : nous n'avons pas besoin de tout reconstruire. Si vous utilisez déjà WhatsApp Business, Excel, ou une boîte email, nous pouvons brancher des automatisations et des assistants IA pour faire gagner des heures de travail à vos équipes sans bouleverser vos habitudes.",
    },
    {
      question: "Est-ce que vous travaillez uniquement au Cameroun ?",
      answer:
        "Notre agence est basée à Yaoundé. Grâce aux outils digitaux et à WhatsApp, nous accompagnons nos clients à Yaoundé, dans tout le Cameroun ainsi que les entrepreneurs de la diaspora camerounaise et africaine basés à l'international.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Transparence Totale
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123952] tracking-tight text-balance">
            Questions Fréquemment Posées
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Toutes les réponses à vos interrogations avant de lancer votre transformation digitale.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-[#123952] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#EBA818] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#123952]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Objection reducer prompt */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-slate-900">
              Vous avez une autre question spécifique à votre activité ?
            </p>
            <p className="text-xs text-slate-500">
              Notre équipe répond directement sans engagement.
            </p>
          </div>
          <a
            href={buildWhatsAppLink("Bonjour Zoé Digitech, j'ai une question sur vos prestations : ")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#123952] hover:bg-[#0A2234] text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#EBA818]" />
            <span>Poser ma question sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
