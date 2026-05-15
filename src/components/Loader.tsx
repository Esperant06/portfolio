export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="glass-navbar rounded-lg p-8 flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-foreground font-medium">Téléchargement en cours...</p>
      </div>
    </div>
  );
};
