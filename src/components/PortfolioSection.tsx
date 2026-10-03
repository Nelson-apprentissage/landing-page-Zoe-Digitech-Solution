import React, { useState } from "react";
import { ExternalLink, Layers, Eye, MessageCircle, X, Check } from "lucide-react";
import { buildWhatsAppLink } from "../config/agency";
import webDemoImg from "../assets/images/demo_project_web_1791026255504.jpg";
import aiDemoImg from "../assets/images/demo_project_ai_automation_1791026270263.jpg";
import commDemoImg from "../assets/images/demo_project_comm_seo_1791026285787.jpg";

type CategoryKey = "all" | "sites-web" | "landing-pages" | "applications" | "automatisation" | "communication" | "formations";

interface PortfolioProject {
  id: string;
  category: CategoryKey;
  categoryLabel: string;
  title: string;
  typeBadge: "Projet démo";
  image: string;
  objective: string;
  features: string[];
  techStack: string[];
  targetSector: string;
}

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: "Tous les projets" },
    { key: "sites-web", label: "Sites web" },
    { key: "landing-pages", label: "Landing pages" },
    { key: "applications", label: "Applications" },
    { key: "automatisation", label: "Automatisation" },
    { key: "communication", label: "Communication digitale" },
    { key: "formations", label: "Formations (B2B & Solo)" },
  ];

  const projects: PortfolioProject[] = [
    {
      id: "demo-site-cabinet",
      category: "sites-web",
      categoryLabel: "Sites web",
      title: "Plateforme Vitrine pour Cabinet Professionnel & Médical",
      typeBadge: "Projet démo",
      image: webDemoImg,
      objective:
        "Offrir aux patients et clients une vitrine moderne permettant de consulter les spécialités, les honoraires indicatifs et de réserver un créneau via WhatsApp.",
      features: [
        "Design responsive adapté aux connexions mobiles 3G/4G",
        "Bouton WhatsApp flottant avec message pré-rempli",
        "Fiche Google Maps et plan d'accès intégrés",
        "Formulaire de pré-consultation simplifié",
      ],
      techStack: ["React", "Tailwind CSS", "Vite", "WhatsApp API"],
      targetSector: "Cabinets médicaux, dentaires, juridiques & consultants à Yaoundé",
    },
    {
      id: "demo-landing-ecole",
      category: "landing-pages",
      categoryLabel: "Landing pages",
      title: "Landing Page Inscriptions pour Établissement Scolaire Privé",
      typeBadge: "Projet démo",
      image: webDemoImg,
      objective:
        "Maximiser les demandes d'inscription pour la rentrée scolaire en guidant les parents vers le téléchargement de la brochure et la prise de contact.",
      features: [
        "Structure orientée conversion avec proposition de valeur immédiate",
        "Galerie des infrastructures et témoignages de parents",
        "Téléchargement du dossier de scolarité en 1 clic",
        "Temps de chargement inférieur à 1.5 seconde",
      ],
      techStack: ["Next.js / React", "SEO Schema", "Mobile Optimization"],
      targetSector: "Collèges, lycées et instituts de formation au Cameroun",
    },
    {
      id: "demo-ia-assist",
      category: "automatisation",
      categoryLabel: "Automatisation",
      title: "Assistant Virtuel WhatsApp & Gestion des Commandes",
      typeBadge: "Projet démo",
      image: aiDemoImg,
      objective:
        "Automatiser la qualification des prospects sur WhatsApp Business : réponses immédiates aux questions fréquentes, envoi du catalogue PDF et transfert à l'humain si nécessaire.",
      features: [
        "Réponses automatiques 24h/24 sans délai d'attente",
        "Filtrage automatique des demandes sérieuses vs curiosité",
        "Enregistrement des contacts dans un tableau Google Sheets partagé",
        "Zéro coût d'infrastructure lourd",
      ],
      techStack: ["IA / NLP", "WhatsApp Cloud API", "Make / Webhooks", "Google Sheets"],
      targetSector: "Commerçants, boutiques de mode, distributeurs & traiteurs",
    },
    {
      id: "demo-app-gestion",
      category: "applications",
      categoryLabel: "Applications",
      title: "Application Web Légère de Facturation & Recouvrement PME",
      typeBadge: "Projet démo",
      image: aiDemoImg,
      objective:
        "Permettre à un gérant d'entreprise camerounaise de créer des factures professionnelles au format PDF en 30 secondes et d'envoyer des relances WhatsApp.",
      features: [
        "Génération instantanée de factures avec mention TVA / DGI",
        "Suivi des impayés et statut des règlements",
        "Bouton d'envoi direct de la facture par WhatsApp au client",
        "Accès multi-utilisateurs sécurisé (administrateur / caisse)",
      ],
      techStack: ["TypeScript", "PWA Offline Ready", "Export PDF", "Cloud Storage"],
      targetSector: "PME de services, BTP, quincailleries, grossistes",
    },
    {
      id: "demo-comm-seo",
      category: "communication",
      categoryLabel: "Communication digitale",
      title: "Stratégie de Contenu Réseaux Sociaux & Visibilité Google Maps",
      typeBadge: "Projet démo",
      image: commDemoImg,
      objective:
        "Créer un flux régulier de clients pour un restaurant / hôtel en optimisant la présence sur Facebook, Instagram et en atteignant le top 3 Google Maps à Yaoundé.",
      features: [
        "Pack de 12 visuels promotionnels mensuels haute définition",
        "Paramétrage complet de la fiche Google Business Profile",
        "Rédaction de publications engageantes orientées prise de commande",
        "Stratégie d'incitation aux avis clients positifs",
      ],
      techStack: ["Meta Business Suite", "Google Search Console", "Graphisme & Copywriting"],
      targetSector: "Hôtellerie, restauration, instituts de beauté & loisirs",
    },
    {
      id: "demo-formation-ia",
      category: "formations",
      categoryLabel: "Formations",
      title: "Programme Pratique : Maîtrise de l'IA & Outils Digitaux (B2B & Particuliers)",
      typeBadge: "Projet démo",
      image: aiDemoImg,
      objective:
        "Former des professionnels indépendants et des équipes d'entreprises à utiliser l'IA générative (ChatGPT, Claude, automatisation) et les outils numériques pour gagner plusieurs heures par semaine.",
      features: [
        "Ateliers 100% pratiques sur cas concrets d'entreprises locales",
        "Formules modulables : sessions individuelles ou séminaires d'équipe B2B",
        "Prise en main des outils d'automatisation et de productivité bureautique",
        "Supports complets, fiches mémo de prompts et attestation de compétences",
      ],
      techStack: ["ChatGPT & Claude", "Make / Automations", "Canva & Meta Tools", "Google Workspace"],
      targetSector: "Équipes PME, cadres, commerciaux, entrepreneurs solos & étudiants",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="realisations" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Exemples Concrets
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A659E] tracking-tight text-balance">
            Nos Démonstrations & Réalisations
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Découvrez comment nous concevons des outils numériques adaptés aux réalités
            locales. Tous les projets ci-dessous sont présentés avec transparence et clarté.
          </p>
        </div>

        {/* Category Filters (Clean Functional Segmented Controls) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-6 sm:mb-8 gap-2 no-scrollbar px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] shrink-0 ${
                  isActive
                    ? "bg-[#1A659E] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:shadow-lg hover:border-[#1A659E]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Clean unboxed tag for Demo Project */}
                  <div className="absolute top-3 left-3 bg-[#1A659E]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {project.typeBadge}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#1A659E] text-[11px] font-semibold px-2 py-0.5 rounded shadow-2xs">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-[11px] text-slate-500 font-medium mb-1.5">
                    {project.targetSector}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#1A659E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {project.objective}
                  </p>

                  {/* Clean unboxed tech stack list */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1A659E] hover:text-[#EBA818] transition-colors min-h-[44px] py-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>Voir les détails</span>
                </button>

                <a
                  href={buildWhatsAppLink(
                    `Bonjour Zoé Digitech, j'ai vu votre ${project.typeBadge} "${project.title}" et je souhaite une solution similaire.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 min-h-[44px] px-2"
                  title="Demander une solution similaire sur WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#EBA818]" />
                  <span>Similaire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing project details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="relative w-full max-w-xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 sm:mb-5 bg-slate-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="inline-block bg-[#1A659E] text-white text-[11px] font-bold px-2 py-0.5 rounded mb-2">
                {selectedProject.typeBadge} · {selectedProject.categoryLabel}
              </div>

              <h3 id="project-modal-title" className="text-lg sm:text-xl font-bold text-[#1A659E] mb-1.5 sm:mb-2 leading-snug">
                {selectedProject.title}
              </h3>

              <p className="text-xs text-slate-500 mb-4 font-medium">
                Conçu pour : {selectedProject.targetSector}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 mb-5 sm:mb-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Objectif du projet :</h4>
                  <p className="leading-relaxed">{selectedProject.objective}</p>
                </div>

                <div className="p-3.5 sm:p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Fonctionnalités intégrées :</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#EBA818] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={buildWhatsAppLink(
                    `Bonjour Zoé Digitech, j'ai vu votre modèle "${selectedProject.title}" et je souhaite obtenir un devis pour mon entreprise.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1A659E] hover:bg-[#124C77] text-white text-xs sm:text-sm font-semibold transition-colors min-h-[44px] text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#EBA818]" />
                  <span>Vouloir la même solution</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
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
