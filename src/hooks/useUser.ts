import { getUser, updateUser } from '@/api/user';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { UpdateUser, User } from '@/models/user';
import { AxiosError } from 'axios';

export const USER_QUERY_KEY = 'user';
export const useUser = (
  opts?: UseQueryOptions<User, AxiosError, User, [typeof USER_QUERY_KEY]>,
) => {
  return useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: getUser,
    ...opts,
  });
};

export const UPDATE_USER_MUTATION_KEY = 'update-user';
export const useUpdateUser = (
  opts?: UseMutationOptions<UpdateUser, AxiosError, UpdateUser>,
) => {
  return useMutation({
    mutationKey: [UPDATE_USER_MUTATION_KEY],
    mutationFn: updateUser,
    ...opts,
  });
};
