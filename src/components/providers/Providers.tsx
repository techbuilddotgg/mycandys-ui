'use client';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from '@/components/providers/SessionProvider';
import { CartProvider } from '@/components/providers/CartProvider';
import { Toaster as ToastProvider } from 'sonner';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  return (
    <SessionProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ToastProvider
            position={'bottom-right'}
            toastOptions={{
              unstyled: true,
              className: "absolute right-0",
              classNames: {
                toast:
                  'flex items-center rounded-md gap-2 border-2 border-black bg-gray-200 p-2 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                success:
                  'flex items-center rounded-md gap-2 border-2 border-black bg-green-200 p-2 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                error:
                  'flex items-center rounded-md gap-2 border-2 border-black bg-red-200 p-2 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                info: 'flex items-center rounded-md gap-2 border-2 border-black bg-blue-200 p-2 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                warning:
                  'flex items-center rounded-md gap-2 border-2 border-black bg-yellow-200 p-2 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
              },
            }}
          />
        </QueryClientProvider>
      </CartProvider>
    </SessionProvider>
  );
}
