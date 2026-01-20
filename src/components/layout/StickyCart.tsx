'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import Link from 'next/link';

export function StickyCart() {
    const { isCartOpen, closeCart, items, cartTotal, updateQuantity, removeFromCart, checkout } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                onClick={closeCart}
            />

            {/* Cart Drawer */}
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold">Your Order</h2>
                    <Button variant="ghost" size="icon" onClick={closeCart}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                            <ShoppingBag className="h-12 w-12 mb-4 opacity-50" />
                            <p className="text-lg font-medium">Your cart is empty</p>
                            <p className="text-sm">Add some delicious food to get started!</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.cartId} className="flex gap-4 p-3 bg-gray-50 rounded-xl">
                                <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        {item.selectedModifiers.map(m => m.name).join(', ')}
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="font-medium text-orange-600">
                                            ${((item.price + item.selectedModifiers.reduce((a, b) => a + b.price, 0)) * item.quantity).toFixed(2)}
                                        </p>
                                        <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm border">
                                            <button
                                                className="p-1 hover:text-orange-600 disabled:opacity-50"
                                                onClick={() => updateQuantity(item.cartId, -1)}
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                            <button
                                                className="p-1 hover:text-orange-600"
                                                onClick={() => updateQuantity(item.cartId, 1)}
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.cartId)}
                                    className="text-gray-400 hover:text-red-500 self-start"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-4 border-t bg-white safe-area-bottom">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-2xl font-bold">${cartTotal.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout" onClick={closeCart}>
                            <Button className="w-full h-14 text-lg">
                                Checkout
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
