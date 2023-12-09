import { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { UpdateUser, User } from '@/models/user';
import { api } from '@/api/axios';

export const getUser = async () => {
  const { data } = (await api.get(`${APIRoute.USERS}`)) as AxiosResponse<User>;
  return data;
};

export const updateUser = async (body: UpdateUser) => {
  const { data } = (await api.put(
    `${APIRoute.USERS}`,
    body,
  )) as AxiosResponse<UpdateUser>;

  return data;
};
