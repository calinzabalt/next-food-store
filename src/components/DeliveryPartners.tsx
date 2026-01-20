import Link from 'next/link';
import { Bike, Utensils } from 'lucide-react';

export function DeliveryPartners() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[400px]">
                {/* Uber Eats */}
                <Link href="https://www.ubereats.com" target="_blank" className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200"
                        alt="Uber Eats Delivery"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white p-8 text-center">
                        <div className="bg-[#06C167] p-5 rounded-full mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                            <Utensils className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl font-bold mb-2 tracking-tight">Uber Eats</h2>
                        <p className="text-xl font-medium opacity-90 max-w-sm mb-8">Official Partner</p>

                        <span className="px-8 py-3 bg-[#06C167] text-white font-bold rounded-full transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            Order Delivery
                        </span>
                    </div>
                </Link>

                {/* Bolt Food */}
                <Link href="https://food.bolt.eu" target="_blank" className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200"
                        alt="Bolt Food Delivery"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white p-8 text-center">
                        <div className="bg-[#34D186] p-5 rounded-full mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                            <Bike className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl font-bold mb-2 tracking-tight">Bolt Food</h2>
                        <p className="text-xl font-medium opacity-90 max-w-sm mb-8">Official Partner</p>

                        <span className="px-8 py-3 bg-[#34D186] text-white font-bold rounded-full transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            Order Delivery
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
