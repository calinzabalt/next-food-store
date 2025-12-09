'use client';

import { Header } from "@/components/layout/Header";
import { StickyCart } from "@/components/layout/StickyCart";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState, useEffect } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    // Load draft from local storage
    useEffect(() => {
        const saved = localStorage.getItem('contact-draft');
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch (e) { }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('contact-draft', JSON.stringify(formData));
    }, [formData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            localStorage.removeItem('contact-draft');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto px-4 py-20 max-w-2xl">
                <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                <p className="text-gray-500 mb-10">We'd love to hear from you. Send us a message!</p>

                <div className="bg-white p-8 rounded-2xl shadow-sm border">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                            <p className="text-gray-500">We'll get back to you shortly.</p>
                            <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <Input
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <Input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    required
                                    className="w-full rounded-md border border-gray-200 p-3 min-h-[150px] focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="How can we help?"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full" isLoading={status === 'submitting'}>
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
            <StickyCart />
        </div>
    );
}
