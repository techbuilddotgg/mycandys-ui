import { headers } from 'next/headers';
import { getOrderById } from '@/api/orders';
import OrderCard from '@/components/page/profile/orders/OrderCard';

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default async function OrderPage() {
  const url = new URL(headers().get('x-url') as string);
  const orderId = url.pathname.split('/')[3];

  const order = await getOrderById(orderId);

  return (
    <div>
      <OrderCard order={order} />
    </div>
  );
}
