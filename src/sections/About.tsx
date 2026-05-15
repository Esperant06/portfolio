import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code propre",
    description:
      "Écrire du code maintenable, lisible et prêt à évoluer avec le produit.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimiser les parcours pour livrer des expériences rapides et stables.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travailler avec les équipes pour transformer les idées en résultats concrets.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Choisir les bonnes pratiques et les technologies adaptées au besoin réel.",
  },
];

export const About = () => {
  return (
    <section id="about" className="pt-25 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* {Left column} */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">À propos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fade-in animate-delay-200 text-foreground">
              Profil technique orienté impact
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Diplômé d'un Master en Génie Logiciel, j'ai construit un profil hybride entre développement web, applications mobiles et gestion de projets digitaux.
              </p>
              <p>
                Actuellement stagiaire à la Trésorerie Générale d'Antsirabe, je développe une application web Laravel + MySQL qui remplace 15 feuilles Excel et documents papier, avec un gain de temps estimé à 40% pour l'équipe.
              </p>
              <p>
                Je maîtrise PHP, JavaScript, Dart et des frameworks comme Laravel, ReactJS et Flutter. Mon objectif est de livrer des solutions utiles, propres et faciles à reprendre par une équipe.
              </p>
            </div>

            <div className="glass-navbar rounded-lg p-6 glow-text animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Créer des outils qui réduisent la friction, rendent le travail plus clair et aident les équipes à avancer plus vite."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-navbar p-6 rounded-lg animate-fade-in hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
