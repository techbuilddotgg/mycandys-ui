import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { Route } from '@/constants/routes';

export default function Navbar() {
  return (
    <nav className="m500:h-16 fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-white px-5">
      <div className={'mx-auto flex w-[1300px] max-w-full items-center'}>
        <Link href={Route.HOME} className={'m500:text-xl text-3xl font-bold'}>
          MY CANDY&apos;S
        </Link>
        <div className={'ml-auto flex h-fit flex-row gap-4'}>
          <Link
            href={Route.LOGIN}
            className={
              'flex items-center justify-center rounded-md border-2 border-black px-2 py-1 font-semibold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            }
          >
            LOGIN
          </Link>
          <Link
            href={Route.CART}
            className={
              'flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            }
          >
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
}
