import { Header } from "@/components/layout/Header";
import { StickyCart } from "@/components/layout/StickyCart";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">About FoodiStore</h1>
                <div className="prose prose-lg text-gray-600 mb-16">
                    <p className="mb-6">
                        Founded in 2024, FoodiStore began with a simple mission: to deliver restaurant-quality food with the convenience of a tap. What started as a small kitchen has grown into a beloved local favorite, known for our obsession with fresh ingredients and bold flavors.
                    </p>
                    <p className="mb-6">
                        We believe that delivery shouldn't mean compromising on quality. That's why we've developed special packaging to keep your burgers juicy and your fries crispy. Our chefs work tirelessly to craft menus that excite the palate, blending traditional comfort food with modern culinary twists.
                    </p>
                </div>

                {/* Animated Timeline */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Journey</h2>
                    <div className="relative border-l-4 border-orange-100 ml-6 md:ml-10 space-y-12">
                        {/* 2024 */}
                        <div className="relative pl-8 md:pl-12 group">
                            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:bg-orange-600" />
                            <div className="opacity-0 translate-x-[-20px] animate-[slideIn_0.5s_ease-out_forwards] delay-[0ms]" style={{ animationFillMode: 'forwards' }}>
                                <span className="text-sm font-bold text-orange-500 tracking-wider uppercase mb-1 block">2024</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h3>
                                <p className="text-gray-600">Opened our first kitchen in Downtown with just 3 menu items and a dream.</p>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div className="relative pl-8 md:pl-12 group">
                            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-orange-300 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:bg-orange-500" />
                            <div className="opacity-0 translate-x-[-20px] animate-[slideIn_0.5s_ease-out_forwards] delay-[200ms]" style={{ animationFillMode: 'forwards' }}>
                                <span className="text-sm font-bold text-orange-500 tracking-wider uppercase mb-1 block">2025</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                                <p className="text-gray-600">Launched our mobile app and expanded delivery to the entire city.</p>
                            </div>
                        </div>

                        {/* Future */}
                        <div className="relative pl-8 md:pl-12 group">
                            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:bg-gray-400" />
                            <div className="opacity-0 translate-x-[-20px] animate-[slideIn_0.5s_ease-out_forwards] delay-[400ms]" style={{ animationFillMode: 'forwards' }}>
                                <span className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1 block">Future</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Going Green</h3>
                                <p className="text-gray-600">Committing to 100% sustainable packaging and electric delivery fleet.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="prose prose-lg text-gray-600">
                    <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Values</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Quality First:</strong> We never cut corners on ingredients.</li>
                        <li><strong>Community:</strong> We source locally whenever possible.</li>
                        <li><strong>Sustainability:</strong> eco-friendly packaging is our priority.</li>
                    </ul>
                </div>
            </div>
            <StickyCart />
        </div>
    );
}
