import SocialIcons from "../components/SocialIcon";
import { Logo } from "../components/Logo";

const footerLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="/" className="inline-flex items-center">
              <Logo />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Danos Espérant. Tous droits réservés.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
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
