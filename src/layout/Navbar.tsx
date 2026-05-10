import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import ButtonMenu from "../components/ButtonMenu";
import { Logo } from "../components/Logo";
import { useTheme } from "../hooks/useTheme";

const NavLinks = [
    { href: "#about", label: "À Propos" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Expérience" },
    // { href: "#testimonials", label: "Témoignages" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []) // Dépendances vides : n'exécuter qu'une fois au montage

    const handleNavClick = (hash: string) => {
        // Si on est sur /all-projects, naviguer vers l'accueil avec le hash
        if (location.pathname !== "/" && location.pathname !== "/portfolio") {
            navigate(`/${hash}`);
        } else {
            // Si on est déjà sur l'accueil, naviger vers le hash (ça triggerera le useScrollToHash)
            navigate(hash);
        }
    };

    const handleContactClick = () => {
        handleNavClick("#contact");
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "glass-strong py-3 backdrop-blur-md shadow-sm" : "bg-transparent py-5 backdrop-blur-none shadow-none"}`}>
            <nav className="container mx-auto px-6 flex items-center justify-between h-16">
                <Link to="/" className="flex items-center">
                    <Logo className="h-10 cursor-pointer" />
                </Link>

                {/* {DeskTop Nav} */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass-navbar rounded-full px-2 py-1 flex items-center gap-1">
                        {NavLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavClick(link.href)}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-colors duration-300 cursor-pointer bg-transparent border-none"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* {CTA Button & Theme Toggle} */}
                <div className="hidden md:flex items-center gap-3">
                    <Button onClick={handleContactClick} size="md" children="Me Contacter" className="focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25" />
                    
                    <button
                        onClick={toggleTheme}
                        aria-label="Basculer le mode clair/sombre"
                        className="p-2 rounded-full hover:bg-surface transition-colors duration-300 text-muted-foreground hover:text-foreground"
                    >
                        {isDark ? (
                            <Sun size={20} className="text-yellow-400" />
                        ) : (
                            <Moon size={20} className="text-blue-400" />
                        )}
                    </button>
                </div>

                {/* {Mobile Nav Bouton} */}
                <div className="md:hidden">
                    <ButtonMenu isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>
            </nav>

            {/* {Mobile Nav} */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {NavLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleNavClick(link.href);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-colors duration-300 px-4 py-2 text-left bg-transparent border-none cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="flex gap-3 mt-2">
                            <button
                                onClick={toggleTheme}
                                aria-label="Basculer le mode clair/sombre"
                                className="p-2 rounded-full hover:bg-surface transition-colors duration-300 text-muted-foreground hover:text-foreground"
                            >
                                {isDark ? (
                                    <Sun size={20} className="text-yellow-400" />
                                ) : (
                                    <Moon size={20} className="text-blue-400" />
                                )}
                            </button>
                            <Button onClick={() => { handleContactClick(); setIsMobileMenuOpen(false); }} size="md" children="Me Contacter" className="focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}