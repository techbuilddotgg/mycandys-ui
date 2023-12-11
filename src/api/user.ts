import { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { UpdateUser, User } from '@/models/user';
import { api } from '@/api/axios';
import { getSession } from '@/utils/session';

export const getUser = async () => {
  const session = getSession();
  const { data } = (await api.get(
    `${APIRoute.USERS}/${session?.userId}`,
  )) as AxiosResponse<User>;
  return data;
};

export const updateUser = async (body: UpdateUser) => {
  const session = getSession();
  const { data } = (await api.put(
    `${APIRoute.USERS}/${session?.userId}`,
    body,
  )) as AxiosResponse<UpdateUser>;

  return data;
};
