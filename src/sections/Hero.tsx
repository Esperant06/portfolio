import herobg from "@/assets/herobg.jpg";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import SocialIcons from "../components/SocialIcon";
import logo from "@/assets/logo.png";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image + Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={herobg}
                    alt="Hero background"
                    className="w-full h-full object-cover opacity-30"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Conteneur pour les points (position relative important !) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(30)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Contenu principal */}
            <div className="container mx-auto px-6 pt-25 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text content} */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-navbar text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> Software Engineer - Dev Specialist
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-400">
                                Crafting <span className="text-primary glow-text">digital </span>
                                <br />experiences with <br />
                                <span className="font-serif italic font-normal text-white">precision.</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animate-delay-600">
                                I build responsive, accessible, and performant web applications using modern technologies.
                            </p>
                        </div>

                        {/* Call to Action Buttons} */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-800">
                            <Button size="md" className="btn btn-primary px-5 py-5">Contact Me <ArrowRight size={16} /></Button>
                            <AnimatedBorderButton size="md" children="Download CV" />
                        </div>

                        {/* Social Media Links} */}
                        <div className="flex items-center gap-4 mt-6 animate-fade-in animate-delay-1000">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            <SocialIcons />
                        </div>
                    </div>

                    {/* Right Column - image profil} */}
                    <div className="relative animate-fade-in animate-delay-400">
                        {/* Image de profil ou illustration */}
                        <div className="relative max-w-md mx-auto">
                            {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse z-10"></div> */}
                            <div className="relative glass-navbar rounded-3xl p-2 glow-border z-20">
                                <img src={logo} alt="Logo" className="w-full aspect-auto object-cover rounded-2xl" />
                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 glass-navbar rounded-xl px-4 py-3 animation-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass-navbar rounded-xl px-4 py-3">
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg font-bold">1+</div>
                                        <div className="text-xs text-muted-foreground">Years Exp.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}