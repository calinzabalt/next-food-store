import { Header } from "@/components/layout/Header";
import { HeartHandshake, AlertTriangle, RefreshCcw, PhoneCall } from "lucide-react";

export default function ReturnsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-rose-500 text-white pt-32 pb-16 px-4">
                    <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
                        <div className="inline-flex items-center justify-center p-3 bg-rose-400/30 backdrop-blur-sm rounded-full mb-6">
                            <HeartHandshake className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Returns & Refunds</h1>
                        <p className="text-xl text-rose-100 max-w-2xl mx-auto">
                            We don't just deliver food; we deliver happiness. If something isn't right, we'll make it right. Guaranteed.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 max-w-4xl space-y-12 animate-fade-in-up delay-100">

                    {/* Policy Overview */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <h2 className="text-2xl font-bold mb-4">Our Quality Promise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Because we deal with perishable food items, we cannot accept returns of food products. However, your satisfaction is our top priority. If your meal is incorrect, damaged, or not up to our high standards, we will offer a full refund or a replacement meal immediately.
                        </p>
                    </div>

                    {/* How to Report - Steps */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-center">Something wrong? Here's what to do:</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="relative">
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6 font-bold text-xl">1</div>
                                    <AlertTriangle className="w-10 h-10 text-gray-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-2">Report the Issue</h3>
                                    <p className="text-gray-500 text-sm">Contact us within 30 minutes of delivery if there's a problem with your order.</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                            </div>

                            <div className="relative">
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6 font-bold text-xl">2</div>
                                    <PhoneCall className="w-10 h-10 text-gray-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-2">We'll Verify</h3>
                                    <p className="text-gray-500 text-sm">Our support team will quickly verify your issue. We may ask for a photo for quality control.</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                            </div>

                            <div className="relative">
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6 font-bold text-xl">3</div>
                                    <RefreshCcw className="w-10 h-10 text-gray-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-2">Instant Solution</h3>
                                    <p className="text-gray-500 text-sm">We'll process a full refund to your original payment method or dispatch a fresh replacement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Cancellations */}
                    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-white p-4 rounded-full shadow-sm text-rose-500">
                            <Clock className="w-8 h-8" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-rose-900 mb-2">Order Cancellations</h3>
                            <p className="text-rose-800">
                                You can cancel your order within <strong>5 minutes</strong> of placing it for a full refund. After that, our kitchen begins preparation and we may not be able to guarantee a full cancellation.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Helper component for the Clock icon which wasn't imported in the main list above but used
function Clock({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
