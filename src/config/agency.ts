/**
 * Configuration centrale de l'agence ZOÉ DIGITECH
 * Modifiez facilement le numéro WhatsApp, les coordonnées et les réseaux sociaux ici.
 */

export const AGENCY_CONFIG = {
  name: "ZOÉ DIGITECH",
  fullName: "ZOÉ DIGITECH SOLUTION",
  tagline: "Nous aidons les entreprises à utiliser le digital, l'IA et le web pour gagner en visibilité, attirer des clients et améliorer leur efficacité.",
  
  // Coordonnées de contact
  phone: "+237 678 94 53 11",
  phoneRaw: "+237678945311",
  whatsapp: "+237 640 24 46 14",
  whatsappNumber: "237640244614",
  email: "contact@zoedigitech.cm",
  location: "Yaoundé, Cameroun",
  country: "Cameroun",
  coverage: "Basé à Yaoundé, Cameroun",
  
  // Heures de disponibilité
  hours: "Lun - Sam : 08h00 - 18h30 (Heure du Cameroun, GMT+1)",

  // Réseaux sociaux
  socials: {
    facebook: "https://facebook.com/zoedigitech",
    linkedin: "https://linkedin.com/company/zoedigitech",
    whatsapp: "https://wa.me/237640244614",
  },

  // Messages types WhatsApp
  defaultWhatsAppMessage: "Bonjour Zoé Digitech, je souhaite discuter de mon projet digital et bénéficier d'un diagnostic gratuit.",
  
  getServiceWhatsAppMessage: (serviceName: string) => {
    return `Bonjour Zoé Digitech, je suis intéressé(e) par votre service "${serviceName}". Pouvons-nous échanger sur mon besoin ?`;
  },
  
  getDiagnosticWhatsAppMessage: () => {
    return "Bonjour Zoé Digitech, je souhaite bénéficier de mon diagnostic digital gratuit pour mon entreprise.";
  },

  getQuoteWhatsAppMessage: (data: {
    name: string;
    company?: string;
    phone: string;
    service: string;
    budget?: string;
    description: string;
  }) => {
    return (
      `*Nouvelle demande via le site ZOÉ DIGITECH*\n\n` +
      `👤 *Nom :* ${data.name}\n` +
      `🏢 *Entreprise :* ${data.company || "Non renseignée"}\n` +
      `📞 *Contact :* ${data.phone}\n` +
      `🎯 *Service :* ${data.service}\n` +
      `💰 *Budget indicatif :* ${data.budget || "À évaluer ensemble"}\n` +
      `📝 *Projet :* ${data.description}`
    );
  },
};

export function buildWhatsAppLink(message?: string): string {
  const msg = message || AGENCY_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
