import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "d.esperant6@gmail.com",
    href: "mailto:d.esperant6@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 34 55 732 05",
    href: "tel:+261345573205",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Antsirabe, Madagascar",
    href: "https://maps.app.goo.gl/FxbSC6gwPqydiJe98",
  },
];

export const Contact = () => {
  const now = new Date();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuration EmailJS manquante.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: format(now, "EEEE d MMMM yyyy 'à' HH:mm", { locale: fr }),
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message envoyé avec succès ! Je reviens vers toi rapidement.",
      });
      setFormData({ name: "", email: "", message: "" });

      // Optionnel : effacer le message après 6 secondes
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 6000);
    } catch (err: any) {
      console.error("Erreur EmailJS :", err);
      setSubmitStatus({
        type: "error",
        message: err?.text || "Échec de l'envoi. Réessaie plus tard.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Contactez-Moi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Construisons ensemble{" "}
            <span className="font-serif italic font-normal text-white">
              quelque chose de fantastique.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Vous avez un projet en tête? J'aimerais bien l'entendre. Envoyez-moi un message
            et discutons comment nous pouvons travailler ensemble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-navbar p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ton nom..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ton@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Ton message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn btn-primary py-5"
                size="md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    Envoyer
                    <Send size={16} />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animate-delay-400">
            <div className="glass-navbar rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-navbar rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Actuellement Disponible</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Je suis ouvert à de nouveaux projets et opportunités de collaboration. 
                Que ce soit pour du développement web, mobile ou de la formation, 
                n'hésitez pas à me contacter pour discuter de vos besoins!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
