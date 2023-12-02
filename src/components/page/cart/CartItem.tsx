import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import { Item } from '@/models/cart';
import { formatPrice } from '@/utils/price';
import Counter from '@/components/page/cart/Counter';

interface CartItemProps {
  item: Item;
}

const CartItem = ({ item }: CartItemProps) => {
  const [count, setCount] = useState(item.quantity);

  return (
    <Card heading={item.name}>
      <Image src={item.imgUrl} alt={item.name} className={'w-full rounded-md'} width={200} height={200} />
      <div className="mt-1 flex flex-col justify-between gap-1">
        <div className="text-xl font-bold">{formatPrice(item.price)}</div>
        <Counter count={count} setCount={setCount} />
      </div>
    </Card>
  );
};

export default CartItem;
