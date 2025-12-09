'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';
import { useState } from 'react';

// NOTE: I need Input component. I'll create it quickly below or inline it if simple.
// I'll assume I can create it in the same step next.

export function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('newsletter_signup', email);
        setStatus('success');
        setEmail('');
    };

    return (
        <section className="py-20 bg-orange-500 text-white">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-md">
                        <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Hungry, Stay Updated</h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        Join our newsletter for exclusive offers, secret menu items, and chef's specials delivered to your inbox.
                    </p>

                    {status === 'success' ? (
                        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md border border-white/30">
                            <p className="font-bold text-lg">Thanks for subscribing! 🎉</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button variant="secondary" className="bg-gray-900 text-white border-0 hover:bg-gray-800">
                                Subscribe
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
