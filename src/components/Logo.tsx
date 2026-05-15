export const Logo = ({ className = "" }) => {
  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 shrink-0">
        <div className="absolute inset-0 rounded-lg bg-primary/40 blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-lg border border-primary/30 bg-primary shadow-sm shadow-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
          <div className="absolute inset-x-1 top-1 h-px bg-white/35" />
          <div className="absolute -bottom-5 -right-4 h-12 w-12 rounded-full bg-white/15" />
          <span className="relative text-[0.68rem] font-bold text-primary-foreground">
            &lt;
          </span>
          <span className="relative -mt-1 text-lg font-extrabold leading-none text-primary-foreground">
            D.E
          </span>
          <span className="relative -mt-1 text-[0.68rem] font-bold text-primary-foreground">
            /&gt;
          </span>
        </div>
      </div>

      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-sm font-extrabold text-foreground">
          Danos Espérant
        </span>
      </div>
    </div>
  );
};
