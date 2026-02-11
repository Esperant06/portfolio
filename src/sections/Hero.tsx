import herobg from "@/assets/herobg.jpg";
export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={herobg} alt="Hero image" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
            </div>

            {/* primary Dots */}
            <div>
                {[...Array(30)].map((_, index) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                        backgroundColor: `var(--color-primary)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}></div>
                ))}
            </div>
        </section>
    )
}