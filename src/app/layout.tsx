import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/componets/Navbar';


const publicSans = Public_Sans({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'MyCandy\'s',
  description: 'MyCandy\'s the best candy shop in the world',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
    <body className={publicSans.className}>
    <Navbar />
    {children}
    </body>
    </html>
  );
}
