import Checkout from '@/components/page/cart/Checkout/Checkout';
import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { USER_QUERY_KEY } from '@/hooks/useUser';
import getQueryClient from '@/utils/getQueryClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CheckoutPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: getUser,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Checkout />
    </HydrationBoundary>
  );
}
