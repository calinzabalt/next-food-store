import { Header } from "@/components/layout/Header";
import { StickyCart } from "@/components/layout/StickyCart";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">About FoodiStore</h1>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        Founded in 2024, FoodiStore began with a simple mission: to deliver restaurant-quality food with the convenience of a tap. What started as a small kitchen has grown into a beloved local favorite, known for our obsession with fresh ingredients and bold flavors.
                    </p>
                    <p className="mb-6">
                        We believe that delivery shouldn't mean compromising on quality. That's why we've developed special packaging to keep your burgers juicy and your fries crispy. Our chefs work tirelessly to craft menus that excite the palate, blending traditional comfort food with modern culinary twists.
                    </p>
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
