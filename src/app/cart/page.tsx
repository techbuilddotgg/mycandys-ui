'use client';
import { formatPrice } from '@/utils/price';
import Button from '@/components/ui/Button';
import { Item } from '@/models/cart';
import CartItem from '@/components/page/cart/CartItem';

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

export default function Home() {
  return (
    <div className={'w-full'}>
      <h1 className={'m500:text-xl text-2xl font-bold'}>ITEMS IN CART</h1>
      <div className={'m-8 flex w-full flex-row flex-wrap gap-4'}>
        {dummyData.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className={'w-full border-b-4 border-black'} />
      <div className={'mt-2 flex w-full flex-row justify-between'}>
        <div className={'text-xl font-semibold'}>Price: {formatPrice(0)}</div>
        <Button onClick={() => {}}>BUY</Button>
      </div>
    </div>
  );
}
