import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Footer } from '@/components/Footer';
import { DeliveryPartners } from '@/components/DeliveryPartners';
import { PreviewNotice } from '@/components/PreviewNotice';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Food Store',
  description: 'Premium Food Ordering Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <DeliveryPartners />
          <Footer />
          <PreviewNotice />
        </CartProvider>
      </body>
    </html>
  );
}
