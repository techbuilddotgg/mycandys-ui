'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Item } from '@/models/cart';
import { formatPrice } from '@/utils/price';
import Counter from '@/components/page/cart/Counter';
import Button from '@/components/ui/Button';
import { CART_QUERY_KEY, useRemoveFromCart } from '@/hooks/useCart';
import { useQueryClient } from '@tanstack/react-query';
import { it } from 'node:test';

interface CartItemProps {
  item: Item;
  cartId: string;
}

const CartItem = ({ item, cartId }: CartItemProps) => {
  const queryClient = useQueryClient();

  const removeItem = useRemoveFromCart(cartId, item.productId, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY, '6572327e911ee43f8c3817be'],
      });
    },
  });
  const [count, setCount] = useState(item.quantity);

  return (
    <div className={'w-full border-b-2 border-black'}>
      <div className={' my-4 flex flex-row'}>
        <Image
          src={item.imgUrl}
          alt={item.name}
          className={' rounded-md'}
          width={80}
          height={80}
        />
        <div className={'ml-4 flex flex-col gap-1'}>
          <div className={'text-xl font-bold'}>{item.name}</div>
          <div className={'text-xl'}>{formatPrice(item.price)}</div>
        </div>
        <div className={'ml-auto flex items-center gap-2'}>
          <Counter count={count} setCount={setCount} />
          <Button
            onClick={async () =>
              removeItem.mutateAsync({ cartId, productId: item.productId })
            }
            className={'h-[48px] w-[48px] bg-red-400'}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
