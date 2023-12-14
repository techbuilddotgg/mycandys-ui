import getQueryClient from '@/utils/getQueryClient';
import { USER_ORDERS_QUERY_KEY } from '@/hooks/useOrder';
import { getOrdersByUser } from '@/api/orders';
import OrderListHeader from '@/components/page/profile/orders/OrderListHeader';
import OrdersTable from '@/components/page/profile/orders/OrdersTable/OrdersTable';

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default async function UserOrdersList() {
  const queryClient = getQueryClient();
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

