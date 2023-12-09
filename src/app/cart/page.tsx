import { ShoppingCart } from '@/components/page/cart/ShoppingCart';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getCartCookie } from '@/utils/cart';
import { CART_QUERY_KEY } from '@/hooks/useCart';
import { getCart } from '@/api/cart';
import { cookies } from 'next/headers';

export default async function CartPage() {
  const queryClient = new QueryClient();
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
