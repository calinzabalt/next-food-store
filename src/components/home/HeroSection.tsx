import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background Image (Darkened) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1920"
                    alt="Food Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 lg:py-40 flex flex-col items-start justify-center min-h-[600px]">
                <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm mb-6 backdrop-blur-sm border border-orange-500/30 animate-fade-in-up">
                    🚀 Fastest Delivery in Town
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-3xl animate-fade-in-up delay-100">
                    Taste the <span className="text-orange-500">Extraordinary</span> <br />
                    in Every Bite.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                    From gourmet burgers to artisan pizzas, we bring the finest flavors directly to your doorstep. Fresh ingredients, chef-crafted recipes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                    <Link href="/menu">
                        <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                            Order Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900">
                            Our Story
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
