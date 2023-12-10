'use client';
import { formatPrice } from '@/utils/price';
import OrderStatusBadge from '@/components/page/profile/orders/OrderStatusBadge';
import { useRouter } from 'next/navigation';
import { formatDateString } from '@/utils/date';
import { useFilterOrders } from '@/hooks/useOrder';
import { useQueryParams } from '@/hooks/useQueryParams';
import { OrderStatus } from '@/models/order';
import Table, { TableHeader } from '@/components/ui/Table/Table';
import { ReactNode } from 'react';
import { Route } from '@/constants/routes';
import Loading from '@/components/ui/Loading';
import { GoPackage } from 'react-icons/go';

type TableData = {
  id: string;
  createdAt: string;
  deliveredAt: string;
  status: ReactNode;
  cost: string;
};

const OrdersTable = () => {
  const { push } = useRouter();
  const { urlQuery } = useQueryParams();

  const { data: orders, isLoading } = useFilterOrders(
    urlQuery.status as OrderStatus,
  );

  const tableData: TableData[] =
    orders?.map((order) => ({
      id: order.id,
      createdAt: formatDateString(order.createdAt) ?? '/',
      deliveredAt: formatDateString(order.deliveredAt) ?? '/',
      status: (
        <div className={'flex w-full  justify-center'}>
          <OrderStatusBadge status={order.status} />
        </div>
      ),
      cost: formatPrice(order.cost),
    })) ?? [];

  const headers: TableHeader<TableData>[] = [
    {
      label: 'Order ID',
      key: 'id',
    },
    {
      label: 'Order Date',
      key: 'createdAt',
    },
    {
      label: 'Delivery Date',
      key: 'deliveredAt',
    },
    {
      label: 'Order Status',
      key: 'status',
    },
    {
      label: 'Order Total',
      key: 'cost',
    },
  ];

  const handleRowClick = (item: TableData) => {
    push(`${Route.ORDERS}/${item.id}`);
  };

  return (
    <Table
      data={tableData}
      headers={headers}
      onRowClick={handleRowClick}
      isLoading={isLoading}
      emptyStateComponent={
        <div className={'flex flex-col items-center gap-2'}>
          <GoPackage size={48} />
          <h1 className={'text-2xl font-bold'}>No orders yet</h1>
        </div>
      }
      loadingStateComponent={<Loading />}
    />
  );
};
export default OrdersTable;
