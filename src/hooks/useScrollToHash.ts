import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personnalisé pour scroller vers une section basée sur le hash (#about, #experience, etc.)
 */
export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Extraire le hash de l'URL
    const hash = location.hash;

    if (hash) {
      // Attendre que le DOM soit rendu
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si pas de hash, scroller vers le haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
};
