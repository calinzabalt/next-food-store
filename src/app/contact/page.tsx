'use client';

import { Header } from "@/components/layout/Header";
import { StickyCart } from "@/components/layout/StickyCart";
import { Button } from "@/components/ui/button";
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
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />

            {/* Hero / Header */}
            <div className="bg-gray-900 text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
                    Have a question or want to book an event? We'd love to hear from you.
                </p>
            </div>

            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 z-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        {status === 'success' ? (
                            <div className="text-center py-20">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                                <p className="text-gray-500 mb-6">We'll get back to you shortly.</p>
                                <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <Input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                                    <textarea
                                        required
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 min-h-[160px] focus:ring-2 focus:ring-orange-500 focus:outline-none focus:bg-white transition-all"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="How can we help you today?"
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold shadow-lg shadow-orange-500/20" isLoading={status === 'submitting'}>
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Info Column: Map & Schedule */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sro!4v1655887208866!5m2!1sen!2sro"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl w-full h-full"
                            />
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Opening Hours
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-50 pb-2">
                                    <span className="font-medium">Monday - Friday</span>
                                    <span>10:00 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-50 pb-2">
                                    <span className="font-medium">Saturday</span>
                                    <span>11:00 AM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <span className="font-medium">Sunday</span>
                                    <span>11:00 AM - 10:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <StickyCart />
            {/* Footer is provided by layout */}
        </div>
    );
}
