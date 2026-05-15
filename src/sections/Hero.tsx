import herobg from "@/assets/herobg.jpg";
import Button from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import SocialIcons from "../components/SocialIcon";
import espa from "@/assets/espa.png";
import { useState } from "react";
import { Toast } from "../components/Toast";
import { Loader } from "../components/Loader";
import { useNavigate, useLocation } from "react-router-dom";
import { APP_CONFIG } from "../config/constants";

const skills = [
  "PHP",
  "JavaScript",
  "Dart",
  "Laravel",
  "CodeIgniter",
  "ReactJS",
  "Flutter",
  "MySQL",
  "PostgreSQL",
  "WordPress",
  "Bootstrap",
  "HTML/CSS",
  "Git",
  "Maintenance IT",
];

// Générer les données aléatoires en dehors du composant (une seule fois)
const generateRandomDots = () => {
  return [...Array(30)].map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));
};

export const Hero = () => {
  const [randomDots] = useState(() => generateRandomDots());
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    // Si on est sur /all-projects, naviguer vers l'accueil avec le hash
    if (location.pathname !== "/" && location.pathname !== "/portfolio") {
      navigate("/#contact");
    } else {
      // Si on est déjà sur l'accueil, naviger vers le hash
      navigate("#contact");
    }
  };

  const handleDownloadCV = async () => {
    try {
      setIsLoading(true);

      // Simuler un délai de téléchargement (pour voir le loader)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Créer un lien temporaire et déclencher le téléchargement
      const link = document.createElement("a");
      const cvPath = APP_CONFIG.BASE_PATH === '/' 
        ? '/cv.pdf' 
        : `${APP_CONFIG.BASE_PATH}/cv.pdf`;
      link.href = cvPath;
      link.download = "CV-Danos-Espérant.pdf";
      link.rel = "noopener noreferrer";
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Afficher le toast de succès
      setToast({ message: "CV téléchargé ✓", type: "success" });
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
      setToast({ message: "Erreur lors du téléchargement du CV", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/78 to-background" />
      </div>

      {/* Conteneur pour les points (position relative important !) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {randomDots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-35"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 pt-30 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text content} */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-navbar text-sm font-semibold text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>{" "}
                Développeur Full Stack Web & Mobile
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in animate-delay-400">
                Des applications{" "}
                <span className="text-primary glow-text">fiables </span>
                <br />
                utiles et prêtes pour la production.
                <br />
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl animate-fade-in animate-delay-600">
                Je transforme des besoins métier en interfaces claires et en solutions robustes avec
                Laravel, ReactJS, Flutter et des bases de données solides.
              </p>
            </div>

            {/* Call to Action Buttons} */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-800">
              <Button 
                onClick={handleContactClick}
                size="md" 
                className="h-12 min-w-44 bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20"
              >
                Me contacter <ArrowRight size={16} />
              </Button>
              <button
                onClick={handleDownloadCV}
                disabled={isLoading}
                className="disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                <AnimatedBorderButton
                  size="md"
                  className={`h-12 min-w-44 ${isLoading ? "opacity-50" : ""}`}
                >
                  {isLoading ? "Téléchargement..." : "Télécharger CV"}
                  <Download size={16} />
                </AnimatedBorderButton>
              </button>
            </div>

            {/* Social Media Links} */}
            <div className="flex items-center gap-4 mt-6 animate-fade-in animate-delay-1000">
              <span className="text-sm font-medium text-muted-foreground">Me suivre</span>
              <SocialIcons />
            </div>
          </div>

          {/* Right Column - image profil} */}
          <div className="relative animate-fade-in animate-delay-400">
            {/* Image de profil ou illustration */}
            <div className="relative max-w-md mx-auto">
              <div className="relative glass-navbar rounded-lg p-2 glow-border z-20">
                <img
                  src={espa}
                  alt="Logo"
                  className="w-full aspect-auto object-cover rounded-lg"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-navbar rounded-lg px-4 py-3 animation-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Disponible
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass-navbar rounded-lg px-4 py-3 animation-float animate-delay-500">
                  <div className="text-lg font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Année d'exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* { Skills Section } */}
        <div className="mt-20 animate-fade-in animate-delay-1200">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Stack technique principale
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-1400">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Loader */}
      {isLoading && <Loader />}
    </section>
  );
};
