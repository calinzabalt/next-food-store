'use client';

import { useCart } from '@/context/CartContext';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            clearCart();
            router.push('/order-complete');
        }, 1500);
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 pb-20">
                <Header />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                    <p className="text-gray-500 mb-8">Add some delicious food to your cart first.</p>
                    <Link href="/menu">
                        <Button>Browse Menu</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />
            <div className="container mx-auto px-4 py-10">
                <Link href="/menu" className="inline-flex items-center text-gray-500 hover:text-orange-600 mb-6 cursor-pointer">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Menu
                </Link>
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Delivery Details */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-6">Delivery Details</h2>
                            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <Input required placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <Input required placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                                    <Input required placeholder="123 Main St, Apt 4B" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <Input required placeholder="New York" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <Input required type="tel" placeholder="(555) 123-4567" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Payment Method (Mock) */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                            <div className="p-4 border rounded-lg bg-gray-50 text-gray-500 text-sm">
                                Cash on Delivery (Test Mode Only)
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                                {items.map((item) => (
                                    <div key={item.cartId} className="flex justify-between items-start text-sm">
                                        <div>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-gray-500 text-xs">Qty: {item.quantity}</div>
                                            {item.selectedModifiers.length > 0 && (
                                                <div className="text-gray-400 text-xs">
                                                    {item.selectedModifiers.map(m => m.name).join(', ')}
                                                </div>
                                            )}
                                        </div>
                                        <div className="font-semibold">
                                            ${((item.price + item.selectedModifiers.reduce((acc, m) => acc + m.price, 0)) * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Fee</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-2 mt-2">
                                    <span>Total</span>
                                    <span>${(cartTotal + 5).toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                form="checkout-form"
                                className="w-full mt-6"
                                size="lg"
                                isLoading={isSubmitting}
                            >
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
