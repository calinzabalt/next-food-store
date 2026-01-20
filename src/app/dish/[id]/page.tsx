import { Header } from '@/components/layout/Header';
import { StickyCart } from '@/components/layout/StickyCart';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Clock, Flame, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function DishPage({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            <Header />

            {/* Hero Banner */}
            <div className="relative h-[50vh] min-h-[400px]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                    <Link href="/menu">
                        <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
                        </Button>
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="container mx-auto">
                        <div className="flex gap-2 mb-4">
                            {product.isVegetarian && <Badge variant="veg">Vegetarian</Badge>}
                            {product.isSpicy && <Badge variant="spicy">Spicy</Badge>}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{product.name}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">{product.description}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-y py-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center text-orange-500 mb-2">
                                <Flame className="h-6 w-6" />
                            </div>
                            <span className="block font-bold text-gray-900">{product.calories || '450'}</span>
                            <span className="text-sm text-gray-500">Calories</span>
                        </div>
                        <div className="text-center border-l">
                            <div className="flex items-center justify-center text-orange-500 mb-2">
                                <Clock className="h-6 w-6" />
                            </div>
                            <span className="block font-bold text-gray-900">15-20</span>
                            <span className="text-sm text-gray-500">Mins Prep</span>
                        </div>
                        <div className="text-center border-l">
                            <div className="flex items-center justify-center text-orange-500 mb-2">
                                <Utensils className="h-6 w-6" />
                            </div>
                            <span className="block font-bold text-gray-900">Chef's Choice</span>
                            <span className="text-sm text-gray-500">Rating</span>
                        </div>
                    </div>

                    {/* Ingredients */}
                    {product.ingredients && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Fresh Ingredients</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {product.ingredients.map((ing) => (
                                    <div key={ing} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        <span className="font-medium text-gray-700">{ing}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Steps / Story */}
                    {product.recipeSteps && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">How It's Made</h2>
                            <div className="space-y-6">
                                {product.recipeSteps.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="text-lg text-gray-600 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Hungry?</h3>
                        <p className="text-gray-500 mb-6">Order this now and get it delivered hot within 30 minutes.</p>
                        <div className="flex items-baseline justify-between mb-6">
                            <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            <span className="text-green-600 font-medium text-sm">In Stock</span>
                        </div>
                        <Link href="/menu">
                            <Button className="w-full h-12 text-lg">Order Now</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <StickyCart />
        </div>
    );
}
