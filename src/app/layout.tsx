import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import './globals.css';

const publicSans = Public_Sans({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: "MyCandy's",
  description: "MyCandy's the best candy shop in the world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navbar />
        <main className="bg-secondary flex min-h-screen flex-col items-center p-24">{children}</main>
      </body>
    </html>
  );
}
