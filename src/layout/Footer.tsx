import SocialIcons from "../components/SocialIcon";
import { Logo } from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const footerLinks = [
  { hash: "#about", label: "À Propos" },
  { hash: "#projects", label: "Projets" },
  { hash: "#experience", label: "Expérience" },
  { hash: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    // Si on est sur /all-projects, naviguer vers l'accueil avec le hash
    if (location.pathname !== "/" && location.pathname !== "/portfolio") {
      navigate(`/${hash}`);
    } else {
      // Si on est déjà sur l'accueil, naviger vers le hash
      navigate(hash);
    }
  };

  return (
    <footer className="mt-25 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Danos Espérant. Tous droits réservés.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.hash}
                onClick={() => handleNavClick(link.hash)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};
