'use client';

import { Product } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ItemModal } from './ItemModal';
import { useCart } from '@/context/CartContext';
import { Badge } from '../ui/Badge';

interface DishCardProps {
    product: Product;
}

export function DishCard({ product }: DishCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = (item: Product, qty: number, mods: any[]) => {
        addToCart(item, qty, mods);
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-transparent hover:border-gray-100 cursor-pointer flex flex-col h-full"
                onClick={() => setIsModalOpen(true)}
            >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                        {product.isVegetarian && (
                            <Badge variant="veg" className="bg-white/90 backdrop-blur-sm shadow-sm">Veg</Badge>
                        )}
                        {product.isSpicy && (
                            <Badge variant="spicy" className="bg-white/90 backdrop-blur-sm shadow-sm">Spicy</Badge>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1 mb-4 flex-1">{product.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        <Button
                            size="icon"
                            className="h-8 w-8 rounded-full shadow-none"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent opening modal if clicking + (for simple add)
                                // For now, let's always open modal for better UX with modifiers
                                setIsModalOpen(true);
                            }}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <ItemModal
                product={product}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddToCart={handleAddToCart}
            />
        </>
    );
}
