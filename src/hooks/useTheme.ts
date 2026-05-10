import { useEffect, useState } from 'react';

/**
 * Hook personnalisé pour gérer le mode clair/sombre
 * Sauvegarde la préférence dans localStorage
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Vérifier d'abord le localStorage
    const saved = localStorage.getItem('theme-mode');
    if (saved) {
      return saved === 'dark';
    }
    
    // Sinon vérifier la préférence système
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Appliquer le thème au DOM
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};
