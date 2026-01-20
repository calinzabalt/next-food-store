import { Header } from "@/components/layout/Header";
import { Lock, Eye, FileText, Cookie, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-slate-700 text-white pt-32 pb-16 px-4">
                    <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
                        <div className="inline-flex items-center justify-center p-3 bg-slate-600/50 backdrop-blur-sm rounded-full mb-6">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                            Your trust is our priority. We are committed to transparency in how we collect and use your data.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in-up delay-100">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">

                        {/* Sidebar Navigation (Desktop) */}
                        <div className="w-full md:w-64 bg-slate-50 p-6 border-b md:border-b-0 md:border-r border-gray-100">
                            <div className="sticky top-24">
                                <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Contents</h3>
                                <nav className="space-y-2">
                                    <a href="#collection" className="block text-gray-600 hover:text-amber-500 text-sm py-1 transition-colors">Data Collection</a>
                                    <a href="#usage" className="block text-gray-600 hover:text-amber-500 text-sm py-1 transition-colors">How We Use Data</a>
                                    <a href="#security" className="block text-gray-600 hover:text-amber-500 text-sm py-1 transition-colors">Security</a>
                                    <a href="#cookies" className="block text-gray-600 hover:text-amber-500 text-sm py-1 transition-colors">Cookies</a>
                                    <a href="#contact" className="block text-gray-600 hover:text-amber-500 text-sm py-1 transition-colors">Contact Us</a>
                                </nav>
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <p className="text-xs text-gray-500">Last Updated:<br />December 12, 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8 md:p-12 prose prose-slate max-w-none">
                            <section id="collection" className="mb-12 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="text-amber-500 w-6 h-6" />
                                    <h2 className="text-2xl font-bold m-0">1. Information We Collect</h2>
                                </div>
                                <p>We collect information you provide directly to us when you use our services. This includes:</p>
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></div>
                                        <span><strong>Account Information:</strong> Name, email address, password, and phone number.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></div>
                                        <span><strong>Delivery Information:</strong> Physical delivery address and special instructions.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></div>
                                        <span><strong>Payment Information:</strong> We do not store full credit card numbers. All payments are processed by secure third-party providers (Stripe/PayPal).</span>
                                    </li>
                                </ul>
                            </section>

                            <section id="usage" className="mb-12 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye className="text-amber-500 w-6 h-6" />
                                    <h2 className="text-2xl font-bold m-0">2. How We Use Your Information</h2>
                                </div>
                                <p>We use the information we collect to:</p>
                                <ul>
                                    <li>Process and deliver your orders.</li>
                                    <li>Send you transaction confirmations and delivery updates.</li>
                                    <li>Improve our menu and app interface based on user preferences.</li>
                                    <li>Detect and prevent fraud.</li>
                                </ul>
                            </section>

                            <section id="security" className="mb-12 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="text-amber-500 w-6 h-6" />
                                    <h2 className="text-2xl font-bold m-0">3. Data Security</h2>
                                </div>
                                <p>
                                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use SSL encryption for all data transmission.
                                </p>
                            </section>

                            <section id="cookies" className="mb-12 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4">
                                    <Cookie className="text-amber-500 w-6 h-6" />
                                    <h2 className="text-2xl font-bold m-0">4. Cookies & Tracking</h2>
                                </div>
                                <p>
                                    We use cookies to improve your experience. These small text files help us remember your cart items and keep you signed in. You can control cookie preferences through your browser settings.
                                </p>
                            </section>

                            <section id="contact" className="scroll-mt-24 pt-8 border-t border-gray-100">
                                <h3 className="text-lg font-bold mb-4">Have questions regarding this policy?</h3>
                                <p className="mb-4">
                                    If you have any questions or concerns about our privacy practices, please contact our Data Protection Officer.
                                </p>
                                <a href="mailto:privacy@nextfood.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 transition-colors">
                                    Contact Privacy Team
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
