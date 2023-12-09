import { getOrdersByUserId } from '@/api/orders';
import { cookies } from 'next/headers';
import { getSession } from '@/utils/session';
import OrdersTable from '@/components/page/profile/orders/OrdersTable/OrdersTable';
import OrderListHeader from '@/components/page/profile/orders/OrderListHeader';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default async function UserOrdersList() {
  const session = getSession({
    cookies,
  });

  const orders = await getOrdersByUserId(session?.userId as string);

  return (
    <div className={'flex w-full flex-col'}>
      <OrderListHeader />
      <OrdersTable orders={orders} />
    </div>
  );
}
