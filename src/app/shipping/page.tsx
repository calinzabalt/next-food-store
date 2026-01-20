import { Header } from "@/components/layout/Header";
import { Truck, MapPin, Clock, DollarSign, PackageCheck } from "lucide-react";

export default function ShippingPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-emerald-500 text-white pt-32 pb-16 px-4">
                    <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-400/30 backdrop-blur-sm rounded-full mb-6">
                            <Truck className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Delivery & Shipping</h1>
                        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">Fast, reliable delivery straight to your doorstep. Here's everything you need to know about how we get your food to you.</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 max-w-4xl space-y-8 animate-fade-in-up delay-100">

                    {/* Key Info Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-emerald-200 transition-colors">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">30-45 Mins</h3>
                            <p className="text-gray-500 text-sm">Average delivery time for local orders</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-emerald-200 transition-colors">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">$5.00 Flat Rate</h3>
                            <p className="text-gray-500 text-sm">Free delivery on orders over $50</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-emerald-200 transition-colors">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Metro Area</h3>
                            <p className="text-gray-500 text-sm">Serving all greater metro neighborhoods</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="text-emerald-500" />
                                Delivery Zones
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We currently deliver to all neighborhoods within a 10-mile radius of our central kitchen. This ensures your food arrives hot and fresh.
                            </p>
                            <ul className="space-y-3">
                                {['Downtown', 'Westside', 'North Hills', 'Harbor District', 'University Area'].map((zone) => (
                                    <li key={zone} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        {zone}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <PackageCheck className="text-emerald-500" />
                                Order Tracking
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Once your order is confirmed, you'll receive a live tracking link. You can watch your driver's progress on the map in real-time from our kitchen to your door.
                            </p>
                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h4 className="font-bold text-emerald-800 mb-2">Notifications</h4>
                                <p className="text-sm text-emerald-700">
                                    We'll text you when:
                                </p>
                                <ul className="mt-2 text-sm text-emerald-600 space-y-1">
                                    <li>• Your order is being prepared</li>
                                    <li>• Your driver has picked up your order</li>
                                    <li>• Your driver is arriving</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
