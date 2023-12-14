import { ShoppingCart } from '@/components/page/cart/ShoppingCart';
import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { getCartCookie } from '@/utils/cart';
import { CART_QUERY_KEY } from '@/hooks/useCart';
import { getCart } from '@/api/cart';
import { cookies } from 'next/headers';
import getQueryClient from '@/utils/getQueryClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CartPage() {
  const queryClient = getQueryClient();
  const cart = getCartCookie({ cookies });

  await queryClient.prefetchQuery({
    queryKey: [CART_QUERY_KEY, cart?._id],
    queryFn: () => getCart(cart?._id as string),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ShoppingCart />
    </HydrationBoundary>
  );
}
