import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

// NOTE: We need class-variance-authority installed.
// I'll install it if missing, but it was in the boilerplate in previous check.
// Wait, create-next-app with typescript usually doesn't include cva by default unless shadcn is used.
// I better install `class-variance-authority` and `@radix-ui/react-slot` if I want to use this pattern.
// Checking package.json... I only installed lucide-react clsx tailwind-merge.
// I need: class-variance-authority, @radix-ui/react-slot.

// For now, I will write a simpler Button without cva/radix to avoid extra installs and keep it lightweight unless I add them.
// "Vanilla" Tailwind Button.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 duration-200";

        const variants = {
            primary: "bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500 shadow-md hover:shadow-lg",
            secondary: "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 shadow-sm",
            outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
            ghost: "hover:bg-gray-100 text-gray-600",
            danger: "bg-red-500 text-white hover:bg-red-600",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
            icon: "h-10 w-10 p-2",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
