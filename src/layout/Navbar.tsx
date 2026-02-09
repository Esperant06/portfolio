import logo from "@/assets/logo.png";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]
export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent px-5">
            <nav className="container mx-auto px-6 flex items-center justify-between h-16">
                <a href="#">
                    <img src={logo} alt="Logo" className="h-10 mr-4" />
                </a>

                {/* {DeskTop Nav} */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass-navbar rounded-full px-2 py-1 flex items-center gap-1">
                        {NavLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* {CTA Button} */}
                <div className="hidden md:block">
                    <Button onClick={() => window.location.href = "#contact"} size="md" children="Contact Me" className="focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25" />
                </div>

                {/* {Mobile Nav Bouton} */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform duration-200"
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            {/* Icône Menu (hamburger) */}
                            <Menu
                                size={24}
                                className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                        ? "opacity-0 scale-75 rotate-90"
                                        : "opacity-100 scale-100 rotate-0"
                                    }`}
                            />

                            {/* Icône X (croix) */}
                            <X
                                size={24}
                                className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                        ? "opacity-100 scale-100 rotate-0"
                                        : "opacity-0 scale-75 -rotate-90"
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>
            
            {/* {Mobile Nav} */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {NavLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-colors duration-300 px-4 py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button onClick={() => window.location.href = "#contact"} size="md" children="Contact Me" className="focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25" />
                    </div>
                </div>
            )}
        </header>
    )
}