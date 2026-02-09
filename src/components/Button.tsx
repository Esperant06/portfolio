type ButtonSize = 'sm' | 'md' | 'lg' | 'default';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({ children, className, size="default", onClick }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 shadow-lg transition-colors duration-300";
    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-8 py-4 text-lg",
        default: "px-6 py-3 text-base",
    }
    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${className || ""}`;
    return (
        <button
            onClick={onClick}
            className={combinedClasses}
        >
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    );
};

export default Button;