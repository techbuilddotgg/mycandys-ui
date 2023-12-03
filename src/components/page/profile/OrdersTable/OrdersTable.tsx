import React from 'react';
import { Order } from '@/models/order';
import { formatPrice } from '@/utils/price';
import styles from './table.module.css';
import OrderStatusBadge from '@/components/page/profile/OrderStatusBadge';

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  return (
    <>
      <h1 className={'my-2 text-3xl font-bold'}>ORDERS</h1>
      <table className={styles.table}>
        <thead>
          {/*<tr>*/}
          {/*  <th colSpan={5}>ORDERS</th>*/}
          {/*</tr>*/}
          <tr>
            <th className={'p-3'}>Order ID</th>
            <th className={'p-3'}>Order Date</th>
            <th className={'p-3'}>Delivery Date</th>
            <th className={'p-3'}>Order Status</th>
            <th className={'p-3'}>Order Total</th>
          </tr>
        </thead>
        <tbody className={' font-semibold'}>
          {orders.map((order) => (
            <tr key={order.id} className={''}>
              <td className={'p-3'}>{order.id}</td>
              <td className={'p-3'}>{order.createdAt}</td>
              <td className={'p-3'}>{order.deliveryDate}</td>
              <td className={'p-3'}>
                <OrderStatusBadge status={order.status} />
              </td>
              <td className={'p-3'}>{formatPrice(order.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrdersTable;
