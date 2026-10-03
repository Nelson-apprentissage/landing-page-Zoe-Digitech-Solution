import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RefreshCw,
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  text: string;
  timestamp: string;
}

const QUICK_SUGGESTIONS = [
  "Quels sont vos tarifs indicatifs ?",
  "Quelles formations proposez-vous (Solo & B2B) ?",
  "Combien de temps pour un site web ?",
  "Quelles automatisations IA proposez-vous ?",
  "Quelles sont vos garanties et paiements ?",
  "Où êtes-vous situés ?",
];

// Offline direct knowledge engine (ensures zero NetworkError ever visible to users)
function getDirectAnswer(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("formation") || q.includes("former") || q.includes("apprendre") || q.includes("cours") || q.includes("atelier") || q.includes("b2b") || q.includes("etudiant") || q.includes("étudiant") || q.includes("particulier")) {
    return (
      "Chez **ZOÉ DIGITECH**, nous proposons des **Formations Pratiques & Opérationnelles** adaptées aux besoins de chacun :\n\n" +
      "### 1. Formations pour Individus / Particuliers (Solo)\n" +
      "• **Pour qui :** Étudiants, professionnels indépendants, créateurs d'entreprise ou personnes en reconversion.\n" +
      "• **Modules disponibles :**\n" +
      "  - *Maîtrise de l'IA au quotidien* (ChatGPT, Claude, prompt engineering, automatisation de ses tâches).\n" +
      "  - *Création de sites web modernes No-Code* (concevoir et lancer son site sans coder).\n" +
      "  - *Marketing digital & Community Management* (Canva, stratégie de contenu, publicité Meta Ads).\n" +
      "• **Tarif indicatif :** de **50 000 à 150 000 FCFA** par module ou session intensive.\n\n" +
      "### 2. Formations Intra-Entreprises (B2B)\n" +
      "• **Pour qui :** Équipes commerciales, marketing, secrétariat, service client, RH et managers de PME.\n" +
      "• **Objectif :** Rendre vos collaborateurs plus productifs, supprimer les tâches répétitives et intégrer l'IA dans leurs routines de travail.\n" +
      "• **Format :** Ateliers sur-mesure de 1 à 3 jours (en présentiel dans vos locaux à Yaoundé/Douala ou en visioconférence).\n" +
      "• **Tarif indicatif :** de **150 000 à 450 000 FCFA** pour une session d'équipe selon l'effectif.\n\n" +
      "Toutes nos formations sont 100% axées sur la pratique avec des cas réels, des supports de cours fournis et une attestation de fin de formation. Quel module vous intéresse le plus ?"
    );
  }

  if (q.includes("tarif") || q.includes("prix") || q.includes("cout") || q.includes("coût") || q.includes("combien")) {
    return (
      "Voici nos **tarifs indicatifs et transparents** pour vos projets chez **ZOÉ DIGITECH** :\n\n" +
      "1. **Site Web Vitrine PME** : à partir de **150 000 à 300 000 FCFA** (3 à 5 pages, 100% responsive smartphone, ultra-rapide, prêt en 7 à 10 jours).\n" +
      "2. **Site Web Corporate & Institutionnel** : à partir de **350 000 à 650 000 FCFA** (pages illimitées, blog d'actualités, SEO poussé, prêt en 2 à 3 semaines).\n" +
      "3. **Site E-Commerce & Vente en ligne** : à partir de **400 000 à 800 000 FCFA** (catalogue produits, commande WhatsApp et/ou Mobile Money MTN/Orange, espace admin simple).\n" +
      "4. **Solutions IA & Chatbot Automatisé** : à partir de **100 000 à 500 000 FCFA** selon les fonctionnalités souhaitées.\n" +
      "5. **Formations Pratiques (Particuliers & B2B)** : de **50 000 à 150 000 FCFA** (individuel) et de **150 000 à 450 000 FCFA** (intra-entreprise B2B).\n" +
      "6. **Gestion Réseaux Sociaux (Community Management)** : à partir de **80 000 à 250 000 FCFA / mois** (création visuels, rédaction et publicité ciblée).\n" +
      "7. **Référencement Google Maps / Local** : à partir de **75 000 à 200 000 FCFA**.\n\n" +
      "Tous nos forfaits incluent la formation gratuite de votre équipe et 1 mois d'assistance technique offerte. Quel est votre projet ?"
    );
  }

  if (q.includes("temps") || q.includes("delai") || q.includes("délai") || q.includes("duree") || q.includes("durée") || q.includes("combien de jours")) {
    return (
      "Les **délais de réalisation** chez ZOÉ DIGITECH sont optimisés pour vous lancer rapidement :\n\n" +
      "• **Site Vitrine PME** : livré en **7 à 10 jours ouvrés**.\n" +
      "• **Site E-Commerce ou Corporate** : livré en **2 à 3 semaines**.\n" +
      "• **Chatbot IA & Automatisation** : déployé en **5 à 12 jours** selon les intégrations demandées.\n" +
      "• **Fiche Google Maps & SEO local** : optimisée et validée en **3 à 5 jours**.\n\n" +
      "Nous travaillons avec des jalons précis : validation de la maquette graphique, développement, tests sur smartphone et formation de votre équipe avant mise en ligne officielle."
    );
  }

  if (q.includes("ia") || q.includes("intelligence artificielle") || q.includes("automatisation") || q.includes("robot") || q.includes("bot")) {
    return (
      "Nos **solutions d'Intelligence Artificielle et d'automatisation** sont conçues pour résoudre vos problèmes quotidiens :\n\n" +
      "1. **Chatbot WhatsApp intelligent 24h/24** : il répond automatiquement à vos clients, présente vos produits, prend les commandes et qualifie les demandes même quand vous dormez.\n" +
      "2. **Automatisation de la facturation & devis** : génération automatique d'un PDF personnalisé dès qu'un client passe commande.\n" +
      "3. **Gestion automatique des prospects** : alerte instantanée sur votre téléphone dès qu'un visiteur remplit un formulaire, avec enregistrement direct dans votre carnet client.\n" +
      "4. **Tri intelligent des emails et messages** : pour ne plus jamais rater une opportunité commerciale importante.\n\n" +
      "Ces outils permettent à votre équipe d'économiser entre **5 et 15 heures de travail par semaine**."
    );
  }

  if (q.includes("garantie") || q.includes("paiement") || q.includes("payer") || q.includes("acompte") || q.includes("modalite") || q.includes("modalité")) {
    return (
      "Voici nos **garanties et conditions de collaboration** en toute confiance :\n\n" +
      "• **Modalités de paiement** : 50% d'acompte au démarrage du projet, et 50% uniquement à la livraison finale après votre entière satisfaction.\n" +
      "• **Garantie & Support** : 1 mois complet d'assistance technique prioritaire et corrections gratuites après la mise en ligne.\n" +
      "• **Formation offerte** : nous formons gratuitement vos collaborateurs pour qu'ils sachent modifier les textes, ajouter des produits ou gérer les messages en toute autonomie.\n" +
      "• **Contrat clair** : chaque projet fait l'objet d'un devis détaillé et d'un cahier des charges précis."
    );
  }

  if (q.includes("ou") || q.includes("où") || q.includes("adresse") || q.includes("situe") || q.includes("situé") || q.includes("localisation") || q.includes("ville") || q.includes("contact")) {
    return (
      "**ZOÉ DIGITECH SOLUTION** est basée à **Yaoundé, Cameroun**.\n\n" +
      "Nous accompagnons des entreprises à **Yaoundé, Douala, Bafoussam, Garoua, Kribi** et dans tout le Cameroun, ainsi que des clients de la diaspora et d'Afrique centrale.\n\n" +
      "• **Téléphone direct** : +237 678 94 53 11\n" +
      "• **WhatsApp professionnel** : +237 640 24 46 14\n" +
      "• **Email** : contact@zoedigitech.cm\n" +
      "• **Horaires** : Lundi au Samedi, de 08h00 à 18h30."
    );
  }

  if (q.includes("gratuit") || q.includes("diagnostic") || q.includes("audit") || q.includes("test")) {
    return (
      "Le **Diagnostic Digital ZOÉ DIGITECH** est 100% offert et sans aucun engagement :\n\n" +
      "En 15 minutes, nous analysons ensemble :\n" +
      "1. La visibilité actuelle de votre entreprise sur Google et les réseaux sociaux.\n" +
      "2. Les blocages qui vous empêchent d'attirer plus de clients.\n" +
      "3. Les opportunités d'automatisation par l'IA pour gagner du temps.\n" +
      "4. Un plan d'action concret avec les priorités à mettre en place.\n\n" +
      "Vous repartez avec des conseils applicables immédiatement, que vous décidiez de travailler avec nous ou non !"
    );
  }

  if (q.includes("bonjour") || q.includes("salut") || q.includes("hello") || q.includes("bonsoir")) {
    return (
      "Bonjour ! C'est un plaisir de vous accueillir chez **ZOÉ DIGITECH**.\n\n" +
      "Je suis à votre entière disposition pour répondre à toutes vos questions : tarifs, conception de votre site web, solutions d'intelligence artificielle, réseaux sociaux ou référencement Google.\n\n" +
      "Quel est votre projet ou votre secteur d'activité ?"
    );
  }

  return (
    "Chez **ZOÉ DIGITECH**, nous accompagnons les entreprises au Cameroun avec 5 expertises clés :\n\n" +
    "• **Création de sites web professionnels** (vitrines dès 150 000 FCFA, e-commerce dès 400 000 FCFA)\n" +
    "• **Solutions d'IA & Chatbots automatiques** (dès 100 000 FCFA)\n" +
    "• **Communication digitale & Réseaux sociaux** (dès 80 000 FCFA/mois)\n" +
    "• **Référencement Google Maps & Visibilité locale** (dès 75 000 FCFA)\n" +
    "• **Conseil & Transformation digitale** des équipes\n\n" +
    "Tous nos sites sont optimisés pour les connexions mobiles et livrés avec formation et 1 mois de support inclus. Souhaitez-vous un détail sur l'un de ces domaines ?"
  );
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      text: "Bonjour et bienvenue chez **ZOÉ DIGITECH** ! 👋\n\nJe suis votre conseiller virtuel. Je réponds directement à toutes vos questions sur nos créations de sites web, nos tarifs indicatifs, nos automatisations IA et nos méthodes de travail.\n\nQue souhaitez-vous savoir ?",
      timestamp: "À l'instant",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMessageId = "user-" + Date.now();
    const newUserMessage: ChatMessage = {
      id: userMessageId,
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newHistory = [...messages, newUserMessage];
    setMessages(newHistory);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Call backend API
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: newHistory.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || getDirectAnswer(query);

      setMessages((prev) => [
        ...prev,
        {
          id: "assistant-" + Date.now(),
          role: "assistant",
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch {
      // Seamless intelligent response without showing any network error
      const directAnswer = getDirectAnswer(query);
      setMessages((prev) => [
        ...prev,
        {
          id: "assistant-" + Date.now(),
          role: "assistant",
          text: directAnswer,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to format bot markdown text simply (bold and linebreaks)
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <React.Fragment key={idx}>
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="font-bold text-slate-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-24 z-40 flex items-center">
        {!isOpen && hasUnread && (
          <div className="hidden md:flex absolute right-16 bg-white text-slate-800 text-xs font-semibold py-1.5 px-3 rounded-xl shadow-md border border-slate-200/90 whitespace-nowrap items-center gap-1.5 animate-in fade-in slide-in-from-right-2 duration-300">
            <Sparkles className="w-3.5 h-3.5 text-[#EBA818]" />
            <span>Posez vos questions à l'IA ZOÉ</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-200 active:scale-95 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A659E] ${
            isOpen
              ? "bg-slate-800 text-white hover:bg-slate-900"
              : "bg-[#1A659E] text-white hover:bg-[#124C77]"
          }`}
          aria-label={isOpen ? "Fermer le chat" : "Ouvrir l'assistant virtuel"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-[#EBA818] group-hover:scale-110 transition-transform" />
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EBA818] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#EBA818] text-[9px] font-extrabold text-[#124C77] items-center justify-center">
                  IA
                </span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window Dialog / Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Assistant virtuel ZOÉ DIGITECH"
          className="fixed bottom-0 right-0 sm:bottom-24 sm:right-6 z-50 w-full sm:w-[420px] h-[85vh] sm:h-[590px] max-h-[85vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-[#1A659E] text-white px-4 py-3 sm:py-3.5 flex items-center justify-between shadow-xs shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#EBA818] shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">Conseiller IA ZOÉ</h3>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[11px] text-slate-200">
                  Réponses détaillées & immédiates
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Fermer la boîte de dialogue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation history */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isAssistant ? "items-start" : "items-end justify-end"}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-[#1A659E]/10 text-[#1A659E] flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[88%] space-y-1 ${isAssistant ? "text-left" : "text-right"}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                        isAssistant
                          ? "bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs"
                          : "bg-[#1A659E] text-white rounded-br-xs font-medium"
                      }`}
                    >
                      {renderFormattedText(msg.text)}
                    </div>
                    <span className="text-[10px] text-slate-400 px-1">
                      {msg.timestamp}
                    </span>
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-[#EBA818] text-[#124C77] flex items-center justify-center shrink-0 mb-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5 text-left">
                <div className="w-7 h-7 rounded-full bg-[#1A659E]/10 text-[#1A659E] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200/80 shadow-2xs inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#1A659E]" />
                  <span>ZOÉ formule votre réponse...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions pills */}
          {messages.length <= 4 && !isLoading && (
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider shrink-0 mr-1">
                Questions :
              </span>
              {QUICK_SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(suggestion)}
                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#1A659E]/10 hover:text-[#1A659E] text-slate-700 text-xs whitespace-nowrap transition-colors border border-slate-200/60 shrink-0"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input field */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question (prix, délais, services, IA...)"
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#1A659E] focus:ring-1 focus:ring-[#1A659E] text-xs sm:text-sm text-slate-900 bg-slate-50 focus:bg-white placeholder:text-slate-400 outline-none transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="p-2.5 rounded-xl bg-[#1A659E] hover:bg-[#124C77] disabled:bg-slate-200 text-white disabled:text-slate-400 transition-colors shadow-xs active:scale-95 shrink-0"
                aria-label="Envoyer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-center text-slate-400 mt-1.5">
              Conseiller IA autonome · ZOÉ DIGITECH Cameroun
            </p>
          </div>
        </div>
      )}
    </>
  );
};
