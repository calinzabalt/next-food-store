'use client';

import { Product, Modifier, ModifierOption } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { X, Minus, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

interface ItemModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (product: Product, quantity: number, modifiers: any[]) => void;
}

export function ItemModal({ product, isOpen, onClose, onAddToCart }: ItemModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedModifiers, setSelectedModifiers] = useState<any[]>([]);

    // Reset state when product changes
    useEffect(() => {
        setQuantity(1);
        setSelectedModifiers([]);
        // Pre-select required single-select options (first option default)
        if (product.modifiers) {
            const initial: any[] = [];
            product.modifiers.forEach(mod => {
                if (mod.required && !mod.multiSelect && mod.options.length > 0) {
                    initial.push({
                        modifierId: mod.id,
                        optionId: mod.options[0].id,
                        name: `${mod.name}: ${mod.options[0].name}`,
                        price: mod.options[0].price
                    });
                }
            });
            setSelectedModifiers(initial);
        }
    }, [product]);

    if (!isOpen) return null;

    const handleModifierToggle = (mod: Modifier, opt: ModifierOption) => {
        if (mod.multiSelect) {
            // Toggle checkbox behavior
            setSelectedModifiers(prev => {
                const exists = prev.find(p => p.modifierId === mod.id && p.optionId === opt.id);
                if (exists) {
                    return prev.filter(p => !(p.modifierId === mod.id && p.optionId === opt.id));
                } else {
                    return [...prev, { modifierId: mod.id, optionId: opt.id, name: opt.name, price: opt.price }];
                }
            });
        } else {
            // Radio behavior
            setSelectedModifiers(prev => {
                const filtered = prev.filter(p => p.modifierId !== mod.id);
                return [...filtered, { modifierId: mod.id, optionId: opt.id, name: `${mod.name}: ${opt.name}`, price: opt.price }];
            });
        }
    };

    const currentPrice = (product.price + selectedModifiers.reduce((sum, m) => sum + m.price, 0)) * quantity;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Image */}
                <div className="relative h-64 w-full bg-gray-100 flex-shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-4 right-4 rounded-full h-8 w-8 bg-white/90 hover:bg-white"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="mb-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                            <div className="flex gap-2">
                                {product.isVegetarian && <Badge variant="veg">Veg</Badge>}
                                {product.isSpicy && <Badge variant="spicy">Spicy</Badge>}
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        {product.calories && <p className="text-sm text-gray-400 mt-1">{product.calories} kcal</p>}
                    </div>

                    {/* Modifiers */}
                    {product.modifiers?.map((mod) => (
                        <div key={mod.id} className="mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-gray-800">{mod.name}</h3>
                                {mod.required && <Badge variant="outline" className="text-[10px] uppercase">Required</Badge>}
                            </div>
                            <div className="space-y-3">
                                {mod.options.map((opt) => {
                                    const isSelected = selectedModifiers.some(s => s.modifierId === mod.id && s.optionId === opt.id);
                                    return (
                                        <label
                                            key={opt.id}
                                            className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-100 hover:border-gray-200'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-orange-500' : 'border-gray-300'}`}>
                                                    {isSelected && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />}
                                                </div>
                                                <span className="font-medium text-gray-700">{opt.name}</span>
                                            </div>
                                            <span className="text-gray-500">
                                                {opt.price > 0 ? `+$${opt.price.toFixed(2)}` : 'Free'}
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                onChange={() => handleModifierToggle(mod, opt)}
                                                checked={isSelected}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 bg-white border-t flex items-center justify-between gap-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                        <button
                            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow disabled:opacity-50"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                        >
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-bold text-lg min-w-[20px] text-center">{quantity}</span>
                        <button
                            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Add Button */}
                    <Button
                        className="flex-1 h-12 text-lg justify-between px-6"
                        onClick={() => onAddToCart(product, quantity, selectedModifiers)}
                    >
                        <span>Add to Order</span>
                        <span>${currentPrice.toFixed(2)}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
