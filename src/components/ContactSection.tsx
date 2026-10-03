import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";
import { AGENCY_CONFIG, buildWhatsAppLink } from "../config/agency";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "Création de site web",
    budget: "Moins de 200 000 FCFA",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const servicesList = [
    "Création de site web professionnel",
    "Automatisation & Assistant IA",
    "Communication digitale & réseaux sociaux",
    "Référencement SEO & Google Maps (GEO)",
    "Digitalisation des processus",
    "Autre projet ou diagnostic global",
  ];

  const budgetOptions = [
    "Moins de 200 000 FCFA",
    "200 000 - 500 000 FCFA",
    "500 000 - 1 500 000 FCFA",
    "Plus de 1 500 000 FCFA",
    "À déterminer selon le diagnostic",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Veuillez renseigner votre nom et votre numéro de téléphone / WhatsApp.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);

    // Prepare WhatsApp handover
    const formattedMessage = AGENCY_CONFIG.getQuoteWhatsAppMessage({
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      description: formData.description || "Demande de renseignements et devis",
    });

    // Optionally auto-open WhatsApp or let the user click the confirmation button
    const waUrl = buildWhatsAppLink(formattedMessage);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EBA818] mb-2 font-mono">
            Contact & Devis Gratuit
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123952] tracking-tight text-balance">
            Parlons de votre projet en toute simplicité
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Remplissez ce court formulaire ou contactez-nous directement par WhatsApp pour une
            réponse immédiate de notre équipe à Yaoundé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-[#123952] mb-6">
                Nos coordonnées
              </h3>

              <div className="space-y-5 text-sm">
                {/* WhatsApp */}
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-50/60 hover:bg-emerald-50 border border-emerald-200/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      WhatsApp officiel
                    </p>
                    <p className="font-bold text-slate-900 group-hover:text-emerald-700">
                      {AGENCY_CONFIG.whatsapp}
                    </p>
                    <p className="text-xs text-slate-500">Cliquer pour démarrer la discussion directe</p>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#123952]/5 text-[#123952] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Téléphone direct</p>
                    <p className="font-semibold text-slate-900">{AGENCY_CONFIG.phone}</p>
                    <p className="text-xs text-slate-500">Appel vocal direct (Cameroun)</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#123952]/5 text-[#123952] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email professionnel</p>
                    <p className="font-semibold text-slate-900">{AGENCY_CONFIG.email}</p>
                    <p className="text-xs text-slate-500">Pour dossiers d'appels d'offres</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-[#123952]/5 text-[#123952] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Localisation</p>
                    <p className="font-semibold text-slate-900">{AGENCY_CONFIG.location}</p>
                    <p className="text-xs text-slate-500">{AGENCY_CONFIG.coverage}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-[#123952]/5 text-[#123952] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Horaires de bureau</p>
                    <p className="font-semibold text-slate-900">{AGENCY_CONFIG.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Suivez ZOÉ DIGITECH :
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={AGENCY_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:text-[#123952] hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href={AGENCY_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:text-[#123952] hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href={AGENCY_CONFIG.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:text-[#123952] hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-[#123952] mb-2">
                Demander mon devis gratuit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Remplissez ce formulaire. Votre demande sera transmise instantanément à un conseiller.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 mb-1">
                    Merci {formData.name} ! Votre demande a été préparée.
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mb-5 max-w-md mx-auto">
                    Si votre application WhatsApp ne s'est pas ouverte automatiquement, cliquez
                    sur le bouton ci-dessous pour transmettre directement votre récapitulatif :
                  </p>
                  <a
                    href={buildWhatsAppLink(
                      AGENCY_CONFIG.getQuoteWhatsAppMessage({
                        name: formData.name,
                        company: formData.company,
                        phone: formData.phone,
                        service: formData.service,
                        budget: formData.budget,
                        description: formData.description,
                      })
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#123952] hover:bg-[#0A2234] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EBA818]" />
                    <span>Envoyer maintenant sur WhatsApp</span>
                  </a>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Modifier mes informations
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-50 text-rose-800 text-xs font-medium border border-rose-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nom */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                        Votre nom complet <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Ex: Alain Mbarga"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#123952] focus:ring-1 focus:ring-[#123952] text-sm text-slate-900 bg-white"
                      />
                    </div>

                    {/* Entreprise */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1">
                        Nom de votre entreprise / projet
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Ex: Clinique Saint-Luc, Boutique Z..."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#123952] focus:ring-1 focus:ring-[#123952] text-sm text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Téléphone / WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Téléphone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Ex: +237 6XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#123952] focus:ring-1 focus:ring-[#123952] text-sm text-slate-900 bg-white"
                      />
                    </div>

                    {/* Service recherché */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-700 mb-1">
                        Service recherché
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#123952] focus:ring-1 focus:ring-[#123952] text-sm text-slate-900 bg-white"
                      >
                        {servicesList.map((srv, i) => (
                          <option key={i} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget indicatif */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold text-slate-700 mb-1">
                      Budget indicatif (FCFA)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#123952] focus:ring-1 focus:ring-[#123952] text-sm text-slate-900 bg-white"
                    >
                      {budgetOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description du projet */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-bold text-slate-700 mb-1">
                      Description de votre projet ou besoin
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      placeholder="Expliquez brièvement votre activité et ce que vous souhaitez accomplir (ex: attirer plus de clients, refondre notre site, automatiser nos commandes WhatsApp...)"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#123952] focus:ring-1 focus:ring-[#123952] text-sm text-slate-900 bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#123952] hover:bg-[#0A2234] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4 text-[#EBA818]" />
                      <span>Envoyer ma demande</span>
                    </button>
                    <p className="mt-2 text-center text-[11px] text-slate-500">
                      Vos informations restent confidentielles et ne sont jamais partagées.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
