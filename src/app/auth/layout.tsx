import { ReactNode } from 'react';
import Image from 'next/image';

const Layout = ({ children }: { children: ReactNode }) => {
  const lollipop = '/lollipop.png';

  return (
    <main className="relative flex min-h-screen flex-col items-center p-4 pb-10">
      <div className="relative mt-40">
        <Image
          src={lollipop}
          alt={'lollipop'}
          className={'absolute left-[20rem] top-10 z-0 scale-x-[-1] transform '}
          width={700}
          height={700}
          layout="responsive"
        />
        <div className={'relative z-10 w-full'}>{children}</div>
        <Image
          src={lollipop}
          alt={'lollipop'}
          className={'absolute right-[20rem] top-10 z-0'}
          width={700}
          height={700}
          layout="responsive"
        />
      </div>
    </main>
  );
};

export default Layout;
