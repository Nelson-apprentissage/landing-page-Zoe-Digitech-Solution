import React, { useState } from "react";
import {
  Globe,
  Bot,
  Share2,
  Search,
  Layers,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
} from "lucide-react";
import { buildWhatsAppLink, AGENCY_CONFIG } from "../config/agency";

interface ServiceData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  audienceExample: string;
  whatsappMessage: string;
}

export const ServicesSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ServiceData | null>(null);

  const services: ServiceData[] = [
    {
      id: "creation-web",
      number: "01",
      title: "Création web",
      subtitle: "Sites vitrines, landing pages et solutions web modernes.",
      description:
        "Conception de sites internet sur-mesure, ultra-rapides, adaptés aux smartphones et optimisés pour convertir vos visiteurs en clients payants.",
      icon: Globe,
      deliverables: [
        "Sites vitrines pour PME, cabinets et écoles",
        "Landing pages de vente à fort taux de conversion",
        "Boutons d'appel & redirection WhatsApp directe",
        "Nom de domaine, hébergement sécurisé et maintenance",
      ],
      audienceExample:
        "Idéal pour cabinets médicaux, restaurants, collèges, commerces et PME à la recherche de crédibilité immédiate.",
      whatsappMessage:
        "Bonjour Zoé Digitech, je souhaite en savoir plus sur la création d'un site web professionnel pour mon activité.",
    },
    {
      id: "ia-automatisation",
      number: "02",
      title: "IA & automatisation",
      subtitle:
        "Automatisation des tâches, assistants IA, génération de contenu et outils intelligents.",
      description:
        "Déploiement d'assistants conversationnels WhatsApp, tri automatique de messages, génération de devis instantanés et workflows sans saisie manuelle.",
      icon: Bot,
      deliverables: [
        "Assistants IA connectés à votre catalogue ou WhatsApp Business",
        "Réponses automatiques intelligentes 24h/24 et 7j/7",
        "Automatisation de la facturation et des relances clients",
        "Génération assistée de contenus pour vos communications",
      ],
      audienceExample:
        "Idéal pour entreprises recevant beaucoup de messages, agences de services et commerces souhaitant répondre instantanément sans embaucher.",
      whatsappMessage:
        "Bonjour Zoé Digitech, je veux découvrir comment intégrer l'IA et l'automatisation dans mes processus.",
    },
    {
      id: "communication-digitale",
      number: "03",
      title: "Communication digitale",
      subtitle:
        "Stratégie digitale, contenus, réseaux sociaux et campagnes publicitaires.",
      description:
        "Mise en place d'une présence cohérente et percutante sur les plateformes où se trouvent vos prospects au Cameroun (Facebook, LinkedIn, Instagram).",
      icon: Share2,
      deliverables: [
        "Stratégie éditoriale et calendrier de publications mensuel",
        "Création de visuels et vidéos publicitaires professionnels",
        "Campagnes publicitaires ciblées (Facebook Ads, Meta)",
        "Gestion de l'e-réputation et fidélisation de l'audience",
      ],
      audienceExample:
        "Idéal pour marques, boutiques, prestataires de services et organisations souhaitant développer une notoriété durable.",
      whatsappMessage:
        "Bonjour Zoé Digitech, je souhaite un accompagnement pour structurer ma communication digitale et mes réseaux sociaux.",
    },
    {
      id: "seo-geo",
      number: "04",
      title: "SEO & GEO",
      subtitle:
        "Amélioration de la visibilité sur Google et optimisation de la présence des entreprises dans les réponses des moteurs et assistants IA.",
      description:
        "Positionnement de votre entreprise en tête des recherches locales au Cameroun (Google Maps, Google Search) et dans les moteurs IA modernes.",
      icon: Search,
      deliverables: [
        "Référencement local Google Maps / Fiche d'établissement",
        "Optimisation sémantique pour les requêtes camerounaises",
        "GEO (Generative Engine Optimization) pour réponses IA",
        "Audit technique de visibilité et suivi des positions",
      ],
      audienceExample:
        "Idéal pour cabinets d'avocats, cliniques, commerces, agences et prestataires locaux à Yaoundé.",
      whatsappMessage:
        "Bonjour Zoé Digitech, je souhaite améliorer mon référencement Google et ma visibilité locale au Cameroun.",
    },
    {
      id: "digitalisation",
      number: "05",
      title: "Digitalisation",
      subtitle:
        "Transformation des processus manuels en solutions numériques simples et efficaces.",
      description:
        "Abandon des registres papier et des fichiers éparpillés au profit d'outils collaboratifs faciles à prendre en main par vos collaborateurs.",
      icon: Layers,
      deliverables: [
        "Digitalisation de la gestion des stocks, clients ou élèves",
        "Outils collaboratifs cloud (Google Workspace, formulaires)",
        "Tableaux de bord de suivi d'activité et reporting",
        "Formation pratique de votre personnel sur place ou à distance",
      ],
      audienceExample:
        "Idéal pour PME, écoles, associations, églises et structures souhaitant moderniser leur gestion interne sans complexité.",
      whatsappMessage:
        "Bonjour Zoé Digitech, je souhaite digitaliser les processus internes de mon entreprise.",
    },
    {
      id: "formations",
      number: "06",
      title: "Formations pratiques",
      subtitle:
        "Montée en compétences numériques et IA pour particuliers et équipes d'entreprises (B2B).",
      description:
        "Des programmes immersifs et 100% orientés pratique pour maîtriser l'intelligence artificielle, la création de sites web, les réseaux sociaux et l'automatisation de vos tâches quotidiennes.",
      icon: GraduationCap,
      deliverables: [
        "Formations individuelles (étudiants, entrepreneurs solos, indépendants, reconversion)",
        "Formations intra-entreprises B2B sur-mesure (commerciaux, marketing, secrétariat, RH)",
        "Ateliers pratiques IA générative (ChatGPT, Claude, prompts métiers, gain de productivité)",
        "Modules création web moderne & gestion professionnelle des réseaux sociaux",
        "Cas pratiques concrets, support post-formation et attestation de fin de session",
      ],
      audienceExample:
        "Idéal pour tout individu souhaitant acquérir des compétences concrètes d'avenir, et pour dirigeants de PME désireux de rendre leurs équipes plus rapides et autonomes.",
      whatsappMessage:
        "Bonjour Zoé Digitech, je souhaite des informations sur vos modules de formation (particulier ou formation B2B en entreprise).",
    },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Nos Domaines d'Intervention & Formations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A659E] tracking-tight text-balance">
            Une seule agence pour accélérer votre transformation digitale et former vos équipes.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            De la vitrine web jusqu'à la formation pratique de vos talents, nous combinons les
            expertises indispensables pour faire grandir votre entreprise.
          </p>
        </div>

        {/* 6 Services Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="relative bg-white rounded-xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-[#1A659E]/40 group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold font-mono text-[#EBA818] bg-[#FEF7E9] px-2.5 py-1 rounded">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#1A659E]/10 text-[#1A659E] flex items-center justify-center group-hover:bg-[#1A659E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1A659E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#1A659E]/90 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action: En savoir plus */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModal(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1A659E] hover:text-[#EBA818] transition-colors py-2 min-h-[44px]"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={buildWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md text-slate-400 hover:text-[#1A659E] hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title={`Discuter de ${service.title} sur WhatsApp`}
                    aria-label={`Discuter de ${service.title} sur WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#EBA818]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for "En savoir plus" */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative w-full max-w-lg bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Fermer la boîte de dialogue"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 pr-8">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#1A659E] text-white flex items-center justify-center font-bold shrink-0">
                  {activeModal.number}
                </div>
                <div>
                  <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-[#1A659E] leading-snug">
                    {activeModal.title}
                  </h3>
                  <p className="text-xs text-slate-500">{activeModal.subtitle}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 sm:mb-5">
                {activeModal.description}
              </p>

              <div className="mb-4 sm:mb-5 p-3 sm:p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A659E] mb-2 sm:mb-2.5">
                  Ce qui est inclus dans cette solution :
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {activeModal.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#EBA818] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5 sm:mb-6 p-3 rounded-lg bg-[#FEF7E9] text-xs text-amber-900 border border-[#EBA818]/30">
                <strong>Cas d'usage :</strong> {activeModal.audienceExample}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={buildWhatsAppLink(activeModal.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1A659E] hover:bg-[#124C77] text-white text-xs sm:text-sm font-semibold transition-colors min-h-[44px] text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#EBA818]" />
                  <span>Demander un devis sur WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="py-3 px-4 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 min-h-[44px]"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
