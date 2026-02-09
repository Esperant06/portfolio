// src/components/ButtonMenu.tsx
import { Menu, X } from 'lucide-react';

interface ButtonMenuProps {
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ isOpen, onToggle, className = '' }) => {
    return (
        <button
            onClick={onToggle}
            className={`p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform duration-200 cursor-pointer ${className}`}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
        >
            <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Icône Menu (hamburger) */}
                <Menu
                    size={24}
                    className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
                        }`}
                />

                {/* Icône X (croix) */}
                <X
                    size={24}
                    className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
                        }`}
                />
            </div>
        </button>
    );
};

export default ButtonMenu;