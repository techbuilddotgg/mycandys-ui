import Checkout from '@/components/page/cart/Checkout/Checkout';
import { QueryClient } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { USER_QUERY_KEY } from '@/hooks/useUser';

export default async function CheckoutPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: getUser,
  });

  return <Checkout />;
}
