export const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Background gradient circle */}
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/80 to-primary/60 rounded-lg blur-sm opacity-75"></div>
        
        {/* Text container */}
        <div className="relative bg-linear-to-br from-primary/90 via-primary to-primary/80 rounded-lg px-3 py-2 min-w-11 h-10 flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
          <span className="text-lg font-bold text-white tracking-tight">ED</span>
        </div>
      </div>
      
      {/* Optional: Add subtle accent line */}
      <div className="hidden sm:block h-6 w-0.5 bg-linear-to-b from-primary/60 to-transparent rounded-full"></div>
    </div>
  );
};
