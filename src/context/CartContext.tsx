'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '@/lib/types';

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity: number, modifiers: any[]) => void;
    removeFromCart: (cartId: string) => void;
    updateQuantity: (cartId: string, delta: number) => void;
    clearCart: () => void;
    checkout: () => void;
    cartTotal: number;
    cartCount: number;
    openCart: () => void;
    closeCart: () => void;
    isCartOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from LocalStorage on mount
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('food-cart');
            if (savedCart) {
                setItems(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error('Failed to load cart from localStorage:', error);
        }
    }, []);

    // Save to LocalStorage whenever items change
    useEffect(() => {
        try {
            localStorage.setItem('food-cart', JSON.stringify(items));
        } catch (error) {
            console.error('Failed to save cart to localStorage:', error);
        }
    }, [items]);

    const addToCart = (product: Product, quantity: number, modifiers: any[] = []) => {
        // Generate a unique ID based on product ID and selected modifiers
        // This allows same product with different modifiers to be separate items
        const modifierString = modifiers
            .map((m) => m.optionId)
            .sort()
            .join('-');
        const cartId = `${product.id}-${modifierString}`;

        setItems((prev) => {
            const existingItem = prev.find((item) => item.cartId === cartId);
            if (existingItem) {
                return prev.map((item) =>
                    item.cartId === cartId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [
                ...prev,
                {
                    ...product,
                    cartId,
                    quantity,
                    selectedModifiers: modifiers,
                },
            ];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (cartId: string) => {
        setItems((prev) => prev.filter((item) => item.cartId !== cartId));
    };

    const updateQuantity = (cartId: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.cartId === cartId) {
                    const newQuantity = item.quantity + delta;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const checkout = () => {
        clearCart();
        setIsCartOpen(false);
    };

    const cartTotal = items.reduce((total, item) => {
        const modifierTotal = item.selectedModifiers.reduce((sum, mod) => sum + mod.price, 0);
        return total + (item.price + modifierTotal) * item.quantity;
    }, 0);

    const cartCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                checkout,
                cartTotal,
                cartCount,
                openCart: () => setIsCartOpen(true),
                closeCart: () => setIsCartOpen(false),
                isCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
