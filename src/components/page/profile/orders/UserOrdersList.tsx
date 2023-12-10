import { getOrdersByUser } from '@/api/orders';
import OrdersTable from '@/components/page/profile/orders/OrdersTable/OrdersTable';
import OrderListHeader from '@/components/page/profile/orders/OrderListHeader';
import { QueryClient } from '@tanstack/react-query';
import { USER_ORDERS_QUERY_KEY } from '@/hooks/useOrder';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default async function UserOrdersList() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [USER_ORDERS_QUERY_KEY],
    queryFn: getOrdersByUser,
  });

  return (
    <div className={'flex w-full flex-col'}>
      <OrderListHeader />
      <OrdersTable />
    </div>
  );
}
