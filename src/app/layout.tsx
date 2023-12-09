import { ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import './globals.css';
import Providers from '@/components/providers/Providers';
import Loading from '@/components/ui/Loading';

const publicSans = Public_Sans({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: "MyCandy's",
  description: "MyCandy's the best candy shop in the world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Providers>
          <div className={'flex min-h-screen flex-col bg-secondary'}>
            <Navbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </Providers>
      </body>
    </html>
  );
}
