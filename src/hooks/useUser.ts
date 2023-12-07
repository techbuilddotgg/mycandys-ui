import { getUser } from '@/api/user';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { User } from '@/models/user';
import { AxiosError } from 'axios';

const USER_QUERY_KEY = 'user';

export const useUser = (
  id: string,
  opts?: UseQueryOptions<User, AxiosError, User>,
) => {
  return useQuery({
    queryKey: [USER_QUERY_KEY, id],
    queryFn: () => getUser(id),
    ...opts,
  });
};
