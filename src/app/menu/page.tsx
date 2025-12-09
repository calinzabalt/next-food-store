'use client';

import { Header } from '@/components/layout/Header';
import { StickyCart } from '@/components/layout/StickyCart';
import { CategoryTabs } from '@/components/food/CategoryTabs';
import { DishCard } from '@/components/food/DishCard';
import { categories, products } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);

    const scrollToCategory = (id: string) => {
        setActiveCategory(id);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140; // Approx height of Header + Tabs
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />
            <CategoryTabs
                categories={categories}
                activeId={activeCategory}
                onSelect={scrollToCategory}
            />

            <div className="container mx-auto px-4 py-8 space-y-16">
                {categories.map((category) => {
                    const categoryProducts = products.filter(p => p.categoryId === category.id);
                    if (categoryProducts.length === 0) return null;

                    return (
                        <section key={category.id} id={category.id} className="scroll-mt-40">
                            <div className="flex items-end gap-4 mb-6 border-b pb-2">
                                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                                <span className="text-gray-400 font-medium pb-1">{categoryProducts.length} items</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {categoryProducts.map((product) => (
                                    <DishCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            <StickyCart />
        </div>
    );
}
