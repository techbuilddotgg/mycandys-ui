'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Item } from '@/models/cart';
import { formatPrice } from '@/utils/price';
import Counter from '@/components/page/cart/Counter';
import Button from '@/components/ui/Button';

interface CartItemProps {
  item: Item;
}

const CartItem = ({ item }: CartItemProps) => {
  const [count, setCount] = useState(item.quantity);

  return (
    <div className={'w-full border-b-2 border-black'}>
      <div className={' my-4 flex flex-row'}>
        <Image src={item.imgUrl} alt={item.name} className={' rounded-md'} width={80} height={80} />
        <div className={'ml-4 flex flex-col gap-1'}>
          <div className={'text-xl font-bold'}>{item.name}</div>
          <div className={'text-xl'}>{formatPrice(item.price)}</div>
        </div>
        <div className={'ml-auto flex items-center gap-2'}>
          <Counter count={count} setCount={setCount} />
          <Button className={'h-[48px] w-[48px] bg-red-400'}>X</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
