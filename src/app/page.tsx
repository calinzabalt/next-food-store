import { Header } from "@/components/layout/Header";
import { StickyCart } from "@/components/layout/StickyCart";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { products } from "@/lib/data";
import { DishCard } from "@/components/food/DishCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <HeroSection />

      {/* Featured Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Dishes</h2>
            <p className="text-gray-500 mt-2">Everyone's favorites. Tried, tested, and loved.</p>
          </div>
          <Link href="/menu" className="text-orange-600 font-medium hover:underline flex items-center gap-1">
            View Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <DishCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Catering / Services Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl skew-x-[-2deg] transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
            {/* Placeholder using a darker placeholder to avoid white-on-white issues if image fails */}
            <div className="absolute inset-0 bg-gray-900" />
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
              alt="Catering"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-2">Private Events</p>
                <h3 className="text-2xl font-bold">Catering for Special Occasions</h3>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full text-sm">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-900">We Bring the Feast to You</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Planning a party, corporate event, or wedding? Let us handle the food.
              Our bespoke catering service offers custom menus, professional staff, and
              unforgettable flavors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {['Fresh Ingredients', 'Custom Menus', 'Professional Staff', 'On-time Delivery'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <Button className="mt-4">Get a Quote</Button>
          </div>
        </div>
      </section>

      <NewsletterSection />

      <StickyCart />
    </main>
  );
}
