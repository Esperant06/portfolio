import logo from "@/assets/logo.png";
import Button from "../components/Button";

const NavLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]
export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent px-5">
            <nav className="container mx-auto px-6 flex items-center justify-between h-16">
                <a href="#">
                    <img src={logo} alt="Logo" className="h-10 mr-4" />
                </a>

                {/* {DeskTop Nav} */}
                <div className="flex items-center gap-1">
                    <div className="glass-navbar rounded-full px-2 py-1 flex items-center gap-1">
                        {NavLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* {CTA Button} */}
                <Button onClick={() => window.location.href = "#contact"} size="md" children="Contact Me" />
            </nav>
        </header>
    )
}