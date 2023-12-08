import { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { User } from '@/models/user';
import { api } from '@/api/axios';

export const getUser = async () => {
  const { data } = (await api.get(`${APIRoute.USERS}`)) as AxiosResponse<User>;
  return data;
};
