'use clint';
import React from 'react';
import Button from '@/components/ui/Button';
import CartItem from '@/components/page/cart/CartItem';
import { formatPrice } from '@/utils/price';
import { Route } from '@/constants/routes';
import { CART_QUERY_KEY, useCart, useClearCart } from '@/hooks/useCart';
import Loading from '@/components/ui/Loading';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useCartContext } from '@/components/providers/CartProvider';
import { toast } from 'sonner';

const Cart = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { cartId } = useCartContext();

  const { data: cart, isLoading } = useCart(cartId, {
    enabled: !!cartId,
  });

  const clearCart = useClearCart({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY, cartId],
      });
    },
  });

  return (
    <>
      <h1 className={'m500:text-xl text-2xl font-bold'}>ITEMS IN CART</h1>
      <div
        className={
          'mt-2 flex w-full flex-row flex-wrap gap-2 rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        }
      >
        {isLoading ? (
          <div className={'my-8 flex w-full justify-center'}>
            <Loading />
          </div>
        ) : (
          <>
            {cart?.items.length === 0 ? (
              <div className={'text-xl font-semibold'}>
                Looks like you don&apos;t any items in your 🛒
              </div>
            ) : (
              <>
                <Button
                  className={'ml-auto bg-red-400'}
                  onClick={() =>
                    toast.promise(
                      clearCart.mutateAsync({ cartId: cart?._id as string }),
                      {
                        loading: 'Clearing cart...',
                        success: 'Cleared cart!',
                        error: 'Error clearing cart!',
                      },
                    )
                  }
                >
                  CLEAR CART
                </Button>
                {cart?.items.map((item) => (
                  <CartItem item={item} key={item.productId} cartId={cartId} />
                ))}
                <div className={'flex w-full flex-row justify-between'}>
                  <div className={'text-xl font-semibold'}>
                    Price: {formatPrice(cart?.fullPrice || 0)}
                  </div>
                  <Button
                    onClick={() => router.push(Route.CHECKOUT)}
                    disabled={cart?.items.length === 0}
                  >
                    CHECKOUT
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
