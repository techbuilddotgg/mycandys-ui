'use client';
import Image from 'next/image';
import { Cart, Item } from '@/models/cart';
import { formatPrice } from '@/utils/price';
import Counter from '@/components/page/cart/Counter';
import Button from '@/components/ui/Button';
import {
  CART_QUERY_KEY,
  useRemoveFromCart,
  useUpdateProductQuantity,
} from '@/hooks/useCart';
import { useQueryClient } from '@tanstack/react-query';

interface CartItemProps {
  item: Item;
  cartId: string;
}

const CartItem = ({ item, cartId }: CartItemProps) => {
  const queryClient = useQueryClient();

  const removeItem = useRemoveFromCart(cartId, item.productId, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY, cartId],
      });
    },
  });

  const updateQuantity = useUpdateProductQuantity(cartId, item.productId, {
    onMutate: async (data) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: [CART_QUERY_KEY, cartId],
      });

      const previousCart = queryClient.getQueryData([
        CART_QUERY_KEY,
        cartId,
      ]) as Cart;

      const newCart = {
        ...previousCart,
        items: previousCart.items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: data.quantity }
            : i,
        ),
      };

      queryClient.setQueryData([CART_QUERY_KEY, cartId], newCart);
      console.log(newCart);
      return { previousCart, newCart };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY, cartId],
      });
    },
    onError: async (error, newTodo, context) => {
      const { previousCart } = context as { newCart: Cart; previousCart: Cart };
      queryClient.setQueryData([CART_QUERY_KEY, cartId], previousCart);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY, cartId],
      });
    },
  });

  const handleUpdateQuantity = async (quantity: number) => {
    await updateQuantity.mutateAsync({
      cartId,
      productId: item.productId,
      quantity,
    });
  };

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
          <Counter count={item.quantity} setCount={handleUpdateQuantity} />
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
