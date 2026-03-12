import herobg from "@/assets/herobg.jpg";
import Button from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import SocialIcons from "../components/SocialIcon";
import logo from "@/assets/logo.png";

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

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={herobg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Conteneur pour les points (position relative important !) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-navbar text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>{" "}
                Développeur Logiciel & Formateur
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-400">
                Construire des solutions{" "}
                <span className="text-primary glow-text">technologiques </span>
                <br />
                qui changent la<br />
                <span className="font-serif italic font-normal text-white">
                  pratique.
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animate-delay-600">
                Je développe des applications web et mobiles robustes, tout en partageant mon expertise
                avec les prochaines générations de développeurs.
              </p>
            </div>

            {/* Call to Action Buttons} */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-800">
              <Button size="md" className="btn btn-primary px-5 py-5">
                Me Contacter <ArrowRight size={16} />
              </Button>
              <AnimatedBorderButton size="md">
                Télécharger CV
                <Download size={16} />
              </AnimatedBorderButton>
            </div>

            {/* Social Media Links} */}
            <div className="flex items-center gap-4 mt-6 animate-fade-in animate-delay-1000">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              <SocialIcons />
            </div>
          </div>

          {/* Right Column - image profil} */}
          <div className="relative animate-fade-in animate-delay-400">
            {/* Image de profil ou illustration */}
            <div className="relative max-w-md mx-auto">
              {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse z-10"></div> */}
              <div className="relative glass-navbar rounded-3xl p-2 glow-border z-20">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full aspect-auto object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-navbar rounded-xl px-4 py-3 animation-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass-navbar rounded-xl px-4 py-3 animation-float animate-delay-500">
                  <div className="text-lg font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* { Skills Section } */}
        <div className="mt-20 animate-fade-in animate-delay-1200">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
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
    </section>
  );
};
