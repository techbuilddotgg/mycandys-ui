'use client';
import { Order } from '@/models/order';
import { formatPrice } from '@/utils/price';
import OrderStatusBadge from '@/components/page/profile/orders/OrderStatusBadge';
import { shortenString } from '@/utils/shoretnString';
import { useRouter } from 'next/navigation';

import styles from './table.module.css';
import { Route } from '@/constants/routes';
import { formatDateString } from '@/utils/date';

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const { push } = useRouter();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={'p-3'}>Order ID</th>
          <th className={'p-3'}>Order Date</th>
          <th className={'p-3'}>Delivery Date</th>
          <th className={'p-3'}>Order Status</th>
          <th className={'p-3'}>Order Total</th>
        </tr>
      </thead>
      <tbody className={' font-semibold'}>
        {orders.length === 0 ? (
          <tr>
            <td colSpan={5} className={'h-32 text-center'}>
              <h1 className={'text-2xl font-bold'}>No orders yet</h1>
            </td>
          </tr>
        ) : (
          <>
            {orders.map((order) => (
              <tr
                key={order.id}
                onClick={() => push(`${Route.ORDERS}/${order.id}`)}
              >
                <td className={'p-3'}>{shortenString(order.id, 15)}</td>
                <td className={'p-3'}>{formatDateString(order.createdAt)}</td>
                <td className={'p-3'}>
                  {formatDateString(order.deliveryDate)}
                </td>
                <td className={'flex justify-center p-3'}>
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className={'p-3'}>{formatPrice(order.cost)}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default OrdersTable;