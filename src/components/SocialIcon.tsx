import { Github, Linkedin, Facebook } from 'lucide-react';
import React from 'react';

const icons = {
    Github,
    Linkedin,
    Facebook,
} as const;

type SocialIconName = keyof typeof icons;

type Social = {
    icon: SocialIconName;
    url: string;
};

const socials: Social[] = [
    { icon: 'Github', url: 'https://github.com/Esperant06' },
    { icon: 'Linkedin', url: 'https://www.linkedin.com/in/esperant-xxx' },
    { icon: 'Facebook', url: 'https://facebook.com/esperant' },
];

const SocialIcons: React.FC = () => {
    return (
        <>
            {socials.map((social, index) => {
                const Icon = icons[social.icon];

                return (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Suivre sur ${social.icon}`}
                        className="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors p-2 rounded-full transition-all duration-300"
                    >
                        <Icon size={20} strokeWidth={2} className='w-5 h-5'/>
                    </a>
                );
            })}
        </>
    );
};

export default SocialIcons;