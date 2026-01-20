import { Header } from "@/components/layout/Header";
import { Accordion } from "@/components/ui/Accordion";
import { Search, MessageCircle, Mail } from "lucide-react";

export default function FAQPage() {
    const mainFaqs = [
        {
            title: "How long does delivery take?",
            content: "Typically, deliveries take between 30 and 45 minutes depending on your location and order size. You can track your order in real-time through our app or website once it's been dispatched."
        },
        {
            title: "What happens if my food is cold?",
            content: "We use insulated thermal bags to ensure your food arrives hot. If you're not satisfied, please contact us immediately for a refund or replacement. Your satisfaction is our priority."
        },
        {
            title: "Do you offer vegetarian/vegan options?",
            content: "Yes! We have a dedicated section for vegetarian and vegan pizzas and burgers. Look for the 'V' symbol on our menu. We also offer gluten-free crust options."
        },
        {
            title: "Can I schedule an order for later?",
            content: "Currently, we only accept on-demand orders to ensure freshness. However, we are actively working on a scheduling feature which will be available in the next app update."
        },
        {
            title: "What are your delivery hours?",
            content: "We deliver from 11:00 AM to 11:00 PM every day of the week. Last orders are taken at 10:45 PM."
        },
        {
            title: "Is there a minimum order value?",
            content: "The minimum order value for delivery is $15. There is no minimum for pickup orders."
        }
    ];

    const paymentFaqs = [
        {
            title: "What payment methods do you accept?",
            content: "We accept all major credit/debit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay. We do not accept cash on delivery for safety availability."
        },
        {
            title: "Is my payment information safe?",
            content: "Absolutely. We use industry-standard encryption to protect your payment details. We do not store your full card information on our servers."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-amber-500 text-white pt-32 pb-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help?</h1>
                        <p className="text-xl text-amber-100 mb-10">Frequently asked questions about our menu, delivery, and more.</p>

                        {/* Search Bar - Enhanced Visibility */}
                        <div className="relative max-w-xl mx-auto transform hover:scale-102 transition-transform duration-300">
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                            <div className="relative bg-white rounded-full shadow-2xl p-2 flex items-center">
                                <Search className="w-6 h-6 text-amber-500 ml-4" />
                                <input
                                    type="text"
                                    placeholder="Search for answers (e.g. delivery, payments)..."
                                    className="w-full pl-4 pr-6 py-3 rounded-full text-lg text-gray-800 placeholder-gray-400 focus:outline-none"
                                />
                                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 max-w-3xl space-y-16">
                    {/* General Section */}
                    <div className="animate-fade-in-up delay-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">1</span>
                            Orders & Delivery
                        </h2>
                        <Accordion items={mainFaqs} allowMultiple />
                    </div>

                    {/* Payment Section */}
                    <div className="animate-fade-in-up delay-200">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">2</span>
                            Payment & Security
                        </h2>
                        <Accordion items={paymentFaqs} allowMultiple />
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center animate-fade-in-up delay-300">
                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            Can't find the answer you're looking for? Please seek specific help from our support team.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
                            <a href="/contact" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-xl font-medium transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                Contact Support
                            </a>
                            <a href="mailto:support@nextfood.com" className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-medium transition-colors">
                                <Mail className="w-5 h-5" />
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
