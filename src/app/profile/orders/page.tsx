import UserOrdersList from '@/components/page/profile/orders/UserOrdersList';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Page = () => {
  return <UserOrdersList />;
};

export default Page;
