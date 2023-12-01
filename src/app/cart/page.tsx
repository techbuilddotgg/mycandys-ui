'use client';

import { formatPrice } from '@/utils/price';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className={'w-full'}>
      <h1 className={'text-2xl font-bold m500:text-xl'}>ITEMS IN CART</h1>
      <div className={'flex flex-row flex-wrap w-full gap-4 m-8'}>
        <Card heading={'Haribo candy'} paragraph={'very good'} />
        <Card heading={'Chupachups lolipop'} paragraph={'very good'} />
        <Card heading={'Hubabba gum'} paragraph={'very good'} />
      </div>
      <div className={'w-full border-b-4 border-black'} />
      <div className={'flex flex-row justify-between w-full mt-2'}>
        <div className={'text-xl font-semibold'}>Price: {formatPrice(0)}</div>
        <Button onClick={() => {}}>BUY</Button>
      </div>
    </div>
  );
}
