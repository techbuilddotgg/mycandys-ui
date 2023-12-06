'use client';
import { formatPrice } from '@/utils/price';
import Button from '@/components/ui/Button';
import { Item } from '@/models/cart';
import CartItem from '@/components/page/cart/CartItem';
import { useRouter } from 'next/navigation';
import { Route } from '@/constants/routes';
import Stepper from '@/components/ui/Stepper';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';

const dummyData: Item[] = [
  {
    id: 1,
    name: 'Haribo candy',
    price: 100,
    quantity: 1,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
  },
  {
    id: 2,
    name: 'Haribo candy',
    price: 100,
    quantity: 1,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
  },
  {
    id: 3,
    name: 'Haribo candy',
    price: 100,
    quantity: 1,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
  },
];

export default function Cart() {
  const router = useRouter();
  const { updateQueryParams } = useQueryParams();

  useEffect(() => {
    updateQueryParams({ step: 1 });
  }, [updateQueryParams]);

  return (
    <div className={'flex w-full flex-col'}>
      <div className={'m-auto'}>
        <Stepper
          steps={[
            { name: 'CART', href: Route.CART },
            { name: 'SHIPPING', href: Route.CHECKOUT },
            {
              name: 'FINISH',
              href: '/',
            },
          ]}
        />
      </div>
      <h1 className={'m500:text-xl text-2xl font-bold'}>ITEMS IN CART</h1>
      <div
        className={
          'mt-2 flex w-full flex-row flex-wrap gap-2 rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        }
      >
        {dummyData.length === 0 && (
          <div className={'text-xl font-semibold'}>Looks like you don&apos;t any items in your 🛒</div>
        )}
        <Button className={'ml-auto bg-red-400'}>CLEAR CART</Button>
        {dummyData.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <div className={'flex w-full flex-row justify-between'}>
          <div className={'text-xl font-semibold'}>Price: {formatPrice(0)}</div>
          <Button onClick={() => router.push(Route.CHECKOUT)} disabled={dummyData.length === 0}>
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}
