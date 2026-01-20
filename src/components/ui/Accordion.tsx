"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    className?: string;
}

export function AccordionItem({ title, children, isOpen, onClick, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b border-gray-100 last:border-0", className)}>
            <button
                className="w-full py-4 text-left flex items-center justify-between focus:outline-none group"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-gray-800 group-hover:text-amber-500 transition-colors">
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                )}
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                )}
            >
                <div className="text-gray-600 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
    allowMultiple?: boolean;
    className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndexes(prev => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className={cn("bg-white rounded-xl shadow-sm border border-gray-100 px-6", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => toggleItem(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
