import { cn } from '@/lib/utils';
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'veg' | 'spicy';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: "bg-gray-100 text-gray-800",
        outline: "border border-gray-200 text-gray-800",
        veg: "bg-green-100 text-green-700 border-green-200",
        spicy: "bg-red-100 text-red-700 border-red-200",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-transparent",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
