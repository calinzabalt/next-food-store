import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-orange-500">NextFood</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium food delivery service bringing gourmet meals right to your doorstep. Fresh ingredients, expert chefs.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                {/* X Logo */}
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-orange-500 transition-colors cursor-pointer">Home</Link>
                            </li>
                            <li>
                                <Link href="/menu" className="hover:text-orange-500 transition-colors cursor-pointer">Menu</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-orange-500 transition-colors cursor-pointer">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-orange-500 transition-colors cursor-pointer">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="/faq" className="hover:text-orange-500 transition-colors cursor-pointer">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-orange-500 transition-colors cursor-pointer">Shipping Info</Link>
                            </li>
                            <li>
                                <Link href="/returns" className="hover:text-orange-500 transition-colors cursor-pointer">Returns</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-orange-500 transition-colors cursor-pointer">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white">Address:</span>
                                123 Gourmet Ave, Foodie City, NY 10012
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white">Phone:</span>
                                (555) 123-4567
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white">Email:</span>
                                hello@nextfood.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} NextFood Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
