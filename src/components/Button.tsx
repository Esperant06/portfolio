// src/components/Button.tsx
import React from "react";

type ButtonSize = "sm" | "md" | "lg" | "default";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "default",
  className = "",
  ...rest // ← on récupère type, disabled, onClick, etc.
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-full font-medium
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    shadow-lg transition-all duration-300 active:scale-[0.98]
  `;

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
    default: "px-7 py-3 text-base",
  };

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClasses}
      {...rest} // ← très important
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
