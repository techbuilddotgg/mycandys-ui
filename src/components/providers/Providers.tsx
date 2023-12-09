'use client';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from '@/components/providers/SessionProvider';
import { CartProvider } from '@/components/providers/CartProvider';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </CartProvider>
    </SessionProvider>
  );
}
