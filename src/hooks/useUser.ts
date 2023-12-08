import { getUser } from '@/api/user';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { User } from '@/models/user';
import { AxiosError } from 'axios';

export const USER_QUERY_KEY = 'user';
export const useUser = (
  opts?: UseQueryOptions<User, AxiosError, User, [typeof USER_QUERY_KEY]>,
) => {
  return useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: () => getUser(),
    ...opts,
  });
};
