import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pb-10">
      {children}
    </main>
  );
};

export default Layout;
