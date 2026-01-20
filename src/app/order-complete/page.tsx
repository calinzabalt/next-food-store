import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderCompletePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
                    <div className="mb-8 relative w-full h-64 bg-orange-50 rounded-2xl flex items-center justify-center overflow-hidden">
                        <div className="relative">
                            {/* Steam Particles */}
                            <div className="absolute -top-12 left-0 w-4 h-4 bg-orange-200 rounded-full animate-[steam_2s_infinite_ease-out]" />
                            <div className="absolute -top-16 left-6 w-3 h-3 bg-orange-300 rounded-full animate-[steam_2.5s_infinite_ease-out_0.5s]" />
                            <div className="absolute -top-10 right-2 w-5 h-5 bg-orange-100 rounded-full animate-[steam_1.8s_infinite_ease-out_1s]" />

                            {/* Cooking Pot Icon (SVG) */}
                            <div className="bg-white p-6 rounded-full shadow-lg relative z-10 animate-[bubble_3s_infinite_ease-in-out]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-orange-600"
                                >
                                    <path d="M2 12h20" />
                                    <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
                                    <path d="m4 8 16-4" />
                                    <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.55a2 2 0 0 1 2.43 1.45l.45 1.81" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
                    <p className="text-gray-500 mb-8">
                        Thank you for your order. We've received it and will start preparing your delicious food right away.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-8 text-sm text-gray-600">
                        <p>Order Number: <span className="font-bold text-gray-900">#ORD-{Math.floor(Math.random() * 100000)}</span></p>
                        <p className="mt-1">Estimated Delivery: <span className="font-bold text-gray-900">30-45 mins</span></p>
                    </div>
                    <Link href="/">
                        <Button size="lg" className="w-full">Back to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
