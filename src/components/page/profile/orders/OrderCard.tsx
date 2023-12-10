import React, { ReactNode } from 'react';
import { Order, SHIPPING_COST } from '@/models/order';
import { formatPrice } from '@/utils/price';
import OrderStatusBadge from '@/components/page/profile/orders/OrderStatusBadge';
import Image from 'next/image';
import { classnames } from '@/utils/classnames';
import { formatDateString } from '@/utils/date';

interface OrderCardProps {
  order: Order;
}

const OrderCardRow = ({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) => {
  return (
    <div
      className={
        'flex flex-row items-center justify-between border-b-2 border-black pb-3'
      }
    >
      <h1 className={'text-lg font-semibold'}>{label}</h1>
      <h1 className={'text-lg font-semibold'}>{value ?? '/'}</h1>
    </div>
  );
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div
      className={
        'w-[800px] rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      }
    >
      <h1 className={'mb-4 text-center text-xl font-bold'}>
        ORDER ID: {order.id}
      </h1>
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-lg font-bold'}>INFO</h2>

        <OrderCardRow
          label={'Created At'}
          value={formatDateString(order.createdAt)}
        />
        <OrderCardRow
          label={'Expected Delivery Date'}
          value={formatDateString(order.expectedDeliveryDate, { time: false })}
        />
        <OrderCardRow
          label={'Delivered At'}
          value={formatDateString(order.deliveredAt)}
        />
        <OrderCardRow
          label={'Status'}
          value={<OrderStatusBadge status={order.status} />}
        />
        <OrderCardRow
          label={'Shipping Cost'}
          value={formatPrice(SHIPPING_COST)}
        />
        <OrderCardRow label={'Total'} value={formatPrice(order.cost)} />
        <h2 className={'mt-2 text-lg font-bold'}>ITEMS</h2>
        {order.items.map((item, index) => (
          <div
            key={item.name}
            className={classnames(
              'flex flex-row items-center justify-between border-b-2 border-black pb-3',
              index === order.items.length - 1 ? 'border-0' : '',
            )}
          >
            <div className={'flex flex-row items-center gap-4'}>
              <Image src={item.imgUrl} alt={item.name} width={60} height={60} />
              <div className={'text-lg font-semibold'}>{item.name}</div>
            </div>
            <div className={'text-lg font-semibold'}>
              {`${item.quantity} X ${formatPrice(item.price)}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
