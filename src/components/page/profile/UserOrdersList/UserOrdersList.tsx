import { getOrdersByUserId } from '@/api/orders';
import { cookies } from 'next/headers';
import { getSession } from '@/utils/session';
import OrdersTable from '@/components/page/profile/OrdersTable/OrdersTable';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default async function UserOrdersList() {
  const session = getSession({
    cookies,
  });

  const orders = await getOrdersByUserId(session?.userId as string);

  return <OrdersTable orders={orders} />;
}
