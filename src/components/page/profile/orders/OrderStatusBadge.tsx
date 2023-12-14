import { getOrderStatusLabel, OrderStatus } from '@/models/order';
import { classnames } from '@/utils/classnames';

interface OrderStatusProps {
  status: OrderStatus;
}

const OrderStatusBadge = ({ status }: OrderStatusProps) => {
  return (
    <div
      className={classnames(
        'w-min rounded-full border-2 border-black px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
        status === OrderStatus.Pending
          ? 'bg-yellow-400 text-black'
          : status === OrderStatus.Delivered
            ? 'bg-green-400 text-black'
            : status === OrderStatus.Shipped
              ? 'bg-blue-400 text-black'
              : '',
      )}
    >
      {getOrderStatusLabel(status)}
    </div>
  );
};

export default OrderStatusBadge;
