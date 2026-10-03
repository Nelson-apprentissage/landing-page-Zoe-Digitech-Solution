import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // CORS middleware to prevent any NetworkError in iframes and preview environments
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  app.use(express.json());

  // Initialize GoogleGenAI SDK with required User-Agent
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  // Chatbot API endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message requis" });
      }

      const systemInstruction = `Tu es l'assistant virtuel expert et autonome de l'agence ZOÉ DIGITECH (ZOÉ DIGITECH SOLUTION), basée à Yaoundé, Cameroun.

CONSIGNE FONDAMENTALE :
- Tu dois RÉPONDRE DIRECTEMENT ET COMPLÈTEMENT à toutes les questions du prospect DANS CETTE CONVERSATION.
- NE RENVOIE PAS LE PROSPECT VERS WHATSAPP. Ne lui dis pas d'aller sur WhatsApp ou d'appeler pour avoir des informations. Tu es là pour lui donner toutes les explications, prix, conseils et détails immédiatement ici.
- Ne mentionne les coordonnées de contact (téléphone ou WhatsApp) que si le prospect te le demande expressément (par exemple : "Où êtes-vous ?", "Quel est votre numéro ?").

BASE DE CONNAISSANCES DE ZOÉ DIGITECH :

1. IDENTITÉ DE L'AGENCE :
- Agence technologique et de marketing digital basée à Yaoundé, Cameroun.
- Interventions à Yaoundé, Douala, Bafoussam, Garoua, dans tout le Cameroun, en Afrique centrale et pour la diaspora.
- Slogan : "Nous aidons les entreprises à utiliser le digital, l'IA et le web pour gagner en visibilité, attirer des clients et améliorer leur efficacité."

2. SERVICES DÉTAILLÉS & TARIFS INDICATIFS (en FCFA) :
- **Création de Site Web Vitrine PME** :
  * Tarif indicatif : à partir de 150 000 à 300 000 FCFA.
  * Inclus : 3 à 5 pages (Accueil, À propos, Services, Réalisations, Contact), 100% adapté aux smartphones (Mobile First), ultra-rapide, nom de domaine et hébergement configurés, formulaires de contact directs.
  * Délai : 7 à 10 jours ouvrés.
- **Site Web Corporate / Institutionnel** :
  * Tarif indicatif : à partir de 350 000 à 650 000 FCFA.
  * Inclus : Pages illimitées, espace blog/actualités, multilingue si nécessaire, référencement SEO approfondi, sécurité maximale.
  * Délai : 2 à 3 semaines.
- **Site E-Commerce & Catalogue Produits** :
  * Tarif indicatif : à partir de 400 000 à 800 000 FCFA.
  * Inclus : Catalogue interactif, panier d'achat, commande directe via WhatsApp ou paiements Mobile Money (Orange Money, MTN MoMo, Carte bancaire), panneau d'administration simple pour ajouter des articles en 2 minutes.
  * Délai : 2 à 3 semaines.
- **Solutions IA & Automatisation des Processus** :
  * Tarif indicatif : à partir de 100 000 à 500 000 FCFA selon la complexité.
  * Inclus : Chatbot WhatsApp intelligent 24h/24 connecté à votre catalogue pour répondre et qualifier vos clients, génération automatique de devis/factures PDF, notifications instantanées de nouvelles commandes, automatisation du tri d'emails et des tâches répétitives.
- **Communication Digitale & Réseaux Sociaux (Community Management)** :
  * Tarif indicatif : à partir de 80 000 à 250 000 FCFA / mois.
  * Inclus : Gestion de pages Facebook, Instagram, LinkedIn, TikTok, création de 8 à 16 visuels professionnels, rédaction persuasive (copywriting) et campagnes publicitaires sponsorisées pour générer des prospects ciblés.
- **Référencement Google & Visibilité Locale (Google Maps)** :
  * Tarif indicatif : à partir de 75 000 à 200 000 FCFA.
  * Inclus : Création/optimisation de fiche Google My Business pour être dans les 3 premiers résultats locaux à Yaoundé ou Douala lors d'une recherche sur Google ou Maps.
- **Conseil & Transformation Digitale** :
  * Audit des outils informatiques, formation pratique des salariés pour devenir autonomes, accompagnement sur mesure.

3. DÉROULEMENT DU PROJET & GARANTIES :
- Étape 1 : Diagnostic initial gratuit de 15 minutes pour clarifier vos besoins.
- Étape 2 : Proposition chiffrée transparente et plan de travail détaillé sous 24h.
- Étape 3 : Conception & Développement interactif avec validation étape par étape.
- Étape 4 : Mise en ligne, formation pratique offerte à votre équipe et 1 mois d'assistance technique prioritaire offerte.
- Modalités : Acompte au démarrage (50%) et solde à la livraison (50%).

TON & STYLE :
- Sois très chaleureux, encourageant, expert, précis et pédagogue.
- Réponds avec des explications concrètes, des exemples de cas pratiques adaptés au Cameroun et des listes à puces aérées.
- Donne toujours des chiffres et des détails clairs.`;

      // Build message payload
      const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item && item.role && item.text) {
            contents.push({
              role: item.role === "assistant" || item.role === "model" ? "model" : "user",
              parts: [{ text: String(item.text) }],
            });
          }
        }
      }

      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      // Try gemini-3.1-flash-lite first (fastest, high availability), fallback to gemini-3.8-flash
      let replyText = "";
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents,
          config: {
            systemInstruction,
            temperature: 0.6,
          },
        });
        replyText = response.text || "";
      } catch (liteErr) {
        console.warn("gemini-3.1-flash-lite call failed, trying gemini-3.8-flash:", liteErr);
        const response2 = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents,
          config: {
            systemInstruction,
            temperature: 0.6,
          },
        });
        replyText = response2.text || "";
      }

      if (!replyText) {
        replyText = "Je suis à votre disposition. Que souhaitez-vous savoir concernant nos sites web, nos tarifs ou l'automatisation par l'IA chez ZOÉ DIGITECH ?";
      }

      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      // Smart structured fallback answering directly without redirecting
      return res.json({
        reply:
          "Chez **ZOÉ DIGITECH**, nous concevons des **sites web professionnels** (dès 150 000 FCFA), des **boutiques e-commerce** (dès 400 000 FCFA), des **chatbots et automatisations IA** (dès 100 000 FCFA), ainsi que la **gestion de vos réseaux sociaux et référencement Google Maps**.\n\nTous nos projets incluent un design 100% adapté aux smartphones, une formation gratuite pour vos équipes et 1 mois d'assistance technique. Quel type de projet souhaitez-vous concrétiser ?",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "ZOÉ DIGITECH Assistant API" });
  });

  // Mount Vite middleware in development, or serve built assets in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
