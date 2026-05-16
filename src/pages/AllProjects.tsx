import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";

export const AllProjects = () => {
  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 top-28 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with back button */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group animate-fade-in"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight animate-fade-in text-foreground">
              Tous mes projets <br />Une sélection complète de mes travaux
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-width animate-fade-in">
              Découvrez l'ensemble de mes réalisations, des applications web aux solutions mobiles,
              avec un regard sur les enjeux métier, la maintenabilité et l'expérience utilisateur.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-navbar rounded-lg overflow-hidden animate-fade-in hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
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
                    className="p-3 rounded-full glass-navbar hover:bg-primary hover:text-primary-foreground transition-all"
                    title="Voir le projet"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass-navbar hover:bg-primary hover:text-primary-foreground transition-all"
                    title="Code source"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-border/30 text-center">
          <div className="text-muted-foreground">
            <p className="text-lg">
              <span className="text-primary font-semibold text-2xl">{allProjects.length}</span> projets
              {" "}
              réalisés avec exigence et sens du détail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
