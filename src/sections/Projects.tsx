import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { allProjects } from "../data/projects";

// Afficher seulement les 4 premiers projets
const projects = allProjects.slice(0, 4);

export const Projects = () => {
  return (
    <section id="projects" className="pt-25 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase animate-fade-in">
            Travaux récents
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 animate-fade-in animate-delay-100 text-foreground">
            Des projets lisibles et mesurables.
          </h2>
          <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
            Une sélection de réalisations où l'objectif métier, la qualité du code et
            l'expérience utilisateur restent au même niveau d'exigence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-navbar rounded-lg overflow-hidden animate-fade-in md:row-span-1 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-70" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass-navbar hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass-navbar hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
          <Link to="/all-projects">
            <AnimatedBorderButton size="md">
              Voir tous les projets
              <ArrowUpRight size={16} />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
