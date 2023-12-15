import OrderListHeader from '@/components/page/profile/orders/OrderListHeader';
import OrdersTable from '@/components/page/profile/orders/OrdersTable/OrdersTable';


export default function UserOrdersList() {

  return (
    <div className={'flex w-full flex-col'}>
      <OrderListHeader />
      <OrdersTable />
    </div>
  );
}

