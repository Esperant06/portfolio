import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code Propre",
    description:
      "Ecrire du code maintenable et scalable qui résiste à l'épreuve du temps.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimiser pour la vitesse et livrer des expériences utilisateur ultra-rapides.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travailler à proximité avec les équipes pour concriser les idées.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Rester en avance avec les dernières technologies et les meilleures pratiques.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* {Left column} */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase">À Propos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-200 text-secondary-foreground">
              Développeur passionné,
              <span className="font-serif italic font-normal text-white">
                {" "}
                formateur engagé.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Diplômé d'un Master en Génie Logiciel, j'ai commencé ma carrière en formant plus de 50 apprenants aux technologies web modernes. Depuis, j'ai eu l'opportunité de travailler sur des projets variés : de la gestion de projets digitaux à la développement d'applications internes complexes.
              </p>
              <p>
                Actuellement stagiaire à la Trésorerie Générale d'Antsirabe, je développe une application web (Laravel + MySQL) qui remplace 15 feuilles Excel et documents papier, offrant un gain de temps de 40% pour l'équipe. Je maîtrises PHP, JavaScript, Dart et des frameworks comme Laravel, ReactJS et Flutter.
              </p>
              <p>
                Ma passion réside dans la création de solutions techniques robustes et dans le partage de mon savoir avec la communauté. En dehors du code, vous me trouverez en trail ou en train de jouer aux jeux vidéo.
              </p>
            </div>

            <div className="glass-navbar rounded-2xl p-6 glow-text animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mon objectif est de créer des solutions technologiques qui simplifient la vie des gens
                et d'inspirer la prochaine génération de développeurs à atteindre leurs rves."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-navbar p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
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