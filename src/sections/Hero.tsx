import herobg from "@/assets/herobg.jpg";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

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
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text content} */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-navbar text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> Software Engineer - Dev Specialist
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-400">
                                Crafting <span className="text-primary glow-text">digital </span>
                                <br />experiences with <br />
                                <span className="font-serif italic font-normal text-white">precision.</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animate-delay-600">
                                I build responsive, accessible, and performant web applications using modern technologies.
                            </p>
                        </div>

                        {/* Call to Action Buttons} */}
                        <div>
                            <Button size="md" className="btn btn-primary px-5 py-5 animate-fade-in animate-delay-800">Contact Me <ArrowRight size={16}/></Button>
                            <AnimatedBorderButton size="md" children="Download CV" className="ml-5" />
                        </div>
                    </div>
                    {/* Right Column - image profil} */}
                </div>
            </div>
        </section>
    )
}