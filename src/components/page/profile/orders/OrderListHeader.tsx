'use client';
import Select from '@/components/ui/Select';
import { useQueryParams } from '@/hooks/useQueryParams';
import {
  getOrderStatusColor,
  getOrderStatusLabel,
  OrderStatus,
} from '@/models/order';

const items = Object.values(OrderStatus).map((status) => ({
  label: getOrderStatusLabel(status),
  className: getOrderStatusColor(status),
}));

const OrderListHeader = () => {
  const { urlQuery, updateQueryParams } = useQueryParams();

  const setSelectedItem = (item: string) => {
    updateQueryParams({ status: item.toLowerCase() });
  };

  return (
    <div className={'mb-8 mt-2 flex flex-row items-center'}>
      <h1 className={'text-3xl font-bold'}>ORDERS</h1>
      <div className={'ml-auto'}>
        <Select
          items={[
            { label: 'All', className: 'bg-primary hover:bg-primary-dark' },
            ...items,
          ]}
          selectedItem={urlQuery.status}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
};

export default OrderListHeader;
