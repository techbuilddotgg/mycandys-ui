import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Route } from '@/constants/routes';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed bottom-0 left-0 top-20 flex w-72 flex-col overflow-y-auto border-2 border-t-0 border-black bg-white font-bold">
        <Link
          href={Route.PROFILE}
          className="block w-full border-b-2 border-t-0 border-black bg-primary px-5 py-4 hover:bg-primary-dark"
        >
          PROFILE
        </Link>
        <Link
          href={Route.ORDERS}
          className="block w-full border-b-2 border-t-0 border-black bg-primary px-5 py-4 hover:bg-primary-dark"
        >
          ORDERS
        </Link>
      </aside>
      <main className="ml-72 flex flex-1 flex-col items-center overflow-y-auto px-10 pb-20 pt-32">
        {children}
      </main>
    </div>
  );
};

export default Layout;
