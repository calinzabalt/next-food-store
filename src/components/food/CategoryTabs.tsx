'use client';

import { Category } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CategoryTabsProps {
    categories: Category[];
    activeId: string;
    onSelect: (id: string) => void;
}

export function CategoryTabs({ categories, activeId, onSelect }: CategoryTabsProps) {
    return (
        <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
            <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
                <div className="flex gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onSelect(category.id)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200",
                                activeId === category.id
                                    ? "bg-orange-500 text-white shadow-md transform scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
