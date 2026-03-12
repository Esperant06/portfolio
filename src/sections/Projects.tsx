import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Application de Gestion de Trésorerie",
    description:
      "Application web interne pour la Trésorerie Générale d'Antsirabe. Remplace 15 feuilles Excel et documents papier pour la gestion des opérations. Gain de temps estimé de 40% pour l'équipe.",
    image:
      "https://img.freepik.com/premium-photo/realtime-data-visualization-business-environment-financial-decisionmaking_145776-94462.jpg",
    tags: ["Laravel", "MySQL", "PHP", "Bootstrap"],
    link: "#",
    github: "#",
  },
  {
    title: "Site Simplifia - OpenData Madagascar",
    description:
      "Site WordPress pour OpenData Madagascar. Intégration de 8 nouvelles fonctionnalités, optimisation SEO complète et maintenance mensuelle. Gestion de contenu avancée et mise en page personnalisée.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.L57oSorqSAvOA7UalTBQfgHaEr?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["WordPress", "SEO", "HTML/CSS", "PHP"],
    link: "#",
    github: "#",
  },
  {
    title: "Plateforme de Formation Web",
    description:
      "Développement de contenu pédagogique et supports de formation pour Tia-Tech. Plateforme interactive pour l'enseignement de HTML, CSS, JavaScript, Bootstrap et ReactJS à plus de 50 apprenants.",
    image:
      "https://img.freepik.com/premium-photo/ai-writing-assistant-creative-writing-tool_145776-94463.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS"],
    link: "#",
    github: "#",
  },
  {
    title: "Application Mobile Flutter",
    description:
      "Application mobile multiplateforme développée avec Flutter et Dart. Interface utilisateur intuitive avec gestion d'état optimisée et intégration API backend personnalisée.",
    image:
      "https://img.freepik.com/premium-photo/team-collaboration-project-management-tool_145776-94464.jpg",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Travaux Récents
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Projets qui
            <span className="font-serif italic font-normal text-white">
              {" "}
              ont de l'impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            Une sélection de mes travaux récents, depuis les applications web complexes
            jusqu'aux outils innovants qui résolvent des problèmes réels.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-navbar rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animate-delay-500">
          <AnimatedBorderButton size="md">
            Voir Tous les Projets
            <ArrowUpRight size={16} />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
