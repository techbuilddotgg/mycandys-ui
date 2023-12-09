import ProfileForm from '@/components/page/profile/ProfileForm';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { USER_QUERY_KEY } from '@/hooks/useUser';

export default async function Profile() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: getUser,
  });

  return (
    <div className={'flex w-full flex-col items-center'}>
      <h1 className={'text-center text-3xl font-bold'}>Profile</h1>
      <div
        style={{
          backgroundImage: `url(https://cdn.truelancer.com/user-picture/2838646-61dc873dc473b.jpg)`,
        }}
        className="m-auto my-4 h-16 w-16 rounded-full border-2 border-black bg-cover bg-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileForm />
      </HydrationBoundary>
    </div>
  );
}
