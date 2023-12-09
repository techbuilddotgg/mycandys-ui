import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Route } from '@/constants/routes';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex min-h-screen flex-row p-[5rem] px-0 pb-0'}>
      <aside
        className={
          'flex-2 flex w-[300px] flex-col border-2 border-t-0 border-black bg-white font-bold'
        }
      >
        <Link
          href={Route.PROFILE}
          className={
            'block w-full border-b-2 border-t-0 border-black bg-primary px-5 py-4 hover:bg-[#a36ec4]'
          }
        >
          PROFILE
        </Link>
        <Link
          href={Route.ORDERS}
          className={
            'block w-full border-b-2 border-black bg-primary px-5 py-4 hover:bg-[#a36ec4]'
          }
        >
          ORDERS
        </Link>
      </aside>
      <main className="flex w-full flex-1 flex-col items-center p-10 pb-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
